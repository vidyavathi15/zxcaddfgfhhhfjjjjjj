import {SiYoutubegaming} from 'react-icons/si'
import ThemeContext from '../../context/ThemeContext'

import {
  ItemHeaderBgContainer,
  ItemContainer,
  ItemName,
} from './styledComponents'

const ItemHeader = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const headerBg = isDarkTheme ? '#424242' : ' #cbd5e1'

      const colorIcon = isDarkTheme ? '#ff0000' : '#383838'
      const itemNameColor = isDarkTheme ? '#ffffff' : '#383838'

      return (
        <ItemHeaderBgContainer bgColor={headerBg}>
          <ItemContainer>
            <SiYoutubegaming color={colorIcon} />
            <ItemName color={itemNameColor}>Gaming</ItemName>
          </ItemContainer>
        </ItemHeaderBgContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default ItemHeader
