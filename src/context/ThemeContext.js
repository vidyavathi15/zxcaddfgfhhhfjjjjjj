import React from 'react'

const ThemeContext = React.CreateContext({
  isDarkTheme: false,
  savedVideosList: [],
  isLiked: false,
  changingLikeToDisLike: () => {},
  addingAndDeletingToSavedVideos: () => {},
  toggleTheme: () => {},
})

export default ThemeContext
