'use client'
import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { Session } from "next-auth";

interface SessionProviderProps {
  children: ReactNode;
  session: Session | null | undefined;
}

const Provider: React.FC<SessionProviderProps> = ({ children, session }) => {
  return (
    <NextAuthSessionProvider session={session}>
      {children}
    </NextAuthSessionProvider>
  );
};

export default Provider;
