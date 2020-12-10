import React, { useContext } from 'react';
import styled from 'styled-components/native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const TabArea = styled.View`
  height: 40px;
  background-color: black;
  flex-direction: row;
`;

const TabItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default ({ state, navigation }) => {
    const goTo = (screenName) => {
        navigation.navigate(screenName);
    };

    return (
        <TabArea>
            <TabItem onPress={() => goTo('Home')}>
                <MaterialCommunityIcons style={{ opacity: state.index === 0 ? 1 : 0.5 }}
                    name={'home-circle-outline'} color={'#DADADA'} size={26} />
            </TabItem>
        </TabArea>
    );
};