import styled from 'styled-components';

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
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
`;

export const NavBar = styled.div`
  width: 1076px;
  height: 58px;
  background-color: #343a40;
  border-radius: 6px;
  display: flex;
  align-items: center;
  padding-left: 36px;

  @media ${device.mobileS} {
    max-width: 310px;
  }

  @media ${device.mobileM} {
    max-width: 360px;
  }

  @media ${device.mobileL} {
    max-width: 410px;
  }

  @media ${device.tablet} {
    max-width: 750px;
  }
  @media ${device.laptop} {
    max-width: 100%;
  }

  @media ${device.laptopL} {
    max-width: 100%;
  }

  @media ${device.desktop} {
    max-width: 100%;
  }

  @media ${device.desktopL} {
    max-width: 100%;
  }

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
  padding: 15px 12px;
  border-radius: 6px;

  @media ${device.mobileS} {
    max-width: 310px;
  }

  @media ${device.mobileM} {
    max-width: 360px;
  }

  @media ${device.mobileL} {
    max-width: 410px;
  }

  @media ${device.tablet} {
    max-width: 750px;
  }
  @media ${device.laptop} {
    max-width: 100%;
  }

  @media ${device.laptopL} {
    max-width: 100%;
  }

  @media ${device.desktop} {
    max-width: 100%;
  }

  @media ${device.desktopL} {
    max-width: 100%;
  }
`;

export const TweetForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;

  textarea {
    font-family: 'Roboto', sans-serif;
    width: 100%;
    height: 100px;
    background-color: transparent;
    color: white;
    border: none;
    outline: none;
    resize: none;
  }

  .form-bottom {
    display: flex;
    justify-content: space-between;
    align-items: end;
    height: 70px;

    @media ${device.mobileS} {
      flex-direction: column;
    }

    @media ${device.mobileM} {
      flex-direction: column;
    }

    @media ${device.mobileL} {
      flex-direction: column;
    }

    @media ${device.tablet} {
      flex-direction: row;
    }

    @media ${device.laptop} {
      flex-direction: row;
    }

    @media ${device.laptopL} {
      flex-direction: row;
    }

    @media ${device.desktop} {
      flex-direction: row;
    }

    @media ${device.desktopL} {
      flex-direction: row;
    }
  }
`;

export const TweetButton = styled.button`
  line-height: 19px;
  bottom: 10px;
  right: 10px;
  padding: 6px 12px;
  background-color: ${(props) => (props.isEnabled ? '#007bff9e ' : '#007BFF ')};
  color: ${(props) => (props.isEnabled ? '#ffffff96' : 'white')};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  pointer-events: ${(props) => (props.isEnabled ? 'none' : 'visible')};
  width: 68px;
  height: 34px;

  @media ${device.mobileS} {
    min-width: 100%;
  }

  @media ${device.mobileM} {
    min-width: 100%;
  }

  @media ${device.mobileL} {
    min-width: 100%;
  }

  @media ${device.tablet} {
    min-width: 68px;
  }

  @media ${device.laptop} {
    min-width: 68px;
  }

  @media ${device.laptopL} {
    min-width: 68px;
  }

  @media ${device.desktop} {
    min-width: 68px;
  }

  @media ${device.desktopL} {
    min-width: 68px;
  }

  &:hover {
    background-color: #007bffbe;
  }
`;

export const MessageError = styled.div`
  background-color: #f8d7da;
  color: #721c24;
  padding: 6px 12px;
  border-radius: 4px;
`;

export const TweetListContainer = styled.div`
  border: 1px solid white;
  width: 600px;
  border: none;

  @media ${device.mobileS} {
    max-width: 310px;
    justify-content: center;
  }

  @media ${device.mobileM} {
    justify-content: center;
    max-width: 360px;
  }

  @media ${device.mobileL} {
    max-width: 410px;
  }

  @media ${device.tablet} {
    max-width: 750px;
  }
  @media ${device.laptop} {
    max-width: 100%;
    justify-content: center;
  }

  @media ${device.laptopL} {
    justify-content: center;
    max-width: 100%;
  }

  @media ${device.desktop} {
    max-width: 100%;
  }

  @media ${device.desktopL} {
    max-width: 100%;
  }
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

  img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }

  div {
    display: flex;
    align-items: center;
  }

  div img {
    margin-right: 10px;
  }

  .topTweet {
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
  margin-top: 50px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    justify-content: center;
  }

  @media ${device.mobileS} {
    max-width: 310px;
  }

  @media ${device.mobileM} {
    max-width: 360px;
  }

  @media ${device.mobileL} {
    max-width: 410px;
  }

  @media ${device.tablet} {
    max-width: 750px;
  }
  @media ${device.laptop} {
    max-width: 100%;
  }

  @media ${device.laptopL} {
    max-width: 100%;
  }

  @media ${device.desktop} {
    max-width: 100%;
  }

  @media ${device.desktopL} {
    max-width: 100%;
  }

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

    .imgInput {
      border: none;
    }
  }
`;

export const SaveButton = styled.button`
  line-height: 19px;
  bottom: 10px;
  padding: 6px 12px;
  background-color: ${(props) => (props.isEnabled ? '#007bff9e ' : '#007BFF ')};
  color: ${(props) => (props.isEnabled ? '#ffffff96' : 'white')};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  pointer-events: ${(props) => (props.isEnabled ? 'none' : 'visible')};
  width: 68px;
  height: 34px;

  @media ${device.mobileS} {
    min-width: 100%;
  }

  @media ${device.mobileM} {
    min-width: 100%;
  }

  @media ${device.mobileL} {
    min-width: 100%;
  }

  @media ${device.tablet} {
    min-width: 68px;
  }

  @media ${device.laptop} {
    min-width: 68px;
  }

  @media ${device.laptopL} {
    min-width: 68px;
  }

  @media ${device.desktop} {
    min-width: 68px;
  }

  @media ${device.desktopL} {
    min-width: 68px;
  }

  &:hover {
    background-color: #007bffbe;
  }
`;
