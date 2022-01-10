import styled from 'styled-components/macro'

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  background-color: #cbd5e1;
  padding: 20px;
  display: flex;
  height: 150px;
  width: 100%;
  flex-direction: column;
  border-radius: 6px;
  @media screen and (min-width: 768px) {
    height: 30%;
    width: 70%;
  }
`
export const AppContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => props.bgColor};
  box-shadow: 0px 0px 0px 1px #dcdcdc;
  width: 100%;
`

export const SideAndVideosContainer = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  margin-top: 20px;
  padding: 20px;
`

export const AllVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
`
export const ImageLogo = styled.img`
  height: 25px;
  width: 50px;
`
export const BannerText = styled.p`
  color: #475569;
  font-size: 12px;
  font-family: 'Roboto';
  font-weight: 800;
`
export const BannerButton = styled.button`
  cursor: pointer;
  border: 1px solid #212121;
  outline: none;
  margin-top: 20px;
  height: 30px;
  width: 130px;
  background-color: transparent;
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
`

export const BannerButtonClose = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  background-color: transparent;
`

export const SearchInputContainer = styled.div`
  margin-top: 20px;
  display: flex;
  border: 1px solid #000000;

  width: 70%;
  justify-content: space-between;
  align-items: center;
`

export const SearchInput = styled.input`
  outline: none;
  line-height: 20px;
  color: #212121;
  font-size: 12px;
  font-family: 'Roboto';
  font-weight: 800;
  border: none;
  padding-left: 12px;
  width: 60%;
  background-color: transparent;
`
export const SearchButton = styled.button`
  cursor: pointer;
  border: 1px solid #212121;
  outline: none;
  background-color: #606060;
  border: none;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
`
export const NoSearchedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NoSearchedImage = styled.img`
  height: 40px;
  width: 130px;
  margin-top: 30px;
  @media screen and (min-width: 768px) {
    height: 300px;
    width: 300px;
  }
`
export const NoSearchResults = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 800;
  margin-bottom: 15px;
`
export const NoSearchResultStatus = styled.p`
  color: #ffffff;
  font-size: 10px;
  font-family: 'Roboto';
  font-weight: 800;
  margin-bottom: 15px;
`
export const NoSearchRetryButton = styled.button`
  cursor: pointer;
  outline: none;
  background-color: #4f46e5;
  height: 30px;
  width: 130px;
  border-radius: 6px;
  border: none;
  color: black;
  font-size: 12px;
  font-family: 'Roboto';
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 20px;
`
export const FailureVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const VideoFailureImage = styled.img`
  height: 150px;
  width: 150px;
`
export const FailureResults = styled.h1`
  color: #ffffff;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 800;
`
export const FailureResultsStatus = styled.p`
  color: #ffffff;
  font-size: 13px;
  font-family: 'Roboto';
  font-weight: 800;
`
export const FailureVideosRetryButton = styled.button`
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  padding: 15px;
  font-size: 13px;
  font-family: 'Roboto';
  font-weight: 800;
  color: black;
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const SuccessViewListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0px;
  margin: 0px;
  margin-top: 30px;
`
export const CloseAndLogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
