import { PublicationCardType } from "../../../../@types/PublicationCard";
import { PostList } from "./components/PostList";
import {  PostsContainer } from "./styles";

interface DataProps {
    data: PublicationCardType[]
}

export function Posts({ data }: DataProps) {

    return (
        <PostsContainer>
            {data.map((publication) => (
                <PostList publication={publication} key={publication.id}/>
            ))}

        </PostsContainer>
    )
}