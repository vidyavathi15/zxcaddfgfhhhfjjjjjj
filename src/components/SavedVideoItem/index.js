import {Link} from 'react-router-dom'
import formDistanceToNow from 'date-fns'
import {
  SavedVideoListItem,
  SavedThumbnailImage,
  SavedInformationContainer,
  SavedTitle,
  SavedName,
  SavedViewCount,
  SavedPostedDate,
} from './styledComponents'

const SavedVideoItem = props => {
  const {id, title, thumbnailUrl, viewCount, publishedAt, name} = props

  const postedDate = formDistanceToNow(new Date(publishedAt))

  return (
    <Link to={`/saved-videos/${id}`}>
      <SavedVideoListItem>
        <SavedThumbnailImage src={thumbnailUrl} alt={name} />

        <SavedInformationContainer>
          <SavedTitle>{title}</SavedTitle>
          <SavedName>{name}</SavedName>
          <SavedViewCount>
            {viewCount} Views <SavedPostedDate> . {postedDate}</SavedPostedDate>
          </SavedViewCount>
        </SavedInformationContainer>
      </SavedVideoListItem>
    </Link>
  )
}

export default SavedVideoItem
