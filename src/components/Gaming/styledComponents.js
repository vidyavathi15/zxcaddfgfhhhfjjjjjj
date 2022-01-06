import styled from 'styled-components/macro'

export const GamingBgContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: ${props => props.gamingBgColors};
  min-height: 100vh;
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const FailureGamingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const GamingFailureImage = styled.img`
  height: 50px;
  width: 150px;
`
export const GamingFailureResults = styled.h1`
  color: #616e7c;
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 800;
`
export const GamingFailureResultsStatus = styled.p`
  color: #616e7c
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 800;
`
export const FailureVideosRetryButton = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  background-color: #4f46e5;
  height: 30px;
  width: 70px;
  border-radius: 4px;
  padding: 12px;
  color: #616e7c;
  font-family: 'Roboto';
  font-weight: 800;
`
export const GamingResultListContainer = styled.ul`
  padding-left: 0px;
  margin: 0px;
  display: flex;
  flex-wrap: wrap;
`
