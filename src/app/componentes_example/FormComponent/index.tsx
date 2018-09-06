import * as React from 'react';
import { 
    Title,
    Input,
    ErrorMessage,
    ErrorLogin,
    Button,
    Form
} from "./styled";

interface State{
    typeErrorEmail: number;
    typeErrorPassword: number;
    emailValue: string;
    passwordValue: string;
    errorLogin: number;
}

export class FormComponent extends React.Component<{},State>{
    constructor(props : any){
        super(props);
        this.state = {
            typeErrorEmail: 0,
            typeErrorPassword: 0,
            emailValue: '',
            passwordValue: '',
            errorLogin: 0
        }
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

    render(): JSX.Element{
        return(
            <Form>
                <Title>
                    Formulario
                </Title>
                <Input
                    name="email"
                    placeholder="Ingresa tu Email"
                    showError={ (this.state.typeErrorEmail > 0)}
                    value={this.state.emailValue}
                    onChange={this.changeEmail}
                    onBlur={this.blurEmail}/>
                <ErrorMessage show={ (this.state.typeErrorEmail === 1) }>
                    Campo requerido.
                </ErrorMessage>
                <ErrorMessage show={ (this.state.typeErrorEmail === 2) }>
                    Por favor, introduce una dirección de correo válida.
                </ErrorMessage>
                <Input
                    name="password"
                    type="password" 
                    placeholder="Contraseña" 
                    showError={ (this.state.typeErrorPassword > 0) }
                    value={this.state.passwordValue}
                    onChange={this.changePassword}
                    onBlur={this.blurPassword}/>
                 <ErrorMessage show={ (this.state.typeErrorPassword === 1) }>
                    Campo requerido.
                </ErrorMessage>
                <ErrorMessage show={ (this.state.typeErrorPassword === 2) }>
                    Por favor, introduzca al menos 4 caracteres.
                </ErrorMessage>
                <Button>Iniciar sesión</Button>
                <ErrorLogin showError={ (this.state.errorLogin > 0) }>Usuario o clave incorrectos</ErrorLogin>
            </Form>
        )
    }
}