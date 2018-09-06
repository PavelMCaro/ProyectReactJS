import * as React from 'react';
import * as Enzyme from 'enzyme'
import { Menu } from './index';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Test Header-Menu Component', () => {

    const props = {
        imgSrc: "ruta/imagen",
        userLogin: "Pavel",
        showModal: true,
        showAvatar: true,
        showButton: true
    }
    const component = shallow((
        <Menu {...props} /> 
    ));
    it('Test Show Component', () =>{
        console.log(component.debug());
        expect(component).toMatchSnapshot();
    });
});