import React, { useContext } from 'react';
import {
    Container,
    Content,
    Oders,
    Profile,
    ProfilePhoto,
    Name,
    SignoutBtn,
    AdminBtn,
    AvaliableMoney,
    ProfileContainer
} from './styles'
import UserContext from '../../context/userState/Context'
import CartContext from '../../context/cartState/Context'
import { useNavigate } from 'react-router-dom'
import OrderItem from '../../components/orderItem/index'

const Account = () => {
    const navigate = useNavigate()
    const { user, logout } = useContext(UserContext)
    const { orders } = useContext(CartContext)

    return (
        <Container>
            <Content>
                <Oders>
                    {orders.length ? (
                        <div>
                            <h2 style={{marginBottom: '10px'}} >Orders:</h2>
                            {orders.map((order) => (
                                <OrderItem key={order.id} data={order} />
                            ))}
                        </div>
                    ) : (
                        <h2>No Orders</h2>
                    )}
                </Oders>
                <ProfileContainer>
                    <Profile>
                        <ProfilePhoto src={user.photo} />
                        <Name>{user.name}</Name>
                        <AvaliableMoney>
                            <p>Available</p>
                            <h3>${user.money} USD</h3>
                        </AvaliableMoney>
                        <SignoutBtn onClick={() => logout()} >Sign out</SignoutBtn>
                        {user.isAdmin ? (<AdminBtn onClick={() => navigate('/admin')} >Admin</AdminBtn>) : (<></>)}
                    </Profile>
                </ProfileContainer>
            </Content>
        </Container>
    )
}

export default Account