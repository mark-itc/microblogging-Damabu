import React from 'react';
import { PrincipalContainer } from './StyleComponent';
import TweetFormComponent from './TweetFormComponent';
import TweetListComponent from './TweetListComponent';

const CreateTweetComponent = ({ tweets }) => {
  return (
    <PrincipalContainer>
      <TweetFormComponent tweets={tweets} />
      <TweetListComponent tweets={tweets} />
    </PrincipalContainer>
  );
};

export default CreateTweetComponent;
