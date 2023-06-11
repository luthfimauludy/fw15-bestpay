const cookieConfig = {
  cookieName: "bestpay",
  password: "GD9IL31-j6bhe.2U9>,M@!#<N'%z7`ee",
  // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};

export default cookieConfig;
