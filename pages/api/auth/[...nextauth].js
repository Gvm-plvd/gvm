import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                const user = await prisma.user.findUnique({
                    where: { email: credentials.email },
                });

                if (user && (await bcrypt.compare(credentials.password, user.password))) {
                    return { id: user.id, email: user.email, name: user.name }; // Return user object
                } else {
                    throw new Error('Invalid credentials');
                }
            }
        })
    ],
    pages: {
        signIn: '/portal', // Redirect to portal page for sign in
    },
    session: {
        strategy: 'jwt', // Use JWT for session management
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id; // Add user ID to the token
            }
            return token;
        },
        async session({ session, token }) {
            session.user.id = token.id; // Add user ID to session
            return session;
        }
    },
    secret: process.env.NEXTAUTH_SECRET, // Ensure you have this in your .env file
});