import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 2rem 0 0 0;
`

export const Content = styled.div`
    width: 100%;
    max-width: 800px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    padding: 1rem;
    border-radius: 0.5rem;

    box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.3);

    h1 {
        font-size: 2rem;
        font-weight: 600;
        animation: flipTitle 2s;
    }

    @keyframes flipTitle {
        from {
            transform: rotateX(90deg);
        }

        to {
            transform: rotateX(0deg);
        }
    }
`

export const InputAndSearchButton = styled.div`
    width: 100%;
    
    display: flex;
    align-items: center;
    gap: 0.5rem;

    padding: 0.5rem 1rem;
    border-radius: 0.5rem;

    background: #FAFAFA;
    border: 2px solid #C0C0C0;

    &:hover {
        transition: .3s;
        border: 2px solid #4F4F4F;    
    }

    input {
        width: 100%;
        font-size: 1.5rem;

        background: transparent;
    }

    button {
        width: 100%;
        max-width: 1.8rem;

        display: flex;
        justify-content: center;

        font-size: 2rem;

        background: transparent;

        &:hover {
            transition: .3s;
            transform: scale(1.1);
        }
    }
`

export const ZipcodeInformations = styled.div`
    width: 100%;
    max-width: 30rem;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    padding: 1rem;
    border-radius: 0.5rem;

    box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.3);
`

export const GapInfos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    p {
        font-weight: 600;
    }
`

export const IconAndTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    i {
        color: green;
    }

    span {
        font-size: 1.2rem;
    }
`