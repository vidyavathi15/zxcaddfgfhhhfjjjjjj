import {formatDistanceToNow} from 'date-fns'

import {
  SavedInformationContainer,
  SavedTitle,
  SavedName,
  SavedViewCount,
  SavedVideoPostedDate,
  SavedVideosListItem,
  SavedVideosThumbnailImage,
  LinkItem,
} from './styledComponents'

const SavedVideoItem = props => {
  const {savedVideoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
  } = savedVideoDetails

  const postedDate = formatDistanceToNow(new Date(publishedAt))

  return (
    <LinkItem to={`/videos/${id}`}>
      <SavedVideosListItem>
        <SavedVideosThumbnailImage
          src={thumbnailUrl}
          alt="video thumbnailUrl"
        />
        <SavedInformationContainer>
          <SavedTitle>{title}</SavedTitle>
          <SavedName>{name}</SavedName>
          <SavedViewCount>
            {viewCount} Views
            <SavedVideoPostedDate> . {postedDate}</SavedVideoPostedDate>
          </SavedViewCount>
        </SavedInformationContainer>
      </SavedVideosListItem>
    </LinkItem>
  )
}

export default SavedVideoItem
