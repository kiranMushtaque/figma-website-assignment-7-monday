import React from 'react'
import Image from 'next/image';

const Page = () => {
  return (
    <div className="flex items justify-center  bg-white h-screen">
       
      <Image src="/Brand.png" alt="brand" width={1102} height={239} 
      className="object-contain "/>
    </div>
  );
}

export default Page