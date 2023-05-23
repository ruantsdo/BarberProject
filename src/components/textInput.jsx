import React from 'react';
import styled from "styled-components/native";
import { Platform } from 'react-native';

export const DefaultTextInput = styled.TextInput`
    width: 80%;
    height: 50px;
    margin-top: 5%;
    paddingtop: 50;
    border-bottom-width: 1px;
    margin-Left: auto;
    margin-Right: auto;
`;

export const Container = styled.KeyboardAvoidingView`
    flex:1; 
    justify-Content: center; 
    align-Items: center;
    paddingtop: ${Platform.OS === 'ios' ? 0 : 50};

    &::placeholder{
        color: black;
    }
`;