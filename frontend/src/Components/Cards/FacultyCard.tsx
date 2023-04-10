import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
    card: {
        position: 'relative',
        cursor: 'pointer',
        transition: 'transform 0.2s',
        '&:hover': {
            transform: 'scale(1.05)',
        },
    },
    media: {
        height: 200,
        backgroundColor: 'white',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover $overlay': {
            opacity: 1,
        },
    },
    overlay: {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: '#fff',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0,
        transition: 'opacity 0.2s',
    },
    text: {
        fontWeight: 'bold',
        fontSize: '1.5rem',
        textAlign: 'center',
    },
});

const images = [
    {
        url: 'data:image/png;base64,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',
        title: 'Dashboard',
        route: '/faculty/dashboard'
    },
    {
        url: 'https://img.favpng.com/15/0/2/e-learning-icon-exam-icon-VPx1dnRq.jpg',
        title: 'Exams',
        route: '/faculty/exam'
    },
    {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVdndZcdz0qHVSKD_fZ79SFuABjstgVIh_Ow&usqp=CAU ',
        title: 'Attendance',
        route: '/faculty/dashboard'
    },
    {
        url: 'https://picsum.photos/200/300',
        title: 'Image 4',
        route: '/faculty/dashboard'
    },
    {
        url: 'https://picsum.photos/200/300',
        title: 'Image 5',
        route: '/faculty/dashboard'
    },
    {
        url: 'https://picsum.photos/200/300',
        title: 'Image 6',
        route: '/faculty/dashboard'
    },
];

const ImageGrid = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const handleClick = (route: string) => {
        navigate(route)
    }

    return (
        <Grid container spacing={3}>
            {images.map((image, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card className={classes.card} onClick={() => handleClick(image.route)}>
                        <CardMedia
                            className={classes.media}
                            image={image.url}
                            title={image.title}
                        >
                            <div className={classes.overlay}>
                                <Typography variant="h5" className={classes.text}>
                                    {image.title}
                                </Typography>
                            </div>
                        </CardMedia>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default ImageGrid;
