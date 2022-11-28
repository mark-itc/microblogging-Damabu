import localforage from "localforage";
import React, { useEffect, useState } from "react";
import {
  PrincipalContainer,
  UserContainer,
  SaveButton,
} from "./StyleComponent";

const UserComponent = () => {
  const [userName, setUserName] = useState("");

  const existUserName = async () => {
    const userName = await localforage.getItem("userName");
    if (userName) {
      setUserName(userName);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    localforage.setItem("userName", userName);
  };

  useEffect(() => {
    existUserName();
  }, []);

  return (
    <PrincipalContainer>
      <UserContainer>
        <h1>Profile</h1>
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="">User Name</label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <SaveButton>Save</SaveButton>
        </form>
      </UserContainer>
    </PrincipalContainer>
  );
};

export default UserComponent;
