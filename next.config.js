/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: isProd ? "export" : undefined,
  trailingSlash: isProd,
  redirects: !isProd
    ? async () => [
        {
          source: "/:path+/",
          destination: "/:path*",
          permanent: false,
        },
      ]
    : undefined,
};

export default nextConfig;
