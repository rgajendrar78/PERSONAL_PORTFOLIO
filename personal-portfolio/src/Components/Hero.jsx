import React, { useEffect, useState } from 'react';
import { Box, Container } from '@mui/material';
import axios from 'axios';

const textStyle = {
  textAlign: 'center',
  paddingTop: '20%',
  color:"white",
  fontFamily:" 'Dancing Script', cursive"
};

const profilePhotoStyle = {
  width: '200px',
  height: '200px',
  borderRadius: '50%',
  margin: '0 auto',
};

function Hero() {
  const [heroData, setHeroData] = useState([]);

  useEffect(() => {
    axios
      .request({
        url: 'http://localhost:3031/hero',
        method: 'GET',
      })
      .then((response) => {
        console.log(response);
        setHeroData(response.data);
      });
  }, []);

  return (
    <Container fixed>  
      <Box className="backgroundColor">
        <Box sx={textStyle}>
          {heroData.map((hero, index) => {
            return (
              <div key={index}>
                <img src={hero.profile} alt="Profile" style={profilePhotoStyle} />
                <h1>{hero.title}</h1>
                <span>{hero.description}</span>
              </div>
            );
          })}
        </Box>
      </Box>
    </Container>
  );
}

export default Hero;
