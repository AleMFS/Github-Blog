import { InfoPostCard, NavContainer, PostCardContainer, PostCardHeader, TitlePostCard } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faChevronLeft, faArrowUpRightFromSquare, faComment ,faCalendarDay} from '@fortawesome/free-solid-svg-icons'
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../libs/axios";
import { PublicationType } from "../../@types/Publication";
import { dateFormatter } from "../../utils/formatter";
import ReactMarkdown from 'react-markdown';
import { PostContent } from "./PostContent";

export function Issues() {
    const { id } = useParams()
    const [publication,setPublication] = useState<PublicationType | null>(null)
    const data = publication?.created_at

    // https://api.github.com/repos/AleMFS/Github-Blog/issues/1

    async function getUserProfile() {
        const response = await api.get(
            `/repos/AleMFS/Github-Blog/issues/${id}`
        )
        setPublication(response.data)
    }

    console.log(publication)


    useEffect(() => {
        getUserProfile()

    }, [])
    

    return (
        <PostCardContainer>
            <PostCardHeader>
                <NavContainer>
                    <NavLink to='/'>
                        <FontAwesomeIcon icon={faChevronLeft} />
                        VOLTAR
                    </NavLink>
                    <NavLink to='/'>
                        VER NO GITHUB
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </NavLink>
                </NavContainer>
                <TitlePostCard>{publication?.title}</TitlePostCard>
                <InfoPostCard>
                    <div>
                        <FontAwesomeIcon icon={faGithub} />
                        <p>{publication?.user.login}</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faComment} />
                        <p>{publication?.comments} comentários</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faCalendarDay} />
                        <time>{data ? dateFormatter.format(new Date(data)):''}</time>
                    </div>
                </InfoPostCard>
            </PostCardHeader>
            <PostContent body={publication?.body}/>


        </PostCardContainer>
    )
}