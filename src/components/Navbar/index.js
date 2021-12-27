import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'
import './index.css'

import {
  NavbarBgContainer,
  NavbarContentContainer,
  WebsiteLogoImage,
  NavItemsListContainer,
  NavItem,
  ThemeImage,
  ProfileImage,
  LogoutButton,
  TextPopup,
  PopupButtonContainer,
  CancelButton,
  ConfirmButton,
  ThemeButton,
} from './styledComponents'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onClickTheme = () => {
        toggleTheme()
      }

      const websiteUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const themeUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const navbarBg = isDarkTheme ? 'nav-bar-dark' : 'nav-bar-light'

      const onClickLogout = props => {
        const {history} = props
        history.replace('/Login')
      }

      return (
        <NavbarBgContainer navbarBg={navbarBg}>
          <NavbarContentContainer>
            <Link to="/">
              <WebsiteLogoImage src={websiteUrl} alt="website logo" />
            </Link>

            <NavItemsListContainer>
              <NavItem>
                <ThemeButton onClick={onClickTheme}>
                  <ThemeImage src={themeUrl} alt="theme" />
                </ThemeButton>
              </NavItem>
              <NavItem>
                <ProfileImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </NavItem>
              <NavItem>
                <Popup
                  model
                  trigger={
                    <LogoutButton data-testid="logoutButton">
                      Logout
                    </LogoutButton>
                  }
                  className="popup-content"
                >
                  <TextPopup>Are you sure, you want to logout?</TextPopup>
                  <PopupButtonContainer>
                    <CancelButton type="button">Cancel</CancelButton>
                    <ConfirmButton type="button" onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </PopupButtonContainer>
                </Popup>
              </NavItem>
            </NavItemsListContainer>
          </NavbarContentContainer>
        </NavbarBgContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
