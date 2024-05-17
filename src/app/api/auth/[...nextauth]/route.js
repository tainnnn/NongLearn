import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default (req, res) => NextAuth(req, res, {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
});
