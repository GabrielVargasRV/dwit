import React, { useEffect, useState, useContext } from 'react';
import {
    Container,
    Content,
    Products,
    ProductForm,
    ProductFormPhoto,
    Input,
    Categories,
    AddCategory,
    Sizes,
    AddSize,
    SaveBtn
} from './styles'
import Context from '../../context/Context'
import { useNavigate, useParams } from 'react-router-dom'
import { db } from '../../firebase/index'
import ProductItem from './ProductItem.jsx'
import {useGetProductById} from '../../hooks/useGetProductById'

const Admin = () => {
    const productInitialState = {
        image: '',
        title: '',
        description: '',
        category: [],
        sizes: []
    }
    const navigate = useNavigate()
    const { id } = useParams()
    const { user } = useContext(Context)
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState(productInitialState)
    const [categoryText, setCategoryText] = useState('')
    const [sizeData, setSizeData] = useState({
        size: '',
        price: 0
    })

    const handleOnChange = (e) => {
        const value = e.target.value
        setProduct({
            ...product,
            [e.target.name]: value
        })
        console.log(product)
    }

    const addToCategory = () => {
        const categories = [...product.category, categoryText]
        setProduct({
            ...product,
            category: categories
        })
        setCategoryText('')
    }

    const deleteFromCategory = (index) => {
        const categories = product.category
        categories.splice(index, 1)
        setProduct({
            ...product,
            category: categories
        })
    }

    const addSize = () => {
        const sizes = [...product.sizes, { ...sizeData }]
        setProduct({
            ...product,
            sizes: sizes
        })
        setSizeData({
            size: '',
            price: 0
        })
    }

    const deleteSize = (index) => {
        const sizes = product.sizes
        sizes.splice(index, 1)
        setProduct({
            ...product,
            sizes: sizes
        })
    }


    const addProduct = async () => {
        if(!id){
            await db.collection('items').add(product)
            setProduct(productInitialState)
        }else{
            await db.collection('items').doc(id).set(product)
            setProduct(productInitialState)
            navigate('/admin')
        }
    }

    useEffect(() => {
        if (!user || !user.isAdmin) navigate('/account')
        else {
            if(id){
                useGetProductById(id,(res) => setProduct({...res}))
            }
            db.collection('items').onSnapshot((snapshot) => {
                const arr = []
                snapshot.docs.forEach((doc) => arr.push({id:doc.id,...doc.data()}))
                setProducts([...arr])
                console.log(arr)
            })
        }
    }, [id])

    return (
        <Container>
            <Content>
                <Products>
                    {products.map((item,index) => <ProductItem key={`${item.id}-${index}`} data={item} />)}
                </Products>
                <ProductForm>
                    <ProductFormPhoto bg={product.image} ></ProductFormPhoto>
                    <Input placeholder="Image url" name="image" value={product.image} onChange={handleOnChange} />
                    <Input placeholder="Title" name="title" value={product.title} onChange={handleOnChange} />
                    <Input placeholder="Description" name="description" value={product.description} onChange={handleOnChange} />
                    <p style={{ marginTop: '10px' }} >Categories:</p>
                    <Categories>
                        {product.category.map((category, index) => (
                            <div key={index} onClick={() => deleteFromCategory(index)} >
                                <p>{category}</p>
                            </div>
                        ))}
                    </Categories>
                    <AddCategory>
                        <input
                            value={categoryText}
                            onChange={(e) => setCategoryText(e.target.value)}
                            type="text"
                            placeholder="Add a category"
                        />
                        <button
                            onClick={addToCategory}
                            type="button"
                        >Add</button>
                    </AddCategory>
                    <p style={{ marginTop: '10px' }} >Sizes:</p>
                    <Sizes>
                        {product.sizes.map((size, index) => (
                            <div key={index} onClick={() => deleteSize(index)} >
                                <p><strong>{size.size}: </strong>${size.price}</p>
                            </div>
                        ))}
                    </Sizes>
                    <AddSize>
                        <input
                            value={sizeData.size}
                            onChange={(e) => setSizeData({ ...sizeData, size: e.target.value })}
                            type="text"
                            placeholder="Size"
                        />
                        <input
                            value={sizeData.price}
                            onChange={(e) => setSizeData({ ...sizeData, price: e.target.value })}
                            type="number"
                            placeholder="Price"
                        />
                        <button
                            onClick={addSize}
                            type="button"
                        >Add</button>
                    </AddSize>
                    <SaveBtn onClick={addProduct} >{id ? 'Edit' : 'Save'}</SaveBtn>
                </ProductForm>
            </Content>
        </Container>
    )
}

export default Admin