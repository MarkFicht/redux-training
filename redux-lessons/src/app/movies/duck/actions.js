import types from './types'

const addMovie = movie => ({
    type: types.ADD_MOVIE, movie
})

const resetMovies = item => ({
    type: types.RESET_MOVIES, item
})

export default {
    add: addMovie,
    reset: resetMovies
}