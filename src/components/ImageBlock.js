import React from 'react';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';

const ImageBlock = ({ block }) => (
  <div className="w-full">
    <div className={'mx-auto ' +
      (() => {
        switch (block.maxWidth) {
          case "sm": return "max-w-sm";
          case "md": return "max-w-md";
          case "lg": return "max-w-lg";
          default:   return "";
        }
      })()}>
      <div className="flex flex-col sm:flex-row -mx-2 mb-12 text-center">
        {block.images.map(img => {
          const image = getImage(img);
          return (
            <div className="flex-1 mx-2 mb-6 sm:mb-0 justify-center">
              {image && (
                <GatsbyImage
                  image={image}
                  alt={img.title}
                  className="shadow-md"
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  </div>
)

export default ImageBlock
