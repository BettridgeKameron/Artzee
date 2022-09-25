import { useState } from "react"
import { useCreationContext } from "../hooks/useCreationsContext"

const CreationForm = () => {
    const { dispatch } = useCreationContext()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const creation = {title, content}

        const res = await fetch('/api/creations', {
            method: 'POST',
            body: JSON.stringify(creation),
            headers: {
                'content-type': 'application/json'
            }
        })
        const json = await res.json()

        if (!res.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if(res.ok) {
            setError(null)
            setEmptyFields([])
            setTitle('')
            setContent('')
            dispatch({type: 'CREATE_CREATION', payload: json})
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Post a New Creation!</h3>

            <label>Creation Title:</label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className={emptyFields.includes('title') ? 'error' : ''}
            />

            <label>Content:</label>
            <input
                type="text"
                onChange={(e) => setContent(e.target.value)}
                value={content}
                className={emptyFields.includes('content') ? 'error' : ''}
            />
            <button>Post Creation</button>
            {error && <div className="error">{error}</div> }
        </form>
    )
}

export default CreationForm