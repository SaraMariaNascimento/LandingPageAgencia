import Styles from "./form.module.scss";
import Button from "../button";
import Input from "./input";
import Select from "./select";
import Link from "next/link";
const Form = () => {
    return <div className={Styles.container}>
        <div  className={Styles.texts}>
            <span>Entre em contato</span>
            <h2>Aumente o resultado do seu ecommerce</h2>
            <p>In laoreet faucibus risus at tincidunt. Fusce ut semper urna, nec efficitur felis. Vestibulum vel arcu ut odio porta ullamcorper. Ut facilisis est sed.</p>
        </div>
        <div className={Styles.form}>
            <h3>Fale com um especialista</h3>
            <form>
                <Input type="text" placeholder="Nome Completo" required/>
                <Input  type="email" placeholder="Email" required />
                <Input  type="text" placeholder="Celular" required pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$" />
                <Input  type="text" placeholder="Site"/>
                <Select placeholder="Orçamento" options={[
                    {label: "Landing Page", value:"LandingPage"},
                    {label: "Ecommerce", value:"Ecommerce"},
                    {label: "Blog", value:"Blog"}
                ]} required/>
                <Button title="Enviar" kind="primary"/>
            </form>
           <p>Ao enviar esse formulário, você concorda com os com a nossa  
                <Link href="/">
                    <span> política de privacidade.</span>
                </Link>
            </p>
        </div>
    </div>
}
export default Form