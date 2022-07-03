import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); // é o mesmo que 1fr 1fr 1fr (repete 3 vezes o aegundo argumento)
    gap: 2rem;//distancia
    margin-top: -10rem;

    div{
        background: var(--shape);
        padding: 1.5rem;
        border-radius: 0.25rem;
        color: var(--text-title);

        header{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        
        strong{
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
        }

        &.highlight-background{
            background: var(--shape);
        }
    }
`