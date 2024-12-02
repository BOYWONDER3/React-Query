import axios from "axios";
import { useQuery } from "react-query";

const fetchHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const RQpage = () => {
  const { isLoading, data } = useQuery("super-heroes", fetchHeroes);

  if (isLoading) {
    return <h1>Loading......</h1>;
  }

  return (
    <>
      <h1>RQ PAGE</h1>
      {data?.data.map((hero) => (
        <ol key={hero.id}>
          <li>{hero.name}</li>
        </ol>
      ))}
    </>
  );
};

export default RQpage;
