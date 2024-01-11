import logo from "../images/Logo.png"
import ego from "/public/Tweet-Title.svg"
import bon from "/Buton.svg"
import ville from "/Buton1.svg"
import  gag from "/Buton3.svg"
import  Kiss from "/Butontecharge.svg"

function Place(){
  return(
  
    <setion className= "tweets">
      <div className= "tweet">
        <img src={logo}/>
         <img src={ego}/> 

         <p> Presind Joe Biden a new agreement reached with the European ease Trump-era tarifts on aluminum and steel as a "major breakthrough" that would serve to both strengthen us steel industry and combat the global climate crisis</p>
        <img src={bon}/> 
        <img src={ville}/>
          <img src={gag}/>  
         <img src={Kiss}/> 
      </div>
     
    </setion>
    
    

  );
}
export default Place