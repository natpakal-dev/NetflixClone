import React from 'react'
import './Section1.css'
import { Box, Container, Grid, Typography } from '@mui/material'
const Section1 = () => {
    return (
        <Box className="mainContent">
            <Box className="normalContent">
                <Box className="nameContent" >
                    <Typography variant='h2' sx={{ fontSize: { md: '3rem !important', sm: '2rem !important', xs: "2rem !important" }, fontWeight: { md: "900", sm: '700', xs: "700" } }} >รับชมได้ในทีวี</Typography>
                    <Typography variant='h5' >รับชมได้ในสมาร์ททีวี Playstation, Xbox, Chromecast, Apple TV เครื่องเล่น Blu-ray และอีกมากมาย</Typography>
                </Box>
                <Box className="contentImg" >
                    <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/enjoyOnTv/en.png' width="100%" />
                </Box>
            </Box>
            <Box className="reverse-content">
                <Box className="contentImg" >
                    <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/watchEverywhere/en.png' width="100%" />
                </Box>
                <Box className="nameContent" >
                    <Typography variant='h2' sx={{ fontSize: { md: '3rem !important', sm: '2rem !important', xs: "2rem !important" }, fontWeight: { md: "900", sm: '700', xs: "700" } }}>รับชมได้ทุกที่</Typography>
                    <Typography variant='h5' >สตรีมภาพยนตร์และรายการทีวีได้ไม่จำกัดในโทรศัพท์ แท็บเล็ต แล็ปท็อป และทีวี</Typography>
                </Box>
            </Box>
            <Box className="normalContent">
                <Box className="nameContent" >
                    <Typography variant='h2' sx={{ fontSize: { md: '3rem !important', sm: '2rem !important', xs: "2rem !important" }, fontWeight: { md: "900", sm: '700', xs: "700" } }}>สร้างโปรไฟล์สำหรับเด็ก</Typography>
                    <Typography variant='h5' >เปิดโลกแห่งการผจญภัยให้บุตรหลานด้วยตัวละครโปรดในโปรไฟล์มุมเด็กที่คุณจะใช้งานได้ฟรีเมื่อสมัครสมาชิก</Typography>
                </Box>
                <Box className="contentImg" >
                    <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/kids/th.png' width="100%" />
                </Box>
            </Box>
            <Box className="reverse-content">
                <Box className="contentImg" >
                    <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/download/th.png' width="100%" />
                </Box>
                <Box className="nameContent" >
                    <Typography variant='h2' sx={{ fontSize: { md: '3rem !important', sm: '2rem !important', xs: "2rem !important" }, fontWeight: { md: "900", sm: '700', xs: "700" } }}>ดาวน์โหลดเนื้อหาไว้รับชมออฟไลน์</Typography>
                    <Typography variant='h5' >บันทึกเนื้อหาโปรดได้ง่ายๆ และมีความบันเทิงพร้อมให้รับชมอยู่เสมอ</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Section1
