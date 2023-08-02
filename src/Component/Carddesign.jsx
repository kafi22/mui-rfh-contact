import React from 'react';
import {Stack, Box, Typography, Card, CardContent, CardActions, Button} from '@mui/material';

const Carddesign = () => {


    const CardTitle = () => {
        return (
        
            <Box>
                <Typography>
                Word of the Day
                </Typography>
            </Box>
            
        )
    }

    const bull = (
        <Box component='span' sx={{display : 'inline-block', mx: '2px', transform: 'scale(0.8)'}}>
            •
        </Box>
    )

  return (

    <Stack sx={{display : 'flex', justifyContent : 'center', alignItems : 'center', height : '100vh'}}>
 <Stack sx={{display : 'flex', justifyContent : 'center', alignItems : 'center', gap : '1rem', flexDirection : 'row'}}>
    <Card>
        <CardContent>
            <CardTitle />
            <Typography variant='h4' component='div'>
            be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography sx={{mb : 1.5}} color="text.secondary">
            adjective
            </Typography>
            <Typography variant='body1' component='div'>
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
            </Typography>
        </CardContent>
        <CardActions>
            <Button variant='text' size='medium' >Learn more</Button>
        </CardActions>
    </Card>

    <Card>
        <CardContent>
            <CardTitle />
            <Typography variant='h4' component='div'>
            be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography sx={{mb : 1.5}} color="text.secondary">
            adjective
            </Typography>
            <Typography variant='body1' component='div'>
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
            </Typography>
        </CardContent>
        <CardActions>
            <Button variant='text' size='medium' >Learn more</Button>
        </CardActions>
    </Card>

    <Card>
        <CardContent>
            <CardTitle />
            <Typography variant='h4' component='div'>
            be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography sx={{mb : 1.5}} color="text.secondary">
            adjective
            </Typography>
            <Typography variant='body1' component='div'>
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
            </Typography>
        </CardContent>
        <CardActions>
            <Button variant='text' size='medium' >Learn more</Button>
        </CardActions>
    </Card>
    </Stack>
    </Stack>

   
  )
}

export default Carddesign