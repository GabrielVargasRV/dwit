import styled from 'styled-components';

export const Container = styled.div`
    width: 500px;
    height: 300px;
    display: grid;
    grid-template-rows: 40px auto 40px;
    background-color: #ffffff;
    border-radius: 10px;
    border: 1px solid #ececec;
    @media (max-width: 510px){
        width: 100%;
    }
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Header = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: end;
    justify-content: space-between;
    border-bottom: 1px solid #ececec;
    padding: 10px;
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

export const Table = styled.table`
    width: 100%;
    height: 200px;
    text-align: center;
    font-size: 18px;
    margin-top: 20px;
    border-radius: 3px;
    border-collapse: collapse;

    
    & th,td{
    }

    @media (max-width: 500px){
        &th,td{
            font-size: 14px;
        }
    }

`