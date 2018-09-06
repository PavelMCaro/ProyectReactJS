import * as React from "react";
import { Product } from "../Product";
import { Wrapper } from "./styled";

interface Props {
    products?: any[];
    addProduct: any;
}

export const ProductList: React.SFC<Props> = ({ products, addProduct }) => (
    <Wrapper>
        {products.map((obj, id) => <Product key={id} {...obj} addProduct={addProduct} keyButton={obj.id} inStock={obj.inStock}/>)}
    </Wrapper>
)