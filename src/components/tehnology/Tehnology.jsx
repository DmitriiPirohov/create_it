import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const SpacingGrid = () => {
  const [spacing, setSpacing] = React.useState(5);

  const obj = {
    image: ["../../images/skill1.png"],
    name: ['Executive Leadership Principles Program', 'AI for Decision Making: Business Strategies and Applications', 'Post Graduate Program in Cloud Computing', 'Professional Certificate Program In Ethical Hacking And Penetration Testing', 'Professional Certificate Program in Digital Supply Chain Management', 'Advanced Certificate Program in Data Science', 'Professional Certificate Program in Business Analysis', 'Business Analytics for Strategic Decision Making with IIT Roorkee'],
    text: ['Empower yourself with the leadership acumen needed to solve problems, innovate, and drive change with this Executive Leadership Principles Certification. Designed by MIT xPRO, specifically for working professionals, it helps you innovate in your field and drive change collaboratively.', 'This AI program with Wharton Online gives you the competitive edge in emerging business technologies. The AI for Business delivers a foundational understanding of today’s top technologies, including big data, AI and machine learning, and how you can use them to support your organization’s strategy.', 'The Post Graduate Program in Cloud Computing, designed in collaboration with Caltech CTME, helps you become an expert in Azure, AWS, and GCP. This in-depth cloud computing certification course lets you master key architectural principles and develop the skills needed to become a cloud expert.','Boost your career as a cybersecurity expert through this PCP in Ethical Hacking and Penetration Testing in collaboration with IIT Kanpur. In 6 months, you\'ll learn advanced offensive cybersecurity strategies to protect networks and data from breaches, theft, attacks, and more', 'This Professional Certificate Program, designed in collaboration with Purdue, will gear up your career in the competitive field of Supply Chain Management. This program is exclusively curated to help learners understand the competitive marketplace in today\'s globally networked economy.', 'The #1 ranked Advanced Certificate Program in Data Science by ET in collaboration with Purdue University & IBM. This Advanced Data Science program features masterclasses by Purdue faculty & IBM experts, exclusive hackathons, & Ask Me Anything sessions by IBM.', 'Kick-start your career growth story with the Professional Certificate Program in Business Analysis. With program, learn how to tackle complex business problems using in-demand tools. Make the most of this business analysis course with Masterclasses from IBM, and Purdue University.','This Business Analytics program will help you gain the knowledge you need to turn your organization’s data into a tactical asset to generate business value. Make data-driven strategic decisions for your organization with this Business Analytics for Strategic Decision Making program by IIT Roorkee.']
  };
  const jsx = `<Grid container spacing={${spacing}}>`;

  return (
    <Grid sx={ { flexGrow: 1 } } container spacing={ 2 }>
      <h1 style={{margin: '100px Auto'}}>The company Lejoybot  learns only from the best in your industry</h1>
      <Grid item xs={ 12 }>
        <Grid container justifyContent="center" spacing={ spacing }>
          { [0, 1, 2, 3, 4, 5, 6, 7].map((value) => (
            <Grid key={ value } item>
              <MediaCard
                name={obj.name[value]}
                text={obj.text[value]}
                image={obj.image[value]}
               />
            </Grid>
          )) }
        </Grid>
      </Grid>
    </Grid>
  );
};
const MediaCard = ({ image, name, text }) => {
  console.log(image);
  return (
    <Card sx={ { maxWidth: 345, height: 350 } }>
      {/* <CardMedia
        sx={ { height: 140, width: 100, backgroundImage: `URL(${image})`, backgroundSize: '140px 100px'} }
        image={image}
        title="green iguana"
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};
