import { Heading } from '../components/heading'


const Contacts = () => {
    return <>
        <div className="contacts">
            <Heading/>
            <article className="contacts-article">
                <p>My name: 
                    <h1>Jakub Harčarik</h1>
                </p>
                <p>My private email: 
                    <h1>kuba.harcarik@gmail.com</h1>
                </p>
                <p>My school email: 
                    <h1>harcja@delta.studenti.cz</h1>
                </p>
                <p>Adress:
                    <h1>Czech Republic, Pardubice, Ke Kamenci 151</h1>
                </p>
            </article>

        </div>
    </>
}

export default Contacts