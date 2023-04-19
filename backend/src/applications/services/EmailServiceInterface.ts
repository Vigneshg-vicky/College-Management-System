import { EmailServiceReturn } from "../../frameworks/services/EmailService";

export const EmailServiceInterfaces = (service: EmailServiceReturn) => {
    const sendEmail = async (senderEmail: string, tempPassword: string) => await service.sendAuthenticationEmail(senderEmail, tempPassword)

    return {
        sendEmail,
    }
}

export type EmailServiceInterface = typeof EmailServiceInterfaces;