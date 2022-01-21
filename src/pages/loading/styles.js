import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: calc(100vh - 120px);
`

export const Content = styled.div`
    grid-area: "content";
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const LoadingContainer = styled.div`
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #c4c4c4;
    background-color: #404040;
    border-radius: 5px;
`