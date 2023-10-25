import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {BiLogoGmail} from 'react-icons/bi'
import '../Socials.css'
export default function Socials() {
  return (
    <div className='socials-component'>
      <a href='https://www.linkedin.com/in/victor-durodola-469993247/' className="tabs">LinkedIn <BsLinkedin className='medium-icons'/> </a>
      <a href='https://github.com/Victor-Durodola?tab=repositories' className="tabs">Github <BsGithub className='medium-icons'/></a>
      <div className="tabs">Email<BiLogoGmail className='medium-icons'/></div>
    </div>
  )
}
