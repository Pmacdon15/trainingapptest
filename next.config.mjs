/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'http', // Make sure to use https instead of http
          hostname: 'images.squarespace-cdn.com',
          port:'',
          pathname: '/content/v1/5a37f1ac7131a5daca31ef98/**', // Add a wildcard pattern
        },
      ],
    },
  };
  
  export default nextConfig;
