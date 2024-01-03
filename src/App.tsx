import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import RegisterInterest from './Pages/RegisterInterest/RegisterInterest';
import Exhibit from './Pages/Exhibit/Exhibit';
import Translate from './Pages/Translatepage/Translate';
import '../src/Pages/Translatepage/i18';
import Layout from './Components/LayOut/Layout';
import Speakers from './Pages/Speakers/Speakers';
import PlanVisit from './Pages/PlanVisit/PlanVisit';
import WhyVisit from './Pages/WhyVisit/WhyVisit';
import PressCenter from './Pages/PressCenter/PressCenter';
import WorkShopTraining from './Pages/WorkShopTraining/WorkShopTraining';
import Faq from './Pages/Faq/Faq';
import AboutGitex from './Pages/AboutGitex/AboutGitex';
import LatestNews from './Pages/LatestNews/LatestNews';
function App() {
  return (
    
    <BrowserRouter>
    
    <Routes>
          <Route element={<Layout />}>
            <Route  path="/" element={<Home />} />
            <Route path="/translate" element={<Translate/>} /> 
            <Route path="/speakers" element={<Speakers/>} /> 
            <Route path="/planvisit" element={<PlanVisit/>} />
            <Route path="/whyvisit" element={<WhyVisit/>} />
            <Route path="/workshoptraining" element={<WorkShopTraining/>} />
            <Route path="/faq" element={<Faq/>} />
            <Route path="/aboutgitex" element={<AboutGitex/>} />
            <Route path="/latestnews" element={<LatestNews/>} />
            
          </Route>

            <Route path="/register" element={<RegisterInterest />} /> 
            <Route path="/exhibit" element={<Exhibit/>} /> 
            <Route path="/presscenter" element={<PressCenter/>} /> 

            
    </Routes>
  </BrowserRouter>
  );
}

export default App;

