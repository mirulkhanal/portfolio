import styled from 'styled-components'
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'
import { BiArrowToTop } from 'react-icons/bi'
export const AboutContainer = styled.div`
  display: flex;
  margin-top: 40px;
  background-color: magenta;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  background-color: #071013;
  padding: 40px;
`
export const BioContainer = styled.div`
  /* background-color: white; */
  width: 45vw;
  height: 70vh;
  /* display: inline; */
  & > p {
    font-size: 2em;
    color: #06ba63;
  }
`
export const ContentContainer = styled.div`
  background-color: #071013;
  height: 50%;
  box-shadow: inset 0px -8px 50px 5px rgba(0, 0, 0, 0.79);
  width: 50%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  & > .title {
    font-size: 3em;
  }
  & > .subtitle {
    font-size: 1.5em;
  }
`
export const QuoteLeftIcon = styled(ImQuotesLeft)``
export const QuoteRightIcon = styled(ImQuotesRight)``

export const FloatIcon = styled(BiArrowToTop)`
  /* width: fit-content; */
  padding: 0;
  margin: 0;
  font-size: 3em;
  color: #fff;
  border-radius: 20px;
  background-color: #06ba63;
  position: fixed;
  bottom: 100px;
  right: 100px;
  box-shadow: 0px 10px 10px -10px;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    color: #071013;
    border: 3px solid #06ba63;
  }
`
