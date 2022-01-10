import {formatDistanceToNow} from 'date-fns'

import {
  TrendingListItem,
  ThumbnailImage,
  TrendingInformationContainer,
  TrendingTitle,
  TrendingViewCount,
  PostedDateEl,
  TrendingNam,
  LinkItem,
} from './styledComponents'

const TrendingItem = props => {
  const {trendingDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
  } = trendingDetails

  const postedDate = formatDistanceToNow(new Date(publishedAt))

  return (
    <LinkItem to={`/videos/${id}`}>
      <TrendingListItem>
        <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
        <TrendingInformationContainer>
          <TrendingTitle>{title}</TrendingTitle>
          <TrendingNam>{name}</TrendingNam>
          <TrendingViewCount>
            {viewCount} views
            <PostedDateEl> . {postedDate}</PostedDateEl>
          </TrendingViewCount>
        </TrendingInformationContainer>
      </TrendingListItem>
    </LinkItem>
  )
}

export default TrendingItem
