import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';

export const FlowerTile = (props) => {
    console.log()
    return <>
        <p>Teplota vzduchu: {props.data.airtemp}°C</p>
        <p>Vlhkost vzduchu: {props.data.airhum}%</p>
        <p>Světlo v místnosti: {props.data.light} Lux</p>
    </> 
}