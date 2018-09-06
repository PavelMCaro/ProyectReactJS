import * as React from 'react';
import { 
    Product,
    Price,
    Count,
    Button,
    PlusButton,
    MinusButton,
    ImageButton,
    Wrapper
} from "./styled";

interface Props{
    id: string;
    name: string;
    price: number;
    stock: number;
    count: number;
    deleteProducts: any;
    addOne: any;
    deleteOne: any;
    inStock: boolean;
}

export const ProductResult: React.SFC<Props> = ({id, name, price, count, stock, addOne, deleteOne, deleteProducts, inStock}) => (
    <Wrapper>
        <Product>{name}</Product>
        <Price>{price}</Price>
        <Count>{count}</Count>
        <PlusButton disabled={!inStock} onClick={() => addOne({
            id, name, price, stock
        })}>+</PlusButton>
        <MinusButton onClick={() => deleteOne({
            id, name, price, stock
        })}>-</MinusButton>
        <Button title="Eliminar del carrito" onClick={() => deleteProducts({
            id, name, price, stock
        })}>
        <ImageButton src="src/app/assets/images/trash-icon.png"/>
        </Button>
    </Wrapper>
)
