import * as React from 'react';
import * as Enzyme from 'enzyme'
import { ModalLogin } from './index';
import { shallow, mount, } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Test for Modal login', () => {

    const props = {
        closeModal: () => {},
        emailValue: "andriu.montalvoc@gmail.com",
        passwordValue: "orbisfront123",
        changeEmail: () => {},
        changePassword: () => {},
        blurEmail: () => {},
        blurPassword: () => {},
        typeErrorEmail: 0,
        typeErrorPassword: 0,
        formSubmit: () => {},
        errorLogin: 0,
        textErrorLogin: "Error Login"
    }
    const component = shallow((
        <ModalLogin {...props}
        /> 
    ));

    it('Test Show Component', () =>{
        console.log(component.debug());
        expect(component).toMatchSnapshot();
    });
    it('Test exits Tags', () =>{
        expect(component.find('Modal').length).toEqual(1);
    });
});