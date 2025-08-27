import React from 'react'
import { Metadata } from 'next'; 
import AllProductsPage from '@/components/clientComponents/AllProductsPage';

export const metadata: Metadata = {
  title: 'All Products - Hamptons Hills',
  description: 'Explore our wide range of high-quality gravestones and tombstones at Hamptons Hills. Find the perfect memorial to honor your loved ones.',
};

const page = () => {
  return (
    <AllProductsPage/>
  )
}

export default page
