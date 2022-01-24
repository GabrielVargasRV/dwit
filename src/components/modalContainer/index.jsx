import React from 'react';
import {
    Container
} from './styles'

const ModalContainer = ({element}) => {

    return(
        <Container element={element} >
            {element &&element}
        </Container>
    )
}

export default ModalContainer
