import * as React from "react";
import * as ReactDOM from "react-dom";
import { Wrapper } from "./styled";

let modalContainer: HTMLDivElement = document.createElement('div');
modalContainer.id=('modal-container');
document.body.appendChild(modalContainer);

interface State{
}

export class Modal extends React.Component<{}, State> {
    public el: any;

    constructor(props: any){
        super(props);
        this.el=document.createElement('div');
    }
    componentDidMount(){
        modalContainer.appendChild(this.el);
    }
    componentWillUnmount(){
        modalContainer.removeChild(this.el);
    }
    render () {
        return ReactDOM.createPortal(
            <Wrapper id="modal">
                {this.props.children}
            </Wrapper>,
            this.el,
        );
    }
}