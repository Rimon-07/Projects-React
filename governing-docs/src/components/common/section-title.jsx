import React from 'react'
import { cn } from '../../lib/utils'
import { GradientText } from './text-gradient'

export const SectionTitle = ({children, className, gradient}) => {
  return( 
  <h1 className={cn("font-space-grotesk font-bold text-2xl md:text-[35px] lg:text-[46px] md:leading-[45px] lg:leading-[58.7px]", className)}>
     {children} <GradientText> {gradient}</GradientText>
  </h1>
);
};

