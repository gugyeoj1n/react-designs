import React from 'react'
import styled, { css } from 'styled-components'
import { RiArrowRightCircleLine, RiArrowLeftCircleLine } from 'react-icons/ri'

const BaseButton = styled.button`
    position: absolute;
    ${ props => {
        if(props.direction === 'left') {
            return css`
                left: 17%;
                top: 50%;
                transform: translate(-17%, -50%);
            `
        } else {
            return css`
                left: 83%;
                top: 50%;
                transform: translate(-83%, -50%);
            `
        }
    }}
    position: fixed;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    color: #5B5B5B;
    transition: all .1s linear;
    &:hover {
        color: white;
    }
`

function MoveButton() {
    return (
        <div>
            <BaseButton direction='left' id='left'>
                <RiArrowLeftCircleLine style={{ width: '40px', height: '40px' }}/>
            </BaseButton>
            <BaseButton direction='right' id='right'>
                <RiArrowRightCircleLine style={{ width: '40px', height: '40px' }}/>
            </BaseButton>
        </div>
    )
}

export default MoveButton