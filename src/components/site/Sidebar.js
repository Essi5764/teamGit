import {
    Route,
    Link,
    Switch
} from 'react-router-dom';
import {Button} from 'reactstrap';
import Nasa from '../apis/Nasa';
import Weather from '../apis/Weather';
import Tickets from '../apis/Tickets';


const Sidebar = () => {
    return(
        <div className='sidebar'>
            <div className='sidebar-list-styling'>
                <Button><Link to='/nasa'>Check Satellite Image</Link></Button>
                <br/>
                <br/>
                <br/>
                <Button><Link to='/weather'>Check Local Weather</Link></Button>
                <br/>
                <br/>
                <br/>
                <Button><Link to='/tickets'>Check Local Events</Link></Button>
                <br/>
                <br/>
                <br/>
            </div>
            <div className='sidebar-route'>
                <Switch>
                 <Route exact path='/nasa'><Nasa /></Route>
                 <Route exact path='/weather'><Weather /></Route>
                 <Route exact path='/tickets'><Tickets /></Route>

                </Switch>
            </div>
        </div>
    );
};

export default Sidebar;