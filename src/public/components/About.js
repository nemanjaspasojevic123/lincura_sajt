import React from 'react';
import { Navbar } from '../../Navbar';
import '../style/About.css';
import Typical from 'react-typical';

export const About = () => {
    return (
        <div className="about">
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
                <span className="about-second-subtext">Glavna prednost, a može se reći i jedinstvenost plantaže ogleda se u činjenici da ima sveobuhvatnu delatnost,</span>
                <span className="about-second-subtext">Odnosno na plantaži se vrši sakupljanje semena, proizvodnja sadnog materijala kao i uzgoj višegodišnjih biljaka lincure, čiji koren se koristi u lekovite svrhe.</span>
            </div>
            <div className="photo-third">
                <h1 className="about-third-maintext">
                    Čime se bavimo
                </h1>
                <div className="about-third-box">
                <div className="about-doing-text">
                    <h3>Proizvodnja sadnog materijala</h3>
                    <p>Uzgoj jednogodišnjih i dvogodišnjih sadnica lincure.</p>
                </div>
                <div className="about-doing-text">
                    <h3>Proizvodnja korena</h3>
                    <p>Uzgoj višegodišnjih sadnica lincure.</p>
                </div>
                <div className="about-doing-text">
                    <h3>Prodaja</h3>
                    <p>Prodaja semena, sadnica i korena lincure.</p>
                </div>
                <div className="about-doing-text">
                    <h3>Edukacija</h3>
                    <p>Edukovanje potrošača i objašnjavanje celokupnog proizvodnog procesa.</p>
                </div>
                </div>
            </div>
            <div className="about-fourth-text">
                <h1 className="about-fourth-maintext">
                    O Lincuri
                </h1>
                <span className="about-fourth-subtext">Lincura je višegodišnja, zeljasta biljka.</span>
                <span className="about-fourth-subtext">Odlikuje se snažnim i razgranatim korenovim sistemom, čija težina najviše zavisi od starosti same biljke. </span>
                <span className="about-fourth-subtext">Listovi su krupni, elipsastog oblika sa jasno izraženim uzdužno paralelnim nervima. </span>
                <span className="about-fourth-subtext">Cvetonosna stabljilka (sveća) ce razvija tek u kasnijim godinama, najranije u trećoj, a najčešće u četvrtoj ili petoj godini starosti.</span>
                <span className="about-fourth-subtext">Stabljika je uspravna, nerazgranata, šuplja i dostiže visinu do 1,5 m.</span>
                <span className="about-fourth-subtext">Cvetovi su zlatno-žute boje, sakupljeni u grupe i spratno raspoređeni u pazuhu listova na dršci.</span>
                <span className="about-fourth-subtext">Seme je pljosnato sa semenjačom znatno širom od jezgra koja mu daje krilast izgled.</span>
                <span className="about-fourth-subtext">Lincura je biljka čije je prirodno stanište vezano za visoke planinske masive i u našoj zemlji se javlja na nadmorskim visinama od 800 do 1000 m.</span>
                <span className="about-fourth-subtext">U prirodi je veoma proređena i krajnje ugrožena pa je iz tog razloga i zakonom žaštićena.</span>
                <span className="about-fourth-subtext">Predstavlja jednu od najlekovitih biljaka, a zbog smanjenih količina u prirodi sve više se teži zasnivanju plantažne proizvodnje.</span>
                <span className="about-fourth-subtext">Koren se upotrebljava kao gorko sredstvo za jačanje organizma, sprečava pojavu anemije, poboljšava apetit i kod bolesti organa za varenje.</span>
                <span className="about-fourth-subtext">Od korena se proizvode preparati za medicinsku upotrebu, tečni ekstrakti, tinkture, a velike količine se koriste i za proizvodnju gorkih alkoholnih pića.</span>
                <span className="about-fourth-subtext">Od davnina je lekovitost lincure poznata u narodu i neretko se ona u prošlosti smatrala čudotvornom isceliteljkom tadašnjeg vremena.</span>
                <span className="about-fourth-subtext">Verovanje u njenu lekovitost nije umanjena sve do današnjih dana.</span>
            </div>
            <div className="about-footer">
                <p className="about-footer-text">
                    designed by: studioMemi
                </p>
            </div>
        </div>
    )
}