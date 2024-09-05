import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

const RecipeList = ({ recipes }) => {
  if (!recipes || recipes.length === 0) {
    return <Typography variant="h6">No recipes found</Typography>;
  }

  return (
    <Grid container spacing={2}>
      {recipes.map((recipe, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={recipe.recipe.image}
              alt={recipe.recipe.label}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {recipe.recipe.label}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {recipe.recipe.source}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {recipe.recipe.calories.toFixed(0)} CALORIES
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {recipe.recipe.ingredients.length} INGREDIENTS
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default RecipeList;
