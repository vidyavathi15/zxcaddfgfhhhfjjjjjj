import styled from 'styled-components/macro'
import {Link} from 'react-router-dom'

export const LinkItem = styled(Link)`
  text-decoration: none;
`
export const GameListItem = styled.li`
  display: flex;
  flex-direction: column;
  margin: 15px;
`
export const ThumbnailImage = styled.img`
  height: 140px;
  width: 140px;
  border-radius: 10px;
  @media screen and (min-width: 768px) {
    height: 250px;
    width: 200px;
  }
`
export const GameItemTitle = styled.h1`
  color: #616e7c;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 800;
`
export const ViewCountEl = styled.p`
  color: #616e7c;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 800;
  margin-right: 10px;
`
export const ViewCountText = styled.span`
  color: #616e7c;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 800;
`
