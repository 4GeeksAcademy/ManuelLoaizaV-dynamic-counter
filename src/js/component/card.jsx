import React from 'react';
// 360px
export default function Card({ content }) {
    return (
        <div className='col-8 col-sm-1'>
            <div className='card rounded-4 bg-dark border border-secondary-subtle py-5'>
                <div className='d-flex align-items-center justify-content-center h-100'>
                    <p className='text-white mx-auto my-auto'>{content === undefined ? (<i class='fa-regular fa-clock'></i>) : content}</p>
                </div>
            </div>
        </div>
    );
};
