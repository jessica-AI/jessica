import React from "react";
import { graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "../css/home.module.css";
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
            photo: { gatsbyImageData },
        },
        contentfulContact: { linkedIn, email },
    } = data;

    return (
        <Layout>
            <Helmet>
                <title>鄭麗珍 Li-Chen Cheng</title>
                <meta
                    name="description"
                    content={`${name} ${documentToPlainTextString(
                        JSON.parse(description.raw)
                    )}`}
                />
            </Helmet>
            <article className={styles.container}>
                <section className={styles.intro}>
                    <GatsbyImage image={gatsbyImageData} alt={title} className={styles.photo} />
                    <div>
                        <div>
                            <h3>{name}</h3>
                            {renderRichText(description)}
                        </div>
                        <div>
                            <h4>研究領域</h4>
                            <p>{researchInterests}</p>
                        </div>
                    </div>
                </section>
                <section className={styles.about}>
                    <h3>about me</h3>
                    {renderRichText(aboutMe)}
                </section>
                <section className={styles.contact}>
                    <h3>Find Me Online</h3>
                    {email.map(email => (
                        <ContactCard
                            key={email}
                            link={`mailto:${email}`}
                            icon={
                                <FontAwesomeIcon icon={["far", "envelope"]} />
                            }
                        />
                    ))}
                    <ContactCard
                        link={linkedIn}
                        icon={<FontAwesomeIcon icon={["fab", "linkedin"]} />}
                    />
                </section>
            </article>
        </Layout>
    );
};

export const query = graphql`
    {
        contentfulHome {
            aboutMe {
                raw
            }
            subtitle
            title
            name
            description {
                raw
            }
            researchInterests {
                researchInterests
            }
            photo {
                gatsbyImageData(layout: FULL_WIDTH)
            }
        }
        contentfulContact {
            linkedIn
            email
        }
    }
`;

export default Home;
