import React from "react"
import Section from "../components/Section"
import ResumePDF from "../assets/Dhruv's Resume.pdf"
import DSCartoon from "../assets/dhruv_cartoon.png"
import {FaGithub, FaLinkedinIn, FaTwitter} from "react-icons/fa"
import { Icon } from '@iconify/react';

const SocialIcon = ({ href, icon }) => {
  return (
    <a
      className="social-icon"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  )
}

export default function Home() {
  const icons = [
    {
      href: "https://www.linkedin.com/in/dhruvsethi708/",
      icon: <FaLinkedinIn />,
    },
    {
      href: "https://github.com/dhruvsethi708",
      icon: <FaGithub />,
    },
    {
      href: "https://twitter.com/dhruvsethi708",
      icon: <FaTwitter />,
    },
    {
      href: "https://leetcode.com/dhruvsethi708/",
      icon: <Icon icon="simple-icons:leetcode" />,
    }, 
    {
      href: "https://auth.geeksforgeeks.org/user/dhruvsethi708/practice",
      icon: <Icon icon="simple-icons:geeksforgeeks" />,
    }, 
  ]

  return (
    <Section id="about">
      <div className='row justify-content-between'>
        <div className='col-md-6 order-last order-lg-first' data-aos='fade-up'>
          <h1 className="mb-0">
            DHRUV
            <span className="text-primary" style={{paddingLeft: '2vw'}}>SETHI</span>
          </h1>
          <div className="subheading mb-3">
            <span style={{paddingRight: '0.3vw'}}>
              Impossible is nothing!
            </span>
            <span style={{paddingRight: '0.3vw'}}>
              ·
            </span>
            <br />
            <a href="mailto:dhruvsethi708@gmail.com" className='home-mail'>
              dhruvsethi708@gmail.com
            </a>
          </div>
        </div>
        <div className='col-md-3 mb-5 mb-lg-0' data-aos='fade-up'>
          <img
            src={DSCartoon}
            alt="Dhruv Cartoon"
            style={{height: '40vh', width: '40vh'}}
          />
        </div>
      </div>

      <p className="lead mb-4">
        I am a third-year undergraduate Computer Science and Technology Student at MAIT. I am always open to challenges that helps me in developing skills & abilities. Apart from that I am
a code enthusiast who enjoys experimenting latest technologies. As for my future, I hope to one day work as a Full Stack Developer, work with a diverse team and solve complex problems. In my free time, you can find me solving DSA problems!
      </p>

      <div className="btn-group mb-5">
        <button
          className="btn btn-primary btn-custom py-2 px-5 CV-Button"
          type="submit"
          onClick={() => window.open(ResumePDF)}
        >
          Download CV
        </button>
      </div>

      <div className="social-icons">
        {icons.map(({ href, icon }, index) => (
          <SocialIcon href={href} icon={icon} key={index} />
        ))}
      </div>
    </Section>
  )
}
