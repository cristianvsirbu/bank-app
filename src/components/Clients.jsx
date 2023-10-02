import { useEffect, useState } from "react"
import { clients } from "../constants"
import styles from "../style"
import CardAnimation from "./CardAnimation"
import { sponsor, sponsor_mobile } from "../assets"
const Clients = () => {
  const [imageSource, setImageSource] = useState('');

  useEffect(() => {
    const handleResize = () => {
      const newImageSource = window.innerWidth > 767 ? sponsor : sponsor_mobile;
      setImageSource(newImageSource);
    };

    handleResize(); 

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="clients" className={`${styles.flexCenter} flex flex-col`}>
      <CardAnimation interval={300} animationClassName='stats'>
        <h2 className={`${styles.heading2} text-center mb-10`}>Our Partners:</h2>
      </CardAnimation>
      <div className={`${styles.flexCenter} flex-wrap flex-col md:flex-row my-10`}>
        <CardAnimation interval={400} animationClassName="stats">
          {clients.map((client) => (
            <div key={client.id} className={`flex-1 ${styles.flexCenter}`}>
              <img src={client.logo} alt="client" className="w-[70%] h-[70%] object-contain mb-8 box-shadow-20" />
            </div>
          ))}
        </CardAnimation>
      </div>
      <CardAnimation interval={300} animationClassName='stats'>
        <div className="mt-10">
          <h2 className={`${styles.heading2} text-center mt-10`}>We are now sponsoring:</h2>
          <a
            href="https://project-mars-serverless.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={imageSource} alt="screenshot1" className="w-full" />
          </a>
        </div>
      </CardAnimation>
    </section>
  )
}

export default Clients