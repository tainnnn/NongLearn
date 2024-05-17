import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default async function auth(req, res) {
  return NextAuth(req, res, {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
      }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
  });
}

const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}