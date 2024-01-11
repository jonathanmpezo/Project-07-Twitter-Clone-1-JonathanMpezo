import tweetimage from "../images/tweet-image.png"
import vas from"/image 1.svg"
import ju from"/Title.svg"
import bon from "/Buton.svg"
import ville from "/Buton1.svg"
import  gag from "/Buton3.svg"
import  Kiss from "/Butontecharge.svg"


function Phase(){
  return(
    <div className="timeline">
      <div className="tweets">
        <div className="tweet"> 
          <div className="tweet-avatar" >
            <img src={vas}/>
          </div>
                <div className="tweet-content">
                   <div className="tweet-body">
                     <div className="tweet-title">
                       <img src={ju}/>
                     </div>

                   <div className="tweet-text">
        <p>Gardening boomed during the pandemic. Six Black writers share how it has helped them 
                       re-establish, and reimagine, a connection to cultivation and the land</p>

                     <div className="tweet-image">
                       <img src={tweetimage}/>
                     </div>

                   </div>

                     <div className="tweet-actions">
                       <div className="tweet-action">
                        <img src={bon}/> 
                          <img src={ville}/>
                            <img src={gag}/>  
                           <img src={Kiss}/> 
                         
                          
                       </div>
                     </div>
                 </div>
              </div>
        </div>

      </div>

    </div>
    
  )
}
export default Phase