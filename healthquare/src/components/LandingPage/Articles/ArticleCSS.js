import styled from 'styled-components'

const ArticleBlock = styled.div`
    width: 800px;
    height: 100%;
    border-width: 0px 1px 1px;
    border-style: solid;
    border-color: lightgray;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;    
`

const ArticleTemp = styled.div`
    background: white;
    margin: 50px;
    padding: 30px;
    width: 400px;
    height: 480px;
    border-radius: 20px;
    border: 5px solid lightgray;
    font-size: 40px;
    transition: all .3s linear;
    &:hover {
        border-color: #858585;
        transform: translate(0, -10px);
    }
    position: relative;
`

const ArticleTop = styled.div`
    width: 100%;
    height: 40px;
    border-width: 0px 0px 1px;
    border-color: lightgray;
    border-style: solid;
    font-size: 20px;
    font-weight: 700;
`

export { ArticleBlock, ArticleTemp, ArticleTop }