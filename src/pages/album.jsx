import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PhotoCard from "../components/PhotoCard";
import * as styles from "../css/album.module.css";
import Helmet from "react-helmet";

const Contact = ({ data }) => {
    const {
        allContentfulAlbum: { nodes: albums },
    } = data;

    return (
        <Layout>
            <Helmet>
                <title>Album | 鄭麗珍 Li-Chen Cheng</title>
                <meta
                    name="description"
                    content={albums.map(e=>e.title).join(", ")}
                />
            </Helmet>
            <article className={styles.container}>
                {albums.map(({ title, link, thumbnail },i) => (
                    <PhotoCard title={title} link={link} image={thumbnail.gatsbyImageData} key={i} />
                ))}
            </article>
        </Layout>
    );
};

export const query = graphql`
    {
        allContentfulAlbum(sort: { createdAt: ASC }) {
            nodes {
                title
                thumbnail {
                    gatsbyImageData(layout: FULL_WIDTH)
                }
                link
            }
        }
    }
`;

export default Contact;
