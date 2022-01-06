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
  state = {isDarkTheme: false, isLiked: false, savedVideosList: []}

  addingAndDeletingToSavedVideos = id => {
    const {isLiked, savedVideosList} = this.state

    if (isLiked === true) {
      this.setState(prevState => ({
        savedVideosList: [...prevState.savedVideosList, id],
      }))
    } else {
      const updatedList = savedVideosList.filter(each => each.id !== id)
      this.setState({savedVideosList: updatedList})
    }
  }

  changingLikeToDisLike = () => {
    this.setState(prevState => ({isLiked: !prevState.isLiked}))
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  render() {
    const {isDarkTheme, isLiked, savedVideosList} = this.state

    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          isLiked,
          savedVideosList,
          addingAndDeletingToSavedVideos: this.addingAndDeletingToSavedVideos,

          changingLikeToDisLike: this.changingLikeToDisLike,
          toggleTheme: this.toggleTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
