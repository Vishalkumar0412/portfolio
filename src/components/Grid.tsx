import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/app/data";

const Grid = () => {
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-black">
      <BentoGrid>
        {gridItems.map(
          ({
            id,
            title,
            description,
            className,
            imgClassName,
            titleClassName,
            img,
            spareImg,
          }) => (
            <BentoGridItem
              id={id}
              key={id}
              description={description}
              title={title}
              titleClassName={titleClassName}
              img={img}
              imgClassName={imgClassName}
              spareImg={spareImg}
              className={className}
              
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
