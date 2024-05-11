import { MoviesPageWrapper } from '../components/movies-page-wrapper'
import { Sidebar } from '../components/sidebar'
import { Header } from '../components/header'
import { Footer } from '../components/footer/footer'
import { MoviesList } from '../components/movies-list'

export default function MoviePage() {
  return (
    <MoviesPageWrapper
      header={<Header title="Movies" />}
      aside={<Sidebar />}
      main={<MoviesList />}
      footer={<Footer />}
    />
  )
}
