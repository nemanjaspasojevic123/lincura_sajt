import React from 'react'
import { MDBContainer, MDBFooter } from "mdbreact";
import 'mdbreact/dist/css/mdb.css'


export  const Footer = () => {
  return (
    <MDBFooter color="stylish-color-dark" className="page-footer font-small pt-4 mt-4">
      <div className="text-center">
      </div>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <span> Nemanja Spasojević </span>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}
