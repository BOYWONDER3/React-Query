import axios from "axios"
import { useEffect, useState } from "react"

export default function SuperPage () {
const [data, setData] = useState([])
const [loading, setLoading] = useState(true)

useEffect(() => {
    setLoading(false)
    axios.get('http://localhost:4000/superheroes').then(res => setData(res.data))
})

if (loading) return <p>Loading......</p>

    return (
        <>
            <h1>Super Heroes Page </h1>
            {data.map((hero) => (
                <h1 key={hero.id}>{hero.name}</h1>
            ))}
        </>
    )
}