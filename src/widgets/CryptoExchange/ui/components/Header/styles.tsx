import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
  title:{
  fontSize: theme.typography.pxToRem(50),
  fontWeight: 300,
  lineHeight: "120%"
  },
  subTitle:{
    fontSize: theme.typography.pxToRem(20),
    lineHeight: "100%"
  }
}));