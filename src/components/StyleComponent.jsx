import styled from "styled-components";

const size = {
  mobile: "425px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "2560px",
};

const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
};

export const PrincipalContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 5px;
  position: relative;

  @media ${device.mobile} {
    max-width: 300px;
  }

  @media ${device.tablet} {
    max-width: 500px;
  }

  @media ${device.laptop} {
    max-width: 100%;
  }

  @media ${device.desktop} {
    max-width: 100%;
  }
`;

export const NavBar = styled.div`
  width: 1076px;
  height: 58px;
  background-color: #343a40;
  border-radius: 6px;
  display: flex;
  align-items: center;
  padding-left: 36px;

  ul {
    display: flex;
    align-items: center;
    gap: 20px;
    list-style: none;

    .active {
      color: rgba(255, 255, 255, 0.5);
    }

    li {
      a {
        text-decoration: none;
        color: white;
      }
    }
  }
`;

export const TweetFormComponentcontainer = styled.div`
  border: 1px solid white;
  width: 600px;
  height: 200px;
  position: relative;
  padding: 15px 12px;
  border-radius: 6px;

  @media ${device.mobile} {
    max-width: 200px;
    justify-content: center;
  }

  @media ${device.tablet} {
    justify-content: center;
    max-width: 400px;
  }

  @media ${device.laptop} {
    max-width: 100%;
  }

  @media ${device.desktop} {
    max-width: 100%;
  }
`;

export const TweetForm = styled.form`
  display: flex;
  flex-direction: column;

  textarea {
    font-family: "Roboto", sans-serif;
    width: 100%;
    height: 100px;
    background-color: transparent;
    color: white;
    border: none;
    outline: none;
    resize: none;
  }

  div {
    display: flex;
  }

  @media ${device.mobile} {
    max-width: 200px;
    justify-content: center;
  }

  @media ${device.tablet} {
    justify-content: center;
    max-width: 400px;
  }

  @media ${device.laptop} {
    max-width: 100%;
  }

  @media ${device.desktop} {
    max-width: 100%;
  }
`;

export const TweetButton = styled.button`
  line-height: 19px;
  position: absolute;
  bottom: 10px;
  right: 10px;
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

export const MessageError = styled.div`
  background-color: #f8d7da;
  color: #721c24;
  padding: 6px 12px;
  border-radius: 4px;
  position: absolute;
  bottom: 10px;
`;

export const TweetListContainer = styled.div`
  border: 1px solid white;
  width: 600px;
  height: 200px;
  border: none;
`;

export const TweetList = styled.div`
  width: 100%;
  color: white;
  display: flex;
  gap: 0.25rem;
  padding: 0.25rem;
  align-items: center;
  grid-area: content;
  justify-content: center;
`;

export const PostedTweet = styled.div`
  background: #343a40;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  padding: 15px;
  flex-direction: column-reverse;

  div {
    color: #6c757d;
    display: flex;
    justify-content: space-between;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    align-items: center;
    margin-bottom: 15px;
  }
`;

export const UserContainer = styled.div`
  border: 1px solid white;
  width: 600px;
  height: 200px;
  border: none;
  position: relative;
  margin-top: 50px;

  h1 {
    color: white;
    margin-bottom: 20px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;

    label {
      color: rgba(255, 255, 255, 0.8);
    }

    input {
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

export const SaveButton = styled.button`
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
