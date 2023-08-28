import React from 'react'

interface CardEmptyRootProps {
    children: React.ReactNode;
}

const CardEmptyRoot = ({ children }: CardEmptyRootProps) => {
  return (
    <div className="card transition-500 group animate-pulse">{children}</div>
  )
}

export default CardEmptyRoot