import * as React from 'react';
import {
    Wrapper,
    Avatar,
    User, 
    Button
} from "./styled";

interface Props{
    imgSrc: string;
    userLogin: string;
    showModal: any;
    showAvatar: boolean;
    showButton: boolean;
}

export const Menu: React.SFC<Props> = ({imgSrc, userLogin, showModal, showAvatar, showButton}) => (
    <Wrapper>
        <Avatar src={imgSrc} showAvatar={showAvatar}/>
        <User>{userLogin}</User>
        <Button onClick={showModal} showButton={showButton}>Ingresar</Button>
    </Wrapper>
)
