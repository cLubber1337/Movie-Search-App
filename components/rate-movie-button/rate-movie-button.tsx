import { ActionIcon, Text, Group } from '@mantine/core'
import React from 'react'
import { StarIcon } from '../icons'

export const RateMovieButton = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', alignSelf: 'flex-start' }}>
      <ActionIcon variant="transparent">
        <StarIcon />
      </ActionIcon>
      <Text fw={600} lh={1.25} pl={4}>
        9
      </Text>
    </div>
  )
}
