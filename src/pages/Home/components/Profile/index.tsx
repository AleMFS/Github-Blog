import { InfoProfile, Infos, ProfileContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faUserGroup, faFolder } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { InfoStatus } from "./InfoStatus";
import { useEffect, useState } from "react";
import { ProfileType } from "../../../../@types/Profile";
import { api, nameGithub } from "../../../../libs/axios";

export function Profile() {
    const [user, setUser] = useState<ProfileType | null>(null)

    async function getUserProfile() {
        const response = await api.get(`users/${nameGithub}`, {
            params: {
                q: ''
            }
        })
        setUser(response.data)
    }    

    useEffect(() => {
        getUserProfile()

    }, [])


    return (
        <ProfileContainer>
            <img src={user?.avatar_url} alt="" />
            <InfoProfile>
                <div>
                    <h3>{user?.name}</h3>
                    <span>
                        <a href={user?.html_url} target='_blank'>
                            GITHUB
                        </a>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />


                    </span>
                </div>
                <p>{user?.bio}</p>
                <Infos>
                    <InfoStatus icon={<FontAwesomeIcon icon={faGithub} />} info={`${user?.login}`} />
                    <InfoStatus icon={<FontAwesomeIcon icon={faFolder} />} info={`${user?.public_repos} repositórios`} />
                </Infos>
            </InfoProfile>

        </ProfileContainer>
    )
}