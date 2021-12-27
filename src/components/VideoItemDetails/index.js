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
  LikeButton,
  SaveContainer,
  LikesContainer,
  LikeText,
  DisLikeContainer,
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
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {videoDetails: {}, channel: {}}

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
  })

  getVideoItemDetailsData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwtToken')

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
        videoDetails: this.getFormattedData(fetchedData.videoDetails),
        channelData: {
          name: fetchedData.videos.channel.name,
          ProfileImageUrl: fetchedData.videoDetails.chanel.profile_image_url,
          subScriberCount: fetchedData.videoDetails.channel.subscribed_count,
        },
      }
      this.setState({
        videoDetails: updatedData.videoDetails,
        channel: updatedData.channelData,
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

        const {videoDetails, channel} = this.state
        const {
          id,
          videoUrl,
          title,
          publishedAt,
          viewCount,
          description,
        } = videoDetails
        const {ProfileImageUrl, subScriberCount, name} = channel

        const postedDate = formatDistanceToNow(new Date(publishedAt))

        const colorChangeTextOrIcon = isLiked ? '#2563eb' : '#64748b'

        const disLikeColorText = isLiked ? '#64748b' : '#2563eb'

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
          <>
            <ReactPlayerContainer>
              <ReactPlayer url={videoUrl} controls />
            </ReactPlayerContainer>
            <VideoItemDetailsTitle>{title}</VideoItemDetailsTitle>
            <ViewsAndLikeContainerMiddleContainer>
              <ViewsCountContainer>
                <ViewsCount>{viewCount}</ViewsCount>
                <VideoItemDate>{postedDate}</VideoItemDate>
              </ViewsCountContainer>
              <LikesAndDisLikeContainer>
                <LikeButton type="button" onClick={onClickIconOrText}>
                  <LikesContainer>
                    <AiOutlineLike
                      colorChangeTextOrIcon={colorChangeTextOrIcon}
                    />
                    <LikeText colorChangeTextOrIcon={colorChangeTextOrIcon}>
                      Like
                    </LikeText>
                  </LikesContainer>
                </LikeButton>

                <LikeButton type="button" onClick={onClickIconOrDisLikeText}>
                  <DisLikeContainer>
                    <BiDislike color={disLikeColorText} />
                    <DisLikeText color={disLikeColorText}>DisLike</DisLikeText>
                  </DisLikeContainer>
                </LikeButton>

                <LikeButton type="button" onClick={onClickIconOrSaveText}>
                  <SaveContainer>
                    <BiListPlus colorChangeTextOrIcon={colorChangeTextOrIcon} />
                    <SaveText>{saveToSavedText}</SaveText>
                  </SaveContainer>
                </LikeButton>
              </LikesAndDisLikeContainer>
            </ViewsAndLikeContainerMiddleContainer>
            <HrLine />
            <VideoItemDetailsBottomContainer>
              <VideoItemDetailSubPartContainer>
                <VideoItemDetailsProfileImage
                  src={ProfileImageUrl}
                  alt={name}
                />
                <VideoItemDetailsDescriptionContainer>
                  <VideoItemDetailsName>{name}</VideoItemDetailsName>
                  <VideoItemDetailsSubscribers>
                    {subScriberCount} subScribers
                  </VideoItemDetailsSubscribers>
                </VideoItemDetailsDescriptionContainer>
              </VideoItemDetailSubPartContainer>
              <VideoItemDetailsDescriptionDisplay>
                {description}
              </VideoItemDetailsDescriptionDisplay>
            </VideoItemDetailsBottomContainer>
          </>
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
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
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
