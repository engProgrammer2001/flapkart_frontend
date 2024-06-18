import React from 'react';
import { Container, Grid, Typography, Box, Paper } from '@mui/material';
import OrdersIcon from '@mui/icons-material/ShoppingCart';
import RefundIcon from '@mui/icons-material/AssignmentReturn';
import AddressIcon from '@mui/icons-material/LocationOn';
import AccountSettingsIcon from '@mui/icons-material/AccountCircle';


const SupportPage = () => {
  return (
    <Container className='mt-20'>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom className='text-blue-950 text-bold'>
          Hello. What can we help you with?
        </Typography>
      </Box>
      <Grid container spacing={3} className='my-40 cursor-pointer'>
        <Grid item xs={12} lg={3} cursor='pointer'>
          <Paper elevation={3} style={{ padding: '10px', border: '1px solid gray', borderRadius: '4px' }}>
            <Box display="flex" alignItems="center" mb={2}>
              <OrdersIcon fontSize="large" style={{ marginRight: 8, color: '#9155FD',fontSize: '44px' }} />
              <Typography variant="h6" component="h2" className='text-blue-950 text-bold'>
                Your Orders
              </Typography>
            </Box>
            <Typography variant="body1">
              Track Packages
            </Typography>
            <Typography variant="body1">
              Edit and Cancel Order
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={3}>
          <Paper elevation={3} style={{ padding: '10px', border: '1px solid gray', borderRadius: '4px' }}>
            <Box display="flex" alignItems="center" mb={2}>
              <RefundIcon fontSize="large" style={{ marginRight: 8, color: '#ffbfbf',fontSize: '44px' }} />
              <Typography variant="h6" component="h2" className='text-blue-950 text-bold'>
                Return and Refund
              </Typography>
            </Box>
            <Typography variant="body1">
              Return and Exchange Item
            </Typography>
            <Typography variant="body1">
              Print Return and Mailing Labels
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={3}>
          <Paper elevation={3} style={{ padding: '10px', border: '1px solid gray', borderRadius: '4px' }}>
            <Box display="flex" alignItems="center" mb={2}>
              <AddressIcon fontSize="large" style={{ marginRight: 8, color: '#008000',fontSize: '44px' }} />
              <Typography variant="h6" component="h2" className='text-blue-950 text-bold'>
                Manage Addresses
              </Typography>
            </Box>
            <Typography variant="body1">
              Edit Address, Delete Address
            </Typography>
            <Typography variant="body1">
              Add Address
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={3}>
          <Paper elevation={3} style={{ padding: '10px', border: '1px solid gray', borderRadius: '4px' }}>
            <Box display="flex" alignItems="center" mb={2}>
              <AccountSettingsIcon fontSize="large" style={{ marginRight: 8, color: '#FFA500',fontSize: '44px' }} />
              <Typography variant="h6" component="h2" className='text-blue-950 text-bold'>
                Account Settings
              </Typography>
            </Box>
            <Typography variant="body1">
              Manage Your Account
            </Typography>
            <Typography variant="body1">
              Delete Your Account
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SupportPage;
