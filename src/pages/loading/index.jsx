import React from 'react';
import {
    Container,
    Content,
    LoadingContainer
} from './styles'

const Loading = () => {
    return (
        <Container>
            <Content>
                <LoadingContainer>
                    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                </LoadingContainer>
            </Content>
        </Container>
    )
}

export default Loading
