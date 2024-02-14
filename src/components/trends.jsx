import kat from "/public/Settings.svg";
import pic from "/public/More-2.svg";
import fo from "/public/Profile-Photo.svg";
import logo from "../images/Logo.png";
import kas from"/image15.svg";
import zig from"../images/zig.png";

function Trends(){
  return(
    <table>
      <section className="trends">
        <div class="flex-1 min-w-0">
          <div> <th scope="col">Trends for you  <img src={kat}/></th></div>
           </div>

        <div> <p class="text-sm text-gray-500 truncate dark:text-gray-400"> Trending in turkey </p><img src={pic}/> <th scope="col">#SQUI <p class="text-sm text-gray-500 truncate dark:text-gray-400"> 2,066 Tweets </p></th></div>


        <div> <p class="text-sm text-gray-500 truncate dark:text-gray-400"> Trending in turkey </p><img src={pic}/><th scope="col">#SQUI<p class="text-sm text-gray-500 truncate dark:text-gray-400"> 2,066 Tweets </p></th></div>

        <div> <p class="text-sm text-gray-500 truncate dark:text-gray-400"> Trending in turkey </p><img src={pic}/><th scope="col">#SQUI<p class="text-sm text-gray-500 truncate dark:text-gray-400"> 2,066 Tweets </p></th></div>


        <div> <p class="text-sm text-gray-500 truncate dark:text-gray-400"> Trending in turkey </p><img src={pic}/><th scope="col">#SQUI<p class="text-sm text-gray-500 truncate dark:text-gray-400"> 2,066 Tweets </p></th></div>



        <div className="god"> <p>show more</p> </div>
    
        </section> 
      
      
        <section> 
          <div > <h3> Who to follow</h3> </div>
          <div>  
            <img src={fo}/><p>The New York Times</p>
             <p class="text-sm text-gray-500 truncate dark:text-gray-400"> @nytimes </p>
            <img src={zig}/> <button class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Follow</button>
          </div>
          
        
          <div> <img src={logo}/> 
              <p>CNN</p>
             <img src={zig}/> 
             <p class="text-sm text-gray-500 truncate dark:text-gray-400"> @CNN </p>
            <button class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Follow</button>
            </div>
          
          <div> <img src={kas}/>
            <p>Twitter</p>
             <img src={zig}/> 
             <p class="text-sm text-gray-500 truncate dark:text-gray-400"> @Twitter</p>
            <button class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Follow</button>
            </div>
       </section>

        
       
    
    </table>

   
 

  )
}
export default Trends