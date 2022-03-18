import styled from 'styled-components'

export const Container = styled.div`
    width: 400px;
    height: 350px;
    display: grid;
    grid-template-rows: 40px auto 40px;
    background-color: #ffffff;
    border-radius: 20px;
    padding: 20px;
    border: 1px solid #ececec;
    @media (max-width: 410px){
        width: 340px;
    }
    @media (max-width: 350px){
        width: 310px;
    }
`

export const Header = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: end;
    justify-content: space-between;
    border-bottom: 1px solid #ececec;
    padding-bottom:3px;
`

export const Footer = styled.div`
    width: 100%;
    height: 40px;
    display: grid;
    grid-template-columns: auto 40px;
    grid-template-rows: 100%;
`

export const Step = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    color: #;
`

export const StepBtn = styled.button`
    min-width: 40px;
    height: 40px;
    font-size: 24px;
    border-style: none;
    border-radius: 50%;
    color: #c1c1c1;
    background-color: #ececec;
    cursor: pointer;
    transition: all 0.5s;
    /* border: 1px solid #c1c1c1; */
    ${(props) => props.step && `
    border: 1px solid #0cbce8;
    color: #ffffff;
    background-color: #0d8fff;

    `}
`
 
export const StepBar = styled.div`
    transition: all 0.5s;
    width: 100%;
    height: 10px;
    background-color: blue;
    background-color: #ececec;
    ${(props) => props.step && `
    color: #ffffff;
    background-color: #0d8fff;
    `}
`

export const CloseBtn = styled.button`
    width: 40px;
    height: 40px;
    font-size: 24px;
    border-style: none;
    border-radius: 50%;
    color: #c1c1c1;
    background-color: #ececec;
    cursor: pointer;
    transition: all 0.5s;
    /* border: 1px solid #c1c1c1; */
    &:hover{
        color: red;
    }
`

export const Content = styled.div`
    margin-top: 15px;
    & p{
        font-size: 20px;
    }
    & h3 {
        margin-bottom: 5px;
        & i{
            color: red;
            margin-right: 10px;
        }
    }
`

export const Strong = styled.a`
    font-weight: bold;
    text-decoration: none;
    color: #000000;
    cursor: pointer;
`

export const Image = styled.div`
    width: 100%;
    height: 200px;
    background-image: ${(props) => `url(${props.bg})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border: 1px solid #c1c1c1;
    border-radius: 3px;
    margin: 0 auto;
    margin-bottom: 10px;
`