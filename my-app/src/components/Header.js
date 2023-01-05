import '../App.css';

function Header(props) {
    return (
        <div className='flex shopping-card'>
            <div onClick={() => props.handleShow(false)} ><i><b className = "logo">ShopyFy</b></i></div>
            <div onClick={() => props.handleShow(true)}> <button className="icon">💼</button>
                <sup> {props.count} </sup>
            </div>
        </div>
    );
}

export default Header;
