import { Routes, Route } from 'react-router-dom';
import { GuidesIndex } from './pages/GuidesIndex';
import { GuidePage } from './pages/GuidePage';
import { Journalism } from './pages/Journalism';
import { Legal } from './pages/Legal';
import { Tech } from './pages/Tech';
import { Proposal } from './pages/Proposal';
import { NotFound } from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Journalism />} /> {/* TODO: maybe change here. */}
      <Route path="/guides" element={<GuidesIndex />} />
      <Route path="/guides/:slug" element={<GuidePage />} />
      <Route path="/journalism" element={<Journalism />} />
      <Route path="/legal" element={<Legal />} />
      <Route path="/tech" element={<Tech />} />
      <Route path="/proposal" element={<Proposal />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
