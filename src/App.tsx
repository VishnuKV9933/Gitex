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
import AssociationsPartners from './Pages/AssociationsPartners/AssociationsPartners';
import MediaPartners from './Pages/MediaPartners/MediaPartners';
import CommunityPartners from './Pages/CommunityPartners/CommunityPartners';
import WhyExhibit from './Pages/WhyExhibit/WhyExhibit';
import AI from './Pages/AI/AI';
import Telecoms from './Pages/Telecoms/Telecoms';
import Cybersecurity from './Pages/Cybersecurity/Cybersecurity';
import Mobility from './Pages/Mobility/Mobility';
import Developer from './Pages/Developer/Developer';
import Metaverse from './Pages/Metaverse/Metaverse';
import Youth from './Pages/Youth/Youth';
import Sustainability from './Pages/Sustainability/Sustainability';
import Cto from './Pages/CTO/Cto';
import AiEverithing from './PagesAI/AiEverithing/AiEverithing';
import LayOutAI from './ComponentsAI/LayOutAI/LayOutAI';
import AISpeakers from './PagesAI/AISpeakers/AISpeakers';
import AINews from './PagesAI/AINews/AINews';
import AIStartups from './PagesAI/AiStartups/AIStartups';
import AIExhibit from './PagesAI/AIExhibit/AIExhibit';
import CreativeEconomy from './PagesAI/CreativeEconomy/CreativeEconomy';
import AIYouthx from './PagesAI/AIYouthx/AIYouthx';
import AIAbout from './PagesAI/AIAbout/AIAbout';
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
            <Route path="/associationspartners" element={<AssociationsPartners/>} />
            <Route path="/mediapartners" element={<MediaPartners/>} />
            <Route path="/communitypartners" element={<CommunityPartners/>} />
            <Route path="/whyexhibit" element={<WhyExhibit/>} />
            <Route path="/ai" element={<AI/>} />
            <Route path="/telecoms" element={<Telecoms/>} />
            <Route path="/cybersecurity" element={<Cybersecurity/>} />
            <Route path="/mobility" element={<Mobility/>} />
            <Route path="/developer" element={<Developer/>} />
            <Route path="/metaverse" element={<Metaverse/>} />
            <Route path="/youth" element={<Youth/>} />
            <Route path="/sustainability" element={<Sustainability/>} />
            <Route path="/cto" element={<Cto/>} />
          </Route>

  <Route path="/aieverithing" element={<LayOutAI><AiEverithing /></LayOutAI>}/>
  <Route path="/aispeakers" element={<LayOutAI><AISpeakers /></LayOutAI>}/>
  <Route path="/ainews" element={<LayOutAI><AINews /></LayOutAI>}/>
  <Route path="/aistartups" element={<LayOutAI><AIStartups /></LayOutAI>}/>
  <Route path="/aiexhibit" element={<LayOutAI><AIExhibit /></LayOutAI>}/>
  <Route path="/aicreativeeconomy" element={<LayOutAI><CreativeEconomy /></LayOutAI>}/>
  <Route path="/aiyouthx" element={<LayOutAI><AIYouthx /></LayOutAI>}/>
  <Route path="/aiabout" element={<LayOutAI><AIAbout /></LayOutAI>}/>
  
  
  
            <Route path="/register" element={<RegisterInterest />} /> 
            <Route path="/exhibit" element={<Exhibit/>} /> 
            <Route path="/presscenter" element={<PressCenter/>} /> 
    </Routes>
  </BrowserRouter>
  );
}

export default App;

