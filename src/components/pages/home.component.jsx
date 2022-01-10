import React from 'react';
import { useTranslation } from "react-i18next";

const HomeComponent = () => { 
    const { t } = useTranslation();

    return (
        <>
            <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                <h1 className="display-5 fw-normal">{ t('plan_title') }</h1>
                <p className="fs-5 text-muted">{ t('plan_text') }</p>
            </div>
            <main>
                <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm">
                            <div className="card-header py-3">
                                <h4 className="my-0 fw-normal">{ t('free') }</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">$0<small className="text-muted fw-light">/{ t('month') }</small></h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>{ t('users_included', {'total': 10 }) }</li>
                                    <li>{ t('storage_included', {'total': 2 }) }</li>
                                    <li>{ t('email_included', {'total': 1 }) }</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm">
                            <div className="card-header py-3">
                                <h4 className="my-0 fw-normal">Pro</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">$15<small className="text-muted fw-light">/{ t('month') }</small></h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>{ t('users_included', {'total': 20 }) }</li>
                                    <li>{ t('storage_included', {'total': 10 }) }</li>
                                    <li>{ t('email_included', {'total': 5 }) }</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm border-primary">
                            <div className="card-header py-3 text-white bg-primary border-primary">
                                <h4 className="my-0 fw-normal">Enterprise</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">$29<small className="text-muted fw-light">/{ t('month') }</small></h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>{ t('users_included', {'total' : 30 }) }</li>
                                    <li>{ t('storage_included', {'total' : 15 }) }</li>
                                    <li>{ t('email_included', {'total' : 10 }) }</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default HomeComponent;