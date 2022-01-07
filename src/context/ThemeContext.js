import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  savedVideosList: [],
  isLiked: false,
  isDisLiked: false,
  isSaved: false,
  changingSaveToSaved: () => {},
  changingLikeToDisLike: () => {},
  changingDisLike: () => {},
  addingAndDeletingToSavedVideos: () => {},
  toggleTheme: () => {},
  colorToColorText: () => {},
})

export default ThemeContext
