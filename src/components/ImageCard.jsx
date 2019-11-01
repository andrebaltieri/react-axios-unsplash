import React from 'react';

const ImageCard = (props) => {
    console.log(props);
    return (
        <div className="ui card">
            <div className="content">
                <img className="ui avatar image" src={props.image.user.profile_image.small} alt={props.image.user.first_name} />
                {props.image.user.first_name}
            </div>
            <div className="image">
                <img className="ui fluid image" src={props.image.urls.regular} alt={props.image.alt_description} />
            </div>
            <div className="content">
                <div className="meta">
                    <span className="date">{props.image.updated_at}</span>
                </div>
                <div className="description">
                    {props.image.alt_description}
                </div>
            </div>
            <div className="extra content">
                <i className="like icon"></i>
                {props.image.likes}
            </div>
        </div>
    );
};

export default ImageCard;