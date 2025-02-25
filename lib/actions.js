'use server'

import { redirect } from "next/navigation"
import { saveMeal } from "./meals"

function isImvalidTest(text) {
    return !text || text.trim() === ''
}

export const shareMeal = async ( prevState, formData) => {
    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email')
    }

    if (isImvalidTest(meal.title) || 
        isImvalidTest(meal.summary) ||
        isImvalidTest(meal.creator) ||
        isImvalidTest(meal.creator_email) ||
        isImvalidTest(meal.instructions) ||
        !meal.creator_email.includes('@') ||
        !meal.image || meal.image.size === 0
    ){
        return {
            message: 'Invalid input'
        }
    }

    await saveMeal(meal)

    redirect('/meals')
}