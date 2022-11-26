import React from 'react'
import styled from 'styled-components'

const TweetListComponent = ({ tweets }) => {
  

  return (
     <TweetListContainer>
          { 
            tweets.tweets
            .sort ((a,b) => a.id < b.id ? 1 : -1)
            // .sort((b, a) => (a.key > b.key ? 1 : a.key < b.key ? -1 : 0))
            .map( (res, index) => {
              return(
                <TweetList key={index}>
                  <PostedTweet>
                    <div>
                    <p>{res.user}</p>
                    <p>{res.date}</p>
                    </div>
                    <p>{res.tweet}</p>
                    </PostedTweet>
                </TweetList>
              )
            } )
          }
     </TweetListContainer>
  )
}


export default TweetListComponent

const TweetListContainer = styled.div`
    border : 1px solid white;
    width: 100%;
    height: 200px;
    border: none;
`
const TweetList = styled.div`
    width: 100%;
    /* height: 50px; */
    /* background-color: transparent; */
    color: white;
    /* border: none;
    outline: none;
    resize: none; */
    display: flex;
  gap: 0.25rem;
  padding: 0.25rem;
  align-items: center;
  grid-area: content;
  justify-content: center;
`;

const PostedTweet = styled.div`

  background: #343A40;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  padding: 15px;
  flex-direction: column-reverse;

  div {
    color: #6C757D;
    display: flex;
    justify-content: space-between;font-weight: 400;
font-size: 14px;
line-height: 16px;
align-items: center;
margin-bottom: 15px;
  }
`;