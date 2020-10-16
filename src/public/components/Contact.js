import React from 'react';
import { Footer } from '../../Footer';
import { Navbar } from '../../Navbar';
import '../style/Contact.css';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

export const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className="contact">
                <span className="contact-form">Tel. za naručivanje proizvoda: 065/4064342</span>
                <span className="contact-form">Lokacija plantaže: Kaluđerske bare, Tara</span>
                <span className="contact-form">Adresa: Rade Nikolić 11/1, Bajina Bašta</span>
                <span className="contact-form">Radno vreme od 09 do 20, subota 9 do 13</span>
                <span className="contact-form">e-mail: lincurasatare@gmail.com</span>
            </div>
            <div className="contact-us">
                <MDBContainer className="contact-us-form">
                    <MDBRow>
                        <MDBCol md="12">
                            <form>
                                <p className="h4 text-center mb-4">Kontaktirajte nas i poručite</p>
                                <label htmlFor="defaultFormContactNameEx" className="grey-text">
                                Vaše ime (obavezno)
                                </label>
                                <input type="text" id="defaultFormContactNameEx" className="form-control" />
                                <br />
                                <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                                Vaša e-pošta (obavezno)
                                </label>
                                <input type="email" id="defaultFormContactEmailEx" className="form-control" />
                                <br />
                                <label htmlFor="defaultFormContactMessageEx" className="grey-text">
                                Vaša poruka
                                </label>
                                <textarea type="text" id="defaultFormContactMessageEx" className="form-control" rows="3" />
                                <div className="text-center mt-4">
                                    <MDBBtn color="warning" outline type="submit">
                                    Pošalji
                                    </MDBBtn>
                                </div>
                            </form>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
            <Footer />
        </div>
    )
}