import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: calc(100vh - 120px);
`

export const Content = styled.div`
    grid-area: "content";
    width: 940px;
    height: 100%;
    display: grid;
    grid-template-columns: 60% 40%;
    margin: 0 auto;
    grid-gap: 10px;
`

export const Products = styled.div`
    width: 100%;
    overflow-y: scroll;
`

export const ProductForm = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ProductFormPhoto = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 5px;
    ${(props) => props.bg ?
        `background-image: url(${props.bg});` :
        `background-color: #ececec;`}
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

export const Input = styled.input`
    width: 300px;
    height: 40px;
    border-radius: 3px;
    background-color: #ffffff;
    border-style: none;
    border: 1px solid #ececec;
    padding: 5px;
    margin-top: 10px;
    outline: none;
`

export const Categories = styled.div`
    width: 300px;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-gap: 5px;
    /* border: 1px solid #ececec; */
    border-radius: 5px;
    margin-top: 10px;
    padding: 3p;
    & div{
        width: 100%;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px; 
        border: 1px solid #ececec;
        cursor: pointer;
        &:hover{
            opacity: 0.6;
        }
    }
`

export const AddCategory = styled.div`
    width: 300px;
    height: 40px;
    display: flex;
    align-items: center;
    margin-top: 10px;

    & input {
        width: 80%;
        height: 100%;
        border-style:none;
        border-radius: 3px 0px 0px 3px;
        border: 1px solid #ececec;
        background-color: #ffffff;
        outline: none;
        padding: 0px 3px;
    }

    & button{
        width: 20%;
        height: 100%;
        border-style:none;
        background-color: #000000;
        border-radius: 0px 3px 3px 0px;
        color: #ffffff;
        cursor: pointer;
    }
`

export const Sizes = styled.div`
    width: 300px;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-gap: 5px;
    /* border: 1px solid #ececec; */
    border-radius: 5px;
    margin-top: 10px;
    padding: 3px;
    & div{
        width: 100%;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px; 
        border: 1px solid #ececec;
        cursor: pointer;
        &:hover{
            opacity: 0.6;
        }
    }
`

export const AddSize = styled.div`
    width: 300px;
    height: 40px;
    display: flex;
    align-items: center;
    margin-top: 10px;

    & input {
        width: 40%;
        height: 100%;
        border-style:none;
        border-radius: 3px 0px 0px 3px;
        border: 1px solid #ececec;
        background-color: #ffffff;
        outline: none;
        padding: 0px 3px;
    }

    & button{
        width: 20%;
        height: 100%;
        border-style:none;
        background-color: #000000;
        border-radius: 0px 3px 3px 0px;
        color: #ffffff;
        cursor: pointer;
    }
`


export const SaveBtn = styled.button`
    width: 300px;
    height: 40px;
    border-style: none;
    border-radius: 3px;
    background-color: #000000;
    color: #ffffff;
    cursor: pointer;
    margin: 20px 0px;
`