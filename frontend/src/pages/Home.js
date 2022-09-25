import { useEffect } from "react"
import { useCreationContext } from "../hooks/useCreationsContext"

// components
import Creation from '../components/Creation'
import CreationForm from '../components/CreationForm'

const Home = () => {
    const {creations, dispatch} = useCreationContext()

    useEffect(() => {
        const fetchCreations = async () => {
            //FIX IN PRODUCTION: NEEDS DIRECT LINK
            const res = await fetch('/api/creations')
            const json = await res.json()

            if (res.ok) {
                dispatch({type: 'SET_CREATIONS', payload: json})
            }
        }

        fetchCreations()
    }, [dispatch])

    return (
        <div className="home">
            <div className="creations">
                {creations && creations.map(creation => (
                    <Creation creation={creation} key={creation._id}/>
                ))}
            </div>
            <CreationForm />
        </div>
    )
}

export default Home