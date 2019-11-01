import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    const images = props.images.map((image) => {
        return (
            <div key={image.id} className="four wide column">
                <ImageCard image={image}></ImageCard>
            </div>
        );
    });

    return (
        <div className="ui grid">
            {images}
        </div>
    );

}

export default ImageList;