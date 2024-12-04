import { Link } from "react-router-dom";
import { useHeroesData } from "../hooks/useHeroesData";



const RQpage = () => {
    
  const onSuccess = (data) => {
    console.log("Data fetched successfully", data);
  };

  const onError = (error) => {
    console.log("Error fetching data, error", error);
  }; //depreciated

  const { isLoading, data, isError, error, isFetching, refetch } = useHeroesData(onSuccess, onError);

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
      {data?.data.map((hero) => (
        <ol key={hero.id}>
          <Link to={`/id-page/${hero.id}`}>{hero.name}</Link>
        </ol>
      ))}
      {/* {data.map((hero) => (
        <div key={hero}>{hero}</div>
      ))} */}
    </>
  );
};

export default RQpage;
