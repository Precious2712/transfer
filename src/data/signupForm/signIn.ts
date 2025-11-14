"use client"

export interface SignupField {
  name: string
  type: string
  label: string
  placeholder: string
  required: boolean
}

export const userSignup: SignupField[] = [
  {
    name: "firstname",
    type: "text",
    label: "First name",
    placeholder: "Enter first name",
    required: true,
  },
  {
    name: "lastname",
    type: "text",
    label: "Last name",
    placeholder: "Enter last name",
    required: true,
  },
  {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "Enter your email",
    required: true,
  },
  // {
  //   name: "contact",
  //   type: "number",
  //   label: "Contact",
  //   placeholder: "Enter your contact",
  //   required: true,
  // },
  {
    name: "league",
    type: "text",
    label: "League",
    placeholder: "Enter your league",
    required: true,
  },
  {
    name: "team",
    type: "text",
    label: "Team",
    placeholder: "Enter your team",
    required: true,
  },
  // {
  //   name: "password",
  //   type: "password",
  //   label: "Password",
  //   placeholder: "Enter your password",
  //   required: true,
  // },
  {
    name: "countryClub",
    type: "select",
    label: "Country club",
    placeholder: "Enter country club",
    required: true,
  },
]