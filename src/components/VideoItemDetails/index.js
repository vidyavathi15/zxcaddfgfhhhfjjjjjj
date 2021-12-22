import Component from 'react'
import ReactPlayer from "react-player"
import {BiListPlus} from "react-icons/bi"
import {AiOutlineLike} from "react-icons/ai"
import {BiDislike} from "react-icons/bi"
import {formatDistanceToNow} from 'date-fns'
import ThemeContext from "./context/ThemeContext"



const apiStatusConstants = {
    initial:"INITIAL",
    success:"SUCCESS",
    failure:"FAILURE",
    inProgress:"IN_PROGRESS",
}

class VideoItemDetails extends Component{

    state ={videDetails:{},channel:{} }
  
componentDidMount(){
    this.getVideoItemDetailsData()
}

getFormattedData = data => ({
    id: data.id,
    title: data.title,
    thumbnailUrl:data.thumbnail_url,
    viewCount: data.view_count,
    videoUrl: data.video_url,
    publishedAt: data.published_at,
    description: data.description,

})

getVideoItemDetailsData = async () => {
    this.setState({aiStatus:apiStatusConstants.inProgress})

    const {match} = this.props
    const {params} = match 
    const {id} = params

   const jwtToken =  Cookies.get("jwtToken")

    const url=`https://apis.ccbp.in/videos/${id}`
    
    const options = {
        headers:{
            Authorization:`Bearer ${jwtToken}`
        },
        method:"GET"

        
    }

    const response = await fetch(url, options)

    if (response.ok){
        const fetchedData = await response.json()

        const updatedData={
            videoDetails:this.getFormattedData(fetchedData.videoDetails),
            channelData: {
                name: fetchedData.videos.channel.name,
                ProfileImageUrl: fetchedData.videoDetails.chanel.profile_image_url,
                subScriberCount: fetchedData.videoDetails.channel.subscribed_count,
            }

        }
       this.setState({videoItemDetails: updatedData.videoDetails,
        channel: updatedData.channelData,
        apiStatus:apiStatusConstants.success
    })

    }
    else{
        this.setState({apiStatus: apiStatusConstants.failure})
    }


}




onClickIconOrText = () => {
    this.setState({isColorChange: true})

}

renderVideoItemDetailsSuccessView= () => {

    return(
        <ThemeContext.Consumer>
        {value=> {
            const {saveVideosList, isLiked, changingLikeToDisLike, addingAndDeletingToSavedVideos}= value


        const {videoDetails} = this.state 
        const {id, videoUrl, title, publishedAt} = videoDetails

        const postedDate = FormDistanceToNow(new Date(publishedAt))

        const colorChangeTextOrIcon = isLiked ? #2563eb  : #64748b 
        
        const DisLikeColorText = isLiked  ?  #64748b     : #2563eb

        const saveToSavedText = isLiked ? "Saved" : "Save"


        onClickIconOrText = () => {
            changingLikeToDisLike()

            }


        onClickIconOrDisLikeText = () => {
            changingLikeToDisLike()


        }

        onClickIconOrSaveText = () => {
            addingAndDeletingToSavedVideos(id)
        }


return(
        <ReactPlayerContainer>
        <ReactPlayer url={videoUrl} controls/>
        </ReactPlayerContainer>
        <VideoItemDetailsTitle>{title}</VideoItemDetailsTitle>
        <ViewsAndLikeContainerMiddleContainer>
        <ViewsCountContainer>
        <ViewsCount >{ViewCount}</ViewsCount>
        <VideoItemDate>{postedDate}</VideoItemDate>
        </ViewsCountContainer>
        <LikesAndDisLikeContainer>
        
            <LikeButton type="button" onClick={this.onClickIconOrText}>
            <LikesContainer>
            <AiOutlineLike colorChangeTextOrIcon ={colorChangeTextOrIcon}/>
            <LikeText colorChangeTextOrIcon={colorChangeTextOrIcon}>Like</LikeText>
            </LikesContainer>

            </LikeButton>



            <LikeButton type="button" onClick = {this.onClickIconOrDisLikeText}>
               <DisLikeContainer>
                <BiDislike colorChangeTextOrIcon ={colorChangeTextOrIcon}/>
                <DisLikeText colorChangeTextOrIcon ={colorChangeTextOrIcon}>DisLike</DisLikeText>
               </DisLikeContainer>
            </LikeButton>



            
            <LikeButton type="button"  onClick= {this.onClickIconOrSaveText}>
            <SaveContainer>
                <BiListPlus colorChangeTextOrIcon ={colorChangeTextOrIcon}/>
                <SaveText colorChangeTextOrIcon ={colorChangeTextOrIcon}>{saveToSavedText}</SaveText>
            </SaveContainer>
            </LikeButton>
            
            
        </LikesAndDisLikeContainer>
        </ViewsAndLikeContainerMiddleContainer>
        <HrLine/>
        <VideoItemDetailsBottomContainer>
        <VideoItemDetailSubPartContainer>
        <VideoItemDetailsProfileImage src={ProfileImageUrl} alt={name} />
        <VideoItemDetailsDescriptionContainer>
        <VideoItemDetailsName>{name}</VideoItemDetailsName>
        <VideoItemDetailsSubscribers>{subScriberCount} subScribers</VideoItemDetailsSubscribers>
        </VideoItemDetailsDescriptionContainer>
        </VideoItemDetailSubPartContainer>
        <VideoItemDetailsDescriptionDisplay>{description}</VideoItemDetailsDescriptionDisplay>
        </VideoItemDetailsBottomContainer>
      
                       
                       
        )
     }}
        
</ThemeContext.Consumer>

)
    
}



onClickRetryButton = () => {
    this.getVideoItemDetailsData()
}

renderFailureVideoItemDetails = () => (
    <ThemeContext.Consumer>
    {value => {
        const {isDarkTheme} = value


        
    const themeFailureImgUrl = isDarkTheme ? 
    "https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png":
    "https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"


    return(
        <FailureVideoItemDetailsContainer>
        <FailureVideoItemDetailsImage src={themeFailureImgUrl} alt ="failure view"/>
        <FailureVideoItemDetailsStatus>Oops! Something Went Wrong</FailureVideoItemDetailsStatus>
        <FailureVideoItemDetailsErrorMsg>We are having some trouble to complete your request. please try again.</FailureVideoItemDetailsErrorMsg>
        <RetryButton type="button" onClick={this.onClickRetryButton}>Retry</RetryButton>
        </FailureVideoItemDetailsContainer>
    )
}}

 </ThemeContext.Consumer>
)


renderLoadingVideoItemDetailsView= () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>

)

renderVideoItemDetailsView = () => {

    const {apiStatus} = this.state 

    switch(apiStatus){
        case apiStatusConstants.success:
            return this.renderVideoItemDetailsSuccessView()
        case apiStatusConstants.failure:
            return renderFailureVideoItemDetails()
        case apiStatusConstants.loading:
            return this.renderLoadingVideoItemDetailsView()
        default:
            return null
    }
}




    render(){

        
        return(
            <ThemeContext.Consumer>
            {value=>{
                const {isDarkTheme} = value

                const {channel, videoDetails} = this.state 
                const {name, subScriberCount, ProfileImageUrl} = channel
                const {description } = videoDetails

                const VideoItemDetailsBgColor = isDarkTheme ? #0f0f0f :  #f9f9f9


                return(
                    <VideoItemDetailsContainer data-testid="videoItemDetails" VideoItemDetailsBgColor= {VideoItemDetailsBgColor}>
                    {this.renderVideoItemDetailsView()}
                    </VideoItemDetailsContainer>
                )
            }}

         </ThemeContext.Consumer>

         )
        
    }

}


export default VideoItemDetails