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
  const found = moviesJSON.results.find((movie) => movie.id == id)

  console.log('%c 🚀 found', 'color: green; font-weight: bold;', found)

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(found)
    }, 2000)
  })
}
