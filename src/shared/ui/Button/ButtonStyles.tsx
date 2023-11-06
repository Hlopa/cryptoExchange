import { COLORS } from 'app/styles/colors';
import { makeStyles } from 'tss-react/mui';

export const useButtonStyles = makeStyles()((theme) => ({
  buttonBox:{
    position: 'relative'
  },
  root: {
    borderRadius: 5,
    padding: '16px 24px 14px',
    height: 50,
    fontWeight: 700,
    lineHeight: "120%",
    letterSpacing: 0.48,
    textTransform: 'uppercase',
    transition: 'all 0.3s',
    boxShadow: 'none',
    color: '#fff',
    fontSize: theme.typography.pxToRem(16),
    backgroundColor: COLORS.primary,
    '&:hover, &:focus, &:active': {
      boxShadow: 'none',
    },
    '&:hover, &:focus': {
      backgroundColor: COLORS.primaryHover,
    },
    '&:active': {
      backgroundColor: COLORS.primaryActive,
    },
  },
}));
