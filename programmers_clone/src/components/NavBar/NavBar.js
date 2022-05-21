import React from 'react'
import styled from 'styled-components'
import { CompanyButton, MenuButton, Middle } from './BarButtons'

const TopBar = styled.div`
    width: 100%;
    height: 45px;
    background: #0C151C;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

function NavBar() {
  return (
    <TopBar>
        <div>
            <CompanyButton>
                @ programmers
            </CompanyButton>
        </div>
        <div>
            <MenuButton>
                탑프로그래머스
            </MenuButton>
            <MenuButton>
                스킬 체크
            </MenuButton>
            <MenuButton>
                개발자 채용
            </MenuButton>
            <MenuButton>
                테크 피드
            </MenuButton>
            <Middle>
                |
            </Middle>
            <MenuButton>
                코딩 테스트 연습
            </MenuButton>
            <MenuButton>
                프로그래밍 강의
            </MenuButton>
        </div>
        <div style={{ marginRight: '15px' }}>
            <MenuButton>
                계정 만들기
            </MenuButton>
            <MenuButton>
                로그인
            </MenuButton>
            <MenuButton>
                기업 회원
            </MenuButton>
        </div>
    </TopBar>
  )
}

export default NavBar