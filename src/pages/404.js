import React from "react";
import Layout from "../components/Layout";

const error = () => {
    return (
        <Layout>
            <h3 style={{ fontSize: "7rem", textAlign: "center", marginTop: "3rem" }}>404</h3>
            <p style={{ fontSize: "3rem", textAlign: "center", marginBottom: "3rem" }}>Oops, looks like something went wrong.</p>
        </Layout>
    )
}

export default error;
