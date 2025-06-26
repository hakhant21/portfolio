/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        SENDER_EMAIL: process.env.SENDER_EMAIL,
        RECIPIENT_EMAIL: process.env.RECIPIENT_EMAIL,
        MAILTRAP_TOKEN: process.env.MAILTRAP_TOKEN
    }
};

export default nextConfig;
