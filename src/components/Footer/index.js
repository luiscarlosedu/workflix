import './index.css';
import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";


function Footer() {
    return(
        <footer>
            <div className='footer-text'>
                <p> Developed by <a href="https://instagram.com/https.luisedu77" target='blank'>@https.luisedu77</a></p>
            </div>
            <div className='footer-social'>
                <a href="https://instagram.com/https.luisedu77" target='blank'>
                    <FaInstagram className='social-media'/>
                </a>
                <a href="https://github.com/luiscarlosedu" target='blank'>
                    <FiGithub className='social-media'/>
                </a>
                <a href="https://tiktok.com/https.luisedu77" target='blank'>
                    <FaTiktok className='social-media'/>
                </a>
            </div>
        </footer>
    )
}

export default Footer;
