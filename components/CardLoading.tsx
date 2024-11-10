import React from 'react'

export default function CardLoading() {
  return (
    <div className="size-40 min-h-full min-w-full bg-neutral-500 relative overflow-hidden">
      <div className="w-full h-full bg-gradient-to-r from-transparent to-transparent via-neutral-400 absolute ani-gradient top-0" />
    </div>
  )
}
