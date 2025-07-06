import React from 'react';
import { useLocation } from 'react-router-dom';

const Index = React.lazy(() => import('./features/public/pages/landing/index'));

const Application: React.FC = () => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Index />
  )
}

export default Application
