import {FaFirefoxBrowser} from 'react-icons/fa'
import ThemeContext from '../../context/ThemeContext'

import {
  ItemHeaderBgContainer,
  ItemContainer,
  ItemName,
} from './styledComponents'

const ItemHeader = () => (
  <ThemeContext>
    {value => {
      const {isDarkTheme} = value
      const colorIcon = isDarkTheme ? '#ff0000' : '#ff0000'
      const itemNameColor = isDarkTheme ? '#ffffff' : '#383838'

      return (
        <ItemHeaderBgContainer>
          <ItemContainer>
            <FaFirefoxBrowser color={colorIcon} />
            <ItemName color={itemNameColor}>Trending</ItemName>
          </ItemContainer>
        </ItemHeaderBgContainer>
      )
    }}
  </ThemeContext>
)

export default ItemHeader
