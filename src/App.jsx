import Home from "./pages/home.jsx";
import Layout from "./components/layout.jsx";
import Sidebar from "./components/sidebar.jsx";
import Trends from "./components/trends.jsx";
import {Route, Routerprovider,createBrowseRouter, createRoutesFromElements } from "module"


// import Follow from "./components/follow.jsx";




import('./style/reset.css');
import('./style/App.css');

//  const router = createBrowseRouter (<Route path "/" element= {<Root/>} >
// </Route>)


export default function App() {
  return (
    <>
      <Layout>
        
        <Sidebar/>
          
      <Home/>
      
     <Trends/>
        {/* <Follow/> */}
      
      </Layout>
      <Routerprovider router={router}/>
   

   </>
  );
}
