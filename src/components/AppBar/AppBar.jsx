import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Badge from '@mui/material/Badge'
import Tooltip from '@mui/material/Tooltip'
import TextField from '@mui/material/TextField'
import ModeSelect from '~/components/ModeSelect/ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import NotificationsIcon from '@mui/icons-material/Notifications'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import { ReactComponent as TrelloLogo } from '~/assets/trello.svg'
import SvgIcon from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'
import WorkSpace from './Menus/WorkSpace'
import Recent from './Menus/Recent'
import Templates from './Menus/Templates'
import Starred from './Menus/Starred'
import Profile from './Menus/Profile'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'
import { InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

function AppBar() {
  return (
    <>
      <Box px={2} sx={{
        width:'100%',
        height:(theme) => theme.trello.appBarHeight,
        display:'flex',
        alignItems:'center',
        justifyContent: 'space-between',
        gap: 2,
        overflowX: 'auto',
        bgcolor:(theme) => (theme.palette.mode === 'dark' ? '#2c3e50':'#1565c0')
      }}>
        <Box sx={{ display:'flex', alignItems:'center', gap: 2 }}>
          <AppsIcon sx={{
            color:'white'
          }}/>
          <Box sx={{ display:'flex', alignItems:'center', gap: 0.5 }}>
            <SvgIcon component={TrelloLogo} inheritViewBox sx={{
              color:'white'
            }} fontSize='small' />
            <Typography variant='span' sx={{ fontSize:'1.2rem', fontWeight:'bold', color:'white' }}>Trello</Typography>
          </Box>
          <Box sx={{ display:{ xs:'none', md:'flex' }, gap:1 }}>
            <WorkSpace/>
            <Recent/>
            <Starred/>
            <Templates/>
            <Button
              sx={{
                color:'white',
                border:'none',
                '&:hover':{
                  border:'none'
                }
              }}
              variant="outlined"
              startIcon={<LibraryAddIcon/>}
            >Create</Button>
          </Box>
        </Box>
        <Box sx={{ display:'flex', alignItems:'center', gap: 2 }}>
          <TextField
            id="outlined-search"
            label="Search..."
            variant="outlined"
            size='small'
            InputProps={{
              startAdornment:(
                <InputAdornment position="start">
                  <SearchIcon
                    sx={{
                      color:'white'
                    }}/>
                </InputAdornment>
              )
            }}
            sx={{
              minWidth:120,
              maxWidth:170,
              '& label':{
                color:'white'
              },
              '& label.Mui-focused':{
                color:'white'
              },
              '& input':{
                color:'white'
              },
              '& .MuiOutlinedInput-root':{
                '& fieldset': {
                  borderColor:'white'
                },
                '&.Mui-focused fieldset': {
                  borderColor:'white'
                }
              }
            }}
          />
          <ModeSelect />
          <Tooltip title="Notification">
            <Badge color="warning" variant="dot" sx={{ cursor:'pointer', color: 'white' }}>
              <NotificationsIcon />
            </Badge>
          </Tooltip>
          <Tooltip title="Help">
            <HelpOutlineIcon sx={{ cursor:'pointer', color: 'white' }} />
          </Tooltip>
          <Profile/>
        </Box>
      </Box>
    </>
  )
}
export default AppBar
