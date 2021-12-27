import styled from 'styled-components/macro'

export const TrendingBgContainer = styled.div`
  display: flex;
  background-color:${props => props.TrendingBgColorTheme}}
  min-height: 100vh;
  flex-direction: column;
`
export const TrendingListContainer = styled.ul`
  display: flex;
  padding-left: 0px;
  margin: 0px;
  flex-wrap: wrap;
`
export const FailureTrendingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const TrendingFailureImage = styled.img`
  height: 50px;
  width: 150px;
  margin-top: 20px;
`
export const TrendingFailureResults = styled.h1`
  color: #ffffff;
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 800;
`
export const TrendingFailureResultsStatus = styled.p`
  color: #616e7c;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 800;
`
export const FailureTrendingRetryButton = styled.button`
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  padding: 12px;
  background-color: #4f46e5;
  font-size: 10px;
  font-family: 'Roboto';
  font-weight: 800;
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
