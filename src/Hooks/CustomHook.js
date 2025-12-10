import axios from "axios";
import { useEffect, useState } from "react"

const Useplants = () => {
    const [plants, setplants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        setLoading(true)
        axios('../plants.json')//We have to use Dual dot otherwise Nested route won't be able to find dats
        .then(data => setplants(data.data))
        .catch(err=>setError(err))
        .finally(setLoading(false))

    }, [])
    return {plants,loading,error};
}
export default Useplants;