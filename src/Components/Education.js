import React from 'react';
import '../Styles/Education.css'; 

function Education() {
  return (
    <div className='edu'>
      <div className='edbox'>
        <div className='first'>
          <h3>GRADUATION</h3>
          <p>Full Stack Developer Certificate</p>
          <p>Imarticus Learning Institute</p>
          <a href="/Files/FSD.pdf" download="FSD.pdf" className="download-button">
            Download Certificate
          </a>
        </div>
        <div className='one'>
          <h3>GRADUATION</h3>
          <p>Bachelor's in Information Technology (B.Sc.I.T)</p>
          <p>From Mumbai University (2021)</p>
          <a href="/Files/Graduation.pdf" download="Graduation.pdf" className="download-button">
            Download Marksheet
          </a>
        </div>
        <div className='two'>
          <h3>HIGHER SECONDARY</h3>
          <p>12th Board (H.S.C)</p>
          <p>From Maharashtra Board (2018)</p>
          <a href="/Files/12th.pdf" download="12th.pdf" className="download-button">
            Download Marksheet
          </a>
        </div>
        <div className='three'>
          <h3>SECONDARY</h3>
          <p>S.S.C</p>
          <p>From Maharashtra Board (2016)</p>
          <a href="/Files/10th.pdf" download="10th.pdf" className="download-button">
            Download Marksheet
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;