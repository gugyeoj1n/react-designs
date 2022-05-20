import React from 'react'
import styled from 'styled-components'
import { BackButton, MiddleButton, MenuButton } from './Buttons'
import { FiSearch, FiMoon } from 'react-icons/fi'
import { GrLanguage } from 'react-icons/gr'

const MainBar = styled.div`
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    position: fixed;
    background: white;
`

function NavBar() {
    window.addEventListener("scroll", (e) => {
        let bar = document.getElementById('MainBar')
        if(document.documentElement.scrollTop > 0) {
            bar.style.borderWidth = '0px 0px 1px'
            bar.style.borderColor = '#C8C8C8'
            bar.style.borderStyle = 'solid'
        } else {
            bar.style.border = 'none'
        }
    }, false)

    const setButtonHover = (hover, id) => {
        let b1 = document.getElementById('1')
        let b2 = document.getElementById('2')
        let b3 = document.getElementById('3')
        let b4 = document.getElementById('4')
        switch(id) {
            case 1 : {
                if(hover) {
                    b2.style.color = 'gray'
                    b3.style.color = 'gray'
                    b4.style.color = 'gray'
                } else {
                    b2.style.color = 'black'
                    b3.style.color = 'black'
                    b4.style.color = 'black'
                }
                break
            }
            case 2 : {
                if(hover) {
                    b1.style.color = 'gray'
                    b3.style.color = 'gray'
                    b4.style.color = 'gray'
                } else {
                    b1.style.color = 'black'
                    b3.style.color = 'black'
                    b4.style.color = 'black'
                }
                break
            }
            case 3 : {
                if(hover) {
                    b2.style.color = 'gray'
                    b1.style.color = 'gray'
                    b4.style.color = 'gray'
                } else {
                    b2.style.color = 'black'
                    b1.style.color = 'black'
                    b4.style.color = 'black'
                }
                break
            }
            case 4 : {
                if(hover) {
                    b2.style.color = 'gray'
                    b3.style.color = 'gray'
                    b1.style.color = 'gray'
                } else {
                    b2.style.color = 'black'
                    b3.style.color = 'black'
                    b1.style.color = 'black'
                }
                break
            }
            default : break
        }
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <MainBar id='MainBar'>
                <div style={{width:'65%', display:'flex', justifyContent:'space-between', flexDirection:'row', alignItems:'center'}}>
                    <BackButton>kakao</BackButton>
                    <div style={{ marginLeft: '100px', marginRight: '70px' }}>
                        <MiddleButton id='1'
                        onMouseEnter={() => setButtonHover(true, 1)}
                        onMouseLeave={() => setButtonHover(false, 1)}>
                            카카오
                        </MiddleButton>
                        <MiddleButton id='2'
                        onMouseEnter={() => setButtonHover(true, 2)}
                        onMouseLeave={() => setButtonHover(false, 2)}>뉴스</MiddleButton>
                        <MiddleButton id='3'
                        onMouseEnter={() => setButtonHover(true, 3)}
                        onMouseLeave={() => setButtonHover(false, 3)}>기술과 서비스</MiddleButton>
                        <MiddleButton id='4'
                        onMouseEnter={() => setButtonHover(true, 4)}
                        onMouseLeave={() => setButtonHover(false, 4)}>약속과 책임</MiddleButton>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <MenuButton>
                            <FiSearch style={{ width: '20px', height: '20px' }}/>
                        </MenuButton>
                        <MenuButton>
                            <GrLanguage style={{ width: '20px', height: '20px' }}/>
                        </MenuButton>
                        <MenuButton>
                            <FiMoon style={{ width: '20px', height: '20px' }}/>
                        </MenuButton>
                    </div>
                </div>
            </MainBar>
            <div style={{fontSize:'25px', width:'50px', wordBreak:'break-all', color:'coral'}}>카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오카카오</div>
        </div>   
    ) 
}

export default NavBar