import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div style={{display: 'flex', gap: '20px', margin: '20px'}}>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/loginRecap'>Login Recap</Link>
        </div>
    );
};

export default Header;