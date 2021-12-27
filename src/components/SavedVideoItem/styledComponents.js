import styled from 'styled-components'

export const SavedVideosListItem = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  width: 40%;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`
export const SavedVideosThumbnailImage = styled.img`
  height: 50px;
  width: 140px;
  margin-right: 20px;
`
export const SavedInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`
export const SavedTitle = styled.h1`
  color: #ffffff;
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 800;
`
export const SavedName = styled.p`
  color: #ffffff;
  font-size: 13px;
  font-family: 'Roboto';
  font-weight: 800;
`
export const SavedViewCount = styled.p`
  color: #ffffff;
  font-size: 13px;
  font-family: 'Roboto';
  font-weight: 800;
`
export const SavedVideoPostedDate = styled.span`
  color: #ffffff;
  font-size: 13px;
  font-family: 'Roboto';
  font-weight: 800;
`
