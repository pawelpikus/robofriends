import React from 'react';
import styled from 'styled-components';

const Card = ({name, username, email, id}) => {
        return (
        <Main>
            <img src={`https://robohash.org/${id}/set_set1?size=200x200`} alt="robots"/>
            <div>
                <h2>{name}</h2>
                <p>{username}</p>
                <p>{email}</p>
            </div>
        </Main>

    );
}

export default Card;

//using styled-components attrs to attach class to component, makes it cleaner and reusable
const Main = styled.main.attrs({
    className: 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'
})``