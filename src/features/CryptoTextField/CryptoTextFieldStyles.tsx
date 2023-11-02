import { COLORS } from 'app/styles/colors';
import { makeStyles } from 'tss-react/mui';

export const useCryptoTextFieldStyles = makeStyles()((theme) => ({
  cryptoTextField:{
    display: 'flex',
    borderRadius: 5,
    overflow: 'hidden',
    border: `1px solid ${COLORS.gray500}`,
    height: 50,
    transition: 'all 0.3s',
    '&:hover':{
      border: `1px solid ${COLORS.gray600}`,
      '& .MuiButtonBase-root::before':{
         backgroundColor: COLORS.gray600
      }
    },
    '& .MuiButtonBase-root':{
      position: 'relative',
      backgroundColor: COLORS.gray300,
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(4),
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      minWidth: 'unset',
      '&:hover, &:focus, &:active':{
        backgroundColor: COLORS.gray300,
      },
      '&.Mui-focusVisible':{
        color: COLORS.gray500,
        backgroundColor: COLORS.gray500,
      },
      '&::before':{
        content: "''",
        position: 'absolute',
        left: 0,
        top: '50%',
        width: 1,
        height: '70%',
        transform: 'translateY(-50%)',
        backgroundColor: COLORS.gray500,
        transition: 'all 0.3s',
      }
    }
  },
  btnText:{
    marginLeft: theme.spacing(1.5)
  }
}));