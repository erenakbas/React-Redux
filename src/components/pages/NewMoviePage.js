import React, { Component } from 'react';
import {connect} from 'react-redux';
import NewMovieForm from '../NewMovieForm';
import {
    onNewMoviesSubmit,
    fetchMovie
} from '../../actions/newMovie';
class NewMoviePage extends Component {
    componentDidMount(){
        const {match} = this.props;
        if(match.params.id){
            this.props.fetchMovie(match.params.id);
        }
    }
    constructor(props){
        super(props);
        console.log(props);
    }
    render() {
        return (
            <div>
                <NewMovieForm
                 movie={this.props.movie}
                 newMovie={this.props.newMovie}
                 onNewMoviesSubmit={this.props.onNewMoviesSubmit}
                 />
            </div>
        );
    }
}

const mapStateToProps = ({newMovie, movies}, props) =>{
     return{
         newMovie,
         movie:movies.movieList.find(item=>item.id.toString()===props.match.params.id)
     }
 }
 const mapDispatchToProps = {
    onNewMoviesSubmit,
    fetchMovie
 }

export default connect(mapStateToProps,mapDispatchToProps)(NewMoviePage);