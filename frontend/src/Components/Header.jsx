function Header (){

    return (
        <header className="header-main-wrapper">
            <div className="header-wrapper">
                <div className="header-left-wrapper">
                    <img className="logo" src="/bishals-logo.png"></img>
                </div>
                <div className="header-right-wrapper">
                    <ul className="header-ul">
                        <li className="header-li">SERVICES</li>
                        <li className="header-li">BOOKING</li> 
                        <li className="header-li">DISCOUNTS</li>   
                    </ul>
                    <h1 className="header-menu-icon">MENU</h1>
                </div>
            </div>
        </header>
    )
}

export default Header