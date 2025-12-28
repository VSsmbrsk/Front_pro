import { useSelector } from "react-redux";

function TodoList() {
  const { data, loading, error } = useSelector(
    (state) => state.swapi
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return null;

  return (
    <div className="result">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default TodoList;

