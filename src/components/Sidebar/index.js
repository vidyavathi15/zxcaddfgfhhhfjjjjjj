import {Component} from 'react'

import {AiOutlineHome} from 'react-icons/ai'
import {FaFirefoxBrowser} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'

import ThemeContext from '../../context/ThemeContext'

import {
  ListItem,
  SidebarContainer,
  SidebarTopContainer,
  SidebarBottomContainer,
  FooterHeading,
  IconContainer,
  IconImage,
  FooterText,
  LinkItem,
} from './styledComponents'

class Sidebar extends Component {
  state = {isItemClicked: false}

  onClickChangeColorIconOrText = () => {
    this.setState({isItemClicked: true})
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const contactText = isDarkTheme ? '#ffffff' : '#000000'

          const footerTxt = isDarkTheme ? '#ffffff' : '#000000'

          const {isItemClicked} = this.state

          const boldItemText = isItemClicked ? '#212121' : null

          const iconColor = isItemClicked ? '#ff0b37' : '#212121'

          return (
            <SidebarContainer>
              <SidebarTopContainer>
                <ListItem onClick={this.onClickChangeColorIconOrText}>
                  <AiOutlineHome color={iconColor} size="20px" />
                  <LinkItem to="/" color={contactText} border={boldItemText}>
                    Home
                  </LinkItem>
                </ListItem>

                <ListItem
                  onClick={this.onClickChangeColorIconOrText}
                  border={boldItemText}
                >
                  <FaFirefoxBrowser color={iconColor} size="20px" />
                  <LinkItem to="/trending" color={contactText}>
                    Trending
                  </LinkItem>
                </ListItem>
                <ListItem
                  onClick={this.onClickChangeColorIconOrText}
                  border={boldItemText}
                >
                  <SiYoutubegaming color={iconColor} size="20px" />
                  <LinkItem to="/gaming" color={contactText}>
                    Gaming
                  </LinkItem>
                </ListItem>

                <ListItem
                  onClick={this.onClickChangeColorIconOrText}
                  border={boldItemText}
                >
                  <BiListPlus color={iconColor} size="20px" />
                  <LinkItem to="/saved-videos" color={contactText}>
                    Saved videos
                  </LinkItem>
                </ListItem>
              </SidebarTopContainer>

              <SidebarBottomContainer>
                <FooterHeading color={contactText}>CONTACT US</FooterHeading>
                <IconContainer>
                  <IconImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <IconImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />

                  <IconImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </IconContainer>
                <FooterText color={footerTxt}>
                  Enjoy! Now to see your channels and recommendations!
                </FooterText>
              </SidebarBottomContainer>
            </SidebarContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Sidebar
