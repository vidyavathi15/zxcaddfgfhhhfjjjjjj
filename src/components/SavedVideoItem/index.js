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
  const {id, title, thumbnailUrl, viewCount, publishedAt, name} = props

  const postedDate = formatDistanceToNow(new Date(publishedAt))

  return (
    <LinkItem to={`/video/${id}`}>
      <SavedVideosListItem>
        <SavedVideosThumbnailImage src={thumbnailUrl} alt={name} />
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
