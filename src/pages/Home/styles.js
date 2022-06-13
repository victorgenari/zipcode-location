import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 2rem 0 0 0;
`

export const Content = styled.div`
    width: 100%;
    max-width: 1200px;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 1rem;
    border-radius: 0.5rem;

    border: 2px solid #000;

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

    input {
        width: 100%;

        font-size: 1.5rem;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;

        border: 2px solid #C0C0C0;

        &:hover {
            transition: .3s;
            border: 2px solid #4F4F4F;    
        }
    }

    button {
        width: 100%;
        max-width: 1.8rem;

        display: flex;
        justify-content: center;

        font-size: 2rem;

        background: transparent;
    }
`

export const ZipcodeInformations = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 1rem;
    border-radius: 0.5rem;

    border: 2px solid #FF0000;

    div {
        display: flex;
        justify-content: space-around;

        span {
            font-size: 1.2rem;
        }
    }
`