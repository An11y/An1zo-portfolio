 "use client"

 import React from 'react'
 import useScreenSize from "@/components/hooks/useScreenSize";


 const ResponsiveComponent = ({children}) => {

    const size = useScreenSize();

     return <>{children({ size })}</>
 }
 export default ResponsiveComponent
