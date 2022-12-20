import React from "react";

import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';


export const Tile = () => {
    return <>
        <Card>
            <CardMedia
            image="https://images.unsplash.com/photo-1530903677198-7c9f3577a63e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1852&q=80"
            title="A beautiful flower that should be successfully displayed"
        />
        <CardContent>
            <Typography variant="h5">
                Název květiny
            </Typography>
            <Typography variant="body2" color="textSecondary">
                Následný popis 
            </Typography>
      </CardContent>
    </Card>

        
    
    </>       
}