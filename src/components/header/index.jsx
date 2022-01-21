import React, { useContext, useState } from 'react'
import {
    Container,
    InputContainer,
    Input,
    InputResults,
    Logo,
    Top,
    Bottom,
    Checkout,
    ShoppingCart,
    Product
} from './styles'
import { Link } from 'react-router-dom'
import Context from '../../context/Context'
import { useGetProductByTitle } from '../../hooks/useGetProductByTitle'

const Header = () => {
    const { cart } = useContext(Context)
    const [search, setSearch] = useState('')
    const [searchData, setSearchData] = useState([])
    const [inputFocus, setInputFocus] = useState(false)

    const handleOnChange = (e) => {
        if (e.target.value.length > 0) setInputFocus(true)
        setSearch(e.target.value)
        useGetProductByTitle(e.target.value, (res) => {
            setSearchData(res)
        })
    }

    return (
        <Container>
            <Top>
                <Link to="/" style={{ textDecoration: 'none' }} >
                    <Logo>Dwit</Logo>
                </Link>
                <InputContainer searching={inputFocus} >
                    <Input
                        placeholder="🔍"
                        value={search}
                        onChange={handleOnChange}
                        searching={inputFocus}
                        onFocus={() => setInputFocus(true)}
                        onBlur={() => setTimeout(() => {setInputFocus(false)},300)} />
                    <InputResults
                        searching={inputFocus}
                        h={(searchData.length * 50) + 3} >
                        {searchData.map((product, index) => {
                            return (
                            <Product
                                key={`${product.id}-${Date.now()}`}
                                bg={product.image}
                                to={`/product/${product.id}`}
                                >
                                <div></div>
                                <p>{product.title}</p>
                            </Product>
                            )
                        })}
                    </InputResults>
                </InputContainer>
                <Checkout to="/checkout" >
                    <p>Checkout</p>
                    <ShoppingCart className="fas fa-shopping-cart">
                        <p>{cart.length}</p>
                    </ShoppingCart>
                </Checkout>
                <Checkout to="/account" >
                    <p>Login</p>
                    <ShoppingCart className="fas fa-user">
                    </ShoppingCart>
                </Checkout>
            </Top>
            <Bottom>
                <p>Male</p>
                <p>Famela</p>
                <p>Kids</p>
            </Bottom>
        </Container>
    )
}

export default Header