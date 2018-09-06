/*import * as React from "react";
import { CardResult } from "../../components/CardResult"

interface State{
    productsResult: any[];
    totalPrice: number;
}

export class CardResultContainer extends React.Component<{},State>{
    constructor(props:any){
        super(props);
        this.state = {
            productsResult: [],
            totalPrice: 0
        }
    }
    componentWillMount(){
        this.setState({  
            productsResult: []
        })
    }

    handleClick = () => {
        let newProducts: any[];
        let propsProduct = {
            name: "Mouse Gamer",
            price:89.99,
            count: 1,
        }
        newProducts=this.state.productsResult;
        newProducts.push(propsProduct);
        this.setState({
            productsResult: newProducts,
            totalPrice: this.state.totalPrice + propsProduct.price
        })
    }

    buyProducts = () => {}

    render(): JSX.Element {


        return(
            <React.Fragment>
                <CardResult productResult={this.state.productsResult} totalProducts={this.state.totalPrice} buyProducts={this.buyProducts}/>
            </React.Fragment>
        )
    }
}*/