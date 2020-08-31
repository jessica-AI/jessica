import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import styles from "../css/academicService.module.css";

const AcademicService = ({ data }) => {
    const {
        allContentfulAcademicService: { nodes: services },
    } = data;

    const renderService = item => <li>{item}</li>;

    return (
        <Layout>
            <article className={styles.container}>
                {services.map(service => {
                    return (
                        <section>
                            <h3 className={styles.title}>{service.title}</h3>
                            <ul>{service.items.map(renderService)}</ul>
                        </section>
                    );
                })}
            </article>
        </Layout>
    );
};

export const query = graphql`
    {
        allContentfulAcademicService(sort: { order: ASC, fields: createdAt }) {
            nodes {
                title
                items
            }
        }
    }
`;

export default AcademicService;
