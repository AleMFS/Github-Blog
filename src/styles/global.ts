import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }
  
  body {
    
    -webkit-font-smoothing: antialiased;
    background: ${props => props.theme.colors["base-background"]};   
    line-height: 1.6;
    
  }
  body, input, textarea, button {
    font-family: 'Nunito', sans-serif ;
    font-weight: 400;
    font-size: 1rem;    
  }

  input{
    :focus{
      outline:  0;
    box-shadow: 0 0 0 1px ${props => props.theme.colors["blue"]};
    }
  }
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
    
  ::-webkit-scrollbar {
    width: 0.4rem;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors["base-title"]}
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 2rem;
    background: ${({ theme }) => theme.colors["blue"]}
  }
`;

