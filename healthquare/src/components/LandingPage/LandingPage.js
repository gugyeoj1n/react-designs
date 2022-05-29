import React from 'react'
import NavBar from '../NavBar/NavBar'
import styled, { createGlobalStyle } from 'styled-components'
import TopBar from './TopBar'
import MoveButton from './MoveButton'
import Article from './Articles/Article'

const GlobalStyle = createGlobalStyle`
    body {
        background: lightgray;
    }
`

const MainBlock = styled.div`
    width: 800px;
    height: 5000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: lightgray;
`

function LandingPage() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <GlobalStyle />
            <NavBar />
            <MoveButton />
            <MainBlock>
                <TopBar />
                <Article/>
            </MainBlock>
        </div>
    )
}

export default LandingPage