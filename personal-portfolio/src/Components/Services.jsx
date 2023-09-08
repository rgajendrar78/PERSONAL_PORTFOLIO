import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';
import axios from "axios"

const Services = () => {
const [services, setServices]= useState([]);
useEffect(() => {
  axios
    .request({
      url: 'http://localhost:3031/services',
      method: 'GET',
    })
    .then((response) => {
      console.log(response);
      setServices(response.data);
    });
}, []);

  return (
    <>
      <Grid container spacing={2} style={{ paddingTop: '80px', paddingLeft:'100px' }}>
        {services.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} >
            <Card variant="outlined" className="small-card" sx={{ maxWidth: 250 ,maxHeight:250 }} >
              <CardMedia
                component="img"
                alt="Card Image"
                height="100"
                image={item.image}
                style={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h6" style={{ marginBottom: '8px' }}>
                  {item.title}
                </Typography>
                <Typography color="textSecondary">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>    
    </>
  );
};

export default Services;
