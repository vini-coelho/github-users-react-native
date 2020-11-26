import styled from 'styled-components/native';

import Colors from '../../styles/Colors';

export const Container = styled.TouchableOpacity`
    flex-direction: row;
    border-radius: 10px;
    background-color: ${Colors.tag};
    padding: 10px 15px;
    margin-bottom: 10px;
`;

export const RightSide = styled.View`
    flex: 1;
    /* background-color: red; */
    justify-content: center;
`;

export const Avatar = styled.Image`
    height: 100px;
    width: 100px;
    border-radius: 50px;

    margin-right: 15px;
`;

export const Name = styled.Text`
    color: ${Colors.black};
    font-family: roboto_700;
    font-size: 21px;
    margin-bottom: 5px;
`;

export const UserBio = styled.Text`
    color: ${Colors.black};
    font-family: roboto_400;
    font-size: 12px;
    text-align: left;
`;
