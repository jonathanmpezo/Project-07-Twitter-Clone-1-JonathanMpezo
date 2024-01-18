import coco from "/public/Normal.svg"
import toc from "/public/Home-Fill.svg"
import fac from "/public/Explore.svg"
import jic from "/public/Notifications.svg"
import fonc from "/public/Messages.svg"
import fic from "/public/Bookmarks.svg"
import fi from "/public/Lists.svg"
import pic from "/public/Profile.svg"
import mic from "/public/Group.svg"
import profilePhoto from "../images/profile-photo.png"
import lic from "/public/Private.svg"
function Sidebar(){
  return(
    <div className="left-sidebar">
      <table>
        {/* <button> */}
          
            <tr>
         <div><th scope="col"><img src={coco}/></th></div>
               <div> <th scope="col"> <img src={toc}/>homme</th></div>
            <div><th scope="col"> <img src={fac}/>Explore</th></div>
        <div><th scope="col"> <img src={jic}/>Notifications</th></div>
            <div><th scope="col"> <img src={fonc}/>Messages</th></div>
           <div><th scope="col"><img src={fic}/>Bookmarks</th></div> 
               <div><th scope="col"> <img src={fi}/>Lists</th></div>
               <div><th scope="col"><img src={pic}/>Profile</th></div>
              <div> <th scope="col"> <img src={mic}/>More</th></div>
             
              
              <div className="button">
                Tweet
              </div>
            </tr>

         
          {/* </button>
       */}
      </table>
      
     {/* <section>   */}
  <div className="avatar.btn"> <img src={profilePhoto}/>
          Brandley< img src={lic} />
       </div>
       
     {/* </section> */}
      {/* <button className="header_btn">
          <img height="15px" width="15px" src={this.props.imageUrl} />
          {this.props.text}
      </button>
      */}
  </div>
    
    
    
  )
}
export default Sidebar