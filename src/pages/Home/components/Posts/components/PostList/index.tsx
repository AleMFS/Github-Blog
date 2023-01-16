import { PublicationCardType } from "../../../../../../@types/PublicationCard";
import { dateFormatter } from "../../../../../../utils/formatter";
import { PostInfo, PostListContainer, PublicationCardContent } from "./styles";
import moment from 'moment';
import { NavLink, useParams } from "react-router-dom";







interface PostListProps {
    publication: PublicationCardType
}


export function PostList({ publication }: PostListProps) {
    const { title, body, created_at ,number} = publication
    const date = dateFormatter.format(new Date(created_at))
    


    return (
        <PostListContainer>
            <NavLink to={`Issues/${number}`} >
                <PostInfo>
                    <h3>{title}</h3>
                    <time title={date}>{date}</time>
                </PostInfo>
                <PublicationCardContent>
                    {body}
                </PublicationCardContent>
            </NavLink>
        </PostListContainer>
    )
}