import styled from 'styled-components'

export const HeroContainer = styled.div`
  width: 85vw;
  height: 85vh;
  color: green;
  margin: 20px auto;
  background-color: #071013;
  border-radius: 250px 30px 250px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  box-shadow: -2px 28px 50px 9px #000000,
    27px -50px 50px 9px rgba(0, 0, 0, 0.29);
`
export const HeroTitle = styled.h1`
  text-align: center;
  color: white;
  font-size: 2.5em;
  margin-left: 100px;
  & > span {
    font-size: 30px;
    display: block;
    width: 100%;
    margin: 0;
    padding: 0;
  }
`

export const HeroImage = styled.div`
  display: flex;
  width: fit-content;
  margin-right: 150px;

  /* background-color: red; */
  & > svg {
    width: 40vw;
    background-color: #06ba63;
    border-radius: 10px;
  }
`
export const ActionButton = styled.button`
  background-color: white;
  padding: 8px;
  width: 30%;
  margin: 30px;
  border: 2px solid black;
  border-radius: 10px 10px 10px 10px;
  outline: none;
  background-color: #06ba63;
  color: #fff;
  font-size: 1.2em;

  cursor: pointer;
  &:hover {
    border: 2px solid;
    background-color: #fff;
    color: #071013;
    border-color: #06ba63;
  }
`
export const HeroTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
