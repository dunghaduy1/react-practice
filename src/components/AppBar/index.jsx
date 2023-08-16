import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Badge from '@mui/material/Badge'
import Tooltip from '@mui/material/Tooltip'
import TextField from '@mui/material/TextField'
import ModeSelect from '~/components/ModeSelect'
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
        overflowX: 'auto'
      }}>
        <Box sx={{ display:'flex', alignItems:'center', gap: 2 }}>
          <AppsIcon sx={{
            color:'primary.main'
          }}/>
          <Box sx={{ display:'flex', alignItems:'center', gap: 0.5 }}>
            <SvgIcon component={TrelloLogo} inheritViewBox sx={{
              color:'primary.main'
            }} fontSize='small' />
            <Typography variant='span' sx={{ fontSize:'1.2rem', fontWeight:'bold', color:'primary.main' }}>Trello</Typography>
          </Box>
          <Box sx={{ display:{ xs:'none', md:'flex' }, gap:1 }}>
            <WorkSpace/>
            <Recent/>
            <Starred/>
            <Templates/>
            <Button variant="outlined">Create</Button>
          </Box>
        </Box>
        <Box sx={{ display:'flex', alignItems:'center', gap: 2 }}>
          <TextField id="outlined-search" label="Search..." variant="outlined" size='small' sx={{ minWidth:120 }} />
          <ModeSelect />
          <Tooltip title="Notification">
            <Badge color="secondary" variant="dot" sx={{ cursor:'pointer', color: 'primary.main' }}>
              <NotificationsIcon />
            </Badge>
          </Tooltip>
          <Tooltip title="Help">
            <HelpOutlineIcon sx={{ cursor:'pointer', color: 'primary.main' }} />
          </Tooltip>
          <Profile/>
        </Box>
      </Box>
    </>
  )
}
export default AppBar
