import React from 'react';
import { useTranslation } from "react-i18next";

const HeaderComponent = () => {
    
    const { i18n } = useTranslation();

    const handleLanguage = (e) => { 
        i18n.changeLanguage(e.target.value);
    }
    
    return (
        <header>
            <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 mt-2 ms-3 border-bottom">
                <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
                    <span className="fs-4">React Localization</span>
                </a>

                <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                    <span className="me-3 py-2 text-dark">
                        <select className="form-select form-select-sm language-switcher" onClick={handleLanguage}>
                            <option value="en">English</option>
                            <option value="fr">French</option>
                        </select>
                    </span>
                </nav>
            </div>
        </header>

    );
}

export default HeaderComponent;