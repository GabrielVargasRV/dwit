import styled, {keyframes} from 'styled-components'


const fadeInKeyFrames = keyframes`
    from{
        filter:blur(5px);
        opacity:0;
    }
    to{
        filter:blur(0px);
        opacity:1;
    }
`
export const Image = styled.div`
    width: 100%;
    height: 100%;
    background-image: ${(props) => `url(${props.bg})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 5px 5px 0px 0px;
    animation: ${fadeInKeyFrames} 0.5s ease;
`