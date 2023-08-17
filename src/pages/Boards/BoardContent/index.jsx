import { useState } from 'react'
import { Tooltip, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import ContentCut from '@mui/icons-material/ContentCut'
import AddCard from '@mui/icons-material/AddCard'
import ContentCopy from '@mui/icons-material/ContentCopy'
import GroupIcon from '@mui/icons-material/Group'
import ContentPaste from '@mui/icons-material/ContentPaste'
import DeleteForever from '@mui/icons-material/DeleteForever'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import ModeCommentIcon from '@mui/icons-material/ModeComment'
import AttachmentIcon from '@mui/icons-material/Attachment'

const HEADER_HEIGHT = '50px'
const FOOTER_HEIGHT = '50px'

function BoardContent() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return <Box sx={{
    bgcolor:(theme) => (theme.palette.mode === 'dark' ? '#34495e':'#1976d2'),
    width:'100%',
    height:(theme) => theme.trello.boardContentHeight,
    display:'flex',
    p: '10px 0'
  }}>
    <Box
      sx={{
        bgcolor:'inherit',
        width:'100%',
        height:'100%',
        display:'flex',
        overflowX: 'auto',
        orderflowY:'hidden',
        '&::-webkit-scrollbar-track': {
          m:2
        }
      }}
    >
      <Box
        sx={{
          minWidth: '300px',
          maxWidth: '300px',
          bgcolor:(theme) => (theme.palette.mode === 'dark' ? '#333643':'#ebecf0'),
          ml: 2,
          borderRadius: '6px',
          height: 'fit-content',
          maxHeight:(theme) => (`calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`)
        }}>
        <Box
          sx={{
            height:HEADER_HEIGHT,
            p:2,
            display:'flex',
            alignItems: 'center',
            justifyContent:'space-between'
          }}
        >
          <Typography
            sx={{
              fontWeight: 'bold',
              cursor:'pointer'
            }}
          >Column Title</Typography>
          <Box>
            <Tooltip title='More option'>
              <ExpandMoreIcon
                sx={{
                  color:'text.primary',
                  cursor:'pointer'
                }}
                id="column-dropdown-button"
                aria-controls={open ? 'column-dropdown-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              />
            </Tooltip>
            <Menu
              id="column-dropdown-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'column-dropdown-button'
              }}
            >
              <MenuItem>
                <ListItemIcon>
                  <AddCard fontSize="small" />
                </ListItemIcon>
                <ListItemText>Add new card</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <ContentCut fontSize="small" />
                </ListItemIcon>
                <ListItemText>Cut</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <ContentCopy fontSize="small" />
                </ListItemIcon>
                <ListItemText>Copy</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <ContentPaste fontSize="small" />
                </ListItemIcon>
                <ListItemText>Paste</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon><DeleteForever fontSize="small" /></ListItemIcon>
                <ListItemText>Remove this column</ListItemText>
              </MenuItem>
            </Menu>
          </Box>
        </Box>
        <Box
          sx={{
            p:'0 5px',
            m:'0 5px',
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            overflowX: 'hidden',
            overflowY: 'auto',
            maxHeight:(theme) => `calc(
            ${theme.trello.boardContentHeight} - 
            ${theme.spacing(5)} -
            ${HEADER_HEIGHT} -
            ${FOOTER_HEIGHT}
            )`,
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#ced0da',
              borderRadius: '8px'
            },
            '&::-webkit-scrollbar-thumb:hover': {
              backgroundColor: '#bfc2cf'
            }
          }}
        >
          <Card sx={{
            cursor: 'pointer',
            boxShadow: '0 1px 1px rgba(0,0,0,0.2)'
          }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?resize=476%2C280&ssl=1"
              title="green iguana"
            />
            <CardContent
              sx={{
                p:1.5,
                '&:last-child':{
                  p:1.5
                }
              }}
            >
              <Typography
                variant='h6'
                sx={{
                  fontWeight: 'bold',
                  fontSize:'1rem',
                  cursor:'pointer'
                }}
              >Lizard</Typography>
            </CardContent>
            <CardActions
              sx={{
                p:'0 4px 8px 4px'
              }}
            >
              <Button size="small" startIcon={<GroupIcon/>}>10</Button>
              <Button size="small" startIcon={<ModeCommentIcon/>}>15</Button>
              <Button size="small" startIcon={<AttachmentIcon/>}>20</Button>
            </CardActions>
          </Card>
          <Card sx={{
            cursor: 'pointer',
            boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
            overflow: 'unset'
          }}>
            <CardContent
              sx={{
                p:1.5,
                '&:last-child':{
                  p:1.5
                }
              }}
            >
              <Typography>Lizard</Typography>
            </CardContent>
          </Card>
          <Card sx={{
            cursor: 'pointer',
            boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
            overflow: 'unset'
          }}>
            <CardContent
              sx={{
                p:1.5,
                '&:last-child':{
                  p:1.5
                }
              }}
            >
              <Typography>Lizard</Typography>
            </CardContent>
          </Card>
        </Box>
        <Box sx={{
          height:FOOTER_HEIGHT,
          p:2,
          display:'flex',
          alignItems: 'center',
          justifyContent:'space-between'
        }}>
          <Button
            startIcon={<AddCard/>}
          >
          Add new card
          </Button>
          <Tooltip title="Drag to move">
            <DragHandleIcon sx={{ cursor:'pointer' }}/>
          </Tooltip>
        </Box>
      </Box>
      <Box
        sx={{
          minWidth: '300px',
          maxWidth: '300px',
          bgcolor:(theme) => (theme.palette.mode === 'dark' ? '#333643':'#ebecf0'),
          ml: 2,
          borderRadius: '6px',
          height: 'fit-content',
          maxHeight:(theme) => (`calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`)
        }}>
        <Box
          sx={{
            height:HEADER_HEIGHT,
            p:2,
            display:'flex',
            alignItems: 'center',
            justifyContent:'space-between'
          }}
        >
          <Typography
            sx={{
              fontWeight: 'bold',
              cursor:'pointer'
            }}
          >Column Title</Typography>
          <Box>
            <Tooltip title='More option'>
              <ExpandMoreIcon
                sx={{
                  color:'text.primary',
                  cursor:'pointer'
                }}
                id="column-dropdown-button"
                aria-controls={open ? 'column-dropdown-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              />
            </Tooltip>
            <Menu
              id="column-dropdown-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'column-dropdown-button'
              }}
            >
              <MenuItem>
                <ListItemIcon>
                  <AddCard fontSize="small" />
                </ListItemIcon>
                <ListItemText>Add new card</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <ContentCut fontSize="small" />
                </ListItemIcon>
                <ListItemText>Cut</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <ContentCopy fontSize="small" />
                </ListItemIcon>
                <ListItemText>Copy</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <ContentPaste fontSize="small" />
                </ListItemIcon>
                <ListItemText>Paste</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon><DeleteForever fontSize="small" /></ListItemIcon>
                <ListItemText>Remove this column</ListItemText>
              </MenuItem>
            </Menu>
          </Box>
        </Box>
        <Box
          sx={{
            p:'0 5px',
            m:'0 5px',
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            overflowX: 'hidden',
            overflowY: 'auto',
            maxHeight:(theme) => `calc(
            ${theme.trello.boardContentHeight} - 
            ${theme.spacing(5)} -
            ${HEADER_HEIGHT} -
            ${FOOTER_HEIGHT}
            )`,
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#ced0da',
              borderRadius: '8px'
            },
            '&::-webkit-scrollbar-thumb:hover': {
              backgroundColor: '#bfc2cf'
            }
          }}
        >
          <Card sx={{
            cursor: 'pointer',
            boxShadow: '0 1px 1px rgba(0,0,0,0.2)'
          }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?resize=476%2C280&ssl=1"
              title="green iguana"
            />
            <CardContent
              sx={{
                p:1.5,
                '&:last-child':{
                  p:1.5
                }
              }}
            >
              <Typography
                variant='h6'
                sx={{
                  fontWeight: 'bold',
                  fontSize:'1rem',
                  cursor:'pointer'
                }}
              >Lizard</Typography>
            </CardContent>
            <CardActions
              sx={{
                p:'0 4px 8px 4px'
              }}
            >
              <Button size="small" startIcon={<GroupIcon/>}>10</Button>
              <Button size="small" startIcon={<ModeCommentIcon/>}>15</Button>
              <Button size="small" startIcon={<AttachmentIcon/>}>20</Button>
            </CardActions>
          </Card>
          <Card sx={{
            cursor: 'pointer',
            boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
            overflow: 'unset'
          }}>
            <CardContent
              sx={{
                p:1.5,
                '&:last-child':{
                  p:1.5
                }
              }}
            >
              <Typography>Lizard</Typography>
            </CardContent>
          </Card>
        </Box>
        <Box sx={{
          height:FOOTER_HEIGHT,
          p:2,
          display:'flex',
          alignItems: 'center',
          justifyContent:'space-between'
        }}>
          <Button
            startIcon={<AddCard/>}
          >
          Add new card
          </Button>
          <Tooltip title="Drag to move">
            <DragHandleIcon sx={{ cursor:'pointer' }}/>
          </Tooltip>
        </Box>
      </Box>

    </Box>
  </Box>
}
export default BoardContent