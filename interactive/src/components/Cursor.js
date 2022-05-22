import styled from 'styled-components'

const Cursor = styled.div`
    position: absolute;
    pointer-events: none;
    top: 0;
    left: 0;
    z-index: 1000;
    opacity: .4;
    position: fixed;
    display: block;
    width: 30px;
    height: 30px;
    margin: -15px 0 0 -15px;
    background: navy;
    border-radius: 50%;
    transition: all .2s linear;
`
const CursorControl = () => {
    const cursorMove = (e) => {
        let cursorItem = document.getElementById('cursorItem')
        cursorItem.style.transform = "translate(" + e.clientX + "px, " + e.clientY + "px )"
    }
    window.addEventListener('mousemove', (e) => {
        requestAnimationFrame(() => cursorMove(e))
    })

}

export { Cursor, CursorControl }