import styled from 'styled-components'

export const Container = styled.div`
    display: ${(props) => props.element ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 101;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.5);
`