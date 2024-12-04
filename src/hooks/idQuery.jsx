import axios from "axios";
import { useQuery } from "react-query";

const fetchHero = ({queryKey}) => {
    const heroId = queryKey[1]
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

export const idQuery = (heroId) => {
  return useQuery(["super-hero", heroId], fetchHero);
};
