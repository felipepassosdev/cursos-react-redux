const INITIAL_STATE = {
    data: [
        'React',
        'Node',
        'Angular',
        'ReactNative'
    ]
}

// REDUCER
export default function cousers(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'ADD_COURSE':
            return {...state, data: [...state.data, action.title]}
        default:
            return state    
    }
}

export const addCourse = car => {
    return {
        type: 'ADD_COURSE',
        car
    }
}