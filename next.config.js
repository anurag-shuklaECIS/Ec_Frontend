module.exports = {
  compress: true,
  reactStrictMode: true,
  images: {
    domains: ["techmergers.in"],
  },


  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [`@svgr/webpack`],
    });

    return config;
  },
    
  target: 'serverless',
};







