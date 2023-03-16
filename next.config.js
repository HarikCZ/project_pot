/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
}
module.exports = {
  images: {
    disableStaticImages: true
  },
  env: {
    FIREBASE_API_KEY: "AIzaSyBSFJrOKaTr2n9d0Avp3EluZ9wV5IZ2i0s",
    FIREBASE_AUTH_DOMAIN: "Yproject-pot-e8a0a.firebaseapp.com",
    FIREBASE_DATABASE_URL: "Yhttps://project-pot-e8a0a-default-rtdb.europe-west1.firebasedatabase.app/",
    FIREBASE_PROJECT_ID: "Y1:792344260857:web:2c3c066f3f4d9f5d123228"
  },
}

module.exports = nextConfig
