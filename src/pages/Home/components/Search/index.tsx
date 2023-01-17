import { ChangeEvent, FormEvent, useState } from "react";

import { SearchContainer } from "./styles";

interface publicationCountProps {
    publicationCount: number
    Search: (value: string) => void
}


export function Search({ publicationCount, Search }: publicationCountProps) {
    const [state, setState] = useState('');

    function handleSubmit() {       
        Search(state)
        
    }
    function changevoid(value:string){
        setState(value)

        if(value == ''){
            handleSubmit()
        } 

        
    }
    


    return (

        <SearchContainer>
            <div>
                <span>Publicações</span>
                <span>{publicationCount} publicações</span>
            </div>
            <form /* onSubmit={handleSubmit}*/>

                <input
                    type="text"
                    placeholder="Buscar conteúdo"
                    value={state}
                    onChange={e => changevoid(e.target.value)} />

                <button type="button" onClick={handleSubmit}>Salvar</button>
            </form>
        </SearchContainer>
    )
}