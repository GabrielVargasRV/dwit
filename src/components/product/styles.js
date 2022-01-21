import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container = styled(Link)`
    width: 100%;
    height: 300px;
    display: grid;
    grid-template-rows: 75% 25%;
    grid-template-columns: 100%;
    margin-top: 20px;
    cursor: pointer;
    text-decoration: none;
    &:hover{
        opacity: 0.8;
    }
`
// export const Cover = styled.div`

// `

export const Image = styled.div`
    width: 100%;
    height: 100%;
    background-image: ${(props) => `url(${props.bg})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
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
`

export const Title = styled.h4`

`

export const Price = styled.p`
    color: #c1c1c1;
`
