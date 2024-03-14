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
        <div class="flex flex-col space-y-4 ... ">
        <tbody>
          <tr>
            <th scope="col"><img src={coco}/></th>
          </tr>
          
          <tr>
            <td><img src={toc}/></td>
            <th scope="col"> <td >home</td></th>
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
       
          </div>
      
              <div className="tris">
                <div  class="flex flex-col space-y-4 ...">
                  <div className="button"> 
                    <div>Tweet</div>
              </div>
              
               </div> 
              </div>
          
       
      </table>
      

      <div className="wrapper">
        <div className="avatarbtn"> 
          <tr>
            <th>
               <img src={profilePhoto}/>
            </th>
            Brandley Ortiz
             < img src={lic} />
            <td>...</td>
          </tr>
         
             </div>
      </div>
 
    
  </div>

    

    
    
    
  )
}


export default Sidebar