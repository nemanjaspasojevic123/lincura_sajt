import React, { useState } from 'react';
import { Footer } from '../../Footer';
import { Navbar } from '../../Navbar';


import {
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardFooter,
    MDBTooltip,
    MDBBtn,
    MDBContainer, 
    MDBModal, 
    MDBModalBody, 
    MDBModalHeader, 
    MDBModalFooter
} from 'mdbreact';

export const Products = () => {

    const [loading, setLoading] = useState({
        modal1: false,
        modal2: false,
        modal3: false,
        modal4: false,
    });

    const toggle = nr => () => {
        let modalNumber = 'modal' + nr
        setLoading({
        [modalNumber]: !loading[modalNumber]
        });
    }

    return (
        <>
            <Navbar />
            <div className="products">
            <section className='text-center my-5'>
                <h2 className='h1-responsive font-weight-bold text-center my-5'>Naši proizvodi</h2>
                <p className='black-text text-center w-responsive mx-auto mb-5'>
                    Detaljnije informacije o našim proizvodima kao i mogućnostima poručivanja proizvoda mozete dobiti pozivom na broj 065/4064342,
                    ili popunjavanjem forme klikom na dugme poruči.
                </p>
                <MDBRow>
                    <MDBCol lg='3' md='6' className='mb-lg-0 mb-4'>
                        <MDBCard cascade narrow ecommerce>
                            <MDBCardImage
                                cascade
                                src={require("../../assets/Lincura_sa_Tare.jpg")}
                                top
                                alt='sample photo'
                                overlay='white-slight'
                            />
                            <MDBCardBody cascade className='text-center'>
                                <span className='grey-text'>
                                    <h5>LINCURA</h5>
                                </span>
                                <MDBCardTitle>
                                    <strong>
                                        <h3>Koren lincure</h3>
                                    </strong>
                                </MDBCardTitle>
                                <MDBCardText>Osušeni koren žute lincure vrhunskog kvaliteta. Pakovanje 100 g.</MDBCardText>
                                <MDBContainer>
                                    <MDBBtn onClick={toggle(1)} outline color="black">Saznaj više</MDBBtn>
                                    <MDBModal isOpen={loading.modal1} toggle={toggle(1)}>
                                        <MDBModalHeader toggle={toggle(1)}>Koren lincure</MDBModalHeader>
                                        <MDBModalBody>
                                        Koren lincure sadrži sekoiridoidne glikozide, ksantone, alkaloide, ugljene hidrate, pektin, tanine. 
                                        Koren se upotrebljava kao gorko sredstvo za jačanje organizma, sprečava pojavu anemije, poboljšava apetit i kod bolesti organa za varenje.
                                        </MDBModalBody>
                                        <MDBModalFooter>
                                            <MDBBtn outline color="black" onClick={toggle(1)}>Zatvori</MDBBtn>
                                        </MDBModalFooter>
                                    </MDBModal>
                                </MDBContainer>
                                <MDBCardFooter className='px-1'>
                                    <span className='float-left font-weight-bold'>
                                        <strong>250 RSD</strong>
                                    </span>
                                    <span className='float-right'>
                                        <MDBTooltip domElement placement='top'>
                                            <i className='red-text fa fa-shopping-cart  ml-3' />
                                            <span>Poruči</span>
                                        </MDBTooltip>
                                    </span>
                                </MDBCardFooter>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg='3' md='6' className='mb-lg-0 mb-4'>
                        <MDBCard cascade narrow ecommerce>
                            <MDBCardImage
                                cascade
                                src={require("../../assets/Lincura seme mockup.jpg")}
                                top
                                alt='sample photo'
                                overlay='white-slight'
                            />
                            <MDBCardBody cascade className='text-center'>
                                <span className='grey-text'>
                                    <h5>LINCURA</h5>
                                </span>
                                <MDBCardTitle>
                                    <strong>
                                        <h3>Seme lincure</h3>
                                    </strong>
                                </MDBCardTitle>
                                <MDBCardText>Seme žute lincure sakupljeno tekuće godine. Pakovanje 100 g.</MDBCardText>
                                <MDBContainer>
                                    <MDBBtn onClick={toggle(2)} outline color="black">Saznaj više</MDBBtn>
                                    <MDBModal isOpen={loading.modal2} toggle={toggle(2)}>
                                        <MDBModalHeader toggle={toggle(2)}>Seme lincure</MDBModalHeader>
                                        <MDBModalBody>
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                        </MDBModalBody>
                                        <MDBModalFooter>
                                            <MDBBtn outline color="black" onClick={toggle(2)}>Zatvori</MDBBtn>
                                        </MDBModalFooter>
                                    </MDBModal>
                                </MDBContainer>
                                <MDBCardFooter className='px-1'>
                                    <span className='float-left font-weight-bold'>
                                        <strong>2200 RSD</strong>
                                    </span>
                                    <span className='float-right'>
                                        <MDBTooltip domElement placement='top'>
                                            <i className='red-text fa fa-shopping-cart mr-3' />
                                            <span>Poruči</span>
                                        </MDBTooltip>
                                    </span>
                                </MDBCardFooter>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg='3' md='6' className='mb-lg-0 mb-4'>
                        <MDBCard cascade narrow ecommerce>
                            <MDBCardImage
                                cascade
                                src={require("../../assets/Lincura rakija.jpg")}
                                top
                                alt='sample photo'
                                overlay='white-slight'
                            />
                            <MDBCardBody cascade className='text-center'>
                            <span className='grey-text'>
                                    <h5>LINCURA</h5>
                                </span>
                                <MDBCardTitle>
                                    <strong>
                                        <h3>Rakija sa korenom lincure</h3>
                                    </strong>
                                </MDBCardTitle>
                                <MDBCardText>Vrhunska rakija od šljive sa dodatkom suvog korena lincure.</MDBCardText>
                                <MDBContainer>
                                    <MDBBtn onClick={toggle(3)} outline color="black">Saznaj više</MDBBtn>
                                    <MDBModal isOpen={loading.modal3} toggle={toggle(3)}>
                                        <MDBModalHeader toggle={toggle(3)}>Rakija sa korenom lincure</MDBModalHeader>
                                        <MDBModalBody>
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                        </MDBModalBody>
                                        <MDBModalFooter>
                                            <MDBBtn outline color="black" onClick={toggle(3)}>Zatvori</MDBBtn>
                                        </MDBModalFooter>
                                    </MDBModal>
                                </MDBContainer>
                                <MDBCardFooter className='px-1'>
                                    <span className='float-left font-weight-bold'>
                                        <strong>1000 RSD</strong>
                                    </span>
                                    <span className='float-right'>
                                        <MDBTooltip domElement placement='top'>
                                            <i className='red-text fa fa-shopping-cart mr-3' />
                                            <span>Poruči</span>
                                        </MDBTooltip>
                                    </span>
                                </MDBCardFooter>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg='3' md='6' className='mb-lg-0 mb-4'>
                        <MDBCard cascade narrow ecommerce>
                            <MDBCardImage
                                cascade
                                src={require("../../assets/sadnice.JPG")}
                                top
                                alt='sample photo'
                                overlay='white-slight'
                            />
                            <MDBCardBody cascade className='text-center'>
                            <span className='grey-text'>
                                    <h5>LINCURA</h5>
                                </span>
                                <MDBCardTitle>
                                    <strong>
                                        <h3>Sadnice lincure</h3>
                                    </strong>
                                </MDBCardTitle>
                                <MDBCardText>Dvogodišnje sadnice. Minimalna porudžbina 100 komada.</MDBCardText>
                                <MDBContainer>
                                    <MDBBtn onClick={toggle(4)} outline color="black">Saznaj više</MDBBtn>
                                    <MDBModal isOpen={loading.modal4} toggle={toggle(4)}>
                                        <MDBModalHeader toggle={toggle(4)}>Sadnice lincure</MDBModalHeader>
                                        <MDBModalBody>
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                        </MDBModalBody>
                                        <MDBModalFooter>
                                            <MDBBtn outline color="black" onClick={toggle(4)}>Zatvori</MDBBtn>
                                        </MDBModalFooter>
                                    </MDBModal>
                                </MDBContainer>
                                <MDBCardFooter className='px-1'>
                                    <span className='float-left font-weight-bold'>
                                        <strong>30 RSD/KOM</strong>
                                    </span>
                                    <span className='float-right'>
                                        <MDBTooltip domElement placement='top'>
                                            <i className='red-text fa fa-shopping-cart mr-3' />
                                            <span>Poruči</span>
                                        </MDBTooltip>
                                    </span>
                                </MDBCardFooter>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </section>
            </div>
            <Footer />
        </>
    );
};
