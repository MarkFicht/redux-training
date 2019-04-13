import type from './types'

const INITIAL_STATE = {
    listName: 'Favourite movies',
    list: [
        'Wolverine', '123', '456'
    ]
}

const moviesReducer = ( state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case type.ADD_MOVIE:
            return {
                ...state, list: [...state.list, action.movie]
            }
        case type.RESET_MOVIES:
            return {
                ...state, list: []
            }
        default:
            return state
    }
}

export default moviesReducer