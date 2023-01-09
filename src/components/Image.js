import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import IconButton  from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState, useEffect } from "react"
import firebase from '../services/firebase';
import { signInWithGoogle } from '../services/firebase';

const useStyles = makeStyles((theme) => ({
card: {
maxWidth: 345,
padding: theme.spacing(0.5),
// height: "95%",
},
button: {
  position: "relative",
  bottom: 130,
  left: 230,
  right: 10,
},
details: {
  display: "flex",
  flexDirection: "column",
},
space: {
  marginTop: theme.spacing(-1),
}
}));

function Image({ data }) {
  const [active, setActive] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
  firebase.auth().onAuthStateChanged(user => {
    setUser(user);
  })
  }, [])

  const theme = useTheme();
  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const { name, price, img_urls, shop_link, description } = data;
return (
  <div className="relative mb-1">
<Card className={classes.card}>
<CardActionArea href={shop_link} target="_blank" rel="noopener noreferrer">
<CardMedia
                  component="img"
                  height="194"
                  image={img_urls}
                  alt={description}
                />
<IconButton 
                  aria-label="add to favorites"
                  onClick={user ? () => setActive(!active) : signInWithGoogle}
                  color={active ? "red" : "default" }
                  sx={{
                    position: "absolute",
                    right: "-1px",
                    top: "-1px",
                    color: "gray",
                    fontSize: 22
                  }}
                  >
    <FavoriteIcon /> 
</IconButton>
<CardContent>
<Typography gutterBottom 
            variant="h7" 
            component="h2" 
            noWrap={matches} 
            style={{ fontFamily: 'Roboto, sans-serif'}}
            className={classes.space}>
{name.toUpperCase()}
</Typography>
<Typography variant="body2" 
            color="textSecondary" 
            component="p" 
            style={{ fontFamily: 'Roboto, sans-serif'}}
            className={classes.space}>
{price}
</Typography>
</CardContent>
</CardActionArea>
</Card>
</div>
);
}

export default Image;



