import React from 'react'
import styled from 'styled-components'

const StartButton = styled.button`
    border-radius: 5px;
    background: #0077FF;
    cursor: pointer;
    color: white;
    font-size: 18px;
    text-align: center;
    width: 210px;
    height: 40px;
    border: none;
    outline: none;
    font-weight: 700;
    transition: all 0.08s linear;
    &:hover {
        background: #2053FF;
    }
    position: absolute;
    left: 9.2%;
    top: 47%;
`

export { StartButton }