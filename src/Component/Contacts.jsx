import { 
    Box, 
    Button, 
    Container, 
    FormControl, 
    Grid,
    Icon,
    IconButton,
    TextField, 
    Typography 
    } from '@mui/material';

import React, { useEffect } from 'react';

import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material';

import {useFieldArray, useForm} from "react-hook-form";
import {DevTool} from "@hookform/devtools"


const Contacts = () => {



    // USE REACT FORM HOOK 

    const form = useForm({
        defaultValues : {
            firstName : '',
            lastName : '',
            email : '',
            password : '',
            address : {
                presentAddress : '',
                permanentAddress : '',
            },
            postCode : 0,
            country : '',
            message : '',
            state : '',
            date : new Date(),
            phoneList : [{Number : ''}]
        }
    })

   
    
    const {control, register, formState : {errors, isSubmitSuccessful, isDirty, isSubmitting}, handleSubmit, reset } = form;


    const submitForm = (data) => {
        console.log(data);
    }

    useEffect(() => {
        if(isSubmitSuccessful) {
            reset()
        }
    }, [isSubmitSuccessful, reset])

   const {fields, append, remove} = useFieldArray({
    name : 'phoneList',
    control
   })

  const HeadingTitle = (
    <Typography variant='h2' sx={{ textAlign: 'center', padding: '20px 0', color : '#331D2C'}}>
      Contact Us
    </Typography>
  );

  return (
    <Container fixed>
      <Box sx={{ backgroundColor: '#FFF6DC', minHeight : '100vh', maxWidth : '900px', margin : '0 auto', padding : '40px 0' }}>
        {HeadingTitle}
        <Typography
          sx={{ lineHeight: '1.8', maxWidth: '60%', margin: '0 auto', textAlign: 'center', fontWeight : '400', color : '#2D4356' }}
         
        >
          For further questions, including partnership opportunities, please email
          hello@creative-tim.com or contact using our contact form.
        </Typography>

        <Box sx={{marginTop : '50px'}} component={'form'} noValidate onSubmit={handleSubmit(submitForm)}>

        <Grid container spacing={2} sx={{display : 'flex', justifyContent : 'center', 'alignItems' : 'center', flexDirection : 'row', padding : '20px' }} >
          {/* Full width on small screens, half width on medium screens */}
          <Grid item xs={12} md={5} >
            <FormControl sx={{ width: '100%' }}>
              <TextField label='First Name' 
              size='small' 
              type='text'
              variant='standard'
               sx={{ width: '100%' }}
               {...register("firstName", {
                required : {
                    value : true,
                    message : 'First Name is required'
                }
               })}
               error={!!errors.firstName}
               helperText={errors.firstName?.message}
               />
            </FormControl>
          </Grid>

          {/* Full width on small screens, half width on medium screens */}
          <Grid item xs={12} md={5} >
            <FormControl sx={{width : '100%'}}>
              <TextField label='Last Name' size='small' 
              variant='standard'
             
              type='text'
               sx={{width : '100%'}}
               {...register("lastName", {
                required : {
                    value : true,
                    message : 'lastName is required'
                }
               })}
               error={!!errors.lastName}
               helperText={errors.lastName?.message}
               />
            </FormControl>
          </Grid>

          <Grid item xs={12} md={5}>
            <FormControl sx={{width : '100%'}}>
                <TextField label='Email' 
                type='email'
                size='small' 
                variant='standard'
                sx={{width : '100%'}}
                {...register('email')}
                 />
            </FormControl>
          </Grid>

          <Grid item xs={12} md={5} >
            <FormControl sx={{width : '100%'}}>
                <TextField label='password' 
                type='password'
                size='small' 
                variant='standard'
                sx={{width : '100%'}}
                {...register('password', {
                    required : {
                        value : true,
                        message : 'password is required'
                    }
                })}
                error={!!errors.password}
                helperText={errors.password?.message}
                 />
            </FormControl>
          </Grid>

          <Grid item xs={12}  md={5}>
            <FormControl sx={{width : '100%'}}>
                <TextField sx={{width : '100%'}}
                label='Present Address'
                variant='standard'  
                size='small' 
                error={!!errors.address?.presentAddress}
                helperText={errors.address?.presentAddress?.message}
                {...register("address.presentAddress", {
                    required : {
                        value : true,
                        message : 'Address is required'
                    }
                })}
                />
            </FormControl>
          </Grid>

          <Grid item xs={12}  md={5}>
            <FormControl sx={{width : '100%'}}>
                <TextField sx={{width : '100%'}}
                label='permanent Address'
                variant='standard'
                size='small' 
                error={!!errors.address?.permanentAddress}
                helperText={errors.address?.permanentAddress?.message}
                {...register("address.permanentAddress", {
                    required : {
                        value : true,
                        message : 'Address is required'
                    }
                })}
                />
            </FormControl>
          </Grid>

          <Grid item xs={12}  md={5}>
            <FormControl sx={{width : '100%'}}>
                <TextField sx={{width : '100%'}}
                label='post Code / Zip'
                variant='standard'
                type='text'
                size='small' 
                error={!!errors.postCode}
                helperText={errors.postCode?.message}
                {...register("postCode", {
                    valueAsNumber : true,
                    required : {
                        value : true,
                        message : 'postcode is required'
                    }
                })}
                />
            </FormControl>
          </Grid>

          <Grid item xs={12}  md={5}>
            <FormControl sx={{width : '100%'}}>
                <TextField sx={{width : '100%'}}
                label='Country'
                variant='standard'
                size='small' 
                error={!!errors.country}
                helperText={errors.country?.message}
                {...register("country", {
                    required : {
                        value : true,
                        message : 'country is required'
                    }
                })}
                />
            </FormControl>
          </Grid>

          <Grid item xs={12} md={5}>
            <FormControl xs={{width : '100%'}}>
                <TextField xs={{width : '100%'}}
                type='date'
                size='small' 
                {...register("date", {
                    valueAsDate : true,
                    required : {
                        value : true,
                        message : 'Date-of-birth is required'
                    }
                })}
                error={!!errors.date}
                helperText={errors.date?.message}
                />
            </FormControl>
          </Grid>

          <Grid item xs={12} md={5}>
            <Box width='100%'>
                <TextField label='State/Region'
                type='text'
                size='small' 
                variant='standard'
                sx={{width : '100%'}}
                {...register("state", {
                    required : {
                        value : true,
                        message : 'State is required'
                    }
                })}
                error={!!errors.state}
                helperText={errors.state?.message}
                />
            </Box>
          </Grid>



          <Grid item xs={12} md={10}>
                <Box width="100%">
                    {fields.map((field, index) => (
                    <Box key={field.id} component={'div'} width="100%" display="flex" alignItems="center" margin={'10px 0'}>
                        <TextField
                          size='small' 
                        label='Phone Number'
                        sx={{width : '100%'}}
                        variant='outlined'
                        {...register(`phoneList.${index}.Number`)}
                        />
                            {index > 0 && (
                        <IconButton color="primary" onClick={() => remove(index)}>
                            <RemoveIcon />
                        </IconButton>
                        )}
                    </Box>
                    ))}
                    <IconButton color="primary" onClick={() => append({ Number: '' })}>
                    <AddIcon />
                    </IconButton>
                </Box>
            </Grid>



          {/* Full width on small screens, full width on medium screens */}
          <Grid item xs={12}  md={10} >
            <FormControl sx={{width : '100%'}}>
              <TextField label='What can we help you?'
               size='small' 
               variant='standard' 
               multiline rows={4} sx={{width : '100%'}}
               {...register("message")}
               />
            </FormControl>
          </Grid>
        </Grid>

        <Grid container item sx={12} display='flex' justifyContent='center' flexDirection='row' alignItems='center'>
        <Button type='submit' variant='contained'
        disabled={!isDirty || isSubmitting}
        sx={{ background: 'linear-gradient(45deg, #A076F9 20%, #6528F7 80%)', color: 'white', mt: 3, padding : '10px 25px', width : '190px' }}> Send message</Button>
        </Grid>

        </Box>

        <DevTool control={control} />
      </Box>
    </Container>
  );
};

export default Contacts;
