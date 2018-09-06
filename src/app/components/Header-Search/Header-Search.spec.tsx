import * as React from 'react';
import * as Enzyme from 'enzyme'
import { Search } from './index';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Test Header-Search Component', () => {

    const props = {
        imgSrc: "ruta/imagen",
    }
    const component = shallow((
        <Search {...props} /> 
    ));
    it('Test Show Component', () =>{
        console.log(component.debug());
        expect(component).toMatchSnapshot();
    });
});