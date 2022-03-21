import moviesJSON from './movies.data.json'

export const getMovies = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(moviesJSON)
    }, 2000)
  })
}

export const getMovieDetail = async (id) => {
  const found = moviesJSON.results.find((movie) => movie.id === parseInt(id))

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(found)
    }, 2000)
  })
}
