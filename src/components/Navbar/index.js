import Popup from 'reactjs-popup'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

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
  NavItemContainer,
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
      const navbarBg = isDarkTheme ? '#181818' : '#ffffff'

      const onClickConfirmButton = props => {
        const {history} = props

        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const overlayStyles = {
        backgroundColor: '#ffff',
      }

      return (
        <NavbarBgContainer navbarBg={navbarBg}>
          <NavbarContentContainer>
            <Link to="/">
              <WebsiteLogoImage src={websiteUrl} alt="website logo" />
            </Link>

            <NavItemsListContainer>
              <NavItem>
                <ThemeButton onClick={onClickTheme} type="button">
                  <ThemeImage src={themeUrl} alt="theme" />
                </ThemeButton>
              </NavItem>
              <NavItem>
                <ProfileImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </NavItem>
              <NavItemContainer>
                <Popup
                  model
                  trigger={
                    <LogoutButton data-testid="logoutButton" type="button">
                      Logout
                    </LogoutButton>
                  }
                  overlayStyle={overlayStyles}
                  className="popup-content"
                >
                  <TextPopup>Are you sure, you want to logout?</TextPopup>
                  <PopupButtonContainer>
                    <CancelButton type="button">Cancel</CancelButton>
                    <ConfirmButton type="button" onClick={onClickConfirmButton}>
                      Confirm
                    </ConfirmButton>
                  </PopupButtonContainer>
                </Popup>
              </NavItemContainer>
            </NavItemsListContainer>
          </NavbarContentContainer>
        </NavbarBgContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Navbar)
