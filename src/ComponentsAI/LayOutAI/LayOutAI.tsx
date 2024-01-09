import React, { ReactNode } from 'react';
import HeaderAi from '../HeaderAi/HeaderAi';
import FooterAi from '../FooterAI/FooterAi';
interface LayoutProps {
    children: ReactNode;
  }
export default function LayOutAI({children}:LayoutProps):React.ReactElement {
  return (
    <>
    <HeaderAi/>
    {children}
    <FooterAi/>
    </>
  )
}
