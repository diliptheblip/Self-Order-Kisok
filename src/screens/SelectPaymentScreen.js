import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { setPaymentType } from "../actions";
import Logo from "../components/Logo";
import { Store } from "../Store";
import { useStyles } from "../styles";

export default function SelectPaymentScreen(props) {
    const history=useNavigate();
  const { dispatch } = useContext(Store);
  const styles = useStyles();
  const selectHandler = (paymentType) => {
    setPaymentType(dispatch, paymentType);
    if (paymentType === "Pay here") {
      history("/payment");
    } else {
      history("/complete");
    }
  };
  return (
    <Box className={[styles.root, styles.navy]}>
      <Box className={[styles.main, styles.center]}>
        <Logo large></Logo>
        <Typography
          className={styles.center}
          gutterBottom
          variant="h3"
          component="h3"
        >
          Select payment type
        </Typography>
      </Box>
      <Box className={styles.cards}>
        <Card className={[styles.card, styles.space]}>
          <CardActionArea onClick={() => selectHandler("Pay here")}>
            <CardMedia
              component="img"
              alt="Pay here"
              image="/images/payhere.png"
              className={styles.media}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                color="textPrimary"
                component="p"
              >
                PAY HERE
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className={[styles.card, styles.space]}>
          <CardActionArea onClick={() => selectHandler("At counter")}>
            <CardMedia
              component="img"
              alt="At counter"
              image="/images/atcounter.png"
              className={styles.media}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                color="textPrimary"
                component="p"
              >
                AT COUNTER
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Box>
  );
}
