import Styles from "./welcome.module.scss"
import Button from "../button"
import Leads from "../../public/images/leads.svg";
import Image from "next/image"
const Welcome = () =>{
    return <div className={Styles.container}>
        <div className={Styles.text}>
            <h1>Lorem Ipsum</h1>
            <p>In laoreet faucibus risus at tincidunt. Fusce ut semper urna, nec efficitur felis. Vestibulum vel arcu ut odio porta ullamcorper. Ut facilisis est sed.</p>
            <Button title="Saiba mais" kind="secondary"/>
        </div>
        <div className={Styles.image}>
            <Image src={Leads} alt="Banner Leads"/>
        </div>
    </div>
}
export default Welcome