'use client'
import { Card, Image, Group, Flex, Title, Text, Box } from '@mantine/core'
import { StarIcon } from '../icons'
import { RateMovieButton } from '../rate-movie-button'

export const MovieCard = () => {
  return (
    <Card>
      <Flex justify={'space-between'} gap={16}>
        <Image src={'/image.jpg'} alt="movie" height={170} width={119} />
        <Flex flex={1} direction="column" justify={'space-between'}>
          <Flex direction="column" gap={8}>
            <Title order={3} c={'var(--clr-purple-main-500)'}>
              M - Eine Stadt sucht einen Mörder
            </Title>
            <Text c={'var(--clr-grey-600'} lh={1.25}>
              1999
            </Text>
            <Group h={28} align="center" gap={8}>
              <StarIcon color="yellow" />
              <Text fw={600} lh={1}>
                9.3
              </Text>
              <Text c={'var(--clr-grey-600'}>(2.9M)</Text>
            </Group>
          </Flex>
          <Group gap={8}>
            <Text c={'var(--clr-grey-600'}>Genres</Text>
            <Text lh={1.25}>Drama, Crime, Fantasy</Text>
          </Group>
        </Flex>
        <RateMovieButton />
      </Flex>
    </Card>
  )
}
