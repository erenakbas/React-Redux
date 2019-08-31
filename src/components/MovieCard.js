import React from 'react'
import { Grid,Card,Button,Icon } from 'semantic-ui-react'
import {Link} from 'react-router-dom';
const extra= movie =>{
  return(
  <div className="ui two buttons">
     <Button animated as={Link} to={`/movie/${movie.id}`}>
      <Button.Content visible>Edit</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>
    <Button animated='vertical'>
      <Button.Content hidden>Delete</Button.Content>
      <Button.Content visible>
        <Icon name='trash' />
      </Button.Content>
    </Button>
  </div>
  )
};
const MovieCard = ({movie}) => (
  
  <Grid.Column>
  <Card> 
    <Card
    image='https://www.usmagazine.com/wp-content/uploads/2018/06/Smoothie-the-Cat-Instagram-zoom.jpg'
    header={movie.firstName + " " + movie.lastName} 
    extra={extra(movie)}
  /> 
  </Card> 
  </Grid.Column>
)

export default MovieCard