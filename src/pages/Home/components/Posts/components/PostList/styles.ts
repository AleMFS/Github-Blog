import styled from "styled-components";

export const PostListContainer = styled.div`
    width: 100%;
    min-width: 50%;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    background: ${props => props.theme.colors["base-post"]};
    border-radius: 10px;
    border: 1px solid transparent;
    transition: box-shadow 0.3s ;
    

    &:hover{        
        border: 1px solid ${props => props.theme.colors.blue};        
        box-shadow: 0px 0px 7px 4px rgba(50,146,248,0.73);
        cursor: pointer;
        
    }

    
`
export const PostInfo = styled.div`
    display: flex;
    justify-content: space-between;
    

    h3{
        font-size: 1.25rem;
        font-weight: bold;
        line-height: 1.6;
        color: ${props => props.theme.colors["base-title"]};
        max-width: 17.75rem;
    }
    time{
        display: flex;        
        font-size:0.875rem ;
        color: ${props => props.theme.colors["base-span"]};
        margin-top: 0.5rem;
    }
`

export const PublicationCardContent = styled.div`
  margin-top: 1.25rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
  pointer-events: none;
  color: ${props => props.theme.colors["base-text"]};
  
`;