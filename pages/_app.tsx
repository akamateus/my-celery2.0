import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import Layout from "@/components/Layout";
import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";
// import Modal from "@/components/Modal";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Quicksand } from "@next/font/google";

// was montserrat
const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={quicksand.className}>
      <SessionProvider session={pageProps.session}>
        <Toaster />
        <RegisterModal />
        <LoginModal />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </main>
  );
}
