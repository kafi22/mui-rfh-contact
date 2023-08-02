import { 
    Box, 
    Button, 
    Container, 
    FormControl, 
    Grid,
    TextField, 
    Typography 
    } from '@mui/material';

import React, { useEffect } from 'react';

import {useForm} from "react-hook-form";
import {DevTool} from "@hookform/devtools"


const Contacts = () => {



    // USE REACT FORM HOOK 

    const form = useForm({
        defaultValues : {
            username : '',
            email : '',
            message : ''
        }
    })

    console.log(form);
    
    const {control, register, formState : {errors, isSubmitSuccessful}, handleSubmit, reset } = form;


    const submitForm = (data) => {
        console.log(data);
    }

    useEffect(() => {
        if(isSubmitSuccessful) {
            reset()
        }
    }, [isSubmitSuccessful, reset])

  const HeadingTitle = (
    <Typography variant='h2' sx={{ textAlign: 'center', padding: '20px 0' }}>
      Contact Us
    </Typography>
  );

  return (
    <Container fixed>
      <Box sx={{ backgroundColor: '#FFF6DC', height: '100vh' }}>
        {HeadingTitle}
        <Typography
          sx={{ lineHeight: '1.8', maxWidth: '60%', margin: '0 auto', textAlign: 'center' }}
         
        >
          For further questions, including partnership opportunities, please email
          hello@creative-tim.com or contact using our contact form.
        </Typography>

        <Box sx={{marginTop : '50px'}} component={'form'} onSubmit={handleSubmit(submitForm)}>

        <Grid container spacing={2} sx={{display : 'flex', justifyContent : 'center', 'alignItems' : 'center', flexDirection : 'row'}} >
          {/* Full width on small screens, half width on medium screens */}
          <Grid item xs={12} md={4} >
            <FormControl sx={{ width: '100%' }}>
              <TextField label='Full name' size='small' 
              variant='outlined'
               sx={{ width: '100%' }}
               {...register("username")}
               />
            </FormControl>
          </Grid>

          {/* Full width on small screens, half width on medium screens */}
          <Grid item xs={12} md={4}>
            <FormControl sx={{width : '100%'}}>
              <TextField label='Email' size='small' variant='outlined'
               sx={{width : '100%'}}
               {...register("email")}
               />
            </FormControl>
          </Grid>

          {/* Full width on small screens, full width on medium screens */}
          <Grid item xs={12} md={8} lg={8} marginTop={'10px'}>
            <FormControl sx={{width : '100%'}}>
              <TextField label='What can we help you?'
               size='small' 
               variant='outlined' 
               multiline rows={5} sx={{width : '100%'}}
               {...register("message")}
               />
            </FormControl>
          </Grid>
        </Grid>

        <Grid container item sx={12} display='flex' justifyContent='center' flexDirection='row' alignItems='center'>
        <Button type='submit' variant='contained' sx={{ background: 'linear-gradient(45deg, #A076F9 20%, #6528F7 80%)', color: 'white', mt: 3 }}> Send message</Button>
        </Grid>

        </Box>

        <DevTool control={control} />
      </Box>
    </Container>
  );
};

export default Contacts;
