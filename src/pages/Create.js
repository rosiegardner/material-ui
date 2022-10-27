import React from 'react';
import { 
  Button,
  Typography,
  Container } from '@mui/material'
import { makeStyles } from '@mui/material'
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
// import SendIcon from '@mui/icons-material/Send';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const useStyles = makeStyles({
  btn: {
    fontSize: 60,
    backgroundColor: 'violet'
  }
})

const Create = () => {
  const classes = useStyles();

  return(
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create A New Note
      </Typography>

      <Button
        className={classes.btn} 
        onClick={() => console.log('you click me')}
        type="submit"
        color="secondary"
        variant="contained"
        endIcon={<KeyboardArrowRightIcon />}
      >
        Submit
      </Button>

      {/* icons */}
      <br />
      <AcUnitOutlinedIcon/> 
      <AcUnitOutlinedIcon color="secondary" fontSize="large" />
      <AcUnitOutlinedIcon color="secondary" fontSize="small" />
      <AcUnitOutlinedIcon color="action" fontSize="small" />
      <AcUnitOutlinedIcon color="error" fontSize="small" />
      <AcUnitOutlinedIcon color="disabled" fontSize="small" />

      {/* <Button type="submit">Submit</Button>
      <Button type="submit" color="secondary" variant="outlined">Submit</Button>

      <ButtonGroup
        color="secondary"
        variant="contained">
        <Button>One</Button>
        <Button>Two</Button>  
        <Button>Three</Button> 
      </ButtonGroup> */}
    </Container>
  );
}

export default Create;

/* <Typography
     variant="h1"
     color="primary"
     align="center"
    >
      Create A New Note
    </Typography> */

    // startIcon={<SendIcon />}