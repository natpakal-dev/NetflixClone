import React from 'react'
import './Footer.css'
import { Box, Button, Grid, Typography } from '@mui/material'
const Footer = () => {
  return (
    <Box className="control-footer">
      <Typography variant='h5'>หากมีคำถาม โทร <u>1-800-012-294</u></Typography>
      <Box className="content-footer">
        <Grid container spacing={1}>
          <Grid item md={3} sm={3} xs={12}>
            <Typography variant='h5'><u>คำถามที่พบบ่อย</u></Typography>
            <Typography variant='h5'><u>นักลงทุนสัมพันธ์</u></Typography>
            <Typography variant='h5'><u>วิธีรับชม</u></Typography>
            <Typography variant='h5'><u>ข้อมูลบริษัท</u></Typography>
            <Typography variant='h5'><u>ที่ Netflix เท่านั้น</u></Typography>
          </Grid>
          <Grid item md={3} sm={3} xs={12}>
            <Typography variant='h5'><u>ศูนย์ช่วยเหลือ</u></Typography>
            <Typography variant='h5'><u>ตำแหน่งงาน</u></Typography>
            <Typography variant='h5'><u>ข้อกำหนดการใช้งาน</u></Typography>
            <Typography variant='h5'><u>ติดต่อเรา</u></Typography>
          </Grid>
          <Grid item md={3} sm={3} xs={12}>
            <Typography variant='h5'><u>บัญชี</u></Typography>
            <Typography variant='h5'><u>แลกบัตรของขวัญ</u></Typography>
            <Typography variant='h5'><u>ความเป็นส่วนตัว</u></Typography>
            <Typography variant='h5'><u>ทดสอบความเร็ว</u></Typography>

          </Grid>
          <Grid item md={3} sm={3} xs={12}>
            <Typography variant='h5'><u>ศูนย์สื่อมวลชน</u></Typography>
            <Typography variant='h5'><u>ซื้อบัตรของขวัญ</u></Typography>
            <Typography variant='h5'><u>การตั้งค่าคุกกี้</u></Typography>
            <Typography variant='h5'><u>ประกาศแจ้งทางกฎหมาย</u></Typography>
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
            <Box className="select-footer">
              <select >
                <option value="TH" >ไทย</option>
                <option value="EN">อังกฤษ</option>
              </select>
            </Box>
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
            <Typography variant='h5' sx={{paddingTop:'25px !important',fontSize:'0.875rem !important'}}>Netflix ไทย</Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Footer