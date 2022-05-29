import React from "react"
import styled from "styled-components"
import { RiUserLine, RiArrowLeftRightFill } from 'react-icons/ri'
import { BiMessageRoundedDetail } from "react-icons/bi"
import { FiSettings, FiBell } from 'react-icons/fi'
import { BiSearch } from 'react-icons/bi'
import { AiOutlineMinus } from 'react-icons/ai'

const IconBlock = styled.div`
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border: none;
    outline: none;
`

const Icon = styled.button`
    width: 40px;
    height: 40px;
    background: none;
    border-radius: 50%;
    border: none;
    outline: none;
    cursor: pointer;
    color: #5B5B5B;
    transition: all .1s linear;
    &:hover {
        color: white;
    }
    margin-left: 5px;
    margin-right: 5px;
`

function BarItems() {
    return (
        <IconBlock>
            <Icon>
                <RiArrowLeftRightFill style={{ width: '25px', height: '25px' }}/>
            </Icon>
            <AiOutlineMinus style={{ color: '#5B5B5B' }} />
            <Icon>
                <BiSearch style={{ width: '25px', height: '25px' }}/>
            </Icon>
            <Icon>
                <RiUserLine style={{ width: '25px', height: '25px' }}/>
            </Icon>
            <Icon>
                <BiMessageRoundedDetail style={{ width: '25px', height: '25px' }}/>
            </Icon>
            <Icon>
                <FiBell style={{ width: '25px', height: '25px' }}/>
            </Icon>
            <Icon>
                <FiSettings style={{ width: '25px', height: '25px' }}/>
            </Icon>  
        </IconBlock>

    )
}

export default BarItems