import './index.css';
import { Link } from 'react-router-dom';

function Error() {
    return(
        <div className="not-founded">
            <h1>404</h1>
            <h2>Page not found! :(</h2>
            <Link to='/'>Access the home page</Link>
        </div>
    )
}

export default Error;