import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import {
  SavedInformationContainer,
  SavedTitle,
  SavedName,
  SavedViewCount,
  SavedVideoPostedDate,
  SavedVideosListItem,
  SavedVideosThumbnailImage,
} from './styledComponents'

const SavedVideoItem = props => {
  const {id, title, thumbnailUrl, viewCount, publishedAt, name} = props

  const postedDate = formatDistanceToNow(new Date(publishedAt))

  return (
    <Link to={`/saved-videos/${id}`}>
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
    </Link>
  )
}

export default SavedVideoItem
