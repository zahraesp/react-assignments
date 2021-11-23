import React from 'react';
import { Card } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = (props: any) => {
    const { loginData,count } = props;
  
    return (
        <Card sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", minHeight: "3rem" }}>
            {!!loginData.name ?
                <Link to="/User">{loginData.name}({count-1})</Link>:
                <Link to="/UserLogin">login</Link> 
            }
        </Card>
    );
}

export default Header;
