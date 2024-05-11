import { ReactNode } from 'react'
import s from './movies-page-wrapper.module.css'

type Props = {
  aside: ReactNode
  header?: ReactNode
  main: ReactNode
  footer: ReactNode
}

export const MoviesPageWrapper = ({ aside, header, main, footer }: Props) => {
  return (
    <div className={s.wrapper}>
      <header className={s.header}>
        <div className={s.container}>{header}</div>
      </header>

      <aside className={s.aside}>{aside}</aside>

      <main className={s.main}>
        <div className={s.container}>{main}</div>
      </main>

      <footer className={s.footer}>
        <div className={s.container}>{footer}</div>
      </footer>
    </div>
  )
}
