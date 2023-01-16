import { InfoStatusIcon } from "./styles";
import { ReactNode } from "react"

interface InfoStatusProps {
    icon: ReactNode;
    info: string | number
}

export function InfoStatus({ icon, info }: InfoStatusProps) {

    return (

        <InfoStatusIcon>
            {icon}
            <span>{info}</span>
        </InfoStatusIcon>

    )
}