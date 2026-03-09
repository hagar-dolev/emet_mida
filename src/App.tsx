import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { GuidesIndex } from './pages/GuidesIndex';
import { GuidePage } from './pages/GuidePage';
import { Legal } from './pages/Legal';
import { Tech } from './pages/Tech';
import { Proposal } from './pages/Proposal';
import { NotFound } from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/guides" element={<GuidesIndex />} />
      <Route path="/guides/:slug" element={<GuidePage />} />
      <Route path="/legal" element={<Legal />} />
      <Route path="/tech" element={<Tech />} />
      <Route path="/proposal" element={<Proposal />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
