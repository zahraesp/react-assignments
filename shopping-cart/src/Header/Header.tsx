import { Card } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props: any) => {
    const { loginData,count } = props;
  
    return (
        <Card sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", minHeight: "3rem" }}>
            {!localStorage.getItem('myData') || !loginData.name ?
                <Link to="/UserLogin">login</Link> :
                <Link to="/User">{loginData.name}({count-1})</Link>
            }
        </Card>
    );
}

export default Header;
