import React from "react";
import styles from "../css/header.module.css";
import Navbar from "./Navbar";
import Image from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

const getBackgroundImage = graphql`
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
    }
`;

const Header = () => {
    const {
        contentfulHome: { title, subtitle },
        file: {
            childImageSharp: { fluid },
        },
    } = useStaticQuery(getBackgroundImage);

    return (
        <header className={styles.header}>
            <article>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
            </article>
            <Image fluid={fluid} alt="background" />
            <Navbar />
        </header>
    );
};

export default Header;
