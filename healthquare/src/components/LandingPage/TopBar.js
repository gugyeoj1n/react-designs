import React, { useState } from 'react'
import styled from 'styled-components'
import { BiSearch } from 'react-icons/bi'

const TopBlock = styled.div`
    margin-top: 35px;
    width: 100%;
    height: 90px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-width: 1px 1px 1px;
    border-color: lightgray;
    border-style: solid;
    background: white;
    border-radius: 15px;
`

const UserButton = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
    width: 75px;
    height: 50px;
    font-size: 15px;
    font-weight: 700;
`

const SearchBar = styled.div`   
    width: 230px;
    height: 50px;
    background: #CDCDCD;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Input = styled.input`
    width: 180px;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    color: white;
    border: none;
    outline: none;
    background: none;
    ::placeholder {
        color: white;
    }
`

function TopBar(){
    const [Text, setText] = useState("")

    const InputHandler = (e) => {
        setText(e.currentTarget.value)
    }

    return (
        <TopBlock>
            <div style={{ fontSize: '30px', fontWeight: '700', marginLeft: '30px', marginRight: '40px' }}>
                개발중^_^
            </div>
            <SearchBar>
                <BiSearch style={{ width: '22px', height: '22px', color: 'white' }} />
                <Input placeholder='계정을 검색하세요' value={ Text } onChange={ InputHandler }/>
            </SearchBar>
            <div>
                <UserButton>
                    로그인
                </UserButton>
                <UserButton>
                    회원가입
                </UserButton>
            </div>
        </TopBlock>
    )
}

export default TopBar