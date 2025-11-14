'use client';

interface login {
    name: string
    placeholder: string
    type: string
    required: true
    label: string
}

export const loginForm: login[] = [
    {
        name: 'email',
        type: 'email',
        placeholder: 'Enter email',
        required: true,
        label: 'Email'
    },
    {
        name: 'password',
        type: 'password',
        placeholder: 'Enter password',
        required: true,
        label: 'Password'
    }
]