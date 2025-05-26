import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "./globals.css";
import logotest from "../../../image/lg-digital.png"
import Image from 'next/image'
import {useTheme} from "next-themes";
import { LuTicketPlus } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";






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
    projectLink="https://jira.simpleagro.com.br/servicedesk/customer/portal/1"
    projectIcon={
      <div style={{
        display: 'inline-block',
        fontSize: '23px',
        lineHeight: '1',
        marginTop: '5px',
      }}>
        <LuTicketPlus />
      </div>
    }
    chatLink="https://wa.me/556496460698"
    chatIcon={
        <div style={{
        display: 'inline-block',
        fontSize: '23px',
        lineHeight: '1',
        marginTop: '5px',
      }}>
      <FaWhatsapp />
      </div>
    }


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
