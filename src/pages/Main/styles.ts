import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Constants from 'expo-constants';
import Colors from '../../styles/Colors';

const statusBarHeight = 
    Platform.OS === 'android' ? Constants.statusBarHeight : 0

export const Container = styled.View`
    background-color: ${Colors.primary};
    flex: 1;
`;

export const Wrapper = styled.SafeAreaView`
    padding-top: ${statusBarHeight};
    flex: 1;
`;

export const Title = styled.Text`

`;

export const InputArea = styled.View`
    flex-direction: row;
    padding: 0 14px 10px;
    border-bottom-width: 1px;
    border-bottom-color: ${Colors.tag};
`;

export const InputContainer = styled.View`
    background-color: ${Colors.tag};
    padding: 15px 20px;
    border-radius: 5px;

    height: 50px;

    margin-right: 10px;

    flex: 1;
`;

export const Input = styled.TextInput`
    flex: 1;
    font-size: 15px;
    font-family: roboto_500;
    color: ${Colors.black};
`;

export const Button = styled.TouchableOpacity`
    background-color: ${Colors.purple};

    width: 50px;
    height: 50px;
    border-radius: 5px;

    align-items: center;
    justify-content: center;
`;

export const ButtonText = styled.Text``;

export const ListArea = styled.View`
    /* background-color: white; */
    flex: 1;
`;


export const EmptyContainer = styled.View`
    flex: 1;
    align-items: center;
    margin-top: 35px;
`;

export const EmptyImage = styled.Image.attrs({
    resizeMode: 'contain'
})`
    height: 250px;
    width: 250px;
    padding: 20px;
    /* background-color: white; */
`;

export const EmptyText = styled.Text`
    font-size: 25px;
    font-family: roboto_700;
    color: ${Colors.black};
`;


