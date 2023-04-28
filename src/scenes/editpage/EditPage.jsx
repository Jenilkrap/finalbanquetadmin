import { Box, Button, IconButton, Menu, MenuItem, TextField, Typography } from '@mui/material'
import { ArrowLeft, Box1, Check, Edit, More, More2, RowHorizontal, TextalignJustifycenter } from 'iconsax-react'
import React, { useState } from 'react'
// import Sidebar from "./Sidebar"
import { CheckBox, CheckBoxOutlined } from '@mui/icons-material';


const EditPage = (props) => {
    const [show, setshow] = useState(false)
    const handleClick = (event) => {

        setAnchorEl(event.currentTarget);
    };
    const [anchorEl, setAnchorEl] = useState(null)
    const Open = Boolean(anchorEl);
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box>
            <Box>
                <Box width={'100%'} overflow={'hidden'} bgcolor={'#e3e3e3'}>
                    <Box p={3} marginX={'auto'} width='80%' display='flex' flexDirection={'column'}>
                        <Typography fontWeight={'bold'} variant='h4'>Edit Profile</Typography>
                    </Box>
                    <Box width='80%' display='flex' flexDirection={'column'} m='auto' bgcolor={'#fff'}>
                        <Box width={'80%'} p='2rem'>
                            <Box marginBottom={'1rem'} width={'20%'} height={'200px'} display='flex' flexDirection={'column'} border={'1px solid #3b3b3b'}>
                                <img src='' position='center' alt='profile' />
                            </Box>
                            <Button component="label" variant='contained' sx={{ backgroundColor: '#3b3b3b', ":hover": { backgroundColor: '#3b3b3b' }, color: '#fff' }}>select image
                                <input hidden name='editImage' accept='image/*'
                                    onChange={(e) => {
                                        
                                    }}
                                    type="file" />
                            </Button>
                        </Box>
                        <Box height={'120vh'} width={'60%'} paddingX={'1rem'} display='flex' paddingLeft={'2rem'} flexDirection={'column'} justifyContent={'space-evenly'} >
                            <Box>
                                <Typography fontWeight={'bold'}>First Name</Typography>
                                <TextField fullWidth size='small'></TextField>
                            </Box>
                            <Box>
                                <Typography fontWeight={'bold'}>Last Name</Typography>
                                <TextField fullWidth size='small'></TextField>
                            </Box>
                            <Box>
                                <Typography fontWeight={'bold'}>Email</Typography>
                                <TextField fullWidth size='small'></TextField>
                            </Box>
                            <Box>
                                <Typography fontWeight={'bold'}>Phone</Typography>
                                <TextField fullWidth size='small'></TextField>
                            </Box>
                            <Box>
                                <Typography fontWeight={'bold'}>Password</Typography>
                                <TextField fullWidth size='small'></TextField>
                            </Box>
                            <Box>
                                <Typography fontWeight={'bold'}>Password Confirmation</Typography>
                                <TextField fullWidth size='small'></TextField>
                            </Box>
                            <Box display={'flex'} paddingY={'3rem'} justifyContent={'flex-end'} flexDirection={'row'}>
                                <Button onClick={() => { props.setedit(false) }} variant='contained' sx={{ backgroundColor: '#3b3b3b', ":hover": { backgroundColor: '#3b3b3b' }, color: '#fff' }}><ArrowLeft />back</Button>
                                <Button onClick={() => { props.setedit(false) }} variant='contained' sx={{ backgroundColor: '#3b3b3b', ":hover": { backgroundColor: '#3b3b3b' }, color: '#fff', marginLeft: '1rem' }}><CheckBoxOutlined />ok</Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default EditPage
