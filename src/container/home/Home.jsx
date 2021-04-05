import React from 'react'
import ContactForm from '../../components/contactForm/ContactForm'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Menu from '../../components/menu/Menu'
import SectionPrincipal from '../../components/sectionPrincipal/SectionPrincipal'
import SectionSecondary from '../../components/sectionSecondary/SectionSecondary'

const Home = () => {
    return (
        <>
        <Menu />
        <Header />

        <section id="principal">
            <SectionPrincipal />
        </section>

        <section id="secondary">
            <SectionSecondary />
        </section>

        <section id="contacto">
            <ContactForm />
        </section>

        <Footer />
        </>
    )
}

export default Home
