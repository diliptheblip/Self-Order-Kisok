

import TouchAppIcon from "@mui/icons-material/TouchApp";


import { Card, CardActionArea, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import { useStyles } from "../styles";

export default function HomeScreen(props) {
    const styles = useStyles();
    const navigate = useNavigate();
  return (
    <Card>
      <CardActionArea onClick={()=>navigate('/choose')}>
        <Box className={[styles.root, styles.red]}>
                  
          <Box className={[styles.main, styles.center]}>
            <Typography component="h6" variant="h6">
              Fast & Easy
            </Typography>
            <Typography component="h1" variant="h1">
              Order <br /> & pay <br /> here
            </Typography>
            <TouchAppIcon fontSize="large"></TouchAppIcon>
         </Box>
                  
          <Box className={[styles.center, styles.green]}>
            <Logo large></Logo>
            <Typography component="h5" variant="h5">
              Touch to start
            </Typography>
          </Box>
                  
        </Box>
      </CardActionArea>
    </Card>
  );
}
