/* eslint-disable prettier/prettier */
import React from 'react';

declare interface HomeProps {
  userName?: String;
}

const Home = (props: HomeProps) : JSX.Element => {
    console.info(props);
    return (
        <div>
            <p>Home</p>
        </div>
    );
};

export default Home;
