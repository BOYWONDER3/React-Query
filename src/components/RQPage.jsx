import axios from "axios";
import { useQuery } from "react-query";

const fetchHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const RQpage = () => {
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    "super-heroes",
    fetchHeroes,
    {
        enabled: false,
    //   staleTime: 30000,
    //   refetchInterval: 2000,
    //   refetchIntervalInBackground: true,
    }
  );

  if (isLoading || isFetching ) {
    return <h1>Loading......</h1>;
  }
  if (isError) return <h2>{error.message}</h2>;

  return (
    <>
      <h1>RQ PAGE</h1>
      <button onClick={refetch}>Fetch Data</button>
      {data?.data.map((hero) => (
        <ol key={hero.id}>
          <li>{hero.name}</li>
        </ol>
      ))}
    </>
  );
};

export default RQpage;
