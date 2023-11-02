import {Stack, Typography} from '@mui/material';
import { useStyles } from './styles';


const Header = () => {
  const { classes } = useStyles();
  return (
    <Stack spacing={2}>
      <Typography className={classes.title}>
         Crypto Exchange
      </Typography>
      <Typography className={classes.subTitle}>
          Exchange fast and easy
      </Typography>
    </Stack>
  )
}

export default Header