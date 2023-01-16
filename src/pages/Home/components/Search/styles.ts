import styled from "styled-components";

export const SearchContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction:column;
    margin-top: 4.5rem;
    gap: 0.75rem;

    div{
        display: flex;
        justify-content: space-between;

    
        span:first-child{
            font-size: 1.125rem;
            font-weight: bold;
            line-height: 1.6;
            color: ${props => props.theme.colors["base-subtitle"]};
        }
        span:last-child{
            font-size: 0.875rem;
            line-height: 1.6;
            color: ${props => props.theme.colors["base-span"]};
        }

    }

    form{
        display: flex;
        gap: 1rem;

        input{
        width: 100%;
        padding: 0.75rem 1rem;
        background: ${props => props.theme.colors["base-input"]};
        border: none;
        border-radius: 6px;
        color: ${props => props.theme.colors["base-text"]};

        &::placeholder{
            color: ${props => props.theme.colors["base-label"]};
        }
    }

    button{
        padding: 0.75rem 1rem;
        border-radius: 6px;
        background: ${props => props.theme.colors["base-border"]};
        border: none;
        color: ${props => props.theme.colors["base-text"]};
        border: 1px solid transparent;
        transition: box-shadow 0.3s;

        &:hover{        
        border: 1px solid ${props => props.theme.colors.blue};        
        box-shadow: 0px 0px 7px 4px rgba(50,146,248,0.73);
        cursor: pointer;
        
    }
    }
    }
    

`