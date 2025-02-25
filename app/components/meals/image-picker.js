"use client"

import { useRef, useState } from 'react'
import classes from './image-picker.module.css'
import Image from 'next/image'
const ImagePicker = ({label, name}) => {

    const imageInput  = useRef()
    const [pickedImage, setPickedImage] = useState()
    
    const handlePickClick = () => {
        imageInput.current.click()
    }

    const handleImageChange = (event) => {
        const pickedFile = event.target.files[0]

        if (!pickedFile) {
            setPickedImage(null)
            return
        }

        const fileReader = new FileReader()
        fileReader.onload = () => {
            setPickedImage(fileReader.result)
        } 
        fileReader.readAsDataURL(pickedFile)
    }

    return (<>
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && (<p>No image picked yet</p>)}
                    {pickedImage && (
                        <Image 
                            src={pickedImage}
                            alt='selected by user'
                            fill
                        />
                    )}
                </div>
                <input 
                    className={classes.input}
                    type='file'
                    id={name}
                    accept='image/png, image/jpeg'
                    name={name}
                    ref={imageInput}
                    onChange={handleImageChange}
                    required
                />
                <button 
                    className={classes.button} 
                    type='button'
                    onClick={handlePickClick}
                >
                    Pick an image
                </button>
            </div>
        </div>
    </>)
}

export default ImagePicker