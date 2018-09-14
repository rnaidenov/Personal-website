import { h } from 'preact';
import '../../public/styles/mainPage.scss';

const MainPage = () => (
    <div className="mainPage">
        <div className="greeting">
            <p className='animated wobble'>Hi,</p> 
            <p className='name animated tada'>I'm Rado.</p>
        </div>
        <div className="navigationWrap">
            <p>What?</p>
            <p id='whoLabel'>Who<span id='questionMark'>?</span></p>
            <p>Why?</p>
        </div>
        <p className="contactLabel animated fadeIn">
            <span className='dash'/>Get in touch!<span className='dash'/>
        </p>
    </div>
)


export { MainPage };