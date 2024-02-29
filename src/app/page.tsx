"use client";

import "@/styles/home.css";
import Image from 'next/image';

import { description, projets } from './_config';

export default function Home() {
  return (
    <div className="home">
      <div className="bg-video">
        <video autoPlay muted loop className="video">
          <source src="/clip.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="content flex">

        <h1 className="who my-6 text-5xl">Qui suis-je ?</h1>

        <div className="image-and-desc rounded">
          <Image src="/abio.jpg" alt="moi" width={450} height={360} className="rounded-full w-64 h-64 md:w-96 md:h-auto"/>
          <p className="image-desc">{description.photo_de_profil}</p>
        </div>

        <h2 className="projets my-6 text-3xl">Mon Parcours</h2>
          {projets.map((projet) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <div className="image-and-desc"> 
                <Image src={projet.url} alt={projet.name} width={450} height={360}/>
                <p className="image-desc">{projet.description}</p>
            </div>
            );
          })}
      </div>
    </div>
  );
}
