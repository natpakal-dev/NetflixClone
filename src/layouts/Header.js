import React from 'react'
import './Header.css'
import { Box, Button, Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
const Header = () => {
  return (
    <Box className="Control-Header">
      <Box className="icon-header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" width="7%" />
        <Box className="dropdown">
          <select >
            <option value="TH" >ไทย</option>
            <option value="EN">อังกฤษ</option>
          </select>
          <Button sx={{ marginLeft: '10px', background: 'rgb(229,9,20)', color: '#fff', width: '100px', height: '35px', fontSize: '14px' }}>เข้าสู่ระบบ</Button>
        </Box>
      </Box>
      <Box id="emailSection" >
        <Box className="control-text-email">
          <Typography variant='h1'>ภาพยนตร์ รายการทีวี และความบันเทิงอีกมากมายแบบไม่จำกัด</Typography>
          <Typography variant='h3'>รับชมได้ทุกที่ ยกเลิกได้ทุกเมื่อ</Typography>
          <Typography variant='h4'>หากพร้อมรับชม ป้อนอีเมลเพื่อสร้างหรือเริ่มต้นการเป็นสมาชิกอีกครั้ง</Typography>
          <Box
            sx={{
              '& .MuiTextField-root': { marginTop: '14px', width: { md: '50%', sm: '100% !important', xs: '100%' } }, display: { md: 'flex', sm: 'flex', xs: 'block' }
            }}

          >
            <TextField
              id="filled-multiline-flexible"
              label="ที่อยู่อีเมล"
              maxRows={4}
              variant="filled"
              InputLabelProps={{ className: 'textfield__label' }}
            />
            <Box className="bg-header-btn" >
              <Button variant='contained'>เริ่มต้นใช้งาน </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Header