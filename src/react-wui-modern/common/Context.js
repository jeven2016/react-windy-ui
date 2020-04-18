import React from 'react';

export const ModalContext = React.createContext({});
export const TreeContext = React.createContext({});
export const CollapseContext = React.createContext({active: []});
CollapseContext.displayName = 'CollapseContext';