import { useState } from 'react'
import Tooltip from '@mui/material/Typography'
import Typography from '@mui/material/Typography'
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
import ContentPaste from '@mui/icons-material/ContentPaste'
import DeleteForever from '@mui/icons-material/DeleteForever'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import ListCard from './ListCard/ListCard'
import { mapOrder } from '~/utils/sorts'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

export function Column({ column }) {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: column._id, data:{ ...column } })

  const dndKitColumnStyle = {
    transform: CSS.Translate.toString(transform),
    transition
  }

  const orderedCards = mapOrder( column?.cards, column?.cardOrderIds, '_id')

  return (
    <Box
      ref={setNodeRef}
      style={dndKitColumnStyle}
      {...attributes}
      {...listeners}
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
          height:(theme) => (theme.trello.columnHeaderHeight),
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
        >{ column?.title }</Typography>
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
      <ListCard cards={ orderedCards }/>
      <Box sx={{
        height:(theme) => (theme.trello.columnFooterHeight),
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
  )
}
export default Column