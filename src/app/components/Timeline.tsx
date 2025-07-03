import React from "react";
import { Timeline } from "@/app/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Present",
      content: (
        <div>
         <h3 className="text-xl md:text-4xl text-white font-bold my-3">
            Masters of computer applications
         </h3>
          <div className="grid grid-cols-1 gap-4">
            
            <p className="md:text-2xl text-sm italic">
                Hindustan Institute of Management and Computer Studies, Farah, Mathura
              </p>
            <p className="md:text-2xl text-sm italic">
                Affiliated Dr. APJ Abdul Kalam Technical University, Lucknow, Uttar Pradesh
            </p>
           
          
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
         <h3 className="text-xl md:text-4xl text-white font-bold my-3">
            Bacholors of computer applications
         </h3>
          <div className="grid grid-cols-1 gap-4">
            
            <p className="md:text-2xl text-sm italic">
                Raja Balwant Singh College, Khandari, Agra 
              </p>
            <p className="md:text-2xl text-sm italic">
                Affiliated Dr. Bhim Rao Ambedhkar University, Agra, Uttar Pradesh
            </p>
           
          
          </div>
        </div>
      ),
    },
    {
      title: "2019",
      content: (
       <div>
         <h3 className="text-xl md:text-4xl text-white font-bold my-3">
            Intermediate (12th)
         </h3>
          <div className="grid grid-cols-1 gap-4">
            
            <p className="md:text-2xl text-sm italic">
                Shri Ratan Muni Jain Inter College, Lohamandi, Agra
              </p>
            <p className="md:text-2xl text-sm italic">
                 Uttar Pradesh State Board
            </p>
           
          
          </div>
        </div>
      ),
    },
    {
      title: "2017",
      content: (
       <div>
         <h3 className="text-xl md:text-4xl text-white font-bold my-3">
            High School
         </h3>
          <div className="grid grid-cols-1 gap-4">
            
            <p className="md:text-2xl text-sm italic">
                SB Inter College, Agra
              </p>
            <p className="md:text-2xl text-sm italic">
                 Uttar Pradesh State Board
            </p>
           
          
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
