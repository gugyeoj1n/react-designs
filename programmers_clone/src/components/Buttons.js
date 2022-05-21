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

const WhiteButton = styled.button`
    border: 1px solid #0077FF;
    cursor: pointer;
    border-radius: 5px;
    background: none;
    color: #0077FF;
    width: 110px;
    height: 32px;
    font-size: 15px;
    font-weight: 700;
    margin-left: 25px;
    transition: all 0.07s linear;
    &:hover {
        background: #0077FF;
        color: white;
    }
`

const StackButton = styled.button`
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 5px;
    white-space: nowrap;
    height: 32px;
    background: #EDEAFF;
    color: #0077FF;
    font-size: 14px;
    font-weight: 700;
    padding-left: 15px;
    padding-right: 15px;
    margin-right: 7px;
    margin-top: 4px;
    margin-bottom: 4px;
    transition: all 0.07s linear;
    &:hover {
        background: #D6CFFF;
    }
`

export { StartButton, WhiteButton, StackButton }