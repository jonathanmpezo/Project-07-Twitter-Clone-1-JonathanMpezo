import va from "/kin23.svg"
import kas from"/image15.svg";
import kilo from"/bass.svg";
import bon from "/Buton.svg"
import ville from "/Buton1.svg"
import  gag from "/Buton3.svg"
import  Kiss from "/Butontecharge.svg"

function Time(){
  return(          
    
    
      <div className="tweets">
        <div className="tweet">
           <img src={kas}/>
          
          <div className="tweet-title-author">
         
             </div>
          <section className="tweet-title">
            <div className="tweet-title-datails">
               <img src={va}/>
              <div classNamme="tweet-text">
                 <img src={kilo}/>
              </div>
              <div className="tweet-action">
                <img src={bon}/> 
                <img src={ville}/>
                  <img src={gag}/>  
                 <img src={Kiss}/> 

               </div>
            </div>
          </section>
        </div>  
      </div>   
  
                
           
  )
}
export default Time