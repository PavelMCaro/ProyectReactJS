import * as React from "react";
import { CardResult } from "./components/CardResult"
import { ProductList } from "./components/ProductList";
import { Header } from "./components/Header";
import { Wrapper } from "./components/Wrapper/styled"
import { Screen, Message } from "./components/LoadingScreen/styled"
import { ModalLogin } from "./components/ModalLogin"
import axios from "axios";
import ReactDOM from "react-dom";

interface State{
    products: any[];
    pucharsedProduct: any[];
    totalPrice: number;
    showModal: boolean;
    emailValue: string;
    passwordValue: string;
    userLogin: string;
    showAvatar: boolean;
    showButton: boolean;
    buyButton: boolean;
    typeErrorEmail: number;
    typeErrorPassword: number;
    errorLogin: number;
    textErrorLogin: string;
    user: any[];
}

export class App extends React.Component<{},State>{
    constructor(props:any){
        super(props);
        this.state={
            products: [],
            pucharsedProduct: [],
            totalPrice: 0,
            showModal: false,
            emailValue: '',
            passwordValue: '',
            userLogin: '',
            showAvatar: false,
            showButton: true,
            user: [],
            typeErrorEmail: 0,
            typeErrorPassword: 0,
            errorLogin: 0,
            textErrorLogin: '',
            buyButton: false
        }
    }

    openModal = () => {
        this.setState({ 
            showModal: true,
            typeErrorEmail: 0,
            typeErrorPassword: 0,
            emailValue: '',
            passwordValue: '',
            errorLogin: 0,
            textErrorLogin: ''
        })
    }

    closeModal = () => {
        this.setState({
            showModal: false,
            typeErrorEmail: 0,
            typeErrorPassword: 0,
            emailValue: '',
            passwordValue: '',
            errorLogin: 0,
            textErrorLogin: ''
        })
    }

    changeEmail = (event: any) => {
        let { value } = event.target;

        let test = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
        let typeErrorEmail = (value.length <= 0) ? 1: ( ( !test.test(value) ) ) ? 2 : 0;

        this.setState({
            emailValue: value, typeErrorEmail
        });
    }

    blurEmail = (event: any) => {
        let { value } = event.target;
        let { typeErrorEmail } = this.state;

        typeErrorEmail = (value.length <= 0) ? 1: typeErrorEmail
        
            this.setState({
                typeErrorEmail
            })
    }

    changePassword = (event: any) => {
        let { value } = event.target;

        let typeErrorPassword = (value.length <= 0)? 1: (value.length < 4) ? 2 : 0;
        this.setState({
            passwordValue: value,
            typeErrorPassword
        })
    }

    blurPassword = (event: any) => {
        let { value } = event.target;
        let { typeErrorPassword } = this.state;

        typeErrorPassword = (value.length <= 0) ? 1: typeErrorPassword;

        this.setState({
            typeErrorPassword
        })
    }

    formSubmit = () => {
        
        event.preventDefault();

        const emailUser: string = "andriu.montalvoc@gmail.com";
        const passwordUser: string = "orbisfront123";
        const userName: string = "Pavel Andrei";
        
        if (this.state.emailValue === emailUser && this.state.passwordValue === passwordUser){
            this.setState({
                userLogin: userName,
                showAvatar: true,
                showButton: false,
                showModal: false,
                emailValue: '',
                passwordValue: '',
                buyButton: true
            })
        }else{
            this.setState({
                errorLogin: 1,
                textErrorLogin: "Email o clave no existe"
            })
        }
    }

    componentWillMount(){

        axios.get('http://localhost:3000/products')
        .then( res => {
            this.setState({
                products: res.data
            })
        })
    }

    componentDidMount(){
        
        window.addEventListener('keydown', (e) => {
            if (e.keyCode === 27) this.closeModal();
        });
        window.addEventListener('click', this.clickOutSide, false);
    }

    componentWillUnmount(){
        window.removeEventListener('click', this.clickOutSide, false);
    }

    clickOutSide = (event: any) => {
        console.log(event.target);
        if (event.target.id === "modal") this.closeModal();
    }

    addProduct = (product: any) => {

        for(let i=0; i<this.state.products.length;i++){
            if(this.state.products[i].id === product.id){
                this.state.products[i].stock = parseInt(this.state.products[i].stock) - 1;
            }
            if(this.state.products[i].stock===0){
                this.state.products[i].inStock=false;
                for(let j=0; j<this.state.pucharsedProduct.length;j++){
                    if(this.state.pucharsedProduct[j].id === this.state.products[i].id){
                        this.state.pucharsedProduct[j].inStock=false;
                    }
                }
            }
        }

        let actualizar:boolean=false;
        if(!this.state.pucharsedProduct.length){
            let propsProduct = {
                id: product.id,
                name: product.title,
                price: parseFloat(product.price),
                count: 1,
                inStock: true
            }
            this.setState({
                pucharsedProduct: [...this.state.pucharsedProduct, propsProduct],
                totalPrice: parseFloat((this.state.totalPrice + propsProduct.price).toFixed(2)),
                
            })
        }else{
            let propsProduct: any;
            this.state.pucharsedProduct.map((e)=>{
                if(e.id === product.id){
                    e.count = e.count + 1;
                    actualizar=true;
                }else{
                    propsProduct = {
                        id: product.id,
                        name: product.title,
                        price: parseFloat(product.price),
                        count: 1,
                        inStock: true
                    }
                }
            })
            if(actualizar){
                this.setState({
                    pucharsedProduct: [...this.state.pucharsedProduct],
                    totalPrice: parseFloat((this.state.totalPrice + parseFloat(product.price)).toFixed(2)),
                    products: this.state.products,
                })
            }else{
                this.setState({
                    pucharsedProduct: [...this.state.pucharsedProduct, propsProduct],
                    totalPrice: parseFloat((this.state.totalPrice + propsProduct.price).toFixed(2)),
                    products: this.state.products,
                })
            }
        }
    }

    buyProducts = () => {
        if (this.state.pucharsedProduct.length){
            alert("Total a pagar: "+this.state.totalPrice+ " soles");
            this.setState({
                pucharsedProduct: [],
                totalPrice: 0
            })
        }else{
            alert("Añada al carrito para poder comprar");
        }
    }

    addOne = (product: any) => {

        for(let i=0; i<this.state.products.length;i++){
            if(this.state.products[i].id === product.id){
                this.state.products[i].stock = parseInt(this.state.products[i].stock) - 1;
            }
            if(this.state.products[i].stock===0){
                this.state.products[i].inStock=false;
                for(let j=0; j<this.state.pucharsedProduct.length;j++){
                    if(this.state.pucharsedProduct[j].id === this.state.products[i].id){
                        this.state.pucharsedProduct[j].inStock=false;
                    }
                }
            }
        }

        let actualizar:boolean=false;
        if(!this.state.pucharsedProduct.length){
            let propsProduct = {
                id: product.id,
                name: product.title,
                price: parseFloat(product.price),
                count: 1,
                inStock: true
            }
            this.setState({
                pucharsedProduct: [...this.state.pucharsedProduct, propsProduct],
                totalPrice: parseFloat((this.state.totalPrice + propsProduct.price).toFixed(2)),
                
            })
        }else{
            let propsProduct: any;
            this.state.pucharsedProduct.map((e)=>{
                if(e.id === product.id){
                    e.count = e.count + 1;
                    actualizar=true;
                }else{
                    propsProduct = {
                        id: product.id,
                        name: product.title,
                        price: parseFloat(product.price),
                        count: 1,
                        inStock: true
                    }
                }
            })
            if(actualizar){
                this.setState({
                    pucharsedProduct: [...this.state.pucharsedProduct],
                    totalPrice: parseFloat((this.state.totalPrice + parseFloat(product.price)).toFixed(2)),
                    products: this.state.products,
                    
                })
            }else{
                this.setState({
                    pucharsedProduct: [...this.state.pucharsedProduct, propsProduct],
                    totalPrice: parseFloat((this.state.totalPrice + propsProduct.price).toFixed(2)),
                    products: this.state.products,
                    
                })
            }
        }
    }

    deleteOne = (product: any) => {
        let newPrice: number;
        
        for (let i=0; i<this.state.pucharsedProduct.length;i++){
            if(this.state.pucharsedProduct[i].id === product.id){
                for(let j=0; j<this.state.products.length;j++){
                    if(this.state.products[j].id===product.id){
                        this.state.products[j].stock = parseInt(this.state.products[j].stock) + 1;
                    }
                    if(this.state.products[j].stock>0){
                        this.state.products[j].inStock=true;
                        this.state.pucharsedProduct[i].inStock=true;
                    }
                }
                if(this.state.pucharsedProduct[i].count>1){
                    this.state.pucharsedProduct[i].count = this.state.pucharsedProduct[i].count - 1;
                    newPrice = parseFloat((this.state.totalPrice - parseFloat(this.state.pucharsedProduct[i].price)).toFixed(2));
                }else{
                    newPrice = parseFloat((this.state.totalPrice - parseFloat(this.state.pucharsedProduct[i].price)).toFixed(2));
                    this.state.pucharsedProduct.splice(i,1);
                }
            }
        }
 
        this.setState({
            pucharsedProduct: this.state.pucharsedProduct,
            totalPrice: newPrice,
            products: this.state.products,
            
            
        })
    }

    deleteProducts = (product: any) => {
        let newPrice: number;
        
        for (let i=0; i<this.state.pucharsedProduct.length;i++){
            if(this.state.pucharsedProduct[i].id === product.id){
                for(let j=0; j<this.state.products.length;j++){
                    if(this.state.products[j].id===product.id){
                        this.state.products[j].stock = parseInt(this.state.products[j].stock) + parseInt(this.state.pucharsedProduct[i].count);
                        newPrice = this.state.totalPrice - parseFloat((parseFloat(this.state.pucharsedProduct[i].price)*parseFloat(this.state.pucharsedProduct[i].count)).toFixed(2));
                    }
                    if(this.state.products[j].stock>0){
                        this.state.products[j].inStock=true;
                        this.state.pucharsedProduct[i].inStock=true;
                    }
                }
                    this.state.pucharsedProduct.splice(i,1);
            }
        }
        this.setState({
            pucharsedProduct: this.state.pucharsedProduct,
            totalPrice: newPrice,
            products: this.state.products,
            
        })
    }

    render(): JSX.Element {

        let propsHeader:any = {
            imgSearch: "src/app/assets/images/carrito-compra.png",
            imgMenu:"src/app/assets/images/user-login.png",
            userLogin: this.state.userLogin,
            showModal: this.openModal,
            showAvatar: this.state.showAvatar,
            showButton: this.state.showButton
        }

        return(
            <React.Fragment>
                {this.state.showModal ? 
                    <ModalLogin 
                        closeModal={this.closeModal}
                        emailValue={this.state.emailValue}
                        passwordValue={this.state.passwordValue}
                        changeEmail={this.changeEmail}
                        changePassword={this.changePassword}
                        blurEmail={this.blurEmail}
                        blurPassword={this.blurPassword}
                        typeErrorEmail={this.state.typeErrorEmail}
                        typeErrorPassword={this.state.typeErrorPassword}
                        errorLogin={this.state.errorLogin}
                        textErrorLogin={this.state.textErrorLogin}
                        formSubmit={this.formSubmit}/>
                        : null}
                    <Header {...propsHeader}/>
                    <Wrapper>
                        {this.state.products.length ? 
                        <React.Fragment>
                            <ProductList products={this.state.products} addProduct={this.addProduct}/> 
                            <CardResult productResult={this.state.pucharsedProduct} totalProducts={this.state.totalPrice} buyProducts={this.buyProducts} addOne={this.addOne} deleteOne={this.deleteOne} deleteProducts={this.deleteProducts} buyButton={this.state.buyButton}/>
                        </React.Fragment>
                        : <Screen><Message>Cargando data...</Message></Screen>}  
                    </Wrapper>
            </React.Fragment>
        )
    }
}