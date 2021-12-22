import Component from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {MdOutlineSearch} from 'react-icons'
import Navbar from '../Navbar'
import VideoItem from '../VideoItem'

import ThemeContext from '../../context/ThemeContext'
import {
  FailureVideosContainer,
  VideoFailureImage,
  FailureResults,
  FailureResultsStatus,
  FailureVideosRetryButton,
  LoaderContainer,
  AppContainer,
  Sidebar,
  AllVideosContainer,
  BannerContainer,
  BannerText,
  SearchInput,
  ImageLogo,
  BannerButton,
  SearchButton,
  SuccessViewListContainer,
} from './styledComponents'

const apiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    allVideos: [],
    channel: {},
    searchInput: '',
    colorChangeText: false,
  }

  componentDidMount() {
    this.getAllVideosData()
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getFormattedData = data => ({
    id: data.id,

    title: data.title,

    thumbnailUrl: data.thumbnail_url,
    viewCount: data.view_count,
    publishedAt: data.published_at,
  })

  getAllVideosData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchInput} = this.state

    const jwtToken = Cookies.get('jwtToken')

    const url = `https://apis.ccbp.in/videos/all?search= + ${searchInput}`

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)

    if (response.ok) {
      const fetchedData = await response.json()

      const updatedData = {
        allVideosUpdated: fetchedData.videos.map(each =>
          this.getFormattedData(each),
        ),
        channelData: {
          name: fetchedData.videos.chanel.name,
          profileImageUrl: fetchedData.videos.channel.profile_image_url,
        },
      }

      this.setState({
        allVideos: updatedData.allVideosUpdated,
        channel: updatedData.channelData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

onClickRetry= () => {
    this.getAllVideosData()
}







  renderSuccessView = () => {
    const {allVideos, channel} = this.state
    const showNoSearchVideos = allVideos.length === 0
    return (
        {showNoSearchVideos ? (
            
            <NoSearchedVideosContainer>
            <NoSearchedImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png" alt ="no videos"/>
            <NoSearchResults>No Search results found</NoSearchResults>
            <NoSearchResultStatus>Try different key words or remove search filter</NoSearchResultStatus>
            <NoSearchRetryButton type="button" onClick= {this.onClickRetry}>Retry</NoSearchRetryButton>
            </NoSearchedVideosContainer>


         ) : (
            <SuccessViewListContainer>
        {allVideos.map(each => (
          <VideoItem
            key={each.id}
            singleVideoDetails={each}
            allVideos={allVideos}
            channel={channel}
          />
        ))}
      </SuccessViewListContainer>
    
    })
  }

  renderFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const failureThemeUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <FailureVideosContainer>
            <VideoFailureImage src={failureThemeUrl} alt="failure view" />
            <FailureResults>Oops! Something Went Wrong</FailureResults>
            <FailureResultsStatus>
              We are having Some trouble to complete your request, please try
              again.
            </FailureResultsStatus>
            <FailureVideosRetryButton type="button">
              Retry
            </FailureVideosRetryButton>
          </FailureVideosContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  renderAllVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  changeColorOfText = () => {
    this.setState({colorChangeText: true})
  }

  render() {
    const {colorChangeText} = this.state
    return (
      <>
        <Navbar />
        <AppContainer data-testid="home">
          <Sidebar
            changeColorOfText={this.changeColorOfText}
            colorChangeText={colorChangeText}
          />
          <AllVideosContainer>
            <BannerContainer>
              <ImageLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="website logo"
              />
              <BannerText>
                Buy Nxt Watch Premium prepaid plans with UPI
              </BannerText>
              <BannerButton type="button">GET IT NOW</BannerButton>
            </BannerContainer>

            <SearchInput
              value={SearchInput}
              onChange={this.onChangeSearchInput}
              placeholder="search"
              type="text"
            />
            <SearchButton type="button" data-testid="searchButton">
              <MdOutlineSearch size="20px" />
            </SearchButton>

            {this.renderAllVideos()}
          </AllVideosContainer>
        </AppContainer>
      </>
    )
  }
}

export default Home
