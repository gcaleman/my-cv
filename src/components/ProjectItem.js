import React from 'react';

export const ProjectItem = (props) => {
    return (
        <>
            <div className='cards__item'>
                <a className='cards__item__link' href={props.path}>
                    <figure className='cards__item__pic-wrap' data-category={props.label}>
                        <img
                            className='cards__item__img'
                            alt='App Image'
                            src={props.src}
                        />
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>{props.text}</h5>
                    </div>
                </a>
            </div>
        </>
    )
}
