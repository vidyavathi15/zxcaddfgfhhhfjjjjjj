import styled from 'styled-components/macro'

export const VideoItemDetailsContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => props.color};
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FailureVideoItemDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FailureVideoItemDetailsImage = styled.img`
  height: 30px;
  width: 150px;

  @media screen and (min-width: 768px) {
    height: 60px;
    width: 160px;
  }
  @media screen and (min-width: 900px) {
    height: 50px;
    width: 50px;
  }
`
export const FailureVideoItemDetailsStatus = styled.h1`
  color: #7e858e;
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 800;
`
export const FailureVideoItemDetailsErrorMsg = styled.p`
  color: #7e858e;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 800;
`
export const RetryButton = styled.button`
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  padding: 15px;
  height: 30px;
  width: 140px;
  color: #7e858e;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 800;
  background-color: #4f46e5;
  margin-top: 20px;
`
export const ReactPlayerContainer = styled.div`
  border-radius: 6px;
`
export const VideoItemDetailsTitle = styled.h1`
  color: #7e858e;
  font-size: 22px;
  font-family: 'Roboto';
  font-weight: 800;
`
export const ViewsAndLikeContainerMiddleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
export const ViewsCountContainer = styled.div`
  display: flex;
`
export const ViewsCount = styled.p`
  color: #7e858e;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 800;
`
export const VideoItemDate = styled.p`
  color: #7e858e;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 800;
`
export const LikesAndDisLikeContainer = styled.ul`
  display: flex;
  align-items: center;
`
export const LikeButton = styled.button`
  outline: none;
  cursor: pointer;
  border: none;
  background-color: transparent;
`
export const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin: 10px;
`
export const LikeText = styled.p`
  color: ${props => props.color};
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 800;
  margin-left: 10px;
`

export const DisLikeText = styled.p`
  color: ${props => props.color};
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 800;
  margin-left: 10px;
`

export const SaveText = styled.p`
  color: ${props => props.color};
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 800;
  margin-left: 10px;
`
export const HrLine = styled.hr`
  width: 100%;
  border: 2px solid #7e858e;
  margin-top: 20px;
`
export const VideoItemDetailsBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
`
export const VideoItemDetailSubPartContainer = styled.div`
  display: flex;
  align-items: center;
`
export const VideoItemDetailsProfileImage = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50px;
`
export const VideoItemDetailsDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`
export const VideoItemDetailsName = styled.p`
  color: #909090;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 800;
`
export const VideoItemDetailsSubscribers = styled.p`
  color: #909090;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 800;
`
export const VideoItemDetailsDescriptionDisplay = styled.p`
  color: #909090;
  font-size: 13px;
  font-family: 'Roboto';
  font-weight: 800;
`
export const VideoItemDetailsAppContainer = styled.div`
  min-height: 100vh;
  background-color: transparent;
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 100vw;
`
export const VideoItemDetailsAppTopContainer = styled.div`
  display: flex;
`
