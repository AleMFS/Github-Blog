import styled from "styled-components";

export const PostCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    
`

export const PostCardHeader = styled.header`
    display: flex;
    flex-direction: column;
    background: ${props => props.theme.colors["base-profile"]};
    padding: 2rem;

    h3{

    }

`

export const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    color: ${props => props.theme.colors.blue};
    font-size: 0.75rem;    
    font-weight: bold;

    a{
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: inherit;
        
        :hover{
            border-bottom: 1px solid ${props => props.theme.colors.blue};
        }
    }
    
`
export const TitlePostCard = styled.p`
    font-size: 1.5rem ;
    font-weight: bold;
    line-height: 1.3;
    margin-top: 1.25rem;
    color: ${props => props.theme.colors["base-title"]};
`

export const InfoPostCard = styled.section`
    display: flex;
    gap: 2rem;
    margin-top: 0.5rem;

    div{
        display: flex;
        align-items :center ;
        
        gap: 0.5rem;
        color: ${props => props.theme.colors["base-span"]};
    }
`