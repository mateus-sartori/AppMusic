import React from 'react';

import { Container, HeaderArea, HeaderText, BackgroundImage } from './styles';

const background = require('../assets/images/BackgroundNoite.png');

export default () => {
  return (
    <Container>
      <BackgroundImage source={background} />
      <HeaderArea>
        <HeaderText numberOfLines={2}>Olá, desenvolvedor!</HeaderText>
        <HeaderText numberOfLines={2}>Desenvolva agora o projeto</HeaderText>
      </HeaderArea>
    </Container>
  );
};