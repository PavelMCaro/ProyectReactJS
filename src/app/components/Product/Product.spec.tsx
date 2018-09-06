import * as React from 'react';
import * as Enzyme from 'enzyme'
import { Product } from './index';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Test Product Component', () => {
    
    const props = {
        id: "A101",
        title: "Teclado",
        srcImg: "src/app/assets/images/mouse-gamer.png",
        description: "Teclado gamer mecánico",
        price: 150,
        stock: 10,
        inStock: true,
        keyButton: "A101",
        addProduct: () => {}
    }

    const component = shallow((
        <Product {...props}/>
    ));

    it('Test Show Component', () =>{
        expect(component).toMatchSnapshot();
    });


});
