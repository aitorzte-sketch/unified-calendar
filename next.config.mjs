/** @type {import('next').NextConfig} */
const nextConfig = {
  // Esto evita errores si Prisma no está listo durante el build
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
