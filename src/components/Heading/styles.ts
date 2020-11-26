import styled from 'styled-components/native';
import Colors from '../../styles/Colors';

export const Container = styled.View`
    padding: 10px 0 20px;
    margin-left: 14px;
    flex-direction: row;
    align-items: center;
`;

export const HeadingText = styled.Text`
    color: ${Colors.black};
    font-family: roboto_700;
    font-size: 30px;
`;

export const Logo = styled.Image`
    margin-right: 10px;
`;