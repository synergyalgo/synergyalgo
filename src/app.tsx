import React from 'react';
const Index = React.lazy(() => import('./features/public/pages/landing/index'));

const Application: React.FC = () => {
  return (
    <Index />
  )
}

export default Application
