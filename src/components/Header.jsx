import React from "react";
import styles from "../css/header.module.css";
import Navbar from "./Navbar";
import Image from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const getData = graphql`
    query {
        file(relativePath: { eq: "header_background.jpg" }) {
            childImageSharp {
                fluid(quality: 100, maxWidth: 1800) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        contentfulHome {
            subtitle
            title
        }
        contentfulContact {
            linkedIn
            email
        }
    }
`;

const Header = () => {
    const {
        contentfulHome: { title, subtitle },
        contentfulContact: { linkedIn, email },
        file: {
            childImageSharp: { fluid },
        },
    } = useStaticQuery(getData);

    const renderEmailIcon = email => {
        return (
            <a href={`mailto:${email}`} key={email}>
                <FontAwesomeIcon icon={["far", "envelope"]} />
            </a>
        );
    };

    return (
        <header className={styles.header}>
            <article>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <div className={styles.contact}>
                    {email.map(renderEmailIcon)}
                    <a href={linkedIn} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={["fab", "linkedin"]} />
                    </a>
                </div>
            </article>
            <Image fluid={fluid} alt="background" />
            <input
                type="checkbox"
                id="hamburger"
                className={styles.hamburger_control}
            />
            <label htmlFor="hamburger" className={styles.hamburger_container}>
                <div className={styles.bar1}></div>
                <div className={styles.bar2}></div>
                <div className={styles.bar3}></div>
            </label>
            <Navbar />
        </header>
    );
};

export default Header;
