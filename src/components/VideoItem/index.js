import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

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
  const {singleVideoDetails} = props

  const {
    title,
    id,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
  } = singleVideoDetails

  const postedDate = formatDistanceToNow(new Date(publishedAt))

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
            <VideoPostedDate>.{postedDate}</VideoPostedDate>
          </VideoCount>
        </InformationBottomContainer>
      </ListBottomContainer>
    </VideoListItem>
  )
}

export default VideoItem
