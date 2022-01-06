import styled from 'styled-components/macro'
import {Link} from 'react-router-dom'

export const LinkItem = styled(Link)`
  text-decoration: none;
`
export const TrendingListItem = styled.li`
  display: flex;
  align-items: center;
  margin: 15px;
  width: 100%;
`
export const ThumbnailImage = styled.img`
  height: 50px;
  width: 150px;
  margin-right: 20px;
  @media screen and (min-width: 768px) {
    height: 250px;
    width: 250px;
  }
`
export const TrendingInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const TrendingTitle = styled.h1`
  color: #616e7c;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 800;
`
export const TrendingNam = styled.p`
  color: #616e7c;
  font-size: 14px;
  font-family: 'Roboto';
`
export const TrendingViewCount = styled.p`
  color: #616e7c;
  font-size: 14px;
  font-family: 'Roboto';
`
export const PostedDateEl = styled.span`
  color: #616e7c;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 800;
`
