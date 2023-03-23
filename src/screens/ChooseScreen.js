import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Fade,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { setOrderType } from "../actions";
import Logo from "../components/Logo";
import { useStyles } from "../styles";
import { Store } from "../Store";

export default function ChooseScreen(props) {
  const navigate = useNavigate();
  const styles = useStyles();
  const { dispatch } = useContext(Store);

  const chooseHandler = (orderType) => {
    setOrderType(dispatch, orderType);
    navigate('/order');

    
  }
  return (
    <Fade in={true}>
      <Box className={[styles.root, styles.navy]}>
        <Box className={[styles.main, styles.center]}>
          <Logo large></Logo>
          <Typography
            component="h3"
            variant="h3"
            className={styles.center}
            gutterBottom
          >
            Where will you be eating today?
          </Typography>

          <Box className={styles.cards}>
            <Card className={[styles.card, styles.space]}>
              <CardActionArea onClick={() => chooseHandler("Eat in")}>
                <CardMedia
                  component="img"
                  alt="Eat in"
                  image="/images/eatin.png"
                  className={styles.media}
                />
                <CardContent>
                  <Typography
                    component="p"
                    variant="h4"
                    color="textPrimary"
                    gutterBottom
                  >
                    Eat In
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card className={[styles.card, styles.space]}>
              <CardActionArea onClick={() => chooseHandler("Take out")}>
                <CardMedia
                  component="img"
                  alt="Eat in"
                  image="/images/takeout.png"
                  className={styles.media}
                />
                <CardContent>
                  <Typography
                    component="p"
                    variant="h4"
                    color="textPrimary"
                    gutterBottom
                  >
                    Take out
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        </Box>
      </Box>
    </Fade>
  );
}
