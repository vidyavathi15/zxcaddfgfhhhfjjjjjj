import {AiOutlineHome} from 'react-icons/ai'
import {FaFirefoxBrowser} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'

import {
  SidebarContainer,
  SidebarTopContainer,
  HomeContainer,
  LinkItem,
  SidebarBottomContainer,
  FooterHeading,
  IconContainer,
  IconImage,
  FooterText,
  ChangeButton,
} from './styledComponents'

const Sidebar = props => {
  const {changeColorOfText} = props

  const onClickChangeColorIconOrText = () => {
    changeColorOfText()
  }

  return (
    <SidebarContainer>
      <SidebarTopContainer>
        <ChangeButton type="button" onClick={onClickChangeColorIconOrText}>
          <HomeContainer>
            <AiOutlineHome color="#383838" size="20px" />
            <LinkItem to="/">Home</LinkItem>
          </HomeContainer>
        </ChangeButton>

        <ChangeButton type="button" onClick={onClickChangeColorIconOrText}>
          <HomeContainer>
            <FaFirefoxBrowser color="#383838" size="20px" />
            <LinkItem to="/trending">Trending</LinkItem>
          </HomeContainer>
        </ChangeButton>
        <ChangeButton type="button" onClick={onClickChangeColorIconOrText}>
          <HomeContainer>
            <SiYoutubegaming color="#383838" size="20px" />
            <LinkItem to="/gaming">Gaming</LinkItem>
          </HomeContainer>
        </ChangeButton>

        <ChangeButton type="button" onClick={onClickChangeColorIconOrText}>
          <HomeContainer>
            <BiListPlus color="#383838" size="20px" />
            <LinkItem to="/saved-videos">Saved videos</LinkItem>
          </HomeContainer>
        </ChangeButton>
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

export default Sidebar
