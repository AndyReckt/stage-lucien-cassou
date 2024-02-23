"use client";

import Link from "next/link";
import handleSubmit from "./contact.server";
import "@/styles/contact.css";
import Image from 'next/image';
import { useEffect, useState } from "react";

function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    type WindowSize = {
        width: number | undefined;
        height: number | undefined;
    };

    const [windowSize, setWindowSize] = useState({ width: undefined, height: undefined } as WindowSize);
  
    useEffect(() => {
      // only execute all the code below in client side
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      
      // Add event listener
      window.addEventListener("resize", handleResize);
       
      // Call handler right away so state gets updated with initial window size
      handleResize();
      
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

export default function Contact() {
    const windowSize = useWindowSize();

  return (
    <div className="contactBox">
        <div className="contact-text-image">
            <div className="contactImage">
                <Image
                    src={"/pp.jpg"}
                    alt={"Photo de profil"}
                    className="w-24 h-24 md:w-64 md:h-auto rounded-full mx-auto"
                    width={200}
                    height={200}
                /> {/* md:rounded-none */}
                
            </div>
            <div className="contactText">
                <h1>Contactez Moi</h1>
                <p>Besoin de me contacter?</p>
                { windowSize.width && windowSize.width > 770 ?
                    <p>Remplissez le formulaire ci-contre avec votre demande.</p> :
                    <p>Remplissez le formulaire ci-dessous avec votre demande.</p>
                }
            </div>
        </div>
        <div className="contactForm">
            <form action="mailto:cassoulucien@gmail.com" onSubmit={handleSubmit} method="POST" >
                <div className="pt-0 mb-3">
                    Votre nom
                    <input type="text" placeholder="ex: Lucien Cassou" name="name" 
                        className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm
                        text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
                        required/>
                </div>

                <div className="pt-0 mb-3">
                    Votre email
                    <input type="email" placeholder="ex: mail@gmail.com" name="email"
                        className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm
                         text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
                        required/>
                </div>

                <div className="pt-0 mb-3">
                Que puis-je faire pour vous ?
                    <textarea placeholder="Votre Message" name="msgx"
                        className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm
                        text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
                        required/>
                </div>

                <div className="pt-0 mb-3">
                    <button type="submit"
                        className="active:bg-blue-600 hover:shadow-lg focus:outline-none px-6 py-3 mb-1 mr-1
                         text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 rounded shadow outline-none"
                    >
                    Envoyer
                    </button>
                </div>
            </form>
        </div>
    </div>
  );
}
    