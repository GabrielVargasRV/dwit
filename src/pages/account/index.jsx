import React,{useEffect} from 'react';
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
import { connect } from "react-redux";
import UserServices from "../../services/user.services";
import PaymentServices from "../../services/payment.services";
import { useNavigate } from 'react-router-dom'
import OrderItem from '../../components/orderItem/index'

const Account = ({user,orders}) => {
    const navigate = useNavigate();

    useEffect(() => {
        PaymentServices.getOrders(user.uid);
    },[]);

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
                        <SignoutBtn onClick={() => UserServices.signOut()} >Sign out</SignoutBtn>
                        {user.isAdmin ? (<AdminBtn onClick={() => navigate('/admin')} >Admin</AdminBtn>) : (<></>)}
                    </Profile>
                </ProfileContainer>
            </Content>
        </Container>
    )
}

const mapStateToProps = (state) => ({
    user: state.user,
    orders: state.orders,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps,mapDispatchToProps)(Account);