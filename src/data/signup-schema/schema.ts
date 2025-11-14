'use client'

import { z } from 'zod'

export const signUpFormSchema = z.object({
    firstname: z.string().
        min(4, {
            message: 'First name is required'
        }),
    lastname: z.string().
        min(4, {
            message: 'Last name is required'
        }),
    email: z.string().min(5, 'Email is required').email({
        message: 'Must be a valid email'
    }),
    password: z.string().
        min(8, 'minimun is 8').max(8, 'maximum is 8'),
    // contact: z.coerce.number({
    //     required_error: 'Contact is required',
    //     invalid_type_error: 'Contact must be a number',
    // }).
    // min(11, 'minimum contact is 11'),
    countryClub: z.enum(['Spain', 'England', 'France', 'Italy', 'Germany']),
    league: z.string().min(1, 'Please select a league'),
    team: z.string()
})

export const loginFormSchema = z.object({
    email: z.string().
        min(5, {
            message: 'Email is required'
        }).
        email('Must be a valid email'),
    password: z.string().
        min(8, 'minimun is 8').max(8, 'maximum is 8'),
})
export type SignupFormData = z.infer<typeof signUpFormSchema>
export type LoginFormData = z.infer<typeof loginFormSchema>