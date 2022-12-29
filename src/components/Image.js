import { useState, useEffect } from "react"
import {} from '../styles.scss'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import IconButton  from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBag from '@mui/icons-material/ShoppingBag';
import { signInWithGoogle } from '../services/firebase';
import firebase from '../services/firebase';

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
  } else if (brand === 'UO') {
    src = "https://seeklogo.com/images/U/urban-outfitters-logo-E9B99ABE57-seeklogo.com.png";
  } else {
    src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/320px-H%26M-Logo.svg.png";
  }
  return src
}


const Image = ({ data }) => {
  const [active, setActive] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
  firebase.auth().onAuthStateChanged(user => {
    setUser(user);
  })
  }, [])
  console.log(user)

  return (
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
                <>
                <IconButton 
                  aria-label="add to favorites"
                  onClick={user ? () => setActive(!active) : signInWithGoogle}
                  color={active ? "primary" : "default" }
                  >
                <FavoriteIcon /> 
                </IconButton>
                <IconButton 
                 href={data.shop_link} target="_blank" rel="noopener noreferrer"
                 aria-label="add to favorites">
                  <ShoppingBag /> 
                </IconButton>
                </>
              }
              title={toTitleCase(data.name)}
              subheader={data.price}
            />

              <CardActionArea 
              // href={data.shop_link} target="_blank" rel="noopener noreferrer"
              onDoubleClick={() => setActive(!active)}
              >
                <CardMedia
                  component="img"
                  height="194"
                  image={data.img_urls}
                  alt={data.description}
                />
            </CardActionArea>

          </Card>
          </div>
      
  )
}

export default Image

