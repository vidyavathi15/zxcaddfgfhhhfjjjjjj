import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {BiListPlus, BiDislike} from 'react-icons/bi'
import {AiOutlineLike} from 'react-icons/ai'

import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'
import ThemeContext from '../../context/ThemeContext'

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
  LikeText,
  DisLikeText,
  SaveText,
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
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {videoDetails: {}}

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
          changingLikeToDisLike,
          addingAndDeletingToSavedVideos,
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
        } = videoDetails

        const postedDate = formatDistanceToNow(new Date(publishedAt))

        const colorChangeTextOrIcon = isLiked ? '#2563eb' : '#64748b'

        const disLikeColorText = isLiked ? '#2563eb' : '#64748b'

        const saveToSavedText = isLiked ? 'Saved' : 'Save'

        const onClickIconOrText = () => {
          changingLikeToDisLike()
        }

        const onClickIconOrDisLikeText = () => {
          changingLikeToDisLike()
        }

        const onClickIconOrSaveText = () => {
          addingAndDeletingToSavedVideos(id)
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
                  <LikeText
                    color={colorChangeTextOrIcon}
                    onClick={onClickIconOrText}
                  >
                    Like
                  </LikeText>
                </ListItem>

                <ListItem>
                  <BiDislike
                    color={disLikeColorText}
                    onClick={onClickIconOrDisLikeText}
                  />
                  <DisLikeText
                    color={disLikeColorText}
                    onClick={onClickIconOrDisLikeText}
                  >
                    DisLike
                  </DisLikeText>
                </ListItem>

                <ListItem>
                  <BiListPlus
                    color={colorChangeTextOrIcon}
                    onClick={onClickIconOrSaveText}
                  />
                  <SaveText
                    onClick={onClickIconOrText}
                    color={colorChangeTextOrIcon}
                  >
                    {saveToSavedText}
                  </SaveText>
                </ListItem>
              </LikesAndDisLikeContainer>
            </ViewsAndLikeContainerMiddleContainer>
            <HrLine />
            <VideoItemDetailsBottomContainer>
              <VideoItemDetailSubPartContainer>
                <VideoItemDetailsProfileImage
                  src={profileImageUrl}
                  alt={name}
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
      case apiStatusConstants.loading:
        return this.renderLoadingVideoItemDetailsView()
      default:
        return null
    }
  }

  render() {
    return (
      <VideoItemDetailsContainer data-testid="videoItemDetails">
        {this.renderVideoItemDetailsView()}
      </VideoItemDetailsContainer>
    )
  }
}

export default VideoItemDetails
