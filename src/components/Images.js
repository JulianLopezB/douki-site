import { useContext } from "react"
import { ImageContext } from "../App"
import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
import IconButton  from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import { makeStyles } from '@material-ui/core/styles';

// interface ExpandMoreProps extends IconButtonProps {
//   expand: boolean;
// }

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

function getImageSrc(brand) {
  let src;
  if (brand === 'ZARA') {
    src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/320px-Zara_Logo.svg.png";
  } else if (brand === 'MANGO') {
    src = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Logo_of_Mango_%28new%29.svg/320px-Logo_of_Mango_%28new%29.svg.png";
  } else {
    src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/320px-H%26M-Logo.svg.png";
  }
  return src
}

// const ExpandMore = styled((props: ExpandMoreProps) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     '& > *': {
//       margin: theme.spacing(1),
//     },
//   },
//   small: {
//     width: theme.spacing(3),
//     height: theme.spacing(3),
//   },
//   large: {
//     width: theme.spacing(7),
//     height: theme.spacing(7),
//   },
// }));


function Images() {

  const { response  } = useContext(ImageContext);
  // const [expanded, setExpanded] = React.useState(false);
  // const classes = useStyles();
  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  return (
    
  
    <div className="items-center px-8">
      <div className="md:shrink-0 items-center">
        <div class="columns-2 md:columns-3 lg:columns-4">
          {response.map((data, key) => (
            // <div class="relative  mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-10">
            //   <img class="w-full rounded-md rounded-lg shadow-md object-cover" 
            //     src={data.img_urls}
            //     alt={data.name}
            //   />
            // </div>
            <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <img src={getImageSrc(data.brand.toUpperCase())}  alt={data.brand} height="60" width="40" frameborder="0" scrolling="no"/>
                // <Avatar 
                //   // sx={{ bgcolor: red[500]}} 
                //   src={getImageSrc(data.brand.toUpperCase())}
                //   className={classes.small}
                //   // aria-label="recipe"
                //   >
                //   {/* {data.brand.toUpperCase()} */}
                // </Avatar>
              }
              action={
                // <IconButton aria-label="settings">
                //   <MoreVertIcon />
                // </IconButton>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
              }
              title={toTitleCase(data.name)}
              subheader="29 €"
            />
            <CardMedia
              component="img"
              height="194"
              image={data.img_urls}
              alt={key}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {data.description}
              </Typography>
            </CardContent>
            {/* <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  {data.description}
                </Typography>
              </CardContent>
            </Collapse> */}
          </Card>
      ))}
        </div>
      </div>
    </div>
    
  
    
    
  )
}

export default Images