import { makeStyles } from 'tss-react/mui';

export const useExchangeFormStyles = makeStyles()((theme) => ({
  iconButton:{
    [theme.breakpoints.down("md")]: {
      '& svg':{
        transform: 'rotate(90deg)'
      }
    },
  }
}));
