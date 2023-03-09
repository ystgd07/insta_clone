import NextAuth from 'next-auth';
import GoggleProvider from 'next-auth/providers/google';
export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GoggleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        // ...add more providers here
    ],
    pages: {
        sigin: '/auth/signin',
    },
};
export default NextAuth(authOptions);
