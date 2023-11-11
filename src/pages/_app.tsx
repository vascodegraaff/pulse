import React from "react";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import { api } from "~/utils/api";
import { Red_Hat_Display } from "next/font/google"

import "~/styles/globals.css";
import { ThemeProvider } from "next-themes";

const redHatDisplay = Red_Hat_Display({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

export const NavigationContext = React.createContext({
  isOpen: false,
  currentRoute: "",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setIsOpen: (_: boolean) => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setCurrentRoute: (_: string) => {},
});

type ComponentType = {
  getLayout?: (page: React.ReactNode) => React.ReactNode;
} & React.ComponentType;

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [currentRoute, setCurrentRoute] = React.useState("");
  const getLayout = (Component as ComponentType).getLayout ?? ((page) => page);

  return (
    // <SessionProvider session={session}>
      <NavigationContext.Provider value={{ isOpen, setIsOpen, currentRoute, setCurrentRoute }}>
        <ThemeProvider attribute="class" defaultTheme="system">
          {getLayout(
            <main className={redHatDisplay.className} >
              <Component {...pageProps} />
            </main>
          )}
        </ThemeProvider>
      </NavigationContext.Provider>
    // </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
