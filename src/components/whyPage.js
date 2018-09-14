import { h, render, Component } from 'preact';
import { NavigationHeader } from '../containers/navigationHeader';
import '../../public/styles/whoPage.scss';

class WhyPage extends Component {


    constructor(props){
        super(props);
    }


    componentDidMount(){
        console.log('WHY PAGE');
    }


    render() {
        return (
            <div className='section'>
                <NavigationHeader/>
                <h1>WHY</h1>
            </div>
        )  
    }
};

export { WhyPage };