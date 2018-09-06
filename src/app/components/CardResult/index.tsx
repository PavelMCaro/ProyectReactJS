import * as React from 'react';
import { ProductResult } from "../CardProduct"
import { 
    Total,
    Line,
    Title,
    ButtonText,
    Button,
    ImageButton,
    Description,
    Wrapper
} from "./styled";

interface Props{
    productResult: any[];
    totalProducts: number;
    buyProducts: any;
    deleteProducts: any;
    addOne: any;
    deleteOne: any;
    buyButton: any;
}

export const CardResult: React.SFC<Props> = ({productResult, totalProducts, buyProducts, addOne, deleteOne, deleteProducts, buyButton}) => (
    <Wrapper>
        <Title>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Producto&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Precio&nbsp;&nbsp;&nbsp;Cantidad</Title>
        <Description>
            {productResult.map((obj, id) => <ProductResult key={id} {...obj} deleteProducts={deleteProducts} addOne={addOne} deleteOne={deleteOne} inStock={obj.inStock}/>)}
        </Description>
        <Line/>
        <Total>Total a pagar: s/. {totalProducts}</Total>
        <Button disabled={!buyButton} onClick={buyProducts}>
        <ImageButton src="src/app/assets/images/accept-button.png"/>
            <ButtonText>Comprar</ButtonText>
        </Button>
    </Wrapper>
)

