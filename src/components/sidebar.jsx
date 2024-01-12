import coco from "/public/Normal.svg"
import toc from "/public/Home-Fill.svg"
import fac from "/public/Explore.svg"
import jic from "/public/Notifications.svg"
import fonc from "/public/Messages.svg"
import fic from "/public/Bookmarks.svg"
import fi from "/public/Lists.svg"
import pic from "/public/Profile.svg"
import mic from "/public/Group.svg"
function Sidebar(){
  return(
    <div className="left-sidebar">
      <table>
        <button>
          
            <tr>
                <th scope="col"><img src={coco}/></th>
               <th scope="col"> <img src={toc}/>homme</th>
               <th scope="col"> <img src={fac}/>Explore</th>
               <th scope="col"> <img src={jic}/>Notifications</th>
               <th scope="col"> <img src={fonc}/>Messages</th>
               <th scope="col"> <img src={fic}/>Bookmarks</th>
               <th scope="col"> <img src={fi}/>Lists</th>
               <th scope="col"><img src={pic}/>Profile</th>
               <th scope="col"> <img src={mic}/>More</th>

            </tr>
         
          </button>
      
      </table>
     
     
     
    </div>
    
    
    
  )
}
export default Sidebar