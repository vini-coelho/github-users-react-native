import React from 'react';

import { HeadingText, Container, Logo } from './styles';

const Heading: React.FC = ({ children }) => {
  return (
    <Container>
        <Logo source={require('../../assets/github_logo.png')}/>
        <HeadingText>{children}</HeadingText>
    </Container>
  );
}

export default Heading;