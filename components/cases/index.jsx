import Styles from "./cases.module.scss";
import Image from 'next/image'
import casesIcon from "../../public/images/casesIcon.svg"
const Cases = () =>{
    return <div className={Styles.container}>
        <h2>Nessa cidade, não há agência melhor. Garantimos.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className={Styles.cases}>
            <div className={Styles.case}>
               <Image src={casesIcon} alt="icon"/>
                <h3>Digital Strategy</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className={Styles.case}>
                <Image src={casesIcon} alt="icon"/>
                <h3>Digital Strategy</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className={Styles.case}>
                <Image src={casesIcon} alt="icon"/>
                <h3>Digital Strategy</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className={Styles.case}>
                <Image src={casesIcon} alt="icon"/>
                <h3>Digital Strategy</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    </div>
}
export default Cases