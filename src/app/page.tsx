import React from 'react';
import { BootScreen } from '@/components/layout/BootScreen';
import { Hero } from '@/components/sections/Hero';
import { DinoSection } from '@/components/sections/DinoSection';
import { About } from '@/components/sections/About';
import { FeaturedProjects } from '@/components/sections/FeaturedProjects';
import { TechEngineeringHub } from '@/components/sections/TechEngineeringHub';
import { DevActivityHub } from '@/components/sections/DevActivityHub';
import { Contact } from '@/components/sections/Contact';
import { MarqueeRibbon } from '@/components/ui/MarqueeRibbon';

export default function Home() {
  return (
    <>
      <BootScreen />
      <Hero />
      <DinoSection />
      <MarqueeRibbon variant="yellow" />
      <About />
      <FeaturedProjects />
      <MarqueeRibbon variant="pink" />
      <TechEngineeringHub />
      <DevActivityHub />
      <MarqueeRibbon variant="dark" />
      <Contact />
    </>
  );
}
