import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: black;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const HeaderArea = styled.View`
  margin-top: 80px;
  align-items: center;
`;

export const HeaderText = styled.Text`
  font-size: 18px;
  color: #fff;
`;

export const BackgroundImage = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;
