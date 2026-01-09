import React from 'react'
import { Button } from './ui/button'
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className='min-h-screen w-full flex items-center justify-center'>
        <div className='flex flex-col items-center text-center space-y-8'>
            <div className='space-y-3'>
                <h1 className='scroll-m-20 text-6xl md:text-7xl lg:text-8xl text-center font-extrabold tracking-tight text-balance animate-fade-in-up opacity-0' style={{animationDelay: '0.2s'}}>
                    Know about your favourite
                </h1>
                <h1 className='scroll-m-20 text-6xl md:text-7xl lg:text-8xl text-center font-extrabold tracking-tight text-balance bg-clip-text text-transparent bg-gradient-to-r from-black to bg-black/75 animate-fade-in-up opacity-0' style={{animationDelay: '0.4s'}}>
                    From every corner
                </h1>
            </div>
            
            <p className='text-lg text-black/75 max-w-2xl animate-fade-in-up opacity-0' style={{animationDelay: '0.6s'}}>
                Discover comprehensive information about your favorite cars from every perspective, with expert insights and detailed analysis.
            </p>
            
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in-up opacity-0 cursor-pointer' style={{animationDelay: '0.8s'}}>
                <Link href={`/cars`} >
                <Button variant={`default`} className='px-8 py-6 text-lg hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer'>
                    Get Started
                </Button>
                </Link>
                <Button variant={`secondary`} className='px-8 py-6 text-lg hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer'>
                    Learn more
                </Button>
            </div>
            
            <div className='pt-8 animate-bounce opacity-0' style={{animationDelay: '1s'}}>
                <svg className='w-6 h-6 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 14l-7 7m0 0l-7-7m7 7V3' />
                </svg>
            </div>
        </div>
    </div>
  )
}

export default HeroSection