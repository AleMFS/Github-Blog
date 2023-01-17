import styled from "styled-components";

export const PostContentContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2.5rem 2rem;
    margin-bottom: 8rem;

    h1,h2,h3,p{
        color: ${props => props.theme.colors["base-text"]};
    }
    a{
        font-size: 1.5rem;
        
    }
`