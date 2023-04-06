import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



export default function ActionAreaCard() {

    const handleFileUpload = (event: any) => {
        const files = event.target.files;
        console.log(files);
        console.log('this is the file')
    };

    return (
        <Card sx={{ minWidth: 300, maxWidth: 355, maxHeight: 399 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="260"
                    image="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    alt="green iguana"
                />
                <CardContent>
                    {/* <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography> */}
                    {/* <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography> */}
                    <Button sx={{ mt: 4 }} variant="contained" component="label">
                        Upload
                        <input hidden accept="image/*" multiple type="file" onChange={handleFileUpload} />
                    </Button>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}