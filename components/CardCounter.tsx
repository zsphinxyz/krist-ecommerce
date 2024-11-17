'use client'

import { useState } from "react"

export default function CardCounter() {
  const [count, setCount] = useState(1)
  return (
    <div className="border flex items-center justify-center border-muted-foreground rounded-lg w-max ">
      <button className="h-full px-2 font-medium block" onClick={() => setCount(Math.max(1, count-1))}>-</button>
      {/* <input type='text' className="bg-transparent block max-w-20 text-center outline-none" defaultValue={count} 
        value={count}
        onChange={() => setCount(Math.max(1, Math.min(5, count+1)))}
      /> */}
      <p className="min-w-10 max-w-20 text-center block">{count}</p>
      <button className="h-full px-2 font-medium block" onClick={() => setCount(Math.min(5, count+1))}>+</button>
    </div>
  )
}
