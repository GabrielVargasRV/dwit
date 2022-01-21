import styled from "styled-components"

export const ContainerLoading = styled.div`
    width: 100%;
    height: 200px;
    display: grid;
    grid-template-columns: 200px auto;
    grid-gap: 10px;
    background-color:#f9f9f9;
    border-radius: 5px;
    margin-bottom: 15px;
    padding: 5px;
    box-shadow: 0px 0px 8px -3px rgba(0,0,0,0.22);
`

export const PhotoLoading = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background: #c7c7c7;
`

export const InfoLoading = styled.div`
    width: 100%;
    height: 100%;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #f9f9f9;
`

export const TopLoading = styled.div``

export const BottomLoading = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const TitleLoading = styled.div`
    height: 20px;
    width: 150px;
    background-color: #c7c7c7;
    margin-bottom: 5px;
`

export const SizeLoading = styled.div`
    height: 20px;
    width: 50px;
    background-color: #c7c7c7;
`

export const PriceLoading = styled.div`
    height: 20px;
    width: 70px;
    background-color: #c7c7c7;
`

export const RemoveBtnLoading = styled.div`
    height: 50px;
    width: 120px;
    background-color: #c7c7c7;
`