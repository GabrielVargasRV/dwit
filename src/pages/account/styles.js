import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: calc(100vh - 120px);
    background-color: #F5F7FA;
    padding-top: 20px;
`

export const Content = styled.div`
    grid-area: "content";
    width: 940px;
    height: 100%;
    display: grid;
    grid-template-columns: 70% 30%;
    grid-template-areas: "orders profile";
    margin: 0 auto;
    grid-gap: 10px;

    @media (max-width: 940px){
        width: 100%;
        padding: 0 10px;
        grid-template-columns: 60% 40%;
    }

    @media (max-width: 740px){
        grid-template-columns: 100%;
        grid-template-areas:"profile"
                            "orders";
    }
`

export const Oders = styled.div`
    grid-area: orders;
`

export const ProfileContainer = styled.div`
    grid-area: profile;
`

export const Profile = styled.div`
    width:100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    border: 1px solid #c1c1c1;
    padding: 10px;
`

export const ProfilePhoto = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 1px solid #c1c1c1;
`

export const Name = styled.h3`
    margin-top:10px;
`

export const SignoutBtn = styled.button`
    width: 100%;
    height: 40px;
    border-style: none;
    border-radius: 5px;
    background-color: #000000;
    color: #ffffff;
    font-weight: bold;
    margin:10px 0px;
    cursor: pointer;
`

export const AdminBtn = styled.button`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    background-color: #ffffff;
    color: #000000;
    border-style: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    margin: 10px 0px;
    border: 2px solid #000000;
`
export const AvaliableMoney = styled.div`
    width: 100%;
    padding: 10px;

    & p{
        color: #505050;
    }

    & h3{
        color: #69B63D;
        font-size: 24px;
    }
`
