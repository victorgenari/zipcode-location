// Hooks
import { useState } from 'react'

// API
import api from '../../services/api'

// Icons
import { BiSearchAlt } from 'react-icons/bi'
import { ImLocation2 } from 'react-icons/im'
import { FaCity, FaMapMarkedAlt } from 'react-icons/fa'
import { GiRoad, GiModernCity, GiAerialSignal } from 'react-icons/gi'


// CSS
import { Container, Content, GapInfos, IconAndTitle, InputAndSearchButton, ZipcodeInformations } from './styles'


export function Home() {
    const [inputValue, setInputValue] = useState('')
    const [cep, setCep] = useState({})

    // Utilizando o async, pois oq iremos fazer pode dar errado e como possui uma solicitação para uma api, pode demorar.
    async function handleSearch() {
        if (!inputValue) {
            alert("CEP inválido!")
            return
        }

        // Utilizando o await para informar para ele esperar a requisição
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

                <div>
                    <h1>Zipcode Location</h1>
                </div>

                <InputAndSearchButton>
                    <input type="text" placeholder="Digite um CEP .." value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                    <button type="button" onClick={handleSearch}><BiSearchAlt /></button>
                </InputAndSearchButton>

                {Object.keys(cep).length > 0 && (
                    <ZipcodeInformations key={cep.cep}>

                        <GapInfos>
                            <div>
                                <IconAndTitle>
                                    <i><ImLocation2 size={19} /></i>
                                    <span>CEP:</span>
                                </IconAndTitle>
                                <p>{cep.cep}</p>
                            </div>

                            <div>
                                <IconAndTitle>
                                    <i><GiRoad size={20} /></i>
                                    <span>Local:</span>
                                </IconAndTitle>
                                <p>{cep.logradouro}</p>
                            </div>

                            <div>
                                <IconAndTitle>
                                    <i><GiModernCity size={20} /></i>
                                    <span>Bairro:</span>
                                </IconAndTitle>
                                <p>{cep.bairro}</p>
                            </div>
                        </GapInfos>

                        <GapInfos>
                            <div>
                                <IconAndTitle>
                                    <i><FaCity size={20} /></i>
                                    <span>Cidade:</span>
                                </IconAndTitle>
                                <p>{cep.localidade}</p>
                            </div>

                            <div>
                                <IconAndTitle>
                                    <i><FaMapMarkedAlt size={20} /></i>
                                    <span>Estado:</span>
                                </IconAndTitle>
                                <p>{cep.uf}</p>
                            </div>

                            <div>
                                <IconAndTitle>
                                    <i><GiAerialSignal size={20} /></i>
                                    <span>DDD:</span>
                                </IconAndTitle>
                                <p>{cep.ddd}</p>
                            </div>
                        </GapInfos>
                    </ZipcodeInformations>
                )}

            </Content>
        </Container>
    )
}