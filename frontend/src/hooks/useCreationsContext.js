import { CreationContext } from '../context/CreationContext'
import { useContext } from 'react'

export const useCreationContext = () => {
    const context = useContext(CreationContext)

    if (!context) {
        throw Error('useCreationContext must be used inside a CreationContextProvider')
    }

    return context
}