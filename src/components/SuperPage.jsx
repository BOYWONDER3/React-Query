import axios from "axios";
import { useEffect, useState } from "react";

export default function SuperPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(false);
    axios
      .get("http://localhost:4000/superheroesf")
      .then((res) => setData(res.data))
      .catch((err) => setError(err.message));
  }, []);

  if (loading) return <p>Loading......</p>;
  if (error) return <h1>{error}</h1>;

  return (
    <>
      <h1>Super Heroes Page </h1>
      {data.map((hero) => (
        <h1 key={hero.id}>{hero.name}</h1>
      ))}
    </>
  );
}
