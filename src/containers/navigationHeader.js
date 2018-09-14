import { h, Component } from 'preact';
import '../../public/styles/navigationHeader.scss';

class NavigationHeader extends Component {


    constructor(props) {
        super(props);
        this.state = { options: ['What', 'Who', 'Why'] };
    }

    render() {

        const { options } = this.state;

        return (
            <div className="header" onScroll={() => console.log('sese')}>
                <p className="menuOption unselected" onScroll={() => console.log('sese')}> {options[0]} </p>
                <p className="menuOption selected"> {options[1]} </p>
                <p className="menuOption unselected"> {options[2]} </p>
            </div>
        )
    }


};


export { NavigationHeader };