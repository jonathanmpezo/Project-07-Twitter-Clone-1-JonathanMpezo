import profilePhoto from "../images/profile-photo.png"
import groupe from "/Group 21.svg"
import god from "/Group 22.svg"
import face from "/Group 18.svg"
import bac from "/Group 19.svg"
import bic from "/Group 20.svg"
import vic from"/Placeholder.svg"

function Editor() {

  return (
    <div className="timeline">
      
      <div className="tweet-editor">
          <div className="avatar">
            <img src={profilePhoto}/>
          </div>
       
        
          <div classeName="tweet-editor-form">
            
            <div className="tweet-editor-input">
              <img src={vic}/>
            </div>
            
            <div className="tweet-editor-buttons">
              
              <div className="tweet-editor-actions">
                
                <img src={groupe}/>
                <img src={god}/>
                <img src={face}/>
                <img src={bac}/>
                <img src={bic}/>
              </div>
              
              <div className="button">
                Tweet
              </div>
              
              </div>
        </div>
      </div>  
    </div>
    
  )
}

export default Editor