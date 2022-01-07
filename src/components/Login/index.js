import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  LoginFormContainer,
  WebsiteLogoMobileImage,
  FormContainer,
  WebsiteLogoDesktopImage,
  InputContainer,
  CheckboxContainer,
  CheckInput,
  LabelForCheckbox,
  LoginButton,
  InputLabel,
  FormInput,
  ErrorElement,
} from './styledComponents'

class Login extends Component {
  state = {
    showSubmitError: false,
    username: '',
    password: '',
    errorMsg: '',
    showPassword: false,
  }

  togglePassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onClickShowPassword = () => {
    this.togglePassword()
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state

    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)

    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  renderUserName = () => {
    const {username} = this.state

    return (
      <>
        <InputLabel htmlFor="username">USERNAME</InputLabel>
        <FormInput
          id="username"
          type="text"
          onChange={this.onChangeUsername}
          value={username}
          placeholder="Username"
        />
      </>
    )
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderPassword = () => {
    const {password, showPassword} = this.state

    return (
      <>
        <InputLabel htmlFor="password">PASSWORD</InputLabel>
        {showPassword ? (
          <FormInput
            id="password"
            type="text"
            value={password}
            onChange={this.onChangePassword}
            placeholder="Password"
          />
        ) : (
          <FormInput
            id="password"
            type="password"
            value={password}
            onChange={this.onChangePassword}
            placeholder="Password"
          />
        )}
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state

    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <LoginFormContainer>
        <WebsiteLogoMobileImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <FormContainer onSubmit={this.submitForm}>
          <WebsiteLogoDesktopImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
          />

          <InputContainer>{this.renderUserName()}</InputContainer>
          <InputContainer>{this.renderPassword()}</InputContainer>
          <CheckboxContainer>
            <CheckInput
              type="checkbox"
              id="myCheckbox"
              onClick={this.onClickShowPassword}
            />
            <LabelForCheckbox htmlFor="myCheckbox">
              Show Password
            </LabelForCheckbox>
          </CheckboxContainer>
          <LoginButton type="submit">Login</LoginButton>
          {showSubmitError && <ErrorElement>*{errorMsg}</ErrorElement>}
        </FormContainer>
      </LoginFormContainer>
    )
  }
}

export default Login
