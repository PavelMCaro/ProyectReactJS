/*import * as React from "react";
import { ProductList } from "../../components/ProductList";

interface State{
    products: any[];
}

export class ProductListContainer extends React.Component <{},State> {
    constructor(props:any) {
        super(props);
        this.state = {
            products: []
        }
    }
//  srcImgButton, buttonText, handleClick

    componentWillMount(){
        setTimeout(() => {
            this.setState({ 
                products: [
                    {
                        title: "Teclado Gamer",
                        srcImg: 'src/app/assets/images/teclado-gamer.png',
                        description: "Teclado Gamer Teros TE-GK650, Español, Multimedia, retro-iluminado, Negro, USB. 12 teclas para multimedia, teclado ideal para largas sesiones de juego, diseño ergonómico, cable de 1.5 mts.Id: KBUSBTEGK650-",
                        price: 159.99
                    },
                    {
                        title: "Mouse Gamer",
                        srcImg: 'src/app/assets/images/mouse-gamer.png',
                        description: "El diseño retroiluminado del LED RGB es perfecto para cualquier trabajo y juego especialmente en la noche ajustable hasta 3200 DPI. El diseño ergonómico se ajusta a la palma de la mano en la máxima medida",
                        price: 89.99
                    },
                    {
                        title: "Audífonos Gamer",
                        srcImg: 'src/app/assets/images/audio-gamer.png',
                        description: "El potente altavoz de neodimio de 40 mm ofrece trama de campo de sonido vívido, claridad de sonido, sensación de sonido, capaz de varios juegos. Conectores independientes",
                        price: 79.99
                    },
                    {
                        title: "Audífonos Gamer",
                        srcImg: 'src/app/assets/images/audio-gamer.png',
                        description: "El potente altavoz de neodimio de 40 mm ofrece trama de campo de sonido vívido, claridad de sonido, sensación de sonido, capaz de varios juegos. Conectores independientes",
                        price: 79.99
                    },
                    {
                        title: "Audífonos Gamer",
                        srcImg: 'src/app/assets/images/audio-gamer.png',
                        description: "El potente altavoz de neodimio de 40 mm ofrece trama de campo de sonido vívido, claridad de sonido, sensación de sonido, capaz de varios juegos. Conectores independientes",
                        price: 79.99
                    },
                    {
                        title: "Audífonos Gamer",
                        srcImg: 'src/app/assets/images/audio-gamer.png',
                        description: "El potente altavoz de neodimio de 40 mm ofrece trama de campo de sonido vívido, claridad de sonido, sensación de sonido, capaz de varios juegos. Conectores independientes",
                        price: 79.99
                    }
                ]
            })
        }, 2000)
    }

    handleClick = (product: any) => {
        console.log(product);
    }
    
    render(): JSX.Element {
        return(
            <React.Fragment>
                {this.state.products.length ? <ProductList products={this.state.products}disableButton={true} handleClick={this.handleClick}/>  : <div>Cargando data...</div>}
            </React.Fragment>
        )
    }
}*/