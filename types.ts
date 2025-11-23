import React from 'react';

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  image: string;
}

export interface AIResponse {
  projectIdea: string;
  teamStructure: string[];
  reasoning: string;
}