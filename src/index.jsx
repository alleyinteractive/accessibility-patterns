import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  return (
    <>
      <h1>Accessibility Patterns</h1>
      <p>A library of accessible web components and patterns.</p>
      <p><a href="https://main--635823548f5047fa4bb4ee22.chromatic.com">View Library</a></p>
    </>
  );
}

const root = createRoot(document.getElementById('app'));
root.render(<App tab="home" />);
