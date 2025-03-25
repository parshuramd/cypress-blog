import { lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy-loaded pages for better performance
const Home = lazy(() => import('./pages/Home'));
const GettingStarted = lazy(() => import('./pages/GettingStarted'));
const Commands = lazy(() => import('./pages/Commands'));
const BestPractices = lazy(() => import('./pages/BestPractices'));
const Examples = lazy(() => import('./pages/Examples'));
const Resources = lazy(() => import('./pages/Resources'));

// Loading component
const Loading = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100vh' 
  }}>
    Loading...
  </div>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/getting-started" element={<GettingStarted />} />
            <Route path="/commands" element={<Commands />} />
            <Route path="/best-practices" element={<BestPractices />} />
            <Route path="/examples" element={<Examples />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App; 