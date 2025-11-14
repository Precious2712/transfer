"use client"

import type { Control, FieldValues, Path } from "react-hook-form"
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { SignupField } from "@/data/signupForm/signIn"

interface FormFieldRendererProps<T extends FieldValues> extends SignupField {
  control: Control<T>
  options?: { value: string; label: string }[]
  disabled?: boolean
}

export function FormFieldRenderer<T extends FieldValues>({
  name,
  type,
  label,
  placeholder,
  required,
  control,
  options,
  disabled = false,
}: FormFieldRendererProps<T>) {
  return (
    <FormField
      control={control}
      name={name as Path<T>}
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            {label}
            {required && " *"}
          </FormLabel>
          <FormControl>
            {type === "select" ? (
              <Select disabled={disabled} onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                  {options?.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ) : (
              <Input
                type={type}
                placeholder={placeholder}
                {...field}
                value={type === "number" && field.value !== undefined ? field.value : field.value}
                disabled={disabled}
              />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}