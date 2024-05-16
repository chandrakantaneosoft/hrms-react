import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Checkbox from '@mui/material/Checkbox'
import Avatar from '@mui/material/Avatar'
import Radio from '@mui/material/Radio'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import { Switch } from '@mui/material'

const Sample = () => {
  const [checked, setChecked] = React.useState([1])

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)
  }

  return (
    <>
      <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {[0, 1, 2, 3].map(value => {
          const labelId = `checkbox-list-secondary-label-${value}`

          return (
            <ListItem key={value} disablePadding>
              <ListItemButton>
                {/* <Radio /> */}
                {/* <ArrowRightIcon className='Mui-center' /> */}
                {/* <Switch className='Mui-center' /> */}
                <ListItemAvatar className='Mui-center'>
                  <Avatar color='primary'>A</Avatar>
                </ListItemAvatar>
                <ListItemText
                  id={labelId}
                  primary={`Line item ${value + 1}`}
                  secondary='Supporting line text lorem ipsum dolor sit amet, consectetur.'
                />
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>
    </>
  )
}

export default Sample
