import styled from 'styled-components/macro'

export const VideoListItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`
export const ThumbnailImage = styled.img`
  margin-bottom: 10px;
`
export const ListBottomContainer = styled.div`
  display: flex;
  align-items: center;
`
export const ProfileImage = styled.img`
  height: 25px;
  width: 25px;
  background-color: transparent;
  margin-right: 12px;
`
export const InformationBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`
export const VideoTitle = styled.h1`
  color: #475569;
  font-size: 16px;
  font-weight: 800;
  font-family: 'Roboto';
`
export const VideoName = styled.p`
  color: #475569;
  font-size: 12px;
  font-weight: 800;
  font-family: 'Roboto';
`
export const VideoCount = styled.p`
  color: #475569;
  font-size: 12px;
  font-weight: 800;
  font-family: 'Roboto';
`
export const VideoPostedDate = styled.p`
  color: #475569;
  font-size: 12px;
  font-weight: 800;
  font-family: 'Roboto';
`
