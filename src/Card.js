import React from 'react';

const Card = ({name, username, email, id}) => {
        return (
        <div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}/set_set2?size=200x200`} alt="robots"/>
            <div>
                <h2>{name}</h2>
                <p>{username}</p>
                <p>{email}</p>
            </div>
        </div>

    );
}

export default Card;