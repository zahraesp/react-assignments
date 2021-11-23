import { Box } from '@mui/material';
import React from 'react';
import { Redirect } from 'react-router-dom';
import Profile from './Profile';

const User = (props: any) => {
    const { loginData, item , cartPrice} = props;

    return (
        <Box>
            {
                !loginData.name ?
                    <Redirect to="/UserLogin" /> :
                    <Profile item={item} loginData={loginData} cartPrice={cartPrice}/>
            }
        </Box>
    );
}

export default User;
