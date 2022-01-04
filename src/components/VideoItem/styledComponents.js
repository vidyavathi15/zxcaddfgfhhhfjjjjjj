import styled from 'styled-components'

export const VideoListItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`
export const ThumbnailImage = styled.img`
  margin-bottom: 10px;
  height: 150px;
  width: 150px;

  @media screen and (min-width: 768px) {
    height: 300px;
    width: 300px;
  }
`
export const ListBottomContainer = styled.ul`
  display: flex;
  align-items: center;
`
export const ProfileImage = styled.img`
  height: 25px;
  width: 25px;
  background-color: transparent;
`
export const InformationBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const VideoTitle = styled.h1`
  color: #475569;
  font-size: 16px;
  font-weight: 800;
  width: 50%;
  font-family: 'Roboto';
`
export const VideoName = styled.h1`
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
export const VideoPostedDate = styled.span`
  color: #475569;
  font-size: 12px;
  font-weight: 800;
  font-family: 'Roboto';
`
