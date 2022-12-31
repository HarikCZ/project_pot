import React from "react";

import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';

import flowerimage from '../src/images/flowerimage.jpg';


export const Tile = () => {
    return <>
        <Card>
            <CardMedia
                component="img"
                alt="obrázek překrásné květinky"
                height="140"
                image={flowerimage}
                title="kytička"
            />

            
        <CardContent>
            <Typography variant="h5">
                Název květiny
            </Typography>
            <Typography variant="body2" color="textSecondary">
                Následný popis dat ohledně květiny
            </Typography>
      </CardContent>
    </Card>

        
    
    </>       
}