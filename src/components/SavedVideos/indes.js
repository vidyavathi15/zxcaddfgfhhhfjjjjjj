import ThemeContext from '../../context/ThemeContext'
import SavedVideoItem from '../SavedVideoItem'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import SavedVideosItemHeader from '../SavedVideosItemHeader'

import {
  SavedVideosBgContainer,
  SavedListContainer,
  NoSavedVideosContainer,
  NoSavedVideosImage,
  NoSavedResult,
  NoSavedVideosStatus,
} from './styledComponents'

const SavedVideos = () => (
  <ThemeContext.Consumer>
    {value => {
      const {savedVideosList, isDarkTheme} = value
      const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'

      const showNoVideosView = savedVideosList.length === 0

      return showNoVideosView ? (
        <NoSavedVideosContainer>
          <NoSavedVideosImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <NoSavedResult>No saved videos found</NoSavedResult>
          <NoSavedVideosStatus>
            You can see your videos while watching them
          </NoSavedVideosStatus>
        </NoSavedVideosContainer>
      ) : (
        <>
          <Navbar />
          <SavedVideosBgContainer data-testid="savedVideos" bgColor={bgColor}>
            <Sidebar />
            <SavedListContainer>
              <SavedVideosItemHeader />
              {savedVideosList.map(each => (
                <SavedVideoItem key={each.id} savedVideoDetails={each} />
              ))}
            </SavedListContainer>
          </SavedVideosBgContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default SavedVideos
