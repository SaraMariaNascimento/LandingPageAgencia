import Image from 'next/image'
import Logo from '../../public/images/logo.svg'
import Link from 'next/link'
import Styles from "./header.module.scss";
import Button from '../button';
const Header = () =>{
    return <div className={Styles.container}>
        <div className={Styles.logotipo}>
             <Image src={Logo} alt="logo"/>
        </div>
        <div className={Styles.menu}>
            <ul>
                <li>
                    <Link href="">Home</Link>
                </li>
                <li>
                    <Link href="">O que fazemos</Link>
                </li>
                <li>
                    <Link href="">Cases</Link>
                </li>
            </ul>
        </div>
        <div className={Styles.action}>
           <Button title="Fale conosco" kind="primary"/>
        </div>
    </div>
}
export default Header