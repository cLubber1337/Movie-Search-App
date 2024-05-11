import { MovieCard } from '../movie-card'
import s from './movies-list.module.css'

export const MoviesList = () => {
  return (
    <div className={s.moviesList}>
      {Array.from({ length: 20 }, (_, i) => (
        <MovieCard key={i} />
      ))}
    </div>
  )
}
