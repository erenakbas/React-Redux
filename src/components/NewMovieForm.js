import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { Message } from 'semantic-ui-react'
import {Redirect} from 'react-router-dom'
class NewMovieForm extends Component {
    state={
        firstName:this.props.movie ? this.props.movie.firstName : "",
        lastName:this.props.movie ? this.props.movie.lastName:""
    }
   componentWillReceiveProps(nextProps) {
       const {movie} = nextProps.newMovie;
       if (
        movie.firstName
        &&
        movie.firstName !== this.state.firstName
    ){
        this.setState({
            firstName:movie.firstName,
            lastName:movie.lastName
        })
    }
    
   }
   
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    onSubmit=()=>{
        this.props.onNewMoviesSubmit(this.state);
    }
    render() { 
    console.log("props",this.props.movie)
        const form=(
            <Form onSubmit={this.onSubmit} loading={this.props.newMovie.fetching}>
           <Form.Field>
                <label>First Name</label>
                <input 
                    id="firstName"
                    value={this.state.firstName}
                    name="firstName"
                    onChange={this.handleChange}
                    placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                <label>Last Name</label>
                <input  
                    id="lastName"
                    value={this.state.lastName}
                    name="lastName"
                    onChange={this.handleChange}
                    placeholder='Last Name' />
                </Form.Field>
                <Form.Field> 
                </Form.Field>
                <Button type='submit'>Submit</Button>
                {this.props.newMovie.error.response && 
                  <Message negative>
                  <Message.Header>We're sorry we can't apply that discount</Message.Header>
                  <p>That offer has expired</p>
                </Message>} 
           </Form>
        )
        return ( 
                <div>
                    {
                        this.props.newMovie.done ? <Redirect to="/movies"/> : form
                    }
                </div>
        );
    }
}
 
export default NewMovieForm;