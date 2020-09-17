import React from "react";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "gatsby-image";
import styles from "../css/home.module.css";
import Layout from "../components/Layout";
import Helmet from "react-helmet";
import ContactCard from "../components/ContactCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = ({ data }) => {
    const {
        contentfulHome: {
            aboutMe,
            title,
            name,
            description,
            researchInterests: { researchInterests },
            photo: { fluid },
        },
        contentfulContact: { linkedIn, email }
    } = data;

    return (
        <Layout>
            <Helmet>
                <title>鄭麗珍 Li-Chen Cheng</title>
            </Helmet>
            <article className={styles.container}>
                <section className={styles.intro}>
                    <Image fluid={fluid} alt={title} className={styles.photo} />
                    <div>
                        <div>
                            <h3>{name}</h3>
                            {documentToReactComponents(description.json)}
                        </div>
                        <div>
                            <h4>研究領域</h4>
                            <p>{researchInterests}</p>
                        </div>
                    </div>
                </section>
                <section className={styles.about}>
                    <h3>about me</h3>
                    {documentToReactComponents(aboutMe.json)}
                </section>
                <section className={styles.contact}>
                    <h3>Find Me Online</h3>
                    {email.map(email => (
                        <ContactCard key={email} link={`mailto:${email}`} icon={<FontAwesomeIcon icon={["far", "envelope"]} />} />
                    ))}
                    <ContactCard link={linkedIn} icon={<FontAwesomeIcon icon={["fab", "linkedin"]} />}/>
                </section>
            </article>
        </Layout>
    );
};

export const query = graphql`
    {
        contentfulHome {
            aboutMe {
                json
            }
            subtitle
            title
            name
            description {
                json
            }
            researchInterests {
                researchInterests
            }
            photo {
                fluid {
                    ...GatsbyContentfulFluid
                }
            }
        }
        contentfulContact {
            linkedIn
            email
        }
    }
`;

export default Home;
