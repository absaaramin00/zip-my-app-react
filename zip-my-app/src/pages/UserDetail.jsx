import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";

function UserDetail() {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then((res) => {
        setUserInfo(res.data);
        setLoading(false);
      });
  }, [params.id]);

  if (loading) return <Loader />;

  return (
    <div>
      <b>User Information</b>
      <p>Name: {userInfo.name}</p>
      <p>User Name: {userInfo.username}</p>
      <p>Email: {userInfo.email}</p>
      <p>Phone: {userInfo.phone}</p>
    </div>
  );
}

export default UserDetail;
