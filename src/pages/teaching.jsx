import React, { useState } from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import styles from "../css/teaching.module.css";
import Helmet from "react-helmet";

const Teaching = ({ data }) => {
    const {
        allContentfulTeaching: { nodes: teachings },
    } = data;

    const [selected, setSelected] = useState(0); // index of data array

    console.log(teachings[selected]);

    return (
        <Layout>
            <Helmet>
                <title>Teaching | 鄭麗珍 Li-Chen Cheng</title>
            </Helmet>
            <article className={styles.container}>
                <div className={styles.sidebar}>
                    {teachings.map(({ title }, index) => {
                        return (
                            <div
                                role="button"
                                tabIndex={index}
                                onClick={() => {
                                    setSelected(index);
                                }}
                                className={
                                    index === selected ? styles.selected : ""
                                }
                                onKeyDown={event => {
                                    if (event.keycode === 13) setSelected(index);
                                }}
                            >
                                <span>{title.replace(" ", "\n")}</span>
                            </div>
                        );
                    })}
                </div>
                <div className={styles.content}>
                    <section>
                        <h3 className={styles.title}>
                            {teachings[selected].title}
                        </h3>
                        <p>
                            {
                                teachings[selected].descriptionChinese
                                    .descriptionChinese
                            }
                        </p>
                        <p>
                            {
                                teachings[selected].descriptionEnglish
                                    .descriptionEnglish
                            }
                        </p>
                    </section>
                </div>
            </article>
        </Layout>
    );
};

export const query = graphql`
    {
        allContentfulTeaching(sort: { order: ASC, fields: createdAt }) {
            nodes {
                title
                descriptionEnglish {
                    descriptionEnglish
                }
                descriptionChinese {
                    descriptionChinese
                }
            }
        }
    }
`;

export default Teaching;
