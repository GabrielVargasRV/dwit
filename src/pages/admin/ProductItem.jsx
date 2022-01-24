import styled from "styled-components";
import React, { useState } from 'react'
import LoadingSpinner from '../../components/loadingSpinner/index'
import { useNavigate } from 'react-router-dom'
import {db} from '../../firebase/index'

export const Container = styled.div`
    width: 100%;
    height: 200px;
    display: grid;
    grid-template-columns: 200px auto;
    grid-gap: 10px;
    background-color:#f9f9f9;
    border-radius: 5px;
    margin-bottom: 15px;
    padding: 5px;
    /* border: 1px solid #c1c1c1; */
`

export const Photo = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-image: ${(props) => `url(${props.bg})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    cursor: pointer;
`

export const Info = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #f9f9f9;
    padding: 5px;
`

export const Top = styled.div``

export const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Title = styled.h3`
`

export const Size = styled.p`
    background-color: #ececec;
    margin: 3px;
    padding: 3px;
    border-radius: 3px;
`

export const Sizes = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
`

export const Categories = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
`

export const Category = styled.p`
    background-color: #ececec;
    margin: 3px;
    padding: 3px;
    border-radius: 3px;
`

export const Price = styled.p`
`

export const EditBtn = styled.button`
    width: 120px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000000;
    border-radius: 5px;
    border-style: none;
    cursor: pointer;
    font-weight: bold;
    color: #ffffff;
    &:hover{
        opacity: 0.8;
    }
`

export const RemoveBtn = styled.button`
    width: 120px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FF3C3C;
    border-radius: 5px;
    border-style: none;
    cursor: pointer;
    font-weight: bold;
    color: #ffffff;
    border: 1px solid #f20000;
    &:hover{
        opacity: 0.8;
    }
`


const ProductItem = ({ data }) => {
    const navigate = useNavigate()
    const [deleting, setDeleting] = useState(false)

    const deleteItem = async () => {
        setDeleting(true)
        await db.collection('items').doc(data.id).delete()
        setDeleting(false)
    }

    return (
        <Container>
            <Photo bg={data.image} ></Photo>
            <Info>
                <Top>
                    <Title>{data.title}</Title>
                    <Sizes>
                        <p>Sizes:</p>
                        {data.sizes.map((size, index) => (
                            <Size key={`${size}-${index}`} >
                                <strong>{size.size}:</strong>
                                ${size.price}
                            </Size>
                        ))}
                    </Sizes>
                    <Categories>
                        <p>Categories:</p>
                        {data.category.map((category, index) => <Category key={`${category}-${index}`} >{category}</Category>)}
                    </Categories>
                </Top>
                <Bottom>
                    <EditBtn onClick={() => navigate(`/admin/${data.id}`)} >
                        Edit
                    </EditBtn>
                    <RemoveBtn onClick={deleteItem} >
                        {deleting ? (
                            <LoadingSpinner />
                        ) : (
                            <p>Delete</p>
                        )}
                    </RemoveBtn>
                </Bottom>
            </Info>
        </Container>
    )
}

export default ProductItem