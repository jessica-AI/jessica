import React from "react";
import Layout from "../components/Layout";
import Helmet from "react-helmet";

const error = () => {
    return (
        <Layout>
            <Helmet>
                <title>404 | 鄭麗珍 Li-Chen Cheng</title>
            </Helmet>
            <h3 style={{ fontSize: "7rem", textAlign: "center", marginTop: "3rem" }}>404</h3>
            <p style={{ fontSize: "3rem", textAlign: "center", marginBottom: "3rem" }}>Oops, looks like something went wrong.</p>
        </Layout>
    )
}

export default error;
