import axios from "axios";
import { useQuery } from "react-query";

const fetchHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const RQpage = () => {
  const onSuccess = (data) => {
    console.log("Data fetched successfully", data);
  };

  const onError = (error) => {
    console.log("Error fetching data, error", error);
  }; //depreciated

  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    "super-heroes",
    fetchHeroes,
    {
      onSuccess: onSuccess,
      onError: onError,
      select: (data) => {
        const superheroes = data.data.map((hero) => hero.name);
        return superheroes;
      },
    }
  );

  if (isLoading || isFetching) {
    return <h1>Loading......</h1>;
  }
  if (isError) return <h2>{error.message}</h2>;

  return (
    <>
      <h1>RQ PAGE</h1>
      <button className="border-8" onClick={refetch}>
        Fetch Data
      </button>
      {/* {data?.data.map((hero) => (
        <ol key={hero.id}>
          <li>{hero.name}</li>
        </ol>
      ))} */}
      {data.map((hero) => (
        <div key={hero}>{hero}</div>
      ))}
    </>
  );
};

export default RQpage;
