import * as React from 'react';
import * as Enzyme from 'enzyme'
import { Modal } from './index';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const children = <h1>Hello World.!</h1>

describe('Test Modal', () => {
    const component = mount ((
        <Modal>
            {children}
        </Modal>
    ));
    it('Test Show Component', () =>{
        console.log(component.debug());
        expect(component).toMatchSnapshot();
    });

    it('Test exists Tags', () =>{
        expect(component.find('Modal').length).toEqual(1);
        expect(component.find('h1').length).toEqual(1);
    });
});
