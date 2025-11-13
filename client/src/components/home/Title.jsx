import React from 'react'

export default function Title({title,description}) {
  return (
    <div>
      <div className="text-center mt-6 text-slate-700">
      <h2 className="text-3xl sm:text-4xl font-medium">{title}</h2>
      <p className="max-w-2xl mx-auto mt-4 text-slate-500">{description}</p>
    </div>
    </div>
  )
}