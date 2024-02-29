"use client";

import '@/styles/portfolio.css';
import Image from 'next/image';
import { getCurrentImage, getNextImage, getPreviousImage } from "@/app/_images.server";

import { useState, useTransition } from "react";

function timer(startTransition: (arg0: any) => void, setImage: (arg0: any) => void, nextImage: () => any) {
  setTimeout(() => {
    nextImage();
    setImage(getCurrentImage());
  }, 12_000);
}
export default function Portfolio() {
    let [image, setImage] = useState(getCurrentImage());
    let [_, startTransition] = useTransition();
  
    timer(startTransition, setImage, getNextImage);

    return (<div className="portfolio">
        <h2 className="projets my-6 text-3xl">Mon Portfolio</h2>

        <div className="image-and-desc">
        <div className="image-and-buttons">
            {/* <PreviousImageButton /> */}
            <button type="button" className="hover:shadow-lg font-light text-5xl
            uppercase transition-all duration-150 ease-linear
            rounded-3xl shadow outline-none
            focus:outline-none"
            onClick={() => {
            startTransition(() => {
                setImage(getPreviousImage());
            });
            }}>
            {"<"}
            </button>
            {
            <div className="image-container">
                <Image src={image.url} alt={image.name} width={850} height={850}/>
            </div>
            }
            {/* <NextImageButton /> */}
            <button type="button" className="hover:shadow-lg font-light text-5xl
            uppercase transition-all duration-150 ease-linear
            rounded-3xl shadow outline-none
            focus:outline-none"
            onClick={() => {
                startTransition(() => {
                    setImage(getNextImage());
                });
            }}>{">"}</button>
        </div>
        {<p className="image-desc">{image.description}</p>}
        </div>
    </div>);
}