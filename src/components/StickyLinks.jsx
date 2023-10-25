// import {BsLinkedin, BsGithub} from 'react-icons/bs'
// import {BiLogoGmail} from 'react-icons/bi'
import '../stickyLinks.css'
export default function StickyLinks() {
    const onClick = (e) => {
        console.log(e.target)
        const width = e.target.offsetWidth;
        const left = e.target.offsetLeft;
        const height = e.target.offsetHieght * .7;

        const hover = document.querySelector('.select');
        hover.style.width = `${width}px`;
        hover.style.left = `${left}px`;
        hover.style.height = `${height}px`;
        
    }
  return (
    <>
      <div className="links">
        <div className="relative">
            <a href="#hero-section" className='link' onClick={onClick}>Home</a>
            <a href="#work-section" className='link' onClick={onClick}>Work</a>
            <a href="#about-section" className='link' onClick={onClick}>About</a>
            <a href="#form-section" className='link' onClick={onClick}>Contact</a>
            <div className="select"></div>
            <div className="select hover "></div>
        </div>
      </div>
    </>
  )
}
