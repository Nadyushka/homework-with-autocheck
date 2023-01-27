export type stateType = {
    themeId: number
}

let initState:stateType = {
    themeId: 1,
}


export const themeReducer = (state:stateType = initState, action: changeThemeIdType): stateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}
        default:
            return state
    }
}

type changeThemeIdType = {
    type: 'SET_THEME_ID'
    id: number
}

export const changeThemeId = (id: number): changeThemeIdType => ({ type: 'SET_THEME_ID', id }) // fix any



