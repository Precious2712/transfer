"use client"

import { type Control, type UseFormSetValue, useWatch } from "react-hook-form"
import { FormFieldRenderer } from "./FormFieldRenderer"
import { countryClubOptions, countryLeagueMap, type CountryClub } from "@/data/country-club/clubs"
import { getTeamsForLeague } from "@/data/country-club/team"
import { useEffect } from "react"
import type { SignupFormData } from "@/data/signup-schema/schema"
import { motion } from "framer-motion"

interface CountryLeagueSelectProps {
  control: Control<SignupFormData>
  setValue: UseFormSetValue<SignupFormData> 
}

export function CountryLeagueSelect({ control, setValue }: CountryLeagueSelectProps) {
  // Watch for changes to the countryClub and league fields
  const selectedCountry = useWatch({
    control,
    name: "countryClub",
  })

  const selectedLeague = useWatch({
    control,
    name: "league",
  })

  useEffect(() => {
    if (selectedCountry && countryLeagueMap[selectedCountry as CountryClub]) {
      const league = countryLeagueMap[selectedCountry as CountryClub]
      setValue("league", league, {
        shouldValidate: true,
      })

      setValue("team", "", {
        shouldValidate: true,
      })
    }
  }, [selectedCountry, setValue])

  const teamsForLeague = selectedLeague ? getTeamsForLeague(selectedLeague) : []
  const teamOptions = teamsForLeague.map((team) => ({
    value: team,
    label: team,
  }))

  return (
    <div className="space-y-4">
      <motion.h3
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="font-medium text-gray-700 mb-2"
      >
       
      </motion.h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormFieldRenderer
          name="countryClub"
          type="select"
          label="Country Club"
          placeholder="Select a country"
          required={true}
          control={control}
          options={countryClubOptions.map((country) => ({
            value: country,
            label: country,
          }))}
        />

        <FormFieldRenderer
          name="league"
          type="text"
          label="League"
          placeholder="League will be auto-filled"
          required={true}
          control={control}
          disabled={true}
        />
      </div>

      
      <FormFieldRenderer
        name="team"
        type="select"
        label="Team"
        placeholder="Select your team"
        required={true}
        control={control}
        options={teamOptions}
        disabled={!selectedLeague || teamsForLeague.length === 0}
      />
    </div>
  )
}