import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sorts'
import { DndContext } from '@dnd-kit/core'
import { useState, useEffect } from 'react'
import {
  arrayMove
} from '@dnd-kit/sortable'


function BoardContent({ board }) {
  const [orderedColumns, setOrderedColumns] = useState([])

  useEffect(() => {
    setOrderedColumns(mapOrder( board?.columns, board?.columnOrderIds, '_id'))
  }, [board])

  const handleDrag = (event) => {
    const { active, over } = event

    if (!over) return

    if (active.id != over.id) {
      const oldIndex = orderedColumns.findIndex(c => c._id === active.id)
      const newIndex = orderedColumns.findIndex(c => c._id === over.id)

      const dndOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex)
      setOrderedColumns(dndOrderedColumns)
    }
  }

  return <DndContext onDragEnd={ handleDrag}>
    <Box sx={{
      bgcolor:(theme) => (theme.palette.mode === 'dark' ? '#34495e':'#1976d2'),
      width:'100%',
      height:(theme) => theme.trello.boardContentHeight,
      display:'flex',
      p: '10px 0'
    }}>
      <ListColumns columns={ orderedColumns } />
    </Box>
  </DndContext>
}
export default BoardContent