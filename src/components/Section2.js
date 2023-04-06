import React from 'react'
import './Section2.css'
import { Box, Container, Typography, Button } from '@mui/material'
import Questiondata from './mock/data'
import QuestionData from './QuestionData'
import TextField from '@mui/material/TextField';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Section2 = () => {
    return (
        <Box className="main-question">
            <Typography variant='h1' sx={{ fontSize: { md: '2.5rem', sm: '2.5rem', xs: "2rem" }, fontWeight: '700' }}>คำถามที่พบบ่อย</Typography>
            {Questiondata.map((data) => {
                return (
                    <QuestionData {...data} />
                )
            })}
            <Typography sx={{ fontSize: '1.25rem', paddingTop: '30px' }}>หากพร้อมรับชม ป้อนอีเมลเพื่อสร้างหรือเริ่มต้นการเป็นสมาชิกอีกครั้ง</Typography>
            <Box
                sx={{
                    '& .MuiTextField-root': { marginTop: '15px', width: { md: '50%', sm: '100% !important', xs: '100%' } }, display: { md: 'flex', sm: 'flex', xs: 'block' }
                }}

            >
                <TextField
                    id="filled-multiline-flexible"
                    label="ที่อยู่อีเมล"
                    maxRows={4}
                    variant="filled"
                    InputLabelProps={{ className: 'textfield__label' }}
                />
                <Box className="bg-header-btn">
                    <Button variant='contained'>เริ่มต้นใช้งาน </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Section2