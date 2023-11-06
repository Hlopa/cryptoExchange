import { Box, Typography } from '@mui/material'
import React, { FC } from 'react'
import { useErrorMessageStyles } from './ErrorMessageStyles'

const ErrorMessage: FC<{ text: string }> = ({ text }) => {
  const { classes } = useErrorMessageStyles()
  return (
    <Box className={classes.errorMessage}>
      <Typography className={classes.text}>{text}</Typography>
    </Box>

  )
}
export default ErrorMessage