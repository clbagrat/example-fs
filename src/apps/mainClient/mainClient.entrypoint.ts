import React from 'react';
import { render } from 'react-dom';
import { Routes } from './_locals/routes';
import { dependencies } from './_locals/dependencies/dependencies';
import { DependencyProvider } from 'domains/shared/DependencyProvider';

// place for performance measurments
//
render(
  <DependencyProvider dependencies={dependencies}>
    <Routes>
    </Routes>
  </DependencyProvider>

, document.querySelector('app'))
