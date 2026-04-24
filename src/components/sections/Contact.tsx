import { Parallax } from 'react-scroll-parallax';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import groundImg from '../../assets/images/ground.svg';
import bubblesImg from '../../assets/images/bubbles.svg';
import octopusImg from '../../assets/images/octopus.svg';
import { CONTACT_LINKS } from '../../data';

const iconMap: any = {
  github: faGithub,
  linkedin: faLinkedin,
  twitter: faXTwitter,
  mail: faEnvelope,
  file: faFileAlt,
};

const ContactButton = ({ contact, delay }: { contact: any, delay: string }) => {
  const icon = iconMap[contact.icon] || faFileAlt;

  return (
    <a
      href={contact.url}
      target="_blank"
      rel="noreferrer"
      className="block animate-bounce hover:scale-110 transition-transform duration-300 group relative"
      style={{ animationDelay: delay }}
    >
      <FontAwesomeIcon icon={icon} className="text-4xl md:text-5xl text-gray-950" />
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold whitespace-nowrap bg-black text-white px-2 py-1 rounded">
        {contact.label}
      </span>
    </a>
  );
};

export default function Contact() {
  return (
    <div className="w-full flex items-center justify-center transition-all pb-12 relative text-gray-950 bg-white">
      <div id="contact" className="absolute top-0" />
      <Parallax
        speed={-20}
        className="absolute bottom-[calc(100%-180px)] md:bottom-[calc(100%-260px)] right-4 md:right-[10rem] xl:right-[20%]"
      >
        <img src={octopusImg} className="w-[200px] md:w-[300px]" alt="Octopus" />
      </Parallax>
      <Parallax speed={10} className="absolute bottom-full left-0 right-0">
        <img
          src={bubblesImg}
          className="w-full min-h-[100px] md:min-h-[150px] object-cover object-top"
          alt="Bubbles"
        />
      </Parallax>
      <Parallax speed={0} className="absolute bottom-full left-0 right-0">
        <img
          src={groundImg}
          className="w-full min-h-[120px] md:min-h-[180px] object-cover object-[left_bottom]"
          alt="Ground"
        />
      </Parallax>

      <div className="mx-auto px-4 text-center bg-white z-10 relative">
        <h1 className="text-2xl md:text-4xl font-black mb-8">Get In Touch</h1>
        <div className="flex flex-wrap justify-center gap-6">
          {CONTACT_LINKS.map((contact, index) => (
            <ContactButton
              key={contact.label}
              contact={contact}
              delay={`${((index + 1) / 2) * 1000}ms`}
            />
          ))}
        </div>
        <div className="text-sm font-semibold opacity-60 w-full mt-20 pb-8 tracking-wide">
          Made with ❤️ by Himanshu Jaiswal
        </div>
      </div>
    </div>
  );
}


