import types from './types';

const INITIAL_STATE = {
    listName: 'Favourite actors',
    list: [
        'Tom Hanks', '123', '456'
    ]
}

const actorsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case types.ADD_ACTOR:
            return {
                ...state, list: [...state.list, action.item]
            }
        case types.RESET_ACTORS:
            return {
                ...state, list: []
            }
        default:
            return state
    }
}

export default actorsReducer