import { Button } from '@mui/material';
import React from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Product(props) {
    const {product, onAdd, onRemove} = props;
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      height="300"
      image= {product.image}
      alt="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {product.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {product.description}
      </Typography>
    </CardContent>
    <CardActions>
    <Button onClick= {() => {onAdd(product);}} variant="text">Add To Cart</Button>  
      <Button onClick= {() => {onRemove(product);}} variant="text">Remove From Cart</Button>
    </CardActions>
  </Card>
  );
}
