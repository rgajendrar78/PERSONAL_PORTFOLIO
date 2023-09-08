import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, TextField, Button } from '@mui/material';
import { Email } from '@mui/icons-material';
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name,
      email,
      phone,
      message
    };

    try {
      const response = await axios.post('http://localhost:3031/contact', formData);
      console.log('Response:', response.data);
      if (response.status === 200) {
        console.log('Message sent successfully');
        // Clear the form fields
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      } else {
        console.log('Error sending message');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <>
      <Grid container spacing={2} justifyContent="center" sx={{ paddingTop: '80px' }}>
        <Grid item xs={12} sm={6} md={4}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h4" component="h2" sx={{ color: '#206604', fontFamily: " 'Dancing Script', cursive" }}>
                CONTACT
              </Typography>
              <Typography variant="h6" sx={{ fontFamily: " 'Dancing Script', cursive", color: '#206604' }}>
                Get in Touch
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Name"
                  color="success"
                  value={name}
                  onChange={handleNameChange}
                  fullWidth
                  margin="normal"
                  required
                />
                <TextField
                  label="Email"
                  color="success"
                  value={email}
                  onChange={handleEmailChange}
                  fullWidth
                  margin="normal"
                  required
                />
                <TextField
                  label="Phone"
                  color="success"
                  value={phone}
                  onChange={handlePhoneChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Message"
                  color="success"
                  value={message}
                  onChange={handleMessageChange}
                  fullWidth
                  margin="normal"
                  multiline
                  rows={4}
                  required
                />
                <Button
                  variant="contained"
                  color="success"
                  sx={{ background: '#206604' }}
                  type="submit"
                  startIcon={<Email />}
                  style={{ marginRight: 8 }}
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
