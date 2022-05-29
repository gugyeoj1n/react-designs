import React from 'react'
import styled from 'styled-components'
import BarItems from './BarItems'

const MainBar = styled.div`
    position: absolute;
    left: 73%;
    top: 50%;
    transform: translateY(-50%);
    position: fixed;
    width: 50px;
    height: 350px;
    border-radius: 20px;
    background: #EDEDED;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

function NavBar() {
  return (
    <MainBar>
        <BarItems />
    </MainBar>
  )
}

export default NavBar