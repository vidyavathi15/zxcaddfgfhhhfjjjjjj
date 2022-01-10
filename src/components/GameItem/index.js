import {
  GameListItem,
  ThumbnailImage,
  GameItemTitle,
  ViewCountEl,
  LinkItem,
  ViewCountText,
} from './styledComponents'

const GameItem = props => {
  const {gameItemDetails} = props
  const {id, title, viewCount, thumbnailUrl} = gameItemDetails

  return (
    <LinkItem to={`/videos/${id}`}>
      <GameListItem>
        <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
        <GameItemTitle>{title}</GameItemTitle>
        <ViewCountEl>
          {viewCount}
          <ViewCountText>Watching Worldwide</ViewCountText>
        </ViewCountEl>
      </GameListItem>
    </LinkItem>
  )
}

export default GameItem
