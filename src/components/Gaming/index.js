import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ThemeContext from '../../context/ThemeContext'
import GameItem from '../GameItem'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import GamingItemHeader from '../GamingItemHeader'

import {
  GamingResultListContainer,
  FailureGamingContainer,
  GamingFailureImage,
  GamingFailureResults,
  GamingFailureResultsStatus,
  FailureVideosRetryButton,
  LoaderContainer,
  GamingBgContainer,
  GamingHeaderAndGameItemListContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {gameResults: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getGamingData()
  }

  getFormattedData = data => ({
    id: data.id,
    title: data.title,
    thumbnailUrl: data.thumbnail_url,
    viewCount: data.view_count,
  })

  getGamingData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')

    const url = 'https://apis.ccbp.in/videos/gaming'

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    if (response.ok) {
      const fetchedData = await response.json()

      const updatedData = fetchedData.videos.map(each =>
        this.getFormattedData(each),
      )

      this.setState({
        apiStatus: apiStatusConstants.success,
        gameResults: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderGamingSuccessView = () => {
    const {gameResults} = this.state

    return (
      <GamingHeaderAndGameItemListContainer>
        <GamingItemHeader />
        <GamingResultListContainer>
          {gameResults.map(each => (
            <GameItem key={each.id} gameItemDetails={each} />
          ))}
        </GamingResultListContainer>
      </GamingHeaderAndGameItemListContainer>
    )
  }

  onClickRetry = () => {
    this.getGamingData()
  }

  renderGamingFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const failureThemeUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <FailureGamingContainer>
            <GamingFailureImage src={failureThemeUrl} alt="failure view" />
            <GamingFailureResults>
              Oops! Something Went Wrong
            </GamingFailureResults>
            <GamingFailureResultsStatus>
              We are having Some trouble to complete your request, please try
              again.
            </GamingFailureResultsStatus>
            <FailureVideosRetryButton type="button" onClick={this.onClickRetry}>
              Retry
            </FailureVideosRetryButton>
          </FailureGamingContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  renderGamingResults = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderGamingSuccessView()
      case apiStatusConstants.failure:
        return this.renderGamingFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const gamingBgThemeColor = isDarkTheme ? '#0f0f0f' : '  #f9f9f9 '
          return (
            <>
              <Navbar />

              <GamingBgContainer
                data-testid="gaming"
                bgColor={gamingBgThemeColor}
              >
                <Sidebar />

                {this.renderGamingResults()}
              </GamingBgContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
