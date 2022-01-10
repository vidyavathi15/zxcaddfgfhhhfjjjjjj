import styled from 'styled-components'

export const VideoListItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  width: 50%;
  margin: 10px;

  @media screen and (min-width: 768px) {
    width: 30%;
  }

  @media screen and (min-width: 990px) {
    width: 20%;
  }
`
export const ThumbnailImage = styled.img`
  margin-bottom: 10px;
  height: 150px;
  width: 150px;
  outline: none;

  @media screen and (min-width: 768px) {
    height: 300px;
    width: 300px;
  }
`
export const ListBottomContainer = styled.ul`
  display: flex;
  justify-content: space-between;

  width: 50%;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`
export const ProfileImage = styled.img`
  height: 40px;
  width: 40px;
  margin-top: 10px;
  background-color: transparent;
  @media screen and (min-width: 768px) {
    height: 30px;
    width: 30px;
  }
`
export const InformationBottomContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 15px;
  padding-left: 0px;
  width: 50%;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`
export const VideoTitle = styled.p`
  color: #475569;
  font-size: 16px;
  font-weight: 800;
  width: 50%;
  font-family: 'Roboto';
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`
export const VideoName = styled.p`
  color: #475569;
  font-size: 12px;
  font-weight: 800;
  font-family: 'Roboto';
  padding-left: 0px;
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
