import styled from 'styled-components/macro'

export const VideoItemDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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
  color: #ffffff;
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 800;
`
export const FailureVideoItemDetailsErrorMsg = styled.p`
  color: #ffffff;
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
  color: #ffffff;
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
  color: #ffffff;
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
  color: #ffffff;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 800;
`
export const VideoItemDate = styled.p`
  color: #ffffff;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 800;
`
export const LikesAndDisLikeContainer = styled.div`
  display: flex;
  align-items: center;
`
export const LikeButton = styled.button`
  outline: none;
  cursor: pointer;
  border: none;
`
export const LikesContainer = styled.div`
  display: flex;
  align-items: center;
`
export const LikeText = styled.p`
  color: #ffffff;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 800;
`
export const DisLikeContainer = styled.div`
  display: flex;
  align-items: center;
`
export const DisLikeText = styled.p`
  color: #ffffff;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 800;
`
export const SaveContainer = styled.div`
  display: flex;
  align-items: center;
`
export const SaveText = styled.p`
  color: #ffffff;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 800;
`
export const HrLine = styled.hr`
  width: 100%;
  border: 2px solid #7e858e;
  margin-top: 20px;
`
export const VideoItemDetailsBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
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
