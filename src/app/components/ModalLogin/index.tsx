import * as React from 'react';
import { 
    Title,
    Input,
    ErrorMessage,
    ErrorLogin,
    Close,
    Button,
    Form
} from "./styled";
import { Modal } from "../Modal"

interface Props{
    closeModal: any;
    emailValue: string;
    passwordValue: string;
    changeEmail: any;
    changePassword: any;
    blurEmail: any;
    blurPassword: any;
    typeErrorEmail: number;
    typeErrorPassword: number;
    formSubmit: any;
    errorLogin: number;
    textErrorLogin: string;
}

export const ModalLogin: React.SFC<Props> = ({closeModal, emailValue, passwordValue, changeEmail, changePassword, blurEmail, blurPassword, typeErrorEmail, typeErrorPassword, formSubmit, errorLogin, textErrorLogin}) => (
    <Modal>
        <Form onSubmit={formSubmit}  id="login-form"> 
            <Close src="src/app/assets/images/closemodal-icon.png" onClick={closeModal}/>
            <Title>Ingresa aquí</Title>
            <Input 
                name="email"
                placeholder="Ingresa tu Email"
                showError={ (typeErrorEmail > 0)}
                value={emailValue}
                onChange={changeEmail}
                onBlur={blurEmail}/>
            <ErrorMessage show={ (typeErrorEmail === 1) }>
                Campo requerido.
            </ErrorMessage>
            <ErrorMessage show={ (typeErrorEmail === 2) }>
                Por favor, introduce una dirección de correo válida.
            </ErrorMessage>
            <Input 
                name="password"
                type="password" 
                placeholder="Contraseña" 
                showError={ (typeErrorPassword > 0) }
                value={passwordValue}
                onChange={changePassword}
                onBlur={blurPassword}/>
            <ErrorMessage show={ (typeErrorPassword === 1) }>
                Campo requerido.
            </ErrorMessage>
            <ErrorMessage show={ (typeErrorPassword === 2) }>
                Por favor, introduzca al menos 4 caracteres.
            </ErrorMessage>
            <Button type="submit">Iniciar Sesión</Button>
            <ErrorLogin showError={ (errorLogin > 0) }>{textErrorLogin}</ErrorLogin>
        </Form>
    </Modal>
)