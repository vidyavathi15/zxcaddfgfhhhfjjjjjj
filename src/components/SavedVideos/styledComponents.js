import styled from 'styled-components/macro'

export const SavedVideosBgContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  display: flex;
`
export const SavedVideosHeaderAndList = styled.div`
  display: flex;
  flex-direction: column;
`

export const SavedListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0px;
  margin: 0px;
`
export const NoSavedVideosContainer = styled.div`
  display: Flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NoSavedVideosImage = styled.img`
  height: 130px;
  width: 130px;
  margin-top: 20px;
`
export const NoSavedResult = styled.h1`
  color: #7e858e;
  font-size: 15px;
  font-weight: 800;
  font-family: 'Roboto';
`
export const NoSavedVideosStatus = styled.p`
  color: #7e858e;
  font-size: 12px;
  font-weight: 800;
  font-family: 'Roboto';
`
