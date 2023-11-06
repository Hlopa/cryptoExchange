import { COLORS } from 'app/styles/colors';
import { makeStyles } from 'tss-react/mui';

export const useErrorMessageStyles = makeStyles()((theme) => ({
 errorMessage:{
  width: '100%',
  position: 'absolute',
  marginTop: theme.spacing(1),
 },
 text:{
  color: COLORS.error,
 }
}));
