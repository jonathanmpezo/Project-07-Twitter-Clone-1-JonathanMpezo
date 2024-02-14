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
      <table className= "ax-w-md space-y-1 text-gray-100 list-none list-inside dark:text-gray-400" >
      
          <thead>
            <tr>
              <th><img src={coco}/></th>
            </tr>
          </thead>
        
        <tbody>
          
          <tr>
            <td><img src={toc}/></td>
            <th scope="col"> <td >homme</td></th>
          </tr>
          <tr>
            <td><img src={fac}/></td>
            <div><th scope="col">Explore</th></div>
          </tr>

          <tr>
            <td> <img src={jic}/></td>
           <div><th scope="col">Notifications</th></div> 
          </tr>

          <tr>
            <td><img src={fic}/></td>
            <div><th scope="col">Bookmarks</th></div>
          </tr>

          <tr>
            <td><img src={fonc}/></td>
            <div><th scope="col">Messages</th></div>
          </tr>

          <tr>
            <td><img src={fi}/></td>
            <div><th scope="col">Lists</th></div>
          </tr>

          <tr>
            <td><img src={pic}/></td>
            <div><th scope="col">Profile</th></div>
          </tr>

          <tr>
            <td><img src={mic}/></td>
            <div><th scope="col">More</th></div>
          </tr>


           

        </tbody>
       
            <tr>
              <div className="button">
                Tweet
              </div>
            </tr>

         
     
      </table>
      

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