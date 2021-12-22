import styled from 'styled-components/macro'

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  background-color: #cbd5e1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
`
export const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
  margin-top: 20px;
`
export const AllVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
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
  padding: 10px;
  margin-top: 20px;
`
export const SearchInput = styled.input`
  outline: none;
  line-height: 40px;
  color: #212121;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 800;
  border: 1px solid #000000;
  padding-left: 12px;

  width: 60%;
`
export const SearchButton = styled.button`
  cursor: pointer;
  border: 1px solid #212121;
  outline: none;
  padding: 5px;
  background-color: #cbd5e1;
  height: 30px;
  width: 30px;
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
`
export const NoSearchResults = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 800;
`
export const NoSearchResultStatus = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 10px;
  font-weight: 800;
`
export const NoSearchRetryButton = styled.button`
  cursor: pointer;

  outline: none;
  padding: 5px;
  background-color: #4f46e5;
  height: 30px;
  width: 130px;
  border-radius: 6px;
`
