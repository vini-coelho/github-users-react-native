import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { Alert, FlatList, RefreshControl } from 'react-native';
import { 
    Container, 
    Wrapper,
    InputArea,
    InputContainer,
    Input,
    Button,
    ListArea,
    EmptyContainer,
    EmptyImage,
    EmptyText
} from './styles';

import { MaterialIcons } from '@expo/vector-icons'

import Heading from '../../components/Heading';
import UserItem from '../../components/UserItem';
import Loading from '../../components/Loading';

import Colors from '../../styles/Colors';

import api from '../../services/api';

interface User {
    id: number;
    name: string;
    login: string;
    avatar_url: string;
    bio: string;
    company: string;
    followers: number;
    public_repos: number;
    repos_url: string;
}

const Main: React.FC = () => {

    useEffect(() => {
        async function getUsers() {
            const usersRaw = await AsyncStorage.getItem('users');

            if(usersRaw) {
                const users:User[] = JSON.parse(usersRaw);
                setUsers(users);
            }


        };

        getUsers();
    }, []);

    const [ search, setSearch ] = useState('');
    const [ loading, setLoading ] = useState(false);
    const [ users, setUsers ] = useState<User[]>([]);

    async function addUser() {
        setLoading(true);
        try{

            const usersRaw = await AsyncStorage.getItem('users'); 

            const users:User[] = usersRaw ? JSON.parse(usersRaw) : [];

            if(users.some(item => item.login === search)) {
                setLoading(false);
                return
            };

            const response = await api.get(`users/${search}`);

            const user:User = response.data;

            users.push(user);

            setUsers(users);
            await AsyncStorage.setItem('users', JSON.stringify(users));

            setLoading(false);

        } catch (err) {
            Alert.alert('Erro!', err.message);
            setLoading(false);
        }
    }

    return (
        <Container>
            <Wrapper>
                <Heading>Github Users</Heading>
                <InputArea>
                <InputContainer>
                    <Input
                        placeholder="Buscar usuários no GitHub"
                        placeholderTextColor={Colors.gray}
                        onChangeText={text => setSearch(text)}
                        value={search}
                        returnKeyType="go"
                    />
                </InputContainer>
                    <Button onPress={async () => await addUser()}>
                        <MaterialIcons 
                            name='add' 
                            color='#fff'
                            size={25}
                        />
                    </Button>
                </InputArea>
                <ListArea>
                 {
                    users.length ?

                    <FlatList<User> 
                        data={users}
                        refreshControl={
                            <RefreshControl 
                                refreshing={loading}
                                onRefresh={() => {}}
                                tintColor={Colors.black}
                            />
                        }
                        keyExtractor={item => item.id.toString()}
                        indicatorStyle='white'
                        contentContainerStyle={{
                            // flex: 1,
                            // backgroundColor: 'red',
                            paddingHorizontal: 14,
                            paddingVertical: 20
                        }}
                        renderItem={({item}) => (
                            <UserItem 
                                user={item}
                            />
                        )}
                    /> :

                    <EmptyContainer>
                        <EmptyImage source={require('../../assets/Octocat.png')}/>
                        <EmptyText>Nenhum dev por aqui...</EmptyText>
                    </EmptyContainer>
                 }
         
                </ListArea>

            </Wrapper>
        </Container>
  );
}

export default Main;