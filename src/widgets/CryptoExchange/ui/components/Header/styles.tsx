import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
  title:{
  fontSize: theme.typography.pxToRem(50),
  fontWeight: 300,
  lineHeight: "120%",
  [theme.breakpoints.down("md")]: {
    fontSize: theme.typography.pxToRem(45),
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.pxToRem(40),
  },
  },
  subTitle:{
    fontSize: theme.typography.pxToRem(20),
    lineHeight: "100%"
  }
}));