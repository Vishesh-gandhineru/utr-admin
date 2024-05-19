import React from 'react'

type VendorSinglePageProps = {
    params: {
        slug: string;
    }
    
}

const VendorSinglePage = ({params} : VendorSinglePageProps) => {
 
    const { slug } = params;

  return (
    <div>{slug}</div>
  )
}

export default VendorSinglePage