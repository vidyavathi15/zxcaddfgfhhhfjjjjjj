import {BiListPlus} from 'react-icons/bi'

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
            <BiListPlus color={colorIcon} />
            <ItemName color={itemNameColor}>Gaming</ItemName>
          </ItemContainer>
        </ItemHeaderBgContainer>
      )
    }}
  </ThemeContext>
)

export default ItemHeader
