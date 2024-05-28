import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import UserCard from "../components/UserCard";

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getData() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }
  useEffect(() => {
    getData();
  }, []);
  if (loading) return <Loader />;

  return (
    <div>
        <h4>Data</h4>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {data.map((dat, key) => (
            <UserCard
              id={dat.id}
              name={dat.name}
              username={dat.username}
              email={dat.email}
            />
          ))}
        </div>
    </div>
  );
}

export default Home;
