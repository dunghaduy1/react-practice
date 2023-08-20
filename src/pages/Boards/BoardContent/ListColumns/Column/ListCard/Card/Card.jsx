import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import GroupIcon from '@mui/icons-material/Group'
import { Card as MuiCard } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import ModeCommentIcon from '@mui/icons-material/ModeComment'
import AttachmentIcon from '@mui/icons-material/Attachment'

function Card() {
  return (
    <MuiCard sx={{
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
    </MuiCard>
  )
}

export default Card
