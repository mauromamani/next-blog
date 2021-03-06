import Head from 'next/head';
import ContactForm from '../../components/contactPage/ContactForm';

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contactame!</title>
        <meta name='description' content='Send me your messages' />
      </Head>
      <ContactForm />
    </>
  );
};

export default ContactPage;
