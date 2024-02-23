import { z } from 'zod'
import Image from 'next/image';
import {images} from './_config';

export const ImageData = z.object({
  id: z.number().int(),
  name: z.string().min(1).max(32),
  url: z.string().url(),
  description: z.string().min(1),
})

export type ImageData = z.infer<typeof ImageData>

export function getAllImages(): ImageData[] {
    return images
}

export let currentImageIndex = 1

export function getNextIndex(): number {
    currentImageIndex = (currentImageIndex + 1)
    if (currentImageIndex > images.length) {
        currentImageIndex = 1
    }
    return currentImageIndex
}

export function getPreviousIndex(): number {
    currentImageIndex = (currentImageIndex - 1)
    if (currentImageIndex < 1) {
        currentImageIndex = images.length
    }
    return currentImageIndex
}

export function getCurrentImage(): ImageData {
    if (images.length === 0) {
        images.push(...getAllImages())
    }
    return images.find(image => image.id === currentImageIndex) || images[0]
}

export function getNextImage(): ImageData {
    getNextIndex()
    return getCurrentImage()
}

export function getPreviousImage(): ImageData {
    getPreviousIndex()
    return getCurrentImage()
}

export function getAllImagesData(): ImageData[] {
    return images
}

export function getImageData(id: number): ImageData | undefined {
    return images.find(image => image.id === id)
}
