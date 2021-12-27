import {formatDistanceToNow} from 'date-fns'
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
  const {allVideos, channel} = props
  const {title, id, thumbnailUrl, viewCount, publishedAt} = allVideos
  const {name, profileImageUrl} = channel

  const postedDate = formatDistanceToNow(new Date(publishedAt))

  return (
    <Link to={`/videos/${id}`}>
      <VideoListItem>
        <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
        <ListBottomContainer>
          <ProfileImage src={profileImageUrl} alt="channel logo" />
          <InformationBottomContainer>
            <VideoTitle>{title}</VideoTitle>
            <VideoName>{name}</VideoName>
            <VideoCount>
              {viewCount} Views
              <VideoPostedDate> . {postedDate}</VideoPostedDate>
            </VideoCount>
          </InformationBottomContainer>
        </ListBottomContainer>
      </VideoListItem>
    </Link>
  )
}

export default VideoItem
