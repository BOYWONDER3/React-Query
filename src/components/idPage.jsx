import { useParams } from "react-router-dom";
import { idQuery } from "../hooks/idQuery";


const IdPage = () => {
const {heroId} = useParams()
const {isLoading, data, error, isError} = idQuery(heroId)

if(isLoading) {
    return <h1>Loading.....</h1>
}

if(isError) {
    return <h1>{error.message}</h1>
}


    return (
       <div>
        {data?.data.name} - {data?.data.alterEgo}
       </div>
    )
}

export default IdPage;