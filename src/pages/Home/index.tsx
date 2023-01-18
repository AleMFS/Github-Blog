import { useEffect, useState } from "react";
import { PublicationCardType } from "../../@types/PublicationCard";
import { api, nameGithub } from "../../libs/axios";
import { Posts } from "./components/Posts";
import { Profile } from "./components/Profile";
import { Search } from "./components/Search";
import { HomeContainer } from "./styles";



export function Home() {



    const [publication, setPublication] = useState<PublicationCardType[]>([])
    const [publicationCount, setPublicationCount] = useState(0)
    const [search, setSearch] = useState('')

    function searchPublication(value: string) {
        setSearch(value)
    }


    async function getUserProfile() {
        const response = await api.get(
            `search/issues?q=${search ? search : ''}%20repo:${nameGithub}/Github-Blog`

        )
        setPublication(response.data.items)
        setPublicationCount(response.data.total_count)
    }


    useEffect(() => {


        getUserProfile()

    }, [search])

 



    return (
        <HomeContainer>
            <Profile />
            <Search publicationCount={publicationCount} Search={searchPublication} />
            <Posts data={publication} />

        </HomeContainer>
    )
}