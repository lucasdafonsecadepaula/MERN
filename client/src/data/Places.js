import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function PlacesInf() {
  const { data, error } = useSWR("http://localhost:8000/places", fetcher);
  
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <>
      <ul>{data && data.map((e) => <li key={e}>{e.name}</li>)}</ul>
    </>
  );
}
