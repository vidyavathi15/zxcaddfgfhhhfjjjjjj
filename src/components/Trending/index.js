import Component from 'react'
import Cookies from "js-cookie"
import ThemContext from "./components/ThemeContext"


import {




} from "./styledComponents"

const apiStatusConstants= {
    initial:"INITIAL",
    success:"SUCCESS",
    failure:"FAILURE",
    inProgress: "IN_PROGRESS",
}

class Trending extends Component{
   state={trendingVideos: [],trendingChannel: {} }

componentDidMount(){
    this.getTrendingData()
}



getFormattedData = data=> {
    id: data.id,
    title: data.title,
    viewCount:data.view_count,
    thumbnailUrl: data.thumbnail_url,
    publishedAt: data.published_at,
}



getTrendingData = async () =>{
    this.setState({apiStatus:apiStatusConstants.inProgress})
    
    const jwtToken = Cookies.get("jwtToken")

    const url="https://apis.ccbp.in/videos/trending"
    
    const options={
        headers:{
            Authorization:`Bearer ${jwtToken}`
        },
        method:"GET",
    }



    const response = await fetch(url, options)

    if (response.ok){
        const fetchedData= await response.json()

        const updatedData= {
            trendingUpdatedData: fetchedData.videos.map(each=> this.getFormattedData(each)),
            trendingFetchedChannel: {
                name: fetchedData.videos.channel.name,
                profileImageUrl: fetchedData.videos.channel.profile_image_url,
          }


         this.setState({trendingChannel: updatedData.trendingFetchedChannel, 
               trendingVideos: updatedData.trendingUpdatedData,
              apiStatus:apiStatusConstants.success})
    }
    else{
        this.setState({apiStatus:apiStatusConstants.failure})

    }
}


renderTrendingSuccessView = () => {
  const {trendingVideos, trendingChannel} = this.state
    return(

        <TrendingListContainer>
        {trendingVideos.map(each => (<TrendingItem key ={each.id} trendingDetails={each} trendingChannel={trendingChannel}/>))}
        </TrendingListContainer>
    )
}




onClickRetry = () => {
    this.getGamingData()
} 



renderTrendingFailureView = () =>(
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const failureThemeUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <FailureTrendingContainer>
            <TrendingFailureImage src={failureThemeUrl} alt="failure view" />
            <TrendingFailureResults>Oops! Something Went Wrong</TrendingFailureResults>
            <TrendingFailureResultsStatus>
              We are having Some trouble to complete your request, please try
              again.
            </TrendingFailureResultsStatus>
            <FailureTrendingRetryButton onClick={this.onClickRetry}>
              Retry
            </FailureTrendingRetryButton>
          </FailureTrendingContainer>
        )
      }}
    </ThemeContext.Consumer>

)



renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>


)










renderTrending= () => {
    const {apiStatus}= this.state 

    switch(apiStatus){
        case apiStatusConstants.success:
            return this.renderTrendingSuccessView()
        case apiStatusConstants.failure:
            return this.renderTrendingFailureView()
        case apiStatusConstants.inProgress:
            return this.renderLoadingView()
            default:
                return null

    }
}



render(){
    return(
        <ThemContext.Consumer>
        {value=> {
            const {isDarkTheme} = value 
            const TrendingBgColorTheme = isDarkTheme ? #0f0f0f: #f9f9f9


            return(
            <TrendingBgContainer data-testid="trending" TrendingBgColorTheme= {TrendingBgColorTheme}>
            {this.renderTrending()}

            </TrendingBgContainer>
            )
        }}

        </ThemContext.Consumer>
        )

    
     
    }
}

export default Trending