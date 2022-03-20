import React from "react";
import { useParams, Redirect } from "react-router-dom";
import Posts from "../../components/Posts/Posts";
import { useQuery } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../../utils/queries";
import Auth from "../../utils/auth";

const Profile = () => {
  const { username: userParam } = useParams();
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Redirect to="/profile" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this page. Use the navigation links
        above to sign up or log in!
      </h4>
    );
  }

  return (
    <div>
      <h1 className="profile-title m-5">
        Viewing {userParam ? `${user.username}'s` : "your"} profile
      </h1>

      <Posts posts={user.posts} title={`${user.username}'s Logs`} />
    </div>
  );
};

export default Profile;
