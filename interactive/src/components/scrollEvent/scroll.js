import styled from "styled-components";

const ScrollBack = styled.div`
    left: 3%;
    top: 50%;
    transform: translateY(-50%);
    position: fixed;
    height: 400px;
    width: 15px;
    border-radius: 10px;
    background: none;
`

const ScrollItem = styled.div`
    position: absolute;
    left: 3%;
    top: 50%;
    transform: translateY(-50%);
    position: fixed;
    height: 0%;
    width: 15px;
    border-radius: 10px;
    background: linear-gradient(150deg, salmon, steelblue);
    transition: all 0.1s linear;
`

const ScrollControl = () => {
    const scrollMove = (e) => {
        let scrollItem = document.getElementById('scrollItem')
        let perScr = Math.ceil(document.documentElement.scrollTop / (document.body.scrollHeight - window.outerHeight) * 100);
        scrollItem.style.height = perScr + "%";
    }
    window.addEventListener('scroll', (e) => {
        requestAnimationFrame(() => scrollMove(e))
    })

}

export { ScrollBack, ScrollItem, ScrollControl }