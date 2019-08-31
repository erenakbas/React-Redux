import React from 'react';
import PropTypes from 'prop-types';
import MovieCard  from './MovieCard';
import { Grid } from 'semantic-ui-react'
import {HashLoader} from 'react-spinners';

const MoviesList = ({movies}) =>{
    const emptyMessage=(
        <p>Henüz film yok</p>
    );
    const moviesList=( 
        <div> 
          
        <p>selam</p>
        <HashLoader
				size={40}
				color={'#36bdb3'}
				loading={movies.fetching}
			/>
        {
        // console.log("m",movies)
        movies.error.response
					? <h3>Error retrieving data!</h3>
					:
        <Grid stackable columns={3} >
        {
        movies.movieList.map(movie=><MovieCard movie={movie} key={movie.id}/>)   
        }
        </Grid>
        
			}
            </div> 
    );
    return( 
        <div>  
			{  movies.length === 0 ? emptyMessage : moviesList }
        </div> 
    );
}   
          

MoviesList.propTypes = {
	movies: PropTypes.shape({
		movieList: PropTypes.array.isRequired
	}).isRequired
};

export default MoviesList;