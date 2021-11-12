import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import './Header.css';
function Header() {
    const history = useHistory();
    const handleClick = () => {
        history.push('/')
    }
    return (

        <>



            <div className="nav">

                <h1 onClick={handleClick} className="class-title">The Movies Saga!</h1>
                <nav>
                    <Button size="medium" variant="outlined" >
                        <Link Link to="/list">Movies</Link>
                    </Button>
                </nav>
                <nav>
                    <Button size="medium" variant="outlined" >
                        <Link Link to="/form">Form</Link>
                    </Button>
                </nav>
            </div>

        </>
    )
}
export default Header;