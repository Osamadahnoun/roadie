import React, { useState } from "react";
import { useParams, Redirect } from "react-router-dom";
import Posts from "../../components/Posts/Posts";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../../utils/queries";
import Auth from "../../utils/auth";
import FriendsListModal from "../../components/FriendsListModal/FriendsListModal";
import { Button } from "@chakra-ui/react";
import { ADD_FRIEND } from "../../utils/mutations";
import { FaPlus } from 'react-icons/fa';

const Profile = () => {
  const { username: userParam } = useParams();
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });
  const [addFriend] = useMutation(ADD_FRIEND);

  const user = data?.me || data?.user || {};

  const [friendButton, setFriendButton] = useState(
    `${<FaPlus />}Add ${userParam} to friends list`
  );

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

  const handleClick = async () => {
    try {
      await addFriend({
        variables: { id: user._id },
      });
      setFriendButton(`${userParam} added!`);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="w-100">
      <div className="d-flex justify-content-between flex-wrap align-items-center m-3">
        <h1 className="profile-title">
          Viewing {userParam ? `${user.username}'s` : "your"} profile
        </h1>
        {userParam && (
          <Button
            bg="#83C5BE"
            color="#006D77"
            onClick={handleClick}
            className="profile-title"
            marginLeft={{ base: 8 }}
          >
            {friendButton}
          </Button>
        )}
      </div>
      <FriendsListModal
        username={user.username}
        friendCount={user.friendCount}
        friends={user.friends}
        user={user}
      >
        <span className="profile-title m-3"><button className="btn friends">Click to view friends list</button></span>
      </FriendsListModal>

      <Posts posts={user.posts} title={`${user.username}'s Logs`} />
    </div>
  );
};

export default Profile;
