import React from 'react';
import styled from 'styled-components/native';

const InputArea = styled.View`
    width: 80%;
    height: 40px;
    flex-direction: row;
    background-color: #FFFFFF;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;

const SearchInput = styled.TextInput`
    flex: 1;
    margin-left: 7px;
    font-size: 13px;
    color: #848484;
`;

export default ({ IconSvg, placeholder, value, onChangeText }) => {
    return (
        <InputArea >
            <IconSvg style={{ marginLeft: 10 }} />
            <SearchInput placeholder={placeholder}
                placeholderTextColor="#848484"
                value={value}
                onChangeText={onChangeText}
            />
        </InputArea>
    );
}