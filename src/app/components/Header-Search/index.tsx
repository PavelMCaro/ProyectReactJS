import * as React from 'react';
import { 
    Image,
    Wrapper,
} from "./styled";

interface Props{
    imgSrc: string;
}

export const Search: React.SFC<Props> = ({imgSrc}) => (
    <Wrapper>
        <Image src={imgSrc}/>
    </Wrapper>
)
