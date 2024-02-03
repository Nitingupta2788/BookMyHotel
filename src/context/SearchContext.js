import { createContext, useReducer } from "react";

const INITIAL_STATE = {
    destination: undefined,
    date: [],
    options: {
        Adult: undefined,
        Children: undefined,
        Room: undefined
    }
}

export const SearchContext = createContext()

const searchReducer = (state, action) => {

    switch (action.type) {

        case 'NEW_SEARCH':
            return action.payload
        case 'RESET_SEARCH':
            return action.payload
        default:
            return state

    }

}

export const SearchContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(searchReducer, INITIAL_STATE)
    return (
        <SearchContext.Provider value={{ destination: state.destination, date: state.date, options: state.options, dispatch }}>
            {children}


        </SearchContext.Provider>
    )
}