export function generateVerificationOtpEmailTemplate(otpCode) {
    return `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; background-color: #333;">
    <h2 style="color: #fff; text-align: center;">Verify Your Email Address</h2>
    <p style="font-size: 16px; color: #ccc;">Dear User,</p>
    <p style="font-size: 16px; color: #ccc;">To complete your registration or login, please use the following OTP code:</p>
    <div style="text-align: center; margin: 20px 0;">
        <span style="display: inline-block; font-size: 24px; font-weight: bold; color: #000; padding: 10px 20px; background-color: #fff; border-radius: 5px;">
            ${otpCode}
        </span>
    </div>
    <p style="font-size: 16px; color: #ccc;">This code is valid for 15 minutes. Please do not share this code with anyone.</p>
    <p style="font-size: 16px; color: #ccc;">If you did not request this email, please ignore it.</p>
    <footer style="margin-top: 20px; text-align: center; font-size: 14px; color: #666;">
        <p>Thank you,<br>BookWorm Team</p>
        <p style="font-size: 12px; color: #444;">This is an automated message. Please do not reply to this email.</p>
    </footer>
</div>`;
}