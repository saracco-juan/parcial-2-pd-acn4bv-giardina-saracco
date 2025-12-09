import React from 'react'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

const FontByCategoryCard = ({font}) => {
  return (
    <div className=" border-b border-yellow-500 hover:border-gray-700 transition-colors">
        <div className="flex items-center justify-between p-6">
            <div className="space-y-1">
                <h3 className="text-lg font-bold text-primary tracking-wide" style={{
                    fontFamily: font.name,
                    fontSize: font.size,
                    fontStyle: font.style,
                    fontWeight: font.weight,
                  }}>{font.name}</h3>
                <p className="text-sm text-gray-500">{font.style} | {font.weight}</p>
            </div>
            <div className="flex items-center gap-3">
                <Link to={`/testfont?fontId=${font.id}`}>
                    <Button icon={
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    }/>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default FontByCategoryCard