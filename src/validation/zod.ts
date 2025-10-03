import { z } from 'zod'

const registerValidation = z
    .object({
        fullName: z
            .string()
            .nonempty("Họ và tên không được để trống")
            .min(2, "Họ và tên phải có ít nhất 2 ký tự")
            .regex(/^[\p{L}\s]+$/u, "Họ và tên chỉ được chứa chữ và khoảng trắng"),

        email: z
            .string()
            .nonempty("Email không được để trống")
            .email("Email không hợp lệ"),

        password: z
            .string()
            .nonempty("Mật khẩu không được để trống")
            .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
            .regex(/[A-Z]/, "Mật khẩu phải có ít nhất 1 chữ hoa")
            .regex(/[a-z]/, "Mật khẩu phải có ít nhất 1 chữ thường")
            .regex(/[0-9]/, "Mật khẩu phải có ít nhất 1 số")
            .regex(/[^A-Za-z0-9]/, "Mật khẩu phải có ít nhất 1 ký tự đặc biệt"),

        confirmPassword: z.string().nonempty("Vui lòng nhập lại mật khẩu"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Mật khẩu nhập lại không khớp",
        path: ["confirmPassword"], // highlight lỗi ở confirmPassword
    });

const loginValidation = z.object({
    email: z.string().nonempty(),
    password: z.string().nonempty()
})

export {
    registerValidation,
    loginValidation
}


