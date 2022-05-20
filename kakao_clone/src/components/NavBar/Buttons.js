import React from 'react'
import styled from 'styled-components'

const BackButton = styled.button`
    background: white;
    border: none;
    outline: none;
    font-size: 28px;
    cursor: pointer;
`

const MiddleButton = styled.button`
    background: white;
    border: none;
    outline: none;
    font-size: 17px;
    font-weight: bold;
    cursor: pointer;
    margin-left: 21px;
    margin-right: 21px;
    height: 70px;
    letter-spacing: -1px;
`

const MenuButton = styled.button`
    background: white;
    border: none;
    outline: none;
    cursor: pointer;
    margin-left: 9px;
    margin-right: 9px;
    width: 32px;
    height: 32px;
    &:hover {
        background: #C7C7C7;
        border-radius: 45px;
    }
`

export { BackButton, MiddleButton, MenuButton }