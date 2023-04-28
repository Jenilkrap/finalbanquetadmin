import { Box, Button, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import { Edit, More, More2, RowHorizontal, TextalignJustifycenter } from 'iconsax-react'
import React, { useState } from 'react'
import EditPage from '../editpage/EditPage';


const Page = () => {
    const [show, setshow] = useState(false)
    const [edit, setedit] = useState(false)
    const handleClick = (event) => {

        setAnchorEl(event.currentTarget);
    };
    const [anchorEl, setAnchorEl] = useState(null)
    const Open = Boolean(anchorEl);
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box width={'100vw'} overflow={'hidden'}>
            {/* <Box
                sx={{ boxShadow: " rgba(50, 50, 93, 0.25) 0px 6px 12px , rgba(0, 0, 0, 0.3) 0px 3px 12px" }}
                paddingX={8} p={3} display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
                <Box>
                    <IconButton onClick={() => setshow(!show)}><TextalignJustifycenter /></IconButton>
                </Box>
                <Box marginRight={'2rem'} width='10%' display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
                    <Box>

                    </Box>
                    <Box>
                        <Box
                            onClick={handleClick}
                            sx={{ ":hover": { cursor: 'pointer' } }}
                            aria-controls={Open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={Open ? 'true' : undefined}
                            borderRadius={'50%'} height='45px' width='45px' border='1px solid black'></Box>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={Open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                            sx={{ width: '10rem' }}
                        >
                            <MenuItem sx={{ width: '10rem', height: '50px', ":hover": { backgroundColor: '#3b3b3b' }, backgroundColor: '#3b3b3b', color: '#fff' }}>Yash Naiya</MenuItem>
                            <MenuItem sx={{ width: '10rem', height: '50px', }}>My Profile</MenuItem>
                            <MenuItem sx={{ width: '10rem', height: '50px', }}>Logout</MenuItem>

                        </Menu>
                    </Box>
                </Box>
            </Box> */}
            {edit?
            <EditPage setedit={setedit}/>:
            <Box width='100%'>
                {/* <Sidebar show={show} /> */}
                <Box minHeight={'80vh'} width={'100%'} bgcolor={'#e3e3e3'}>
                    <Box p={3} marginX={'auto'} width='80%' display='flex' flexDirection={'column'}>
                        <Typography fontWeight={'bold'} variant='h4'>User Profile</Typography>
                    </Box>
                    <Box height={'15rem'} display='flex' flexDirection={'row'} width={'80%'} m='auto' bgcolor={'#fff'}>
                        <Box justifyContent={'center'} display={'flex'} flexDirection={'column'} width={'30%'}>
                            <Box m='auto' overflow={'hidden'} width={'150px'} height={'170px'} borderRadius={'50%'} border={'4px solid #3b3b3b'}>
                                <img src='' position='center' alt='profile'  />
                            </Box>
                        </Box>
                        <Box paddingX={'1rem'} display='flex' flexDirection={'column'} justifyContent={'space-evenly'} width={'60%'}>
                            <Box height={'70%'} display='flex' width={'100%'} flexDirection={'row'}>
                                <Box marginRight={'5rem'} display='flex' flexDirection={'column'} justifyContent={'space-evenly'}>
                                    <Typography fontWeight={'bold'}>First Name</Typography>
                                    <Typography fontWeight={'bold'}>Last Name</Typography>
                                    <Typography fontWeight={'bold'}>Email</Typography>
                                    <Typography fontWeight={'bold'}>Phone</Typography>
                                </Box>
                                <Box display='flex' flexDirection={'column'} justifyContent={'space-evenly'}>
                                    <Typography>Yash</Typography>
                                    <Typography>Naiya</Typography>
                                    <Typography>yashnaiya16@gmail.com</Typography>
                                    <Typography>9081819007</Typography>
                                </Box>
                            </Box>

                            <Button onClick={()=>{setedit(true)}} variant='contained' sx={{ backgroundColor: '#3b3b3b', ":hover": { backgroundColor: '#3b3b3b' }, color: '#fff' }}><Edit />change profile</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>}
        </Box>
    )
}

export default Page
