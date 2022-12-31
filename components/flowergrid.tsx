import React from "react";

import { Grid } from '@material-ui/core'

import { Tile } from './flowertile';


export const FlowerGrid = () => {
    return<>
        <Grid container spacing={3}>
            
            <Grid item xs={4}>
                <Tile/>
            </Grid>
            <Grid item xs={4}>
                <Tile/>
            </Grid>
            <Grid item xs={4}>
                <Tile/>
            </Grid>

        </Grid>
    </>
}



