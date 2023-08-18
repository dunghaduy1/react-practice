import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import { Button, Tooltip } from '@mui/material'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const MENU_STYLES = {
  color:'white',
  bgcolor:'transparent',
  border:'none',
  paddingX:'5px',
  borderRadius:'4px',
  '.MuiSvgIcon-root':{
    color:'white'
  },
  '&:hover':{
    color:'primary.50'
  }
}

function BoardBar() {
  return (
    <Box px={2} sx={{
      width:'100%',
      height:(theme) => theme.trello.boardBarHeight,
      display:'flex',
      alignItems:'center',
      justifyContent: 'space-between',
      gap: 2,
      overflowX: 'auto',
      bgcolor:(theme) => (theme.palette.mode === 'dark' ? '#34495e':'#1976d2')
    }}>
      <Box sx={{
        width:'100%',
        height:(theme) => theme.trello.boardBarHeight,
        paddingX:2,
        display:'flex',
        alignItems:'center'
      }}>
        <Box sx={{ display:'flex', alignItems:'center', gap: 2 }}>
          <Chip
            sx={ MENU_STYLES }
            icon={<SpaceDashboardIcon />}
            label="Trello Practice"
            clickable
          />
          <Chip
            sx={ MENU_STYLES }
            icon={<VpnLockIcon />}
            label="Trello Practice"
            clickable
          />
          <Chip
            sx={ MENU_STYLES }
            icon={<AddToDriveIcon />}
            label="Trello Practice"
            clickable
          />
        </Box>
        <Box sx={{ display:'flex', alignItems:'center', gap: 2 }}></Box>
      </Box>
      <Box sx={{
        display:'flex',
        alignItems:'center',
        gap:1
      }}>
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon />}
          sx={{
            color:'white',
            borderColor:'white',
            '&:hover':{
              borderColor:'white'
            }
          }}
        >
          Invite
        </Button>
        <AvatarGroup max={2}
          sx={{
            gap:'10px',

            '& .MuiAvatar-root':{
              width:'30px',
              height:'30px',
              fontSize:'16px',
              border:'none',
              color:'white',
              cursor:'pointer',
              '&:first-of-type':{
                bgcolor:'#a4b0be'
              }
            }
          }}
        >
          <Tooltip title="avatar">
            <Avatar
              alt="Remy Sharp"
              src='https://yt3.ggpht.com/yti/AOXPAcVfhXmtsiejUCRH1ZllGHDl9xp343KAa3OJUOry8g=s88-c-k-c0x00ffffff-no-rj'
            />
          </Tooltip>
          <Tooltip title="avatar">
            <Avatar
              alt="Remy Sharp"
              src='https://yt3.ggpht.com/yti/AOXPAcVfhXmtsiejUCRH1ZllGHDl9xp343KAa3OJUOry8g=s88-c-k-c0x00ffffff-no-rj'
            />
          </Tooltip>
          <Tooltip title="avatar">
            <Avatar
              alt="Remy Sharp"
              src='https://yt3.ggpht.com/yti/AOXPAcVfhXmtsiejUCRH1ZllGHDl9xp343KAa3OJUOry8g=s88-c-k-c0x00ffffff-no-rj'
            />
          </Tooltip>

        </AvatarGroup>
      </Box>
    </Box>
  )
}
export default BoardBar
