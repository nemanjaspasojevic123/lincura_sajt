import React from 'react';
import { Navbar } from '../../Navbar';
import '../style/About.css';
import Typical from 'react-typical';

export const About = () => {
    return (
        <div>
            <Navbar />
            <div className="photo-main">
                <div className="text-box">
                    <h1 className="about-main-text">
                        <span className="about-text">Lincura</span>
                        <span className="about-subtext">
                            <Typical
                                loop={Infinity}
                                wrapper="b"
                                steps={[
                                    'Dobro došli',
                                    3000,
                                    'Zdravi bili',
                                    3000]}
                            /></span>
                    </h1>
                </div>
            </div>
            <div className="about-second-text">
                <h1 className="about-second-maintext">
                    O nama
                </h1>
                    <span className="about-second-subtext">Plantaža Balkanske žute lincure nalazi se na planini Tari, terenu idealnom za gajenje lekovitog bilja, na nadmorskoj visini od 1050 m.</span>
                    <span className="about-second-subtext">Jedna je od većih plantaža lincure u Srbiji, sa površinom nešto većom od 1 ha. </span>
                    <span className="about-second-subtext">Glavna prednost, a može se reći i jedinstvenost plantaže ogleda se u činjenici da ima sveobuhvatnu delatnost, odnosno na plantaži se vrši sakupljanje semena, proizvodnja sadnog materijala kao i uzgoj višegodišnjih biljaka lincure, čiji koren se koristi u lekovite svrhe.</span>
            </div>
        </div>
    )
}