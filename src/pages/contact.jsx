import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import ContactCard from "../components/ContactCard";
import styles from "../css/contact.module.css";
import Helmet from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = ({ data }) => {
    const {
        contentfulContact: { linkedIn, email },
    } = data;

    return (
        <Layout>
            <Helmet>
                <title>Contact | 鄭麗珍 Li-Chen Cheng</title>
            </Helmet>
            <article className={styles.container}>
                <h3 className={styles.title}>Find Me Online</h3>
                {email.map(email => (
                    <ContactCard link={`mailto:${email}`} icon={<FontAwesomeIcon icon={["far", "envelope"]} />} />
                ))}
                <ContactCard link={linkedIn} icon={<FontAwesomeIcon icon={["fab", "linkedin"]} />}/>
            </article>
        </Layout>
    );
};

export const query = graphql`
    {
        contentfulContact {
            linkedIn
            email
        }
    }
`;

export default Contact;
