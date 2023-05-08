import { Link } from "react-router-dom";
export default function Navbar() {
    return <nav >
        <Link to='/create' style={{ padding: '5px' }}>create</Link>
        <Link to='/read' style={{ padding: '5px' }}>read</Link>
        <Link to='/update' style={{ padding: '5px' }}>update</Link>
        <Link to='/delete' style={{ padding: '5px' }}>delete</Link>
    </nav>;
}
