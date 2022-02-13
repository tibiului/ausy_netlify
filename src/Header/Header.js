import './Header.css'
import headerImage from '../pictures/Binarycode_illustration_UseBackgroundWhite_RGB_0.png'



export const Header = () => {
    return <header>
        <nav className='primary-navigation' aria-label='primary navigation'>
            <a className='logo' href='/' >
                <img src='https://www.ausy.com/sites/ausy-com/modules/custom/rbd_ausy_com/assets/img/logo.svg' alt='Ausy logo'></img>
            </a>
            <ul className='menu'>
                <li>
                    <a href='/'>careers at ausy</a>
                </li>
                <li>
                    <a href='/'>our solutions</a>
                </li>
                <li>
                    <a href='/'>industries</a>
                </li>
                <li>
                    <a href='/'>newsroom</a>
                </li>
                <li>
                    <a href='/'>about ausy</a>
                </li>
                <li>
                    <a href='/'>contact us</a>
                </li>
            </ul>
        </nav>
        <hr className="nav-after"></hr>
        <div className='header-content'>
            <div className='header-text'>
                <h1>ausy, tech with personality.</h1>
                <p>We cultivate the human touch. We play on a global field. Continuously promoting entrepreneurship, trust and team spirit through our community.</p>
            </div>
            <img className="header-media" src={headerImage} alt='binary code ilustration ' />
        </div>
    </header>;
}
