// Added React import to resolve React namespace errors
import React from 'react';

export interface Module {
  id: string;
  title: string;
  description: string;
  content: string[];
}

export interface StrategyItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Achievement {
  agency: string;
  item: string;
  performance: string;
}

export interface PainPoint {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}