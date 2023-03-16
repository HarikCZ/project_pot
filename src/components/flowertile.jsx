

import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';




//init services


export const Tile = ({data}) => {
    
    return <>
        
        
        <Card>
            <CardMedia
                component="img"
                alt="obrázek překrásné květinky"
                height="140"
                image="./flowerimage.jpg"
                title="kytička"
            />
        
        <CardContent>
            <Typography variant="h5">
                {data.name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
                <p>Teplota vzduchu: {data.airtemp}°C</p>
                <p>Vlhkost vzduchu: {data.airhum}%</p>
            </Typography>
      </CardContent>
    </Card>

    </> 
 
}