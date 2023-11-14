import Footer from "@components/Footer/Footer";
import Navbar from "@components/Navbar/Navbar";
import ReduxProvider from "@redux/ReduxProvider";
import "@styles/globals.css";

export const metadata = {
  title: "Next Todo",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Navbar />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
