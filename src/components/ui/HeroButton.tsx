import { Download } from 'lucide-react'
import React from 'react'

const HeroButton = () => {
  return (
 <button className="p-[3px] relative">
  <div className="absolute  inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
  <div className="px-8 py-2 flex gap-2 bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
  <Download />
   Download Resume 
  </div>
</button>
  )
}

export default HeroButton