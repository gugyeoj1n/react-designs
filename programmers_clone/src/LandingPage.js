import React from 'react'
import NavBar from './components/NavBar/NavBar'
import styled from 'styled-components'
import { StartButton } from './components/Buttons'

function LandingPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <NavBar />
        <div style={{ width: '100%', height: '445px', background: '#0C151C'}}>
            <div style={{ color: '#127EFF', fontSize: '14px', position: 'absolute', left: '9.2%', top: '12.5%'}}>
                기술 중심 개발자 채용 플랫폼
            </div>
            <div style={{ color: 'white', letterSpacing: '1px', lineHeight: '55px', fontSize: '41px', fontWeight: '600', position: 'absolute', left: '9.2%', top: '17%'}}>
                개발자 채용의 끝은,<br/>결국 코드니까
            </div>
            <div style={{ color: '#E3E3E3', fontSize: '21px', lineHeight: '33px', fontWeight: '500', position: 'absolute', left: '9.2%', top: '35%'}}>
                이력서보다, 당신의 코드가 우선시되는<br/>프로그래머스만의 채용 프로그램을 만나보세요.
            </div>
            <StartButton>
                시작하기
            </StartButton>
            <div style={{ color: 'white', fontSize: '120px', fontWeight: '500', position: 'absolute', left: '70%', top: '28%'}}>
                그림
            </div>
        </div>
        <div>
            채용 중인 포지션
        </div>
    </div>
  )
}

export default LandingPage