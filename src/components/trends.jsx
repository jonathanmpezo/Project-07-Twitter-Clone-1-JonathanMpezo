import kat from "/public/Settings.svg";
import pic from "/public/More-2.svg";
import fo from "/public/Profile-Photo.svg";
import logo from "../images/Logo.png";
import kas from"/image15.svg";
import zig from"../images/zig.png";
import vasse from"../images/image icon.jpg";

function Trends(){
  return(
    <table>
      <section className="trends">
        <div class="flex-1 min-w-0">
          <div className="rosse">
            <div class="ax-w-md space-y-1 text-gray-100 list-none list-inside dark:text-gray-400">
              <tbody>
                {/* <div class="relative">
                
                  <div className="">
                      <div className="Search">
                        <img src={vasse}/>
                      </div>
                  </div>

                  <form classeName="tweet-editor-form">
                    <textarea className="tweet-editor-input"placeholder="What'shappenning?">
                      </textarea>
                  </form>

                  

                  
                </div> */}
                <div>
                  <form class="max-w-md mx-auto">   
                      {/* <label for="default-search" class="mb-2 text-sm font-medium text-gray-100 sr-only dark:text-white">Search</label> */}
                      <div class="relative">
                          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                              </svg>
                          </div>
                          <input type="search" id="default-search" class="block w-full p-1 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                         
                      </div>
                  </form>
                </div>
               

                   
                <div>
                  <div>
                    <tr>
                       <th scope="col">Trends for you </th>
                      <th><td> <img src={kat}/></td></th>
                    </tr>
                  </div>
                </div>
               


                 <div>
                   <p class="text-sm text-gray-500 truncate dark:text-gray-400"> Trending in turkey </p><img src={pic}/> <th scope="col">#SQUI <p class="text-sm text-gray-500 truncate dark:text-gray-400"> 2,066 Tweets </p></th>
                 </div> 



                <div> <p class="text-sm text-gray-500 truncate dark:text-gray-400"> Trending in turkey </p><img src={pic}/><th scope="col">#SQUI<p class="text-sm text-gray-500 truncate dark:text-gray-400"> 2,066 Tweets </p></th></div>

                <div> <p class="text-sm text-gray-500 truncate dark:text-gray-400"> Trending in turkey </p><img src={pic}/><th scope="col">#SQUI<p class="text-sm text-gray-500 truncate dark:text-gray-400"> 2,066 Tweets </p></th></div>


                <div> <p class="text-sm text-gray-500 truncate dark:text-gray-400"> Trending in turkey </p><img src={pic}/><th scope="col">#SQUI<p class="text-sm text-gray-500 truncate dark:text-gray-400"> 2,066 Tweets </p></th></div>



                <div className="god"> <p>show more</p> </div>

              </tbody>
            </div>
           
          </div>
         
        </div>
         
        </section> 
      
      
        <section> 
          
          <div > 
            <h3> Who to follow</h3> </div>
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