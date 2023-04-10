
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardActionArea, CardMedia, Typography, Grid } from '@mui/material';

const FormCard = () => {
    const navigate = useNavigate();

    const cardData = [
        {
            title: 'Student Profile',
            image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png', //logo
            route: '/student/profile'
        },
        {
            title: 'Exams',
            image: 'https://thumbs.dreamstime.com/b/exams-icon-trendy-design-style-isolated-white-background-vector-simple-modern-flat-symbol-web-site-mobile-logo-app-135725634.jpg',
            route: '/student/exams'
        },
        {
            title: 'Time Table',
            image: 'https://thumbs.dreamstime.com/b/timetable-icon-illustration-creative-sign-education-icons-collection-filled-flat-computer-mobile-symbol-logo-graphics-157798472.jpg',
            route: '/student/time-table',
            color: 'blue'
        },
        {
            title: 'Assignments',
            image: 'https://t4.ftcdn.net/jpg/05/32/33/73/360_F_532337326_d6V1NNFTfTZw3hqZB56aRR94L97PKEVc.jpg',
            route: '/student/assignments',
            color: 'blue'
        },
        {
            title: 'Attendance',
            image: 'https://media.istockphoto.com/id/1327585822/vector/attendance-presence.jpg?s=612x612&w=0&k=20&c=aDQ60NAjMx3XsqM7hnZpf1RVqxjlmDoT7rT4jvdLsz4=',
            route: '/student/attendance',
            color: 'blue'
        },
    ];

    const handleCardClick = (route: any) => {
        navigate(route);
    }

    return (
        <Grid container spacing={3}>
            {cardData.map((card, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card sx={{ maxWidth: 345 }} onClick={() => handleCardClick(card.route)}>
                        <CardActionArea>
                            <CardMedia
                                style={{ maxWidth: '300px', maxHeight: '300px', minHeight: '200px' }}
                                component="img"
                                height="140"
                                image={card.image}
                                alt={card.title}
                            />
                            <span style={{ fontSize: '12px' }}>{card.title}</span>
                            <CardContent className='bg-bluegray-200' >
                                <Typography gutterBottom variant="h5" component="div">
                                    {card.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {/* Some description about the card. */}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default FormCard;