import { h } from 'preact';
import { NavigationHeader } from '../containers/navigationHeader';
import '../../public/styles/whoPage.scss';

const WhatPage = ({ refCallback }) => {

    return (
        <div className='red' ref={ whatPageRef => refCallback(whatPageRef) } >
            <NavigationHeader/>
            <h1>WHAT</h1>
        </div>
    )  
};

export { WhatPage };