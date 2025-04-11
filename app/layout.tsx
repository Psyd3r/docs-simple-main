import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "./globals.css";
import logotest from "../../../image/lg-digital.png"
import Image from 'next/image'
import {useTheme} from "next-themes";



export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
};

const banner = <Banner storageKey="some-key">Docs 1.0 is released 🎉</Banner>;
const navbar = (
  <Navbar
    logo={
      <>
      <Image src="/lg-digital-light.png" alt="Logo" width={195} height={100} />
      </>
    }
    projectLink="https://gitlab.com/users/sign_in"
    projectIcon={
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
      <path d="m231.9 169.8l-94.8 65.6a15.7 15.7 0 0 1-18.2 0l-94.8-65.6a16.1 16.1 0 0 1-6.4-17.3L45 50a12 12 0 0 1 22.9-1.1L88.5 104h79l20.6-55.1A12 12 0 0 1 211 50l27.3 102.5a16.1 16.1 0 0 1-6.4 17.3Z" />
    </svg>
    }

    // ... Your additional navbar options
  />
);
const footer = <Footer>MIT {new Date().getFullYear()} © Simple Agro.</Footer>;

export default async function RootLayout({ children }: any) {
  console.log(children);
  return (
    <html
      // Not required, but good for SEO
      lang="pt-br"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
        color={{
          hue:145,
          saturation: 70,
          lightness: {
            light: 50,
            dark: 100
          }
        }}
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
        // i18n={[{name: 'pt-BR', locale: 'pt-BR' }]}
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          footer={footer}
          feedback={{ content: <></> }}
          editLink={<></>}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
