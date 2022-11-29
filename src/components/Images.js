import { useContext } from "react"
import { ImageContext } from "../App"
import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
import IconButton  from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ButtonBase from '@material-ui/core/ButtonBase';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import { makeStyles } from '@material-ui/core/styles';
import StorefrontIcon from '@mui/icons-material/Storefront';
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
  const classes = {
    cardAction: {
      display: 'block',
      textAlign: 'initial'
    }
  }

  const { response  } = useContext(ImageContext);
  const uniqueArray = response.filter((value, index) => {
    const _value = JSON.stringify(value);
    return index === response.findIndex(response => {
      return JSON.stringify(response) === _value;
    });
  });
  console.log(uniqueArray)
  // const [expanded, setExpanded] = React.useState(false);
  // const classes = useStyles();
  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  return (
    
  
    <div className="items-center px-0">
      <div className="md:shrink-0 items-center">
        <div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4">
          {uniqueArray.map((data, key) => (

            <div class="relative  mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-10">
            <Card 
            >
            <CardHeader
              avatar={
                <img 
                  src={getImageSrc(data.brand.toUpperCase())}  
                  alt={data.brand}
                  // height="60"
                  width="40" 
                  frameborder="0" 
                  scrolling="no"/>
              }
              action={
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon /> 
                </IconButton>
              }
              title={toTitleCase(data.name)}
              subheader={data.price}
            />

              <CardActionArea 
              href={data.shop_link} target="_blank">
                <CardMedia
                  component="img"
                  height="194"
                  image={data.img_urls}
                  alt={key}
                />
            </CardActionArea>

          </Card>
          </div>
      ))}
        </div>
      </div>
    </div>
    
  
    
    
  )
}

export default Images