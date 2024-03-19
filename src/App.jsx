import Home from "./pages/home.jsx";
import Layout from "./components/layout.jsx";
import Sidebar from "./components/sidebar.jsx";
import Trends from "./components/trends.jsx";
// import {Route, RouterProvider,createBrowseRouter, createRoutesFromElements } from "module"


// import Follow from "./components/follow.jsx";




import('./style/reset.css');
import('./style/App.css');

//  const router = createBrowseRouter( createRoutesFromElements(
//    <Route path "/" element= {<Home/>}/>
//    <Route path "home" element= {<Home/>}/>
// </Route>
// ))

export default function App() {
  return (
    <>
       {/* <RouterProvider router={router}/>
 */}
      <Layout>
        
        <Sidebar/>
          
      <Home/>
      
     <Trends/>
        {/* <Follow/> */}
      
      </Layout>
     

   </>
  );
}
