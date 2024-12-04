import axios from "axios";
import { useQuery } from "react-query"

const fetchHeroes = () => {
    return axios.get("http://localhost:4000/superheroes");
  };
export const useHeroesData = (onError, onSuccess) => {
    return useQuery('super-heroes', fetchHeroes, {
        onError,
        onSuccess,
    })
}