// Hooks
import { useState } from 'react'

// API
import api from '../../services/api'

// Icons
import { BiSearchAlt } from 'react-icons/bi'

// CSS
import { Container, Content, InputAndSearchButton, ZipcodeInformations } from './styles'


export function Home() {
    const [inputValue, setInputValue] = useState('')
    const [cep, setCep] = useState({})

    // Utilizando o async, pois oq iremos fazer pode dar errado e como possui uma solicitação para uma api, pode demorar.
    async function handleSearch() {
        if (!inputValue) {
            alert("CEP inválido!")
            return
        }

        // Utilizando o await para informar para ele esperar a requisição acima
        try {
            const response = await api.get(`/${inputValue}/json`)
            setCep(response.data)
            setInputValue('')

        } catch (error) {
            alert("Ops, houve algum erro ao tentar localizar o CEP informado!")
            setInputValue("")
        }
    }

    return (
        <Container>
            <Content>

                <h1>Zipcode Location</h1>

                <InputAndSearchButton>
                    <input type="text" placeholder="Digite um CEP .." value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                    <button type="button" onClick={handleSearch}><BiSearchAlt /></button>
                </InputAndSearchButton>

                {Object.keys(cep).length > 0 && (
                    <ZipcodeInformations key={cep.cep}>
                        <div>
                            <h2>CEP: {cep.cep}</h2>
                        </div>

                        <div>
                            <span>Endereço: {cep.logradouro}</span>
                            <span>Bairro: {cep.bairro}</span>
                            <span>Cidade: {cep.localidade}</span>
                            <span>Estado: {cep.uf}</span>
                        </div>
                    </ZipcodeInformations>
                )}

            </Content>
        </Container>
    )
}