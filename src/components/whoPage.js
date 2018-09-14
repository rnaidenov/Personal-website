import { h } from 'preact';
import { NavigationHeader } from '../containers/navigationHeader';
import '../../public/styles/whoPage.scss';

const WhoPage = () => {

    return (
        <section className='whoPage'>
            <NavigationHeader/>
            <p className="pageTitle">
                <b>Who</b> am I?
            </p>
            <img src={require('../../public/images/personalPhoto.svg')} className='avatar' />
            <div className='infoWrap'>
                <p>
                    My name's Rado. I'm a last year Computer Science
                    student from King's College London. Originally I'm 
                    from Bulgaria, but for the past 3 years I've been living
                    in the UK. I really enjoy travelling to new places and
                    exploring different cultures and always do so whenever
                    I get the chance. I'm also a big fan of electronic 
                    music and love going to raves. Some of my other 
                    hobies include reading, learning about new technologies,
                    being out with friends and going to the gym.
                </p>
            </div>
        </section>
    )  
};

export { WhoPage };