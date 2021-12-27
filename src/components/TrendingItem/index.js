import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'

import {
  TrendingListItem,
  ThumbnailImage,
  TrendingInformationContainer,
  TrendingTitle,
  TrendingViewCount,
  PostedDateEl,
  TrendingNam,
} from './styledComponents'

const TrendingItem = props => {
  const {trendingDetails, trendingChannel} = props
  const {id, title, thumbnailUrl, viewCount, publishedAt} = trendingDetails
  const {name} = trendingChannel
  const postedDate = formatDistanceToNow(new Date(publishedAt))

  return (
    <Link to={`/videos/${id}`}>
      <TrendingListItem>
        <ThumbnailImage src={thumbnailUrl} alt="thumbnail" />
        <TrendingInformationContainer>
          <TrendingTitle>{title}</TrendingTitle>
          <TrendingNam>{name}</TrendingNam>
          <TrendingViewCount>
            {viewCount} views
            <PostedDateEl> . {postedDate}</PostedDateEl>
          </TrendingViewCount>
        </TrendingInformationContainer>
      </TrendingListItem>
    </Link>
  )
}

export default TrendingItem
