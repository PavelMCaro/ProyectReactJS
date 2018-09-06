import * as React from 'react';
import { 
    Title,
    Image,
    Description,
    Stock,
    Price,
    Button,
    ImageButton,
    ButtonText,
    Wrapper
} from "./styled";

interface Props{
    id: string;
    title: string;
    srcImg: string;
    description: string;
    price: number;
    stock: number;
    inStock: boolean;
    addProduct: any;
    keyButton: any;
}

export const Product: React.SFC<Props> = ({id,title, srcImg, description, price, stock, inStock, keyButton, addProduct}) => (
    <Wrapper>
        <Title>{title}</Title>
        <Image src={srcImg}/>
        <Description>{description}</Description>
        <Stock>Disponible: {stock}</Stock>
        <Price>Precio: s/. {price}</Price>
        <Button id={keyButton} disabled={!inStock} onClick={() => addProduct({
                id, title, price, stock
            })} >
            <ImageButton src="src/app/assets/images/carrito-button.png"/>
            <ButtonText >Añadir al carrito</ButtonText>
        </Button>
    </Wrapper>
)