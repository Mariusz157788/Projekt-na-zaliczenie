import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';

const RecipeCard = ({ recipe }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={recipe.image}
        alt={recipe.label}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {recipe.label}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {recipe.source}
        </Typography>
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Typography variant="body2" color="text.secondary">
            {recipe.calories.toFixed(0)} CALORIES
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {recipe.ingredients.length} INGREDIENTS
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
