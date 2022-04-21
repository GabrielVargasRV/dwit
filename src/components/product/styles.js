import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 300px;
    display: grid;
    grid-template-rows: 75% 25%;
    grid-template-columns: 100%;
    margin-top: 20px;
    text-decoration: none;
    border-radius: 5px;
    transition: all 0.2s;
    border: 1px solid rgba(0,0,0,.1);

    &:hover{
        position: relative;
        z-index: 5;
        transform: scale(1.05);
    }
    @media (max-width: 720px){
        height: 400px;

        &:hover{
            transform: scale(1.05);
        }
    }
`

export const Image = styled.div`
    width: 100%;
    height: 100%;
    background-image: ${(props) => `url(${props.bg})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 5px 5px 0px 0px;
`

export const Info = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    background-color: #000;
    color: #fff;
    border-radius: 0px 0px 5px 5px;
    border: 1px solid #000000;
`

export const InfoTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`

export const Title = styled.p`
    font-size:18px;
    color: #ffffff;
    text-decoration: none;
`

export const Price = styled.p`
    color: #c1c1c1;
`
