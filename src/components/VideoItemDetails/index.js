import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {BiListPlus, BiDislike} from 'react-icons/bi'
import {AiOutlineLike} from 'react-icons/ai'

import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'

import {
  VideoItemDetailsContainer,
  LoaderContainer,
  FailureVideoItemDetailsContainer,
  FailureVideoItemDetailsStatus,
  FailureVideoItemDetailsErrorMsg,
  RetryButton,
  FailureVideoItemDetailsImage,
  VideoItemDetailsTitle,
  ViewsAndLikeContainerMiddleContainer,
  ViewsCountContainer,
  LikeTextButton,
  DisLikeTextButton,
  SaveTextButton,
  ReactPlayerContainer,
  HrLine,
  VideoItemDetailsBottomContainer,
  VideoItemDetailSubPartContainer,
  VideoItemDetailsProfileImage,
  VideoItemDetailsDescriptionContainer,
  VideoItemDetailsName,
  VideoItemDetailsSubscribers,
  ViewsCount,
  VideoItemDate,
  LikesAndDisLikeContainer,
  VideoItemDetailsDescriptionDisplay,
  ListItem,
  VideoItemDetailsAppContainer,
  VideoItemDetailsAppTopContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {videoDetails: {}, apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getVideoItemDetailsData()
  }

  getFormattedData = data => ({
    id: data.id,
    title: data.title,
    thumbnailUrl: data.thumbnail_url,
    viewCount: data.view_count,
    videoUrl: data.video_url,
    publishedAt: data.published_at,
    description: data.description,
    name: data.channel.name,
    profileImageUrl: data.channel.profile_image_url,
    subScriberCount: data.channel.subscriber_count,
  })

  getVideoItemDetailsData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/${id}`

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
        videoDetails: this.getFormattedData(fetchedData.video_details),
      }

      this.setState({
        videoDetails: updatedData.videoDetails,

        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderVideoItemDetailsSuccessView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {
          isLiked,
          isDisLiked,
          changingLikeToDisLike,
          addingAndDeletingToSavedVideos,
          changingDisLike,
          isSaved,
        } = value

        const {videoDetails} = this.state
        const {
          id,
          videoUrl,
          title,
          publishedAt,
          viewCount,
          description,
          profileImageUrl,
          subScriberCount,
          name,
          thumbnailUrl,
        } = videoDetails

        const postedDate = formatDistanceToNow(new Date(publishedAt))

        const colorChangeTextOrIcon = isLiked ? '#2563eb' : '#64748b'

        const disLikeColorText = isDisLiked ? '#2563eb' : '#64748b'

        const saveToSavedText = isSaved ? 'Saved' : 'Save'
        const saveColorText = isSaved ? '#2563eb' : '#64748b'

        const onClickIconOrText = () => {
          changingLikeToDisLike()
        }

        const onClickIconOrDisLikeText = () => {
          changingDisLike()
        }

        const onClickIconOrSaveText = () => {
          const newVideo = {
            id,
            thumbnailUrl,
            publishedAt,
            viewCount,
            title,
            name,
          }

          addingAndDeletingToSavedVideos(newVideo)
        }

        return (
          <VideoItemDetailsAppContainer>
            <ReactPlayerContainer>
              <ReactPlayer url={videoUrl} controls />
            </ReactPlayerContainer>
            <VideoItemDetailsTitle>{title}</VideoItemDetailsTitle>
            <ViewsAndLikeContainerMiddleContainer>
              <ViewsCountContainer>
                <ViewsCount>{viewCount}views </ViewsCount>
                <VideoItemDate> . {postedDate}</VideoItemDate>
              </ViewsCountContainer>
              <LikesAndDisLikeContainer>
                <ListItem>
                  <AiOutlineLike
                    color={colorChangeTextOrIcon}
                    onClick={onClickIconOrText}
                  />
                  <LikeTextButton
                    type="button"
                    color={colorChangeTextOrIcon}
                    onClick={onClickIconOrText}
                  >
                    Like
                  </LikeTextButton>
                </ListItem>

                <ListItem>
                  <BiDislike
                    color={disLikeColorText}
                    onClick={onClickIconOrDisLikeText}
                  />
                  <DisLikeTextButton
                    type="button"
                    color={disLikeColorText}
                    onClick={onClickIconOrDisLikeText}
                  >
                    DisLike
                  </DisLikeTextButton>
                </ListItem>

                <ListItem>
                  <BiListPlus
                    color={saveColorText}
                    onClick={onClickIconOrSaveText}
                  />
                  <SaveTextButton
                    type="button"
                    onClick={onClickIconOrSaveText}
                    color={saveColorText}
                  >
                    {saveToSavedText}
                  </SaveTextButton>
                </ListItem>
              </LikesAndDisLikeContainer>
            </ViewsAndLikeContainerMiddleContainer>
            <HrLine />
            <VideoItemDetailsBottomContainer>
              <VideoItemDetailSubPartContainer>
                <VideoItemDetailsProfileImage
                  src={profileImageUrl}
                  alt="profile"
                />
                <VideoItemDetailsDescriptionContainer>
                  <VideoItemDetailsName>{name}</VideoItemDetailsName>
                  <VideoItemDetailsSubscribers>
                    {subScriberCount} subscribers
                  </VideoItemDetailsSubscribers>
                  <VideoItemDetailsDescriptionDisplay>
                    {description}
                  </VideoItemDetailsDescriptionDisplay>
                </VideoItemDetailsDescriptionContainer>
              </VideoItemDetailSubPartContainer>
            </VideoItemDetailsBottomContainer>
          </VideoItemDetailsAppContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  onClickRetryButton = () => {
    this.getVideoItemDetailsData()
  }

  renderFailureVideoItemDetails = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const themeFailureImgUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <FailureVideoItemDetailsContainer>
            <FailureVideoItemDetailsImage
              src={themeFailureImgUrl}
              alt="failure view"
            />
            <FailureVideoItemDetailsStatus>
              Oops! Something Went Wrong
            </FailureVideoItemDetailsStatus>
            <FailureVideoItemDetailsErrorMsg>
              We are having some trouble to complete your request. please try
              again.
            </FailureVideoItemDetailsErrorMsg>
            <RetryButton type="button" onClick={this.onClickRetryButton}>
              Retry
            </RetryButton>
          </FailureVideoItemDetailsContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderLoadingVideoItemDetailsView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  renderVideoItemDetailsView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideoItemDetailsSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureVideoItemDetails()
      case apiStatusConstants.inProgress:
        return this.renderLoadingVideoItemDetailsView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const containerBgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'

          return (
            <>
              <Navbar />
              <VideoItemDetailsContainer
                data-testid="videoItemDetails"
                color={containerBgColor}
              >
                <VideoItemDetailsAppTopContainer>
                  <Sidebar />
                  {this.renderVideoItemDetailsView()}
                </VideoItemDetailsAppTopContainer>
              </VideoItemDetailsContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
