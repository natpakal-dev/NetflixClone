import React, { useState } from 'react'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import './QuestionData.css'
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
const QuestionData = ({ title, description1, description2 }) => {
  const [showContent, setShowContent] = useState(false)
  return (
    <Box className="btn-question">
      <Box className="content" onClick={() => setShowContent(!showContent)}>
        <Typography sx={{ padding: '15px', fontSize: '22px' }}>{title}</Typography>
        <Button>
          {showContent ? <CloseIcon sx={{ fontSize: { md: '50px', sm: '50px', xs: '30' } }} /> : <AddIcon sx={{ fontSize: { md: '50px', sm: '50px', xs: '30' } }} />}
        </Button>
      </Box>
      <Box >
        {showContent &&
          <>
            <Typography sx={{ padding: '15px', fontSize: { md: '1.5rem', sm: '1.5rem', xs: '1rem' } }}>
              {description1}
            </Typography>
            <Typography sx={{ padding: '15px', fontSize: { md: '1.5rem', sm: '1.5rem', xs: '1rem' } }}>
              {description2}
            </Typography>
          </>
        }
      </Box>
    </Box>
  )
}

export default QuestionData