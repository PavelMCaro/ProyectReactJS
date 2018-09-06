import * as React from 'react';
import * as Enzyme from 'enzyme'
import { Header } from './index';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Test Header Component', () => {

    const props = {
        imgSearch: "ruta/imagenSearch",
        imgMenu: "ruta/imagenMenu",
        userLogin: "Pavel",
        showModal: () => {},
        showAvatar: true,
        showButton: true
    }
    const component = mount((
        <Header {...props} /> 
    ));
    it('Test Show Component', () =>{
        console.log(component.debug());
        expect(component).toMatchSnapshot();
    });
    it('Test exits Tags', () =>{
        expect(component.find('Component').length).toEqual(1);
    });
    
});