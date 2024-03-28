import React, { useEffect, useState } from "react";

import Header from "../components/Header";
import UserBio from "../components/UserBio";
import Repos from "../components/Repos";
import { fetchUser } from "../services/api";

function Home() {

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchUserData("paragunhale1998");
  }, []);

  const  fetchUserData= async (username) => {
    try {
        const data = await fetchUser(username);
        setUserData(data);
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
};

  return (
    <>
      <Header onSearch={fetchUserData} userData={userData}></Header>
      {userData && (
        <div>
        <UserBio userData={userData} />
        <Repos reposUrl={userData.repos_url} />
      </div>
      )}

    </>
  );
}

export default Home;
