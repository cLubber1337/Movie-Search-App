import { Title } from '@mantine/core'
import s from './header.module.css'

type Props = {
  title: string
  withSearch?: boolean
}
export const Header = ({ title, withSearch = false }: Props) => {
  return (
    <header className={s.header}>
      <Title order={1}>{title}</Title>
    </header>
  )
}
