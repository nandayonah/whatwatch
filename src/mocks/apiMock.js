import moviesJSON from './movies.data.json'

export const getMovies = async () => {
  console.log(
    '%c 🚀 moviesJSON',
    'color: green; font-weight: bold;',
    moviesJSON,
  )
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(moviesJSON)
    }, 2000)
  })
}

export const getMovieDetail = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(moviesJSON.results.find((movie) => movie.id === id))
    }, 2000)
  })
}
