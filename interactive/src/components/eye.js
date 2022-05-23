import styled from "styled-components";

const EyeBack = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: white;
    border: none;
    outline: none;
    position: relative;
`

const Eye = styled.div`
    position: absolute;
    left: 25%;
    top: 25%;
    width: 70px;
    height: 70px;
    background: black;
    border-radius: 50%;
`

const EyeControl = () => {
    const eyeMove = (e) => {
        let eyeItem = document.getElementById('eye')
        let eyeBack = document.getElementById('eyeback').getBoundingClientRect()
        let eyeItem2 = document.getElementById('eye2')
        let eyeBack2 = document.getElementById('eyeback2').getBoundingClientRect()
        const movedX = 5 * (e.clientX - eyeBack.x) / 100
        const movedY = 5 * (e.clientY - eyeBack.y) / 100
        const movedX2 = 5 * (e.clientX - eyeBack2.x) / 100
        const movedY2 = 5 * (e.clientY - eyeBack2.y) / 100
        eyeItem.style.transform = "translate(" + movedX + "%, " + movedY + "% )"
        eyeItem2.style.transform = "translate(" + movedX2 + "%, " + movedY2 + "% )"
    }
    window.addEventListener('mousemove', (e) => {
        requestAnimationFrame(() => eyeMove(e))
    })

}

export { Eye, EyeBack, EyeControl }