import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  savedVideosList: [],
  isLiked: false,
  changingLikeToDisLike: () => {},
  addingAndDeletingToSavedVideos: () => {},
  toggleTheme: () => {},
  colorToColorText: () => {},
})

export default ThemeContext
