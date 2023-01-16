import styled from "styled-components";

export const ProfileContainer = styled.section`
    display: flex;
    background: ${props => props.theme.colors["base-profile"]};
    padding: 2rem 2.5rem;
    border-radius: 10px;
    gap: 2rem;

    img{
        width: 9.25rem;
        border-radius: 8px;
    }  

`

export const InfoProfile = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    
   

    div{
        display: flex;
    }
    >div:first-child{
        width: 100%;
        justify-content: space-between;

        h3{
        font-size: 1.5rem;
        font-weight: bold;
        line-height: 1.3;
        color: ${props => props.theme.colors["base-title"]};
    }

    span {
        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 0.75rem;
        font-weight: bold;
        line-height: 1.6;
        color: ${props => props.theme.colors.blue};
        gap: 0.5rem;
        border-bottom: 1px solid transparent;
        

        svg{
            font-size: 12px;
        }

        a{
        color: inherit;
           
        }

        &:hover{
        border-bottom: 1px solid ${props => props.theme.colors.blue};
    }
    }
    }

   

    p{
        line-height: 1.6;
        color: ${props => props.theme.colors["base-text"]};
        margin-top: 1rem;
    }


`

export const Infos = styled.div`
    display: flex; 
    
    gap: 1.5rem;
`

export const InfoStatusIcon = styled.div`
    margin-top: 1.5rem;
    color: ${props => props.theme.colors["base-subtitle"]};    
    display: flex;    
    align-items: center;
    gap: 0.5rem;

    svg{
        color: ${props => props.theme.colors["base-label"]};
    }

   
`
