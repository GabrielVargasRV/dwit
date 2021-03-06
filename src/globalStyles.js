import { createGlobalStyle, keyframes } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  body{
    /* background-color: #F5F7FA; */
    background-color: #F5F7FA;
    opacity: 1;
    background-image:  radial-gradient(#FFC300 0.5px, transparent 0.5px), radial-gradient(#FFC300 0.5px, #F5F7FA 0.5px);
    background-size: 44px 44px;
    background-position: 0 0,22px 22px;
  }

  .lds-ring {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #fff;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #FFC300 transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  * {
    scrollbar-width: auto;
    scrollbar-color: #c1c1c1 #ffffff;
  }

  *::-webkit-scrollbar {
    width: 16px;
  }

  *::-webkit-scrollbar-track {
    background: #F5F7FA;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #202020;
    /* border-radius: 10px; */
    /* border: 3px solid #ffffff; */
  }

`;

export default GlobalStyle;