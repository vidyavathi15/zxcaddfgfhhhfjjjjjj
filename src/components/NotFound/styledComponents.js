import styled from 'styled-components/macro'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`
export const NotFoundImage = styled.img`
  height: 130px;
  width: 130px;
  @media screen and (min-width: 768px) {
    height: 400px;
    width: 400px;
  }
`
export const NotFoundResult = styled.h1`
  color: #231f20;
  font-size: 20px;
  font-weight: 800;
  font-family: 'Roboto';
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`
export const NotFoundResultStatus = styled.p`
  color: #231f20;
  font-size: 13px;
  font-family: 'Roboto';
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
