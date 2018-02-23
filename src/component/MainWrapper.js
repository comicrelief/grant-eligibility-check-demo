import React from 'react';

const MainWrapper = (props) => {
    <main style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }}>
        {props.children}
    </main>
}

export default MainWrapper;