import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import '../App.css'
export default function Footer() {
  return (
    <MDBFooter bgColor='white' className='text-center text-lg-start text-muted'>
      
      <section className='py-3 ' style={{borderTop:'2px solid #fff'}}>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className=' mb-4 fs-1 jersey-25-regular' style={{color: 'blue'}}>
                <MDBIcon icon="gem" className="me-3 fs-1" />
                Bloweb
              </h6>
              <p className='text-dark fs-5'>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-dark'>Features</h6>
              <p>
                <a href='#!' className='text-dark fs-5'>
                  Academics
                </a>
              </p>
              <p>
                <a href='#!' className='text-dark fs-5'>
                 sports
                </a>
              </p>
              <p>
                <a href='#!' className='text-dark fs-5'>
                  placement
                </a>
              </p>
              <p>
                <a href='#!' className='text-dark fs-5'>
                  syllabus
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-dark'>Useful links</h6>
              <p>
                <a href='#!' className='text-dark fs-5'>
                  fees
                </a>
              </p>
              <p>
                <a href='#!' className='text-dark fs-5'>
                 departments
                </a>
              </p>
              <p>
                <a href='#!' className='text-dark fs-5'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-dark fs-5'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-dark '>Contact</h6>
              <p>
                <a href='#!' className='text-dark fs-5'>
                 Bloweb@ABC.cok
                </a>
              </p>
              <p>
                <a href='#!' className='text-dark fs-5'>
                  help@ABC.com
                </a>
              </p>
              <p>
                <a href='#!' className='text-dark fs-5'>
                  +91 234-567-400
                </a>
              </p>
              <p>
                <a href='#!' className='text-dark fs-5'>
                  director@ABC.com
                </a>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4 text-dark' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='fs-2 fw-bold jersey-25-regular' style={{color: 'blue'}} href='https://mdbootstrap.com/'>
          Bloweb.com
        </a>
      </div>
    </MDBFooter>
  );
}