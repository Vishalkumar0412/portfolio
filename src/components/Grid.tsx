import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

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
              className={titleClassName}
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
