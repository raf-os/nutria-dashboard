import dbConnect from "@/lib/db";
import User from "@/models/User";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                await dbConnect();
                const user = await User.findOne({
                    email: credentials?.email,
                }).select("+password");

                if (!user) throw new Error("Incorrect email.");

                const passwordMatch = await bcrypt.compare(
                    credentials!.password,
                    user.password,
                );

                if (!passwordMatch) throw new Error("Password is incorrect.");
                
                return user;
            }
        }),
    ],
});