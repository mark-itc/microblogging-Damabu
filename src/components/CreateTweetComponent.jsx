import React from 'react'
import styled from 'styled-components'
import TweetFormComponent from './TweetFormComponent'
import TweetListComponent from './TweetListComponent'

const CreateTweetComponent = ({ tweets }) => {
  return (
    <PrincipalContainer>
        <TweetFormComponent tweets={tweets} />
        <TweetListComponent tweets={tweets}/>
    </PrincipalContainer>
  )
}

export default CreateTweetComponent


export const PrincipalContainer = styled.div`

    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: 5px;
    position: relative;
    
    
`