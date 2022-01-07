import {Component} from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'

import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'

import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'

import NotFound from './components/NotFound'
import ThemeContext from './context/ThemeContext'

import './App.css'

class App extends Component {
  state = {
    isDarkTheme: false,
    isLiked: false,
    isDisLiked: false,
    isSaved: false,
    savedVideosList: [],
  }

  addingAndDeletingToSavedVideos = id => {
    const {isSaved, savedVideosList} = this.state
    this.setState(prevState => ({isSaved: !prevState.isSaved}))

    if (isSaved === true) {
      this.setState(prevState => ({
        savedVideosList: [...prevState.savedVideosList, id],
      }))
    } else {
      const updatedList = savedVideosList.filter(each => each.id !== id)
      this.setState({savedVideosList: updatedList})
    }
  }

  changingLikeToDisLike = () => {
    const {isDisLiked} = this.state
    if (isDisLiked === true) {
      this.setState(prevState => ({isDisLiked: !prevState.isDisLiked}))
    }
    this.setState(prevState => ({isLiked: !prevState.isLiked}))
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  changingDisLike = () => {
    const {isLiked} = this.state
    if (isLiked === true) {
      this.setState(prevState => ({isLiked: !prevState.isLiked}))
    }
    this.setState(prevState => ({isDisLiked: !prevState.isDisLiked}))
  }

  render() {
    const {
      isDarkTheme,
      isDisLiked,
      isLiked,
      isSaved,
      savedVideosList,
    } = this.state

    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          isLiked,
          isDisLiked,
          savedVideosList,
          isSaved,
          addingAndDeletingToSavedVideos: this.addingAndDeletingToSavedVideos,
          changingDisLike: this.changingDisLike,

          changingLikeToDisLike: this.changingLikeToDisLike,
          toggleTheme: this.toggleTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />

          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />

          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
