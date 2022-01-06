import {Component} from 'react'

import {AiOutlineHome} from 'react-icons/ai'
import {FaFirefoxBrowser} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'

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
    const {isItemClicked} = this.state
    // const boldItemText = isItemClicked ? '#000000' : '#212121'

    const iconColor = isItemClicked ? '#ff0b37' : '#212121'

    return (
      <SidebarContainer>
        <SidebarTopContainer>
          <ListItem onClick={this.onClickChangeColorIconOrText}>
            <AiOutlineHome color={iconColor} size="20px" />
            <LinkItem to="/">Home</LinkItem>
          </ListItem>

          <ListItem onClick={this.onClickChangeColorIconOrText}>
            <FaFirefoxBrowser color={iconColor} size="20px" />
            <LinkItem to="/trending">Trending</LinkItem>
          </ListItem>
          <ListItem onClick={this.onClickChangeColorIconOrText}>
            <SiYoutubegaming color={iconColor} size="20px" />
            <LinkItem to="/gaming">Gaming</LinkItem>
          </ListItem>

          <ListItem onClick={this.onClickChangeColorIconOrText}>
            <BiListPlus color={iconColor} size="20px" />
            <LinkItem to="/saved-videos">Saved videos</LinkItem>
          </ListItem>
        </SidebarTopContainer>

        <SidebarBottomContainer>
          <FooterHeading>CONTACT US</FooterHeading>
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
          <FooterText>
            Enjoy! Now to see your channels and recommendations!
          </FooterText>
        </SidebarBottomContainer>
      </SidebarContainer>
    )
  }
}

export default Sidebar
