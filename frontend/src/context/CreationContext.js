import { createContext, useReducer } from "react"

export const CreationContext = createContext()

export const creationReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CREATIONS':
            return {
                creations: action.payload
            }
        case 'CREATE_CREATION':
            return {
                creations: [action.payload, ...state.creations]
            }
        case 'DELETE_CREATION':
            return {
                creations: state.creations.filter((creation) => creation._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const CreationContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(creationReducer, {
        creations: null
    })

    return (
        <CreationContext.Provider value={{ ...state, dispatch }}>
            { children }
        </CreationContext.Provider>
    )
}