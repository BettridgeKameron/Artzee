import { useCreationContext } from "../hooks/useCreationsContext"

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const Creation = ({ creation }) => {
    const { dispatch } = useCreationContext()

    const handleClick = async () => {
        const res = await fetch('/api/creations/' + creation._id, {
            method: 'DELETE'
        })
        const json = await res.json()

        if (res.ok) {
            dispatch({type: 'DELETE_CREATION', payload: json})
        }
    }

    return (
        <div className="creation">
            <h4>{creation.title}</h4>
            <p>{creation.content}</p>
            <p>Likes: {creation.likes} Created at: {formatDistanceToNow(new Date(creation.createdAt), { addSuffix: true })}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    )
}

export default Creation