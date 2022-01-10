import styled from 'styled-components/macro'
import {Link} from 'react-router-dom'

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40%;

  @media screen and (min-width: 768px) {
    width: 30%;
  }
`
export const SidebarTopContainer = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding-left: 0px;
  margin-top: 20px;
`
export const ListItem = styled.li`
  display: flex;
  align-items: center;
  list-style-type: none;
  margin-bottom: 10px;
`
export const LinkItem = styled(Link)`
  font-size: 10px;
  text-decoration: none;
  font-family: 'Roboto';
  padding-left: 10px;

  font-weight: 800;
  color: ${props => props.color};

  @media screen and (min-width: 768px) {
    font-size: 10px;
  }
`
export const SidebarBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`
export const FooterHeading = styled.p`
  font-size: 14px;
  font-family: 'Roboto';
  color: ${props => props.color};
  font-weight: 800;
  margin-bottom: 20px;
`
export const IconContainer = styled.div`
  display: flex;
  align-items: center;
`
export const IconImage = styled.img`
  height: 20px;
  width: 20px;
  margin: 10px;
`
export const FooterText = styled.p`
  font-size: 12px;
  font-family: 'Roboto';
  color: ${props => props.color};
  font-weight: 800;
`
