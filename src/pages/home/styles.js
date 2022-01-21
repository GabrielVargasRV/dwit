import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: calc(100vh - 120px);
`

export const Products = styled.div`
    grid-area: items;
    width: 940px;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 10px;
    margin: 0 auto;
`