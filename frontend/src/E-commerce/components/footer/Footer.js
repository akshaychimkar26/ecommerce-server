import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./footer.css"


const Footer = () => {
  const Navigator = useNavigate()
  return (
    <footer>
      <div className='Footer_Body'>
        <div className='Footer_Body_Left'>
          <div onClick={() => Navigator('/')} className="Logo">
            <span className="left">The </span>
            <span className='right'>Siren</span>
          </div>
          <p>The Siren is a E-Commerce website where people can purchase latest products with more discounts.</p>
          <div className='Icons'>
            <img src="https://img.icons8.com/ios-filled/50/linkedin-circled--v1.png" alt="linkedin-circled--v1" />
            <img src="https://img.icons8.com/ios-filled/50/twitter-circled--v1.png" alt="twitter-circled--v1" />
            <img src="https://img.icons8.com/ios-filled/50/facebook-new.png" alt="facebook-new" />
            <img src="https://img.icons8.com/ios-glyphs/60/instagram-circle.png" alt="instagram-circle" />
          </div>
        </div>
        <div className='Footer_Body_Middle'>
          <div className='Blog'>
            <h2>Content</h2>
            <div>
              <div onClick={() => { Navigator('/'); window.scrollTo(0, 0) }}> Top Offers</div>
              <div onClick={() => { Navigator('/mobiles'); window.scrollTo(0, 0) }}> Mobiles</div>
              <div onClick={() => { Navigator('/fashion'); window.scrollTo(0, 0) }}> Fashion</div>
              <div onClick={() => { Navigator('/electronics'); window.scrollTo(0, 0) }}> Electronics</div>
              <div onClick={() => { Navigator('/appliances'); window.scrollTo(0, 0) }}> Appliances</div>
            </div>
          </div>
          {/* <div className='Resources'>
            <h2>Resources</h2>
            <div>
              <div>Help Center</div>
              <div>Careers</div>
              <div>Contact Us</div>
            </div>
          </div> */}
          {/* <div className='Partners'>
            <h2>Partners</h2>
            <div>
              <div>Become a Partner</div>
              <div>Step to Integrate</div>
              <div>Partner List</div>
            </div>
          </div> */}
        </div>
        <div className='Footer_Body_Right'>
          <h1>Generate Your Query ?</h1>
          <p>+91-7987715253</p>
          <p>support@hrep.com</p>
        </div>
      </div>
      <div className='Copyright'>
        <p>© 2023 THE Siren - A E-Commerce Website</p>
        <div>
          <p>Privacy Policy</p>
          <p>Terms of service</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer