import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Routes,Route} from 'react-router-dom';
import ProductsManagement from './ProductsManagements';
import OrdersManagement from './OrdersManagements';
import Navbar from './Navbar';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 30,
  },
  pos: {
    fontSize:22,
    marginBottom: 12,
  },
});

const DashBoard=()=>{
  const classes = useStyles();
  return (
     <>
    <h2> The Project is ERP System With React</h2>
    <Card className='card'>
      <CardContent className='hello'>
        <Typography className={classes.title} color="red" gutterBottom >
          Dashboard
        </Typography>
        <Typography variant="h5" component="h2">
          Total Products: 5 
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Total Orders: 5
        </Typography>
        <Navbar/>
      </CardContent>
    </Card>
 
    <Routes>
        <Route path='/product' element={<ProductsManagement/>}/>
        <Route path='/orders' element={<OrdersManagement/>}/> 
         <Route path='*' element={<>not found</>}/>
    </Routes>

    </>
  );
}

export default DashBoard;
