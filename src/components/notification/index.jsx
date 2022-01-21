import React from 'react'
import {
    Container,
    Img,
    Text
} from './styles'

const Notification = ({ImgUrl,text,theme = '#ffffff'}) => {
    return (
        <Container>
            {ImgUrl ? (
                <Img src={ImgUrl}/>
            ) : (<></>)}
            <Text theme={theme} >{text}</Text>
        </Container>
    )
}

export default Notification