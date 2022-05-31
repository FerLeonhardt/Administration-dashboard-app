import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import './App.css';
import {
  Calendar,
  ColorPicker,
  Customers,
  Ecommerce,
  Editor,
  Employees,
  Kanban,
  Orders,
  Area,
  Bar,
  ColorMapping,
  Financial,
  Line,
  Pie,
  Pyramid,
  Stacked,
} from './pages/index';
import {
  Button,
  Cart,
  ChartHeader,
  Chat,
  Footer,
  Header,
  Navbar,
  Notification,
  SideBar,
  ThemeSettings,
  UserProfile,
  LineChart,
  PieChart,
  SparkLine,
  stacked,
} from './components/index';

const App = () => {
  const activeMenue = false;

  return (
    <div>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
            <TooltipComponent content='Settings' position='top'>
              <button
                type='button'
                className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
                style={{ background: 'blue', borderRadius: '50%' }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenue ? (
            <div className='w-72 fixed sidebar darj:bg-secondary-dark-bg bg-white'>
              <SideBar />
            </div>
          ) : (
            <div className='w-0 dark:bg-secondary-dark-bg'>
              <SideBar />
            </div>
          )}
          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
              activeMenue ? `md:ml-72 ` : `flex-2`
            }`}
          >
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              <Navbar />
            </div>
          </div>
          <div>
            <Routes>
              {/*Dashboard */}
              <Route path='/' element={<Ecommerce />} />
              <Route path='/ecommerce' element={<Ecommerce />} />
              {/* Pages */}
              <Route path='/orders' element={<Orders />} />
              <Route path='/employees' element={<Employees />} />

              <Route path='/costomers' element={<Customers/>} />
              {/* Apps */}
              <Route path='/kanban' element={<Kanban />} />
              <Route path='/editor' element={<Editor />} />
              <Route path='/calendar' element={<Calendar />} />
              <Route path='/color-picker' element={<ColorPicker />} />
              {/* Charts */}
              <Route path='/line' element={<Line />} />
              <Route path='/area' element={<Area />} />
              <Route path='/bar' element={<Bar />} />
              <Route path='/pie' element={<Pie />} />
              <Route path='/financial' element={<Financial />} />
              <Route path='/color-mapping' element={<ColorMapping />} />
              <Route path='/piramid' element={<Pyramid />} />
              <Route path='/stacked' element={<Stacked />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
