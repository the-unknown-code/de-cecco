import styled from 'styled-components'

export const StyledContainer = styled.div`
    position: relative;
    width: 100%;
    height: 480px;
    max-width: 1280px;
    margin: 0 auto;
    `

export const StyledContainerGrid = styled.div`
    position: relative;
    width: 100%;
    height: 480px;
    display: flex;
    flex-wrap: nowrap;
    max-width: 1280px;
    margin: 0 auto;
    gap: 1rem;

    > div {
        flex: 0 0 100%;
    }

    @media screen and (min-width: 576px) {
        width: 100%;  

        > div {
            flex: 0 0 50%;
        }
    }

    @media screen and (min-width: 756px) {
        width: 100%;  

        > div {
            flex: auto;
        }
    }
    `