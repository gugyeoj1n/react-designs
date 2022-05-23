import React from 'react'
import styled from 'styled-components'
import { Cursor, CursorControl } from './components/Cursor'
import { ScrollBack, ScrollItem, ScrollControl } from './components/scrollEvent/scroll'
import { Eye, EyeBack, EyeControl } from './components/eye'

const BannerItem = styled.div`
    width: 170px;
    cursor: pointer;
    height: 170px;
    border-radius: 40%;
    background: powderblue;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px;
    box-shadow: none;
    transition: all .2s linear;
    &:hover {
        background: ${props => props.color || 'papayawhip'};
        box-shadow: 0 0 15px 15px lightgray;
        width: 190px;
        height: 190px;
    }
`

function LandingPage() {
    CursorControl()
    ScrollControl()
    EyeControl()
    return (
        <div style={{ height: '1300px', background: 'silver', display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent: 'space-between' }}>
            <Cursor id='cursorItem' />
            <ScrollBack>
                <ScrollItem id='scrollItem'/>
            </ScrollBack>
            <div style={{ marginTop: '50px', width: '900px', height: '750px', background: 'none', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                <BannerItem color='blueviolet'/>
                <BannerItem color='aquamarine'/>
                <BannerItem color='coral'/>
                <BannerItem color='darkseagreen'/>
                <BannerItem color='crimson'/>
                <BannerItem color='lavender'/>
                <BannerItem color='rosybrown'/>
                <BannerItem color='lemonchiffon'/>
                <BannerItem color='orangered'/>
            </div>
            <div style={{ marginBottom: '200px', width: '320px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <EyeBack id='eyeback'>
                    <Eye id='eye'/>
                </EyeBack>
                <EyeBack id='eyeback2'>
                    <Eye id='eye2'/>
                </EyeBack>
            </div>
        </div>
        
    )
}

export default LandingPage