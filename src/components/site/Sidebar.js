import {
    Route,
    Link,
    Switch
} from 'react-router-dom';
import {Button} from 'reactstrap';


const Sidebar = () => {
    return(
        <div className='sidebar'>
            <div className='sidebar-list-styling'>
                <Button>Check Satellite Image</Button>
                <br/>
                <br/>
                <br/>
                <Button>Check Weather</Button>
                <br/>
                <br/>
                <br/>
                <Button>Check Local Events</Button>
                <br/>
                <br/>
                <br/>
            </div>
            <div className='sidebar-route'>
                <Switch>
                 
                </Switch>
            </div>
        </div>
    );
};

export default Sidebar;