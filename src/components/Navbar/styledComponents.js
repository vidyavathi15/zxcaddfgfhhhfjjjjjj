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
  @media screen and (min-width: 768px) {
    height: 30px;
    width: 150px;
  }
`
export const NavItemsListContainer = styled.ul`
  padding-left: 0px;
  margin: 0px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
export const NavItem = styled.li`
  list-style-type: none;
`
export const ThemeButton = styled.button`
  outline: none;
  cursor: pointer;
  border: none;
  background-color: transparent;
`
export const ThemeImage = styled.img`
  height: 20px;
  width: 20px;

  @media screen and (min-width: 768px) {
    height: 30px;
    width: 30px;
  }
`
export const ProfileImage = styled.img`
  height: 15px;
  width: 15px;
  @media screen and (min-width: 768px) {
    height: 30px;
    width: 30px;
  }
`
export const LogoutButton = styled.button`
  outline: none;
  cursor: pointer;
  border: 1px solid #475569;
  color: #475569;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 800;
  padding: 10px;
  margin-left: 10px;
  border-radius: 6px;
  background-color: transparent;
  padding-left: 10px;
  padding-right: 10px;

  padding-bottom: 10px;
  padding-top: 10px;
`
export const TextPopup = styled.p`
  color: #475569;
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

  color: black;
  font-size: 14px;
  font-family: 'Roboto';
  background-color: 'transparent';
  font-weight: 800;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  border: none;
  border-radius: 4px;
`
export const ConfirmButton = styled.button`
  background-color: #3b82f6;
  color: #475569;
  font-size: 14px;
  font-family: 'Roboto';
  cursor: pointer;
  outline: none;
  border: none;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 4px;
`
export const NavItemContainer = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
`
