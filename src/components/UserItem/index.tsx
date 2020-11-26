import React from 'react';
import { 
    Container,
    RightSide,
    Avatar,
    Name,
    UserBio
} from './styles';

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

interface UserItemProps {
    user: User;
}

const UserItem: React.FC<UserItemProps> = ({ user }) => {
    return (
        <Container>
            <Avatar source={{uri: user.avatar_url}}/>

            <RightSide>
                <Name numberOfLines={1}>{user.name}</Name>
                <UserBio>{user.bio}</UserBio>
            </RightSide>
        </Container>
    );
}   

export default UserItem;