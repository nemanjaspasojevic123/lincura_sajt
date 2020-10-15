import React from 'react';
import { Footer } from '../../Footer';
import { Navbar } from '../../Navbar';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import '../style/Impressions.css'

export const Impressions = () => {
    return (
        <div>
            <Navbar />
            <div className="wrap-impressions">
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="12">
                        <form>
                            <p className="h4 text-center mb-4">Napišite nam vaš utisak</p>
                            <label htmlFor="defaultFormContactNameEx" className="grey-text">
                                Vaše ime (obavezno)
                            </label>
                            <input type="text" id="defaultFormContactNameEx" className="form-control" />
                            <br />
                            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                                Vaš email (obavezno)
                            </label>
                            <input type="email" id="defaultFormContactEmailEx" className="form-control" />
                            <br />
                            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                                Izaberite proizvod
                            </label>
                            <div>
                                <select className="browser-default custom-select">
                                    <option>Proizvod</option>
                                    <option value="1">Koren lincure</option>
                                    <option value="2">Seme lincure</option>
                                    <option value="3">Rakija sa korenom lincure</option>
                                    <option value="3">Sadnice lincure</option>
                                </select>
                            </div>
                            <br />
                            <label htmlFor="defaultFormContactMessageEx" className="grey-text">
                                Vaš utisak
                            </label>
                            <textarea type="text" id="defaultFormContactMessageEx" className="form-control" rows="3" />
                            <div className="text-center mt-4">
                                <MDBBtn outline color="red" >
                                    Potvrdi
                                </MDBBtn>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            </div>
            <div className="impressions">
                Utisci
            </div>
            <Footer />
        </div>
    )
}
