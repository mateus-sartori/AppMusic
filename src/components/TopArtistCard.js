import React from 'react';
import { Text, TouchableOpacity, Alert } from 'react-native';
import styled from 'styled-components/native';

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

function checkPress(Name) {
    console.log(Name);
    if (Name == 'Michael Jackson') {
        Alert.alert('He He He, AUuuuuuuuuuu!');
    } else if (Name == 'Eminem') {
        Alert.alert('Look, if you have, one shoot', 'One opportunity');
    } else if (Name == 'Linkin Park') {
        Alert.alert("But in the end it doesn't even matter OOoooohohhh....");
    }
}

const InfoArea = styled.View`
    width: 33%;
    align-items: center;
    margin-top: 20px;
`;

const ImageAuthor = styled.Image`
    width: 75px;
    height: 75px;
    border-radius: 60px;
`;

export default ({ Name, Category, ImgUrl }) => {
    return (
        <InfoArea >
            <TouchableOpacity onPress={() => createThreeButtonAlert(Name, Category)}>
                <ImageAuthor
                    source={ImgUrl} />
            </TouchableOpacity>

            <Text style={{ //Nome do autor
                color: 'white',
                marginTop: 4,
                fontSize: 12, fontWeight: 'bold'
            }}>{Name}</Text>

            <Text style={{
                color: '#676767',
                fontSize: 10, fontWeight: 'bold'
            }}>{Category}</Text>
        </InfoArea >
    );
}