import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../css/global.css";
import "../utils/fontawesome";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout;