import Box from '@mui/material/Box'
import Column from './Column/Column'
import Button from '@mui/material/Button'
import NoteAddIcon from '@mui/icons-material/NoteAdd'

function ListColumns() {

  return (
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
      <Column/>
      <Box
        sx={{
          minWidth:'200px',
          maxWidth:'200px',
          mx:2,
          borderRadius:'6px',
          height:'fit-content',
          bgcolor:'#ffffff3d'
        }}
      >
        <Button
          startIcon={<NoteAddIcon/>}
          sx={{
            width:'100%',
            color:'white'
          }}
        >
            Add new column
        </Button>
      </Box>
    </Box>
  )
}
export default ListColumns