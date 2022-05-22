import React from 'react'
import styled from 'styled-components'
import { Banner } from '../components/Banner'

const Cursor = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
    opacity: .5;
    width: 40px;
    height: 40px;
    margin: -20px 0 0 -20px;
    background: #87F0D5;
    border-radius: 50%;
    transition: all .2s linear;
`

function LandingPage() {
    const cursorMove = (e) => {
        let cursorItem = document.getElementById('cursorItem')
        cursorItem.style.transform = "translate(" + e.clientX + "px, " + e.clientY + "px )"
    }
    window.addEventListener('mousemove', (e) => {
        requestAnimationFrame(() => cursorMove(e))
    })
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Cursor id='cursorItem' />
            <Banner/>
        </div>
    )
}

export default LandingPage