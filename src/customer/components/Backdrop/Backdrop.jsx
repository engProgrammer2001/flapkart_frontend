import { Backdrop, CircularProgress } from '@mui/material'
import React from 'react'

const BackDropComponent = ({open}) => {
  return (
    
    <div>
         <Backdrop
            sx={{ color: "#00008B", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            // onClick={handleLoderClose}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
    </div>
  )
}

export default BackDropComponent;