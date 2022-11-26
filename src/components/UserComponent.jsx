import localforage from 'localforage'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { PrincipalContainer } from './CreateTweetComponent'


const UserComponent = () => {

    const [ userName, setUserName ] = useState("")


    const existUserName = async( ) =>{
        const userName = await localforage.getItem('userName')
        if (userName) {
            setUserName(userName)
        }
    }

    const onSubmit = (e) =>{
        e.preventDefault()

        localforage.setItem('userName', userName)
    }

    useEffect(() => {
      existUserName()
    },[])

  return (
    <PrincipalContainer>
        <UserContainer>
            <h1>Profile</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="">User Name</label>
                    <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)}/>
                </div>
                <SaveButton>Save</SaveButton>
            </form>
        </UserContainer>
    </PrincipalContainer>
  )
}

export default UserComponent

const UserContainer = styled.div`
  border: 1px solid white;
  width: 600px;
  height: 200px;
  border: none;
  position: relative;
  margin-top: 50px;

  h1{
    color: white;
    margin-bottom: 20px;
  }

  div{
    display: flex;
    flex-direction: column;
    gap: 10px;

    label{
        color: rgba(255, 255, 255, 0.8);
    }

    input{
        height: 61px;
        color: white;
        background-color: transparent;
        border-radius: 6px;
        border: 1px solid white;
        outline: none;
        padding: 0 10px;
        font-size: 16px;
    }


   
  }
`;

const SaveButton = styled.button`
  line-height: 19px;
  position: absolute;
  bottom: 10px;
  right: 0;
  padding: 6px 12px;
  background-color: ${(props) => (props.isEnabled ? "#007bff9e " : "#007BFF ")};
  color: ${(props) => (props.isEnabled ? "#ffffff96" : "white")};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  pointer-events: ${(props) => (props.isEnabled ? "none" : "visible")};
  width: 68px;
  height: 34px;

  &:hover {
    background-color: #007bffbe;
  }
`;