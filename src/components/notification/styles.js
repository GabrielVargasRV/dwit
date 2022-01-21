import styled from 'styled-components';

export const Container = styled.div`
    min-width: 150px;
    height: 60px;
    display: flex;
    align-items: center;
`

export const Img = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 3px;
`

export const Text = styled.p`
    width: 100%;
    text-align: center;
    font-weight: bold;
    padding: 0 10px;
    color: ${(props) => props.theme}
`