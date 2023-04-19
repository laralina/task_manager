import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`  
${reset}

  * {
    box-sizing: border-box;
    font-family: 'Pretendard Variable';


    a{
      text-decoration:none;
    }

    button{
      cursor: pointer;
    }
  
    body{
      font-family: 'Pretendard Variable';
    }
  }


`;

export default GlobalStyle;
