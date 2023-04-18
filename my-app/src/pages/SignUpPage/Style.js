import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 93vh;
  padding: 10px;

  h1 {
    color: #373737;
    font-size: 33px;
    font-weight: 700;
    height: 42.9px;
    margin-bottom: 170px;
    margin-left: 32px;
  }

  form {
    display: flex;
    flex-direction: column;
    height: 70vh;
    margin: 0, 400px, 0 ,30px
  }

  h4 {
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
  }

  a{
    color: 
#4088CB;
  }
`;
export const Checkbox = styled.span`
  input {
    width: 5vw;
    height: 7vh;
    max-width: 20px;
    max-height: 20px;
    border-radius: 2px;
  }
  display: flex;
  align-items: center;
  gap: 5px;
  margin-left: 5px;
`;

export const Input = styled.input`
  margin: 5px;
  width: 90vw;
  max-width: 500px;
  height: 8vh;
  background-color: #ffffff;
  border: 1px solid #d5d8de;
  border-radius: 4px;
  padding-left: 20px;
`;

export const DivStyled = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  div {
    gap: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  button {
    height: 51px;
width: 360px;
border-radius: 27px;
border: 1px solid #FE7E02;
color: #FE7E02;
margin: 24px 0 24px 0;
background: rgb(255,100,137);
background: linear-gradient(90deg, rgba(255,100,137,1) 0%, rgba(249,178,78,1) 100%);
color: #fff;
border: none;
cursor: pointer;
  }
`;

export const DivButton = styled.div`
  align-items: center;
`;
