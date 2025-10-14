// app/components/PortfolioOverviewHeader.tsx
import React from 'react';
import Image from 'next/image';

const PortfolioOverviewHeader = () => {
  return (
    <div className="relative w-full aspect-[16/9] bg-white shadow-lg rounded-lg overflow-hidden">
      <Image
        src="/images/port001.png"  
        alt="A grid showing an overview of 7 portfolio projects"
        fill
        className="object-contain p-4" 
        priority  
      />
    </div>
  );
};

export default PortfolioOverviewHeader;