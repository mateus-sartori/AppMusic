import React from 'react'
import { View, TouchableOpacity, Alert } from 'react-native';
import styled from 'styled-components/native';

const InfoArea = styled.View`
    width: 18%;
    align-items: center;
`;

const AuthorImage = styled.Image`
    height: 110px;
    width: 110px;
`;

const MusicText = styled.Text`
    font-size: 9.5px;
    margin-top: 3px;
    color: white;
    font-weight: bold;
`;

const MusicTrendInfo = styled.Text`
    color: #676767;
    font-size: 8.5px;
`;

function threeDots(name) {
    if (name.length >= 28) {
        name = name.substring(0, 25) + '...';
        return name;
    } else {
        return name
    }
}

const createThreeButtonAlert = (Name, Category) =>
    Alert.alert(
        Name,
        "Categoria: " + Category,
        [
            { text: "Cancelar", onPress: () => console.log("Cancel Pressed") },
            { text: "Pesquisar", onPress: () => checkPress(Name) }
        ],
        { cancelable: true }
    );

export default () => {
    return (
        <InfoArea>
            <View>
                <TouchableOpacity onPress={() => createThreeButtonAlert()}>
                    <AuthorImage source={require('~/assets/images/LinkinPark.png')} />
                </TouchableOpacity>
                <MusicText>{threeDots('Michael Jackson - Who is Iaa')}</MusicText>
                <MusicTrendInfo>Music • Trend Music</MusicTrendInfo>
            </View>
        </InfoArea>
    );
}