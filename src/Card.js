import React from 'react';

const Card = () => {
    return (
        <div className='bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src="https://robohash.org/johndoe.png/set_set3?size=200x200" alt="robots"/>
            <div>
                <h2>John Doe</h2>
                <p>johndoe@gmail.com</p>
            </div>
        </div>

    );
}

export default Card;