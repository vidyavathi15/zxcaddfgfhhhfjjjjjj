import {Link} from 'react-router-dom'

import {
  GameListItem,
  ThumbnailImage,
  GameItemTitle,
  ViewCountEl,
} from './styledComponents'

const GameItem = props => {
  const {gameItemDetails} = props
  const {id, title, viewCount, thumbnailUrl} = gameItemDetails

  return (
    <Link to={`/gaming/${id}`}>
      <GameListItem>
        <ThumbnailImage src={thumbnailUrl} alt="thumbnail" />
        <GameItemTitle>{title}</GameItemTitle>
        <ViewCountEl>
          {viewCount}
          <viewCountText>Watching Worldwide</viewCountText>
        </ViewCountEl>
      </GameListItem>
    </Link>
  )
}

export default GameItem
