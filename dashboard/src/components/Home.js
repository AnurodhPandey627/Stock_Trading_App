// dashboard/src/components/Home.jsx
import React, { useEffect, useState } from "react";
import { verifyUser } from "../api/auth";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
const FRONTEND_URL = process.env.REACT_APP_FRONTEND_URL

const Home = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await verifyUser();
        if (res.data.status) {
          setUser(res.data.user); // {id, email, username}
        } else {
          setUser(null);
        }
      } catch (err) {
        console.error("Verification Error:", err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) {
    return <div>Checking Session...</div>;
  }

  if (!user) {
    // not authenticated → send to frontend login
    window.location.href = `${FRONTEND_URL}/login`;
    return null;
  }

  // authenticated → show dashboard UI
  return (
    <>
      <TopBar user={user}/>
      <Dashboard user={user} />
    </>
  );
};

export default Home;
