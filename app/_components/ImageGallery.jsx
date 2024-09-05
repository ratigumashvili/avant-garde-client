'use client'

import { useState } from "react";

import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function ImageGallery({ images }) {

    const [index, setIndex] = useState(-1);

    const handleClick = (index, item) => setIndex(index);


    const slides = images.map((image) => (
        {
            src: image.attributes.url,
            thumbnailCaption: image.attributes.alternativeText,
        }
    ))

    return (
        <div>
            <Gallery
                images={slides}
                onClick={handleClick}
                enableImageSelection={false}
            />
            <Lightbox
                slides={slides}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
            />
        </div>
    )
}

export default ImageGallery