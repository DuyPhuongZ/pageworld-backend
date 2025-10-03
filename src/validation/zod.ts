import { z } from 'zod'

const registerValidation = z.object({
    fullName: z.string(),
    email: z.string().nonempty(),
    password: z.string().nonempty(),
    confirmPassword: z.string().nonempty()
})

const loginValidation = z.object({
    email: z.string().nonempty(),
    password: z.string().nonempty()
})

export {
    registerValidation,
    loginValidation
}


