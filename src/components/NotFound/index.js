import ThemeContext from '../../context/ThemeContext'

import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundResult,
  NotFoundResultStatus,
} from './styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const notFoundImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.pn'

      return (
        <NotFoundContainer>
          <NotFoundImage src={notFoundImageUrl} alt="not found" />
          <NotFoundResult>Page Not Found</NotFoundResult>
          <NotFoundResultStatus>
            we are sorry, the page you requested could not be found.
          </NotFoundResultStatus>
        </NotFoundContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
