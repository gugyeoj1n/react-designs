import styled from "styled-components"

const Banner = styled.div`
    background: none;
    border-radius: 5px;
    border: 1px solid #D8D8D8;
    width: 575px;
    height: 120px;
    transition: all 0.08s linear;
    &:hover {
        border: 1px solid #6CAFFF;
    }
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
`

const CompanyIcon = styled.div`
    width: 80px;
    height: 80px;
    margin: 20px;
    border-radius: 5px;
    background: coral;
    display: flex;
    justify-content: center;
    align-items: center;
`

const CompanyDesc = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 430px;
    margin-right: 10px;
    margin-left: 5px;
    height: 80px;
`

const JobName = styled.div`
    font-size: 17px;
    font-weight: 700;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`

const CompanyName = styled.div`
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    color: #ACACAC;
    &:hover {
        text-decoration: underline;
    }
`

const RequiredStack = styled.button`
    cursor: pointer;
    white-space: nowrap;
    padding-left: 7px;
    padding-right: 7px;
    margin-right: 3px;
    margin-top: 5px;
    font-size: 12px;
    height: 25px;
    border-radius: 5px;
    border: none;
    outline: none;
    background: #E1E7EE;
    display: flex;
    justify-content: center;
    align-items: center;
`

export { Banner, CompanyIcon, CompanyDesc, JobName, CompanyName, RequiredStack }