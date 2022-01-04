import {Link} from 'react-router-dom'
import {
  VideoListItem,
  ThumbnailImage,
  ListBottomContainer,
  ProfileImage,
  InformationBottomContainer,
  VideoTitle,
  VideoName,
  VideoCount,
  VideoPostedDate,
} from './styledComponents'

const VideoItem = props => {
  const {singleVideoDetails, channelDetails} = props

  const {title, id, thumbnailUrl, viewCount, publishedAt} = singleVideoDetails
  const {name, profileImageUrl} = channelDetails

  return (
    <VideoListItem>
      <Link to={`/videos/${id}`}>
        <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
      </Link>
      <ListBottomContainer>
        <ProfileImage src={profileImageUrl} alt="channel logo" />
        <InformationBottomContainer>
          <VideoTitle>{title}</VideoTitle>
          <VideoName>{name}</VideoName>
          <VideoCount>
            {viewCount} Views
            <VideoPostedDate>.{publishedAt}</VideoPostedDate>
          </VideoCount>
        </InformationBottomContainer>
      </ListBottomContainer>
    </VideoListItem>
  )
}

export default VideoItem
