import React from 'react'
import styled from 'styled-components'

const CompanyButton = styled.button`
    margin-left: 15px;
    cursor: pointer;
    font-size: 23px;
    font-weight: 700;
    border: none;
    outline: none;
    background: none;
    color: white;
`

const MenuButton = styled.button`
    margin-left: 3px;
    margin-right: 3px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    border: none;
    outline: none;
    background: none;
    color: #B1C0CB;
    transition: all 0.05s linear;
    &:hover {
        color: white;
    }
`

const Middle = styled.button`
    margin-left: 3px;
    margin-right: 3px;
    cursor: default;
    font-size: 14px;
    border: none;
    outline: none;
    background: none;
    color: #64737E;
`

export { CompanyButton, MenuButton, Middle }