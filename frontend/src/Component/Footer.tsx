import images from '../assets/asset';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram,  faTiktok } from '@fortawesome/free-brands-svg-icons';







const Footer = () => {

  
  return (
    <div className="w-full bg-gray-200 flex flex-col items-center py-6" id='Contact us'>
      
      <img src={images.Logo2} alt="" className="w-60 mb-4" />

    
      <div className="flex mb-4">
       <a href='https://www.facebook.com/share/1BBw6vSNxv/?mibextid=wwXIfr'target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faFacebook} style={{ fontSize: '30px', marginRight: '12px', cursor: 'pointer' }}   /></a>
       <a href='https://www.tiktok.com/@debraktoys' target="_blank" rel="noopener noreferrer" > <FontAwesomeIcon icon={faTiktok} style={{ fontSize: '30px', marginRight: '12px', cursor: 'pointer' }}    /></a>
        
        <a href='https://www.instagram.com/debraktoys' target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faInstagram} style={{ fontSize: '30px', marginRight: '12px', cursor: 'pointer' }}   /></a>
      </div>

      
      <div className="flex flex-row justify-center gap-16 mb-4">
        <div>
          <h2 className="font-bold text-xl mb-2">COMPANY</h2>
          <ul className="font-medium text-gray-500 space-y-1">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-xl mb-2">GET IN TOUCH</h2>
          <ul className="font-medium text-gray-500 space-y-1">
            <li>+234457835698</li>
            <li>Debraktoys@gmail.com</li>
          </ul>
        </div>
      </div>

      
      <hr className="w-3/4 border-gray-400 mb-2" />
      <p className="text-xm text-gray-600">© Debraktoys.com - All Rights Reserved</p>
    </div>
  );
};

export default Footer;
