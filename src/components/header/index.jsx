import React, { useState } from 'react'
import {
    Container,
    InputContainer,
    Input,
    InputResults,
    Logo,
    Top,
    Bottom,
    Product,
    CategoryBtn,
    CartIcon,
    HeartIcon,
    UserIcon
} from './styles'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Cart from "../../services/cart.services";
import Products from "../../services/products.services";
import { connect } from "react-redux";

const Header = ({cart}) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    const [searchData, setSearchData] = useState([]);
    const [inputFocus, setInputFocus] = useState(false);

    const handleOnChange = (e) => {
        if (e.target.value.length > 0) setInputFocus(true)
        setSearch(e.target.value)
        Products.getByTitle(e.target.value,(res) => {
            setSearchData(res)
        });
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
                        onBlur={() => setTimeout(() => { setInputFocus(false) }, 150)} />
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
                <CartIcon onClick={() => navigate('/checkout')} className="fas fa-shopping-cart">
                    <p>{cart.length}</p>
                </CartIcon>
                <HeartIcon onClick={() => navigate('/favorites')} className="fas fa-heart">
                </HeartIcon>
                <UserIcon onClick={() => navigate('/account')} className="fas fa-user">
                </UserIcon>
            </Top>
            <Bottom>
                <CategoryBtn
                    onpath={location.pathname === '/' ? 1 : 0}
                    onClick={() => navigate('/')}
                >All</CategoryBtn>
                <CategoryBtn
                    onpath={location.pathname === '/category/men' ? 1 : 0}
                    onClick={() => navigate('/category/men')}
                >Man</CategoryBtn>
                <CategoryBtn
                    onpath={location.pathname === '/category/women' ? 1 : 0}
                    onClick={() => navigate('/category/women')}
                >Woman</CategoryBtn>
            </Bottom>
        </Container>
    )
}

const mapStateToProps = (state) => ({
    cart: state.cart
});

const mapDispatchToProps = (dispatch) => ({});


export default connect(mapStateToProps,mapDispatchToProps)(Header);