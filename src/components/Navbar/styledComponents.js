import styled from 'styled-components/macro'

export const NavbarBgContainer = styled.div`
  background-color: ${props => props.navbarBg};
  width: 100%;
  padding: 10px;
`
export const NavbarContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const WebsiteLogoImage = styled.img`
  height: 20px;
  width: 20px;
`
export const NavItemsListContainer = styled.ul`
  padding-left: 0px;
  margin: 0px;
  display: flex;
  align-items: center;
`
export const NavItem = styled.li`
  list-style-type: none;
`
export const ThemeButton = styled.button`
  outline: none;
  cursor: pointer;
  border: none;
`
export const ThemeImage = styled.img`
  height: 20px;
  width: 20px;
`
export const ProfileImage = styled.img`
  height: 15px;
  width: 15px;
`
export const LogoutButton = styled.button`
  outline: none;
  cursor: pointer;
  border: 1px solid #63d6f2;
  color: #63d6f2;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 800;
  padding: 10px;
  margin-left: 10px;
`
export const TextPopup = styled.p`
  color: #ffffff;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 800;
`
export const PopupButtonContainer = styled.div`
  display: flex;
  align-items: center;
`
export const CancelButton = styled.button`
  cursor: pointer;
  outline: none;
  border: 1px solid #ffffff;
  color: #ffffff;
  font-size: 14px;
  font-family: 'Roboto';
  background-color: 'transparent';
  font-weight: 800;
`
export const ConfirmButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-size: 14px;
  font-family: 'Roboto';
  cursor: pointer;
  outline: none;
  border: none;
`
