import * as React from 'react';
import { Search } from '../Header-Search';
import { Menu } from '../Header-Menu';
import {
    Wrapper
} from "./styled"

interface Props{
    imgSearch: string;
    imgMenu: string;
    userLogin: string;
    showModal: any;
    showAvatar: any;
    showButton: any;
}
export const Header: React.SFC<Props> = ({imgSearch, imgMenu, userLogin, showModal, showAvatar, showButton}) =>(
    <Wrapper>
        <Search imgSrc={imgSearch}/>
        <Menu imgSrc={imgMenu} userLogin={userLogin} showModal={showModal} showAvatar={showAvatar} showButton={showButton}/>
    </Wrapper>
)
