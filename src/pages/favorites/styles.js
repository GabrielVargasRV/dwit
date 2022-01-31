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

    @media (max-width: 970px) {
        width: 100%;
        padding: 0 10px;
        grid-template-columns: repeat(3,1fr);
    }

    @media (max-width: 740px) {
        padding: 0 10px;
        grid-template-columns: repeat(2,1fr);
    }
    @media (max-width: 530px) {
        padding: 0 10px;
        grid-template-columns: repeat(1,1fr);
    }
`