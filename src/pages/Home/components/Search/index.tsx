import { ChangeEvent, FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { SearchContainer } from "./styles";

interface publicationCountProps {
    publicationCount: number
    Search: (value: any) => void
}
interface FormState {
    text: string;
  }

export function Search({ publicationCount, Search }: publicationCountProps) {
    const [state, setState] = useState<FormState>({ text: '' });

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      Search(state.text)
    }

   

    return (

        <SearchContainer>
            <div>
                <span>Publicações</span>
                <span>{publicationCount} publicações</span>
            </div>
            <form onSubmit={handleSubmit}>
                
                    <input 
                    type="text"
                     placeholder="Buscar conteúdo" 
                     value={state.text} 
                     onChange={e => setState({ text: e.target.value })} />
                
                <button type="submit">Salvar</button>
            </form>
        </SearchContainer>
    )
}