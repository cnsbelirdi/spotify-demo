import React from 'react'
import Sidebar from './components/SideBar'
import BottomBar from './components/BottomBar'
import Content from './components/Content'



function App() {
  return (
    <>
      <div className='wrapper'>
        <Sidebar/>
        <Content/>
      </div>
      <BottomBar/>
    </>
  );
}

export default App;
