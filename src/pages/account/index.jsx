import React, { useState, useContext } from 'react';
import {
    Container,
    Content,
    Oders,
    Profile,
    ProfilePhoto,
    Name,
    SignoutBtn,
    AdminBtn
} from './styles'
import UserContext from '../../context/userState/Context'
import OrderSummaty from '../../components/orderSummary/index'
import {useNavigate} from 'react-router-dom'

const Account = () => {
    const navigate = useNavigate()
    const [orders, setOrders] = useState([])
    const { user,logout } = useContext(UserContext)


    return (
        <Container>
            <Content>
                <Oders>
                    {orders.length ? (
                        orders.map((order) => {

                        })
                    ) : (
                        <h2>No Orders</h2>
                    )}
                </Oders>
                <Profile>
                    <ProfilePhoto src={user.photo} />
                    <Name>{user.name}</Name>
                    <SignoutBtn onClick={() => logout()} >Sign out</SignoutBtn>
                    {user.isAdmin ? (<AdminBtn onClick={() => navigate('/admin')} >Admin</AdminBtn>) : (<></>)}
                    <h3>Current cart:</h3>
                    <OrderSummaty/>
                </Profile>
            </Content>
        </Container>
    )
}

export default Account