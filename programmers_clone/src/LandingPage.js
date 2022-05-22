import React from 'react'
import NavBar from './components/NavBar/NavBar'
import { StartButton, WhiteButton, StackButton } from './components/Buttons'
import { Banner, CompanyIcon, CompanyDesc, JobName, CompanyName, RequiredStack } from './components/Banner/Banner'
import { FaUserFriends } from 'react-icons/fa'

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
        <div style={{ marginTop: '80px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '82%' }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <div style={{ fontSize: '21px', fontWeight: '700' }}>
                    채용 중인 포지션
                </div>
                <WhiteButton>
                    포지션 더보기
                </WhiteButton>
            </div>
            <div style={{ width: '100%', marginTop: '15px', marginBottom: '35px', display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}>
                <StackButton>
                    Java
                </StackButton>
                <StackButton>
                    Spring
                </StackButton>
                <StackButton>
                    Node.js
                </StackButton>
                <StackButton>
                    Django
                </StackButton>
                <StackButton>
                    ReactJS
                </StackButton>
                <StackButton>
                    Vue.js
                </StackButton>
                <StackButton>
                    JavaScript
                </StackButton>
                <StackButton>
                    Python
                </StackButton>
                <StackButton>
                    Kotlin
                </StackButton>
                <StackButton>
                    C++
                </StackButton>
                <StackButton>
                    Android
                </StackButton>
                <StackButton>
                    iOS
                </StackButton>
                <StackButton>
                    서버/백엔드
                </StackButton>
                <StackButton>
                    프론트엔드
                </StackButton>
                <StackButton>
                    웹 풀스택
                </StackButton>
                <StackButton>
                    안드로이드 앱
                </StackButton>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                <Banner>
                    <CompanyIcon>
                        <FaUserFriends style={{ width: '50px', height: '50px' }} />
                    </CompanyIcon>
                    <CompanyDesc>
                        <JobName>여자친구 구합니다</JobName>
                        <CompanyName>나</CompanyName>
                        <div style={{ display: 'flex', flexDirection: 'row'}}>
                            <RequiredStack>
                                연상(동갑도 OK)
                            </RequiredStack>
                            <RequiredStack>
                                무쌍
                            </RequiredStack>
                            <RequiredStack>
                                애교 많음
                            </RequiredStack>
                            <RequiredStack>
                                게으르지 않음
                            </RequiredStack>
                        </div>
                    </CompanyDesc>
                </Banner>
            </div>
        </div>
    </div>
  )
}

export default LandingPage