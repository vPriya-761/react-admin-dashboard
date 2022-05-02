import React, {useState} from 'react';
import "./topbar.css"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { color, colorChannel } from '@mui/system';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import UserDropdown from './user-dropdown/user-dropdown';



const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color:'white'
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
          color:'white'
        },
      },
    },
  }));

  
export default function Topbar({ open, setOpen }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open1 = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
        <div className='topbar' >
            <div className='topbarWrapper'>
                <div className={`topLeft ${open ? 'open' : 'close'}`}>
                    <a className='logo' href='/#'>
                    <img src='/assets/logo.png' alt='logo' height={30} />
                    </a>
                </div>
                <a onClick={() => setOpen(!open)} className="menuLogo">
                    <span className="menuIcon">
                        <span></span>
                        <span style={{ width: "15px" }}></span>
                        <span></span>
                    </span>
                </a>
                <div className="companyName">
                    <h3>Apton Works</h3>
                </div>


                <div className='topRight'>
                    <div className='searchIconcointer'>
                    <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search here..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

                    </div>
                    <div className='topbarIconContainer'>
                        <NotificationsNoneIcon />
                        <span className='topIconBadge'>3</span>
                    </div>

                    <div className='topbarIconContainer'>
                        <MessageRoundedIcon />
                        <span className='topIconBadge'>8</span>
                    </div>


                    <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className='topAvatar'></img>
                    
      <UserDropdown />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open1={open1}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>My Profile</MenuItem>
        <MenuItem onClick={handleClose}>Setting </MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    
                </div>

            </div>
        </div>

    )
}
