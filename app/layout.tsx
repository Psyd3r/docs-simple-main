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
      <svg
        width={200}
        height={100}
        id="Camada_2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1519.41 369.13"
      >
        <defs>
          <style></style>
        </defs>
        <g id="Camada_1-2" data-name="Camada_1">
          <g>
            <path
              fill="#008238"
              d="M320.39,237.43c.43-1.07.94-2.38,1.52-3.94l.21-.53c.55-1.5.97-2.66,1.24-3.47v-.04s0,0,0,0c.54-1.6.97-2.93,1.31-4.02.35-1.14.77-2.56,1.23-4.21,6.27-22.23,6.24-34.49,6.16-55.15v-.28h-.05v-.03c0-.35,0-.7.04-1.05l-.02-6.72c-.02-40.25.04-80.5-.08-120.74l-14.28-.09-12.69-.04c-11.36-.02,5.12.03-14.46.03h-.43c-25.39,0-2.07-.05-14.13-.03l-14.56.03-29.12.12v.04c-.34,0-.65-.01-.96-.04h-7.84s-7.26-.05-7.26-.05c-.33.03-.66.05-1,.05h-.06c-.4,0-.78-.02-1.17-.06-15.37-.11-28.7-.16-41.94,1.68-6.6.91-13.19,2.3-20.03,4.37-6.83,2.08-14.2,4.94-22.4,8.86-2.02.97-4.01,1.96-5.95,2.96-2.19,1.14-3.86,2.03-5.03,2.67-.42.29-.87.55-1.34.78-1.68.96-3.41,1.99-5.18,3.07-1.81,1.11-3.68,2.3-5.58,3.55-1.93,1.28-3.75,2.52-5.45,3.73-1.69,1.21-3.46,2.52-5.31,3.93-1.95,1.5-3.66,2.86-5.11,4.06-1.41,1.17-2.8,2.34-4.16,3.54l-.22.23c-.39.39-.79.73-1.22,1.05-1.19,1.08-2.49,2.29-3.9,3.63-1.5,1.43-2.95,2.87-4.36,4.32-1.21,1.26-2.59,2.73-4.1,4.42-1.28,1.41-2.56,2.91-3.85,4.46-1.36,1.64-2.56,3.14-3.6,4.51-1.34,1.75-2.45,3.28-3.34,4.55l.03.02c-1.06,1.53-2.09,3.07-3.08,4.63-.97,1.53-1.9,3.07-2.78,4.59l-.33.54c-.54.95-1.1,1.99-1.69,3.11-.65,1.25-1.28,2.48-1.86,3.7-.49,1.01-1.06,2.25-1.71,3.72-.56,1.27-1.11,2.57-1.64,3.89l-.23.52c-.37.95-.81,2.08-1.3,3.38-.65,1.76-1.13,3.12-1.45,4.05v.04s0,0,0,0c-.54,1.6-.97,2.93-1.31,4.02-.35,1.14-.77,2.56-1.23,4.22-3.29,11.65-4.89,21.69-5.66,31.55-.8,10.45-.71,20.41-.61,31.67v1.04c.04,3.61.07,7.37.08,11.46l.16,108.25,18.5.1,15.98.04h16.07c19.9-.01,40.02-.11,59.88-.2,2.81-.02,5.63-.05,8.44-.05v-.04.04s5.99-.02,5.99-.02c7.54-.02,14.33-.04,20.98-.3,6.25-.25,12.11-.72,17.88-1.63,5.64-.88,11.4-2.24,17.68-4.27,6.19-2,13.02-4.77,20.89-8.53l.8-.34c1.3-.63,3.01-1.51,5.17-2.63,2.37-1.24,4.32-2.28,5.8-3.12,1.85-1.05,3.77-2.19,5.75-3.4,1.81-1.11,3.67-2.29,5.57-3.55,1.94-1.28,3.76-2.53,5.45-3.73,1.69-1.21,3.47-2.52,5.31-3.94,1.52-1.16,3.2-2.51,5.04-4.03,1.66-1.38,3.31-2.78,4.92-4.21,1.8-1.6,3.36-3.03,4.65-4.26,1.49-1.42,2.94-2.86,4.34-4.3,1.21-1.24,2.58-2.72,4.08-4.39,1.67-1.86,2.96-3.35,3.9-4.47l-.03-.02c1.36-1.64,2.56-3.15,3.61-4.51.99-1.3,2.08-2.82,3.3-4.56l.51-.68c.68-1,1.53-2.31,2.56-3.93.97-1.54,1.9-3.08,2.78-4.61l.34-.55c.54-.95,1.1-1.99,1.68-3.1.81-1.55,1.44-2.78,1.86-3.66l.02-.03h-.02c.48-1.01,1.05-2.25,1.7-3.72.69-1.57,1.25-2.87,1.65-3.87v-.03s0,0,0,0ZM361.62,231.24c-.41,1.46-.91,3.14-1.5,5.06-.6,1.94-1.15,3.63-1.62,5.03-.61,1.79-1.2,3.45-1.76,4.99l-.31.76c-.71,1.91-1.26,3.35-1.62,4.24l-.24.55c-.7,1.73-1.32,3.21-1.87,4.44-.53,1.22-1.16,2.58-1.89,4.11-.21.53-.46,1.05-.74,1.55-.69,1.41-1.39,2.8-2.1,4.16l-.33.58c-.97,1.85-1.72,3.23-2.24,4.13-.99,1.73-2.21,3.74-3.63,5.99-1.48,2.34-2.79,4.33-3.95,5.98-1.23,1.77-2.67,3.72-4.27,5.84-1.59,2.09-3.11,4-4.54,5.73-1.53,1.83-3.13,3.7-4.82,5.57-1.48,1.66-3.21,3.49-5.13,5.47-1.37,1.41-3.16,3.18-5.34,5.27l.02.02c-2.07,1.98-3.93,3.71-5.59,5.18-1.54,1.37-3.53,3.05-5.92,5.03-2.24,1.84-4.29,3.48-6.15,4.91-1.99,1.53-4.11,3.09-6.35,4.68-2.26,1.61-4.43,3.1-6.51,4.48-2.15,1.42-4.4,2.85-6.72,4.28-2.19,1.34-4.47,2.69-6.84,4.03-2.11,1.2-4.46,2.47-7.04,3.81-2.99,1.56-5.33,2.75-6.99,3.54-9.28,4.42-17.65,7.8-25.57,10.36-7.92,2.57-15.35,4.31-22.77,5.48-7.27,1.16-14.37,1.75-21.85,2.05-7.02.28-14.69.31-23.23.33l-10.51.05c-21.06.1-42.45.21-63.8.23h-15.66l-15.58-.04-14.56-.08-12.56-.09c-.57.09-1.16.13-1.75.13-.43,0-.84-.02-1.25-.07l-6.25-.16v.04h-.01c-.41,0-.81-.02-1.21-.06l-1.69-.03c-.65-.01-1.29-.08-1.91-.2l-4.05-.36c-5.55-.48-9.81-4.92-10.25-10.29-.26-2.16-.55-4.33-.77-6.5l-.05-1.77h-.03v-.68s-.02,0-.02,0l.03-.83h-.04s.04-.01.04-.01l-.18-124.43c0-3.34-.03-6.7-.07-9.95l-.02-2.36H.02v-.02c0-.33.02-.67.05-.99-.11-12.32-.18-23.3.67-34.24.92-11.81,2.89-23.94,6.91-38.18.41-1.45.9-3.13,1.49-5.05.6-1.94,1.15-3.64,1.63-5.04.61-1.79,1.2-3.46,1.76-5l.31-.75,1.35-3.56c.17-.51.37-1,.61-1.47.65-1.61,1.24-3,1.76-4.17.39-.9,1.01-2.21,1.83-3.93.22-.62.51-1.21.83-1.78.56-1.15,1.26-2.51,2.09-4.09,1.14-2.18,2-3.77,2.56-4.75l.37-.61c1.05-1.81,2.13-3.61,3.25-5.37,1.48-2.34,2.8-4.33,3.95-5.98,1.23-1.77,2.66-3.72,4.26-5.82,1.6-2.1,3.12-4.02,4.56-5.75,1.53-1.84,3.14-3.7,4.83-5.59,1.48-1.65,3.2-3.47,5.11-5.46,1.37-1.42,3.17-3.19,5.36-5.28,2.47-2.36,4.32-4.08,5.56-5.2,1.54-1.37,3.53-3.05,5.93-5.03,2.25-1.85,4.3-3.49,6.15-4.91,1.99-1.53,4.11-3.1,6.35-4.69,2.26-1.6,4.43-3.11,6.51-4.48,2.16-1.42,4.41-2.86,6.74-4.29,2.18-1.34,4.47-2.68,6.83-4.02,2.11-1.19,4.45-2.46,7.02-3.8,2.99-1.56,5.33-2.74,7-3.54,9.66-4.61,18.75-8.12,27.57-10.81,8.79-2.68,17.06-4.44,25.18-5.59,7.95-1.11,15.87-1.65,24.1-1.89,7.83-.23,15.99-.17,24.75-.1h1.36c4.97.04,10.16.08,15.56.05l29.2-.12,14.58-.03c21.69-.03-1.43-.06,14.19-.06h.39c7.33,0-4.06,0,12.55.05l13.91.05,12.27.08,11.18.09c.34-.03.69-.05,1.04-.05.38,0,.77.02,1.13.06l6.28.08v-.05h.98c.35,0,.7.03,1.04.06.47,0,.92.03,1.37.09l5.48.43c5.5.43,9.76,4.76,10.31,10.06.27,2.26.57,4.53.78,6.81l.06,1.76h.03v.67s.02,0,.02,0l-.03.83h.03c0,.33-.01.65-.04.96l.03,7.99h.04-.04c.11,42.67.07,85.34.09,128.01l.02,6.59c.04.38.06.76.06,1.14,0,.35-.02.71-.05,1.05.05,11.4.05,20.6-.84,30.3-.95,10.26-2.84,20.72-6.63,34.17"
            />
            <path
              fill="#008238"
              d="M248.95,223.5c7.02-12.29,8.66-21.99,10.33-35.65.4-4.56.65-6.18-.95-10.29-.79-2.02-3.99-3.66-4.93-3.84-1.56-.31-25.04-.18-34.76-.16h-2.98c-7.92,0-11.26,1.14-11.89,9.41-.67,8.79-2.61,14.85-8.72,21.36-9.62,10.23-21.51,12.8-35.32,12.97-7.54.1-16.14-.09-18.41-.09-15.3,0-32.08-.21-47.64-.07-2.23.02-4.43.05-6.59.08-5.78.09-8.27,3.97-8.29,9.61-.05,11.9-.06,23.84,0,35.74.01,3,.48,4.8,2.35,6.9,1.75,1.96,4.02,2.35,6.58,2.38,26.16.31,54.35.08,80.74-.04,12.12.05,24.66-3.45,36.16-8.93,17.59-8.4,34.5-22.22,44.32-39.38"
            />
            <path
              fill="#008238"
              d="M120.23,145.69c-7.02,12.28-8.65,21.99-10.34,35.65-.4,4.56-.64,6.19.95,10.29.79,2.03,3.99,3.66,4.93,3.84,1.56.31,25.03.18,34.76.16,1.24,0,2.26,0,2.98,0,7.92,0,11.26-1.14,11.89-9.41.67-8.78,2.6-14.84,8.72-21.35,9.61-10.23,21.51-12.8,35.31-12.97,7.54-.1,16.15.09,18.41.09,15.3,0,32.08.21,47.64.07,2.23-.02,4.43-.05,6.6-.09,5.78-.09,8.27-3.97,8.29-9.61.04-11.9.06-23.84,0-35.74-.01-3.01-.48-4.8-2.35-6.9-1.74-1.96-4.02-2.35-6.58-2.38-26.15-.3-54.34-.08-80.73.04-12.12-.06-24.66,3.45-36.17,8.94-17.59,8.39-34.5,22.22-44.32,39.38"
            />
            <path
              fill="currentColor"
              d="M475.94,118.73c2.51-12.14,29.03-6.96,38.5,2.08l10.06-22.22c-2.21-1.77-12.14-8.88-32.28-10.07-31.7-1.77-42.95,12.89-44.88,28.29-5.03,41.32,53.91,31.4,49.92,50.06-2.37,11.41-32.88,6.81-44.58-6.52l-13.03,21.48c8.59,6.36,23.7,13.32,39.53,14.96,17.04,1.77,46.51-.9,48.73-30.22,2.68-37.32-55.39-31.84-51.98-47.84"
            />
            <rect
              fill="currentColor"
              x="548.94"
              y="90.89"
              width="28.28"
              height="103.68"
            />
            <polygon
              fill="currentColor"
              points="662.09 136.65 627.58 90.89 602.4 90.89 602.4 194.56 630.69 194.56 630.69 138.44 655.86 169.97 668.3 169.97 693.49 138.44 693.49 194.56 721.78 194.56 721.78 90.89 696.59 90.89 662.09 136.65"
            />
            <polygon
              fill="currentColor"
              points="877.7 90.89 849.26 90.89 849.26 194.56 921.39 194.56 921.39 170.56 877.7 170.56 877.7 90.89"
            />
            <polygon
              fill="currentColor"
              points="970.41 170.57 970.41 154.72 1012.46 154.72 1012.46 130.72 970.41 130.72 970.41 114.89 1017.06 114.89 1017.06 90.89 942.12 90.89 942.12 194.56 1019.58 194.56 1019.58 170.57 970.41 170.57"
            />
            <path
              fill="currentColor"
              d="M789.58,90.89h-42.65v24.02l41.61-.03c12.15,0,15.85,6.22,15.85,12.74s-3.7,12.89-15.85,12.89l-41.61.04v54.01h28.43v-30.07h14.22c25.04,0,40.44-17.03,40.44-36.88s-15.4-36.73-40.44-36.73"
            />
            <path
              fill="#008238"
              d="M1233.59,154.58h23.25v14.95c-5.33,1.33-9.93,2.08-14.96,2.08-17.77,0-31.24-13.03-31.24-29.03s15.11-29.03,32.88-29.03c7.7,0,14.96,3.12,21.18,7.56l13.92-19.7c-10.36-8.15-21.77-13.03-35.1-13.03-33.62,0-60.43,22.8-60.43,54.2s25.19,54.06,58.8,54.06c13.47,0,31.11-4.89,41.47-12.88v-53.17h-49.76v24Z"
            />
            <path
              fill="#008238"
              d="M1463.73,88.37c-29.92,0-55.84,24.28-55.84,54.21s25.92,54.06,55.84,54.06,55.69-24.14,55.69-54.06-25.77-54.21-55.69-54.21M1463.73,170.87c-15.7,0-28.44-12.59-28.44-28.28s12.74-28.44,28.44-28.44,28.43,12.73,28.43,28.44-12.74,28.28-28.43,28.28"
            />
            <path
              fill="#008238"
              d="M1102.82,90.74l-39.09,103.68h31.54l6.37-18.37h17.21c2.51.15,8.14,0,13.39,4.59,6.08,5.3,8.65,13.78,8.65,13.78h31.54l-39.25-103.68h-30.36ZM1110.09,152.06l7.99-22.8,8.01,22.8h-16Z"
            />
            <path
              fill="#008238"
              d="M1391.61,125.84c0-19.69-15.55-35.1-40.59-35.1h-42.5v23.98h28.74s12.74.01,12.74.01c12.14,0,15.99,4.59,15.99,11.1s-3.85,11.27-15.99,11.27h-12.74s-28.74,0-28.74,0v57.3h28.29v-33.32h10.37l19.25,33.32h31.11l-22.67-39.25c10.67-6.23,16.74-16.89,16.74-29.33"
            />
            <path
              fill="currentColor"
              d="M1265.58,262.95c0-.29.09-.54.26-.76.19-.21.46-.32.82-.32h8.06c.23,0,.47.06.71.17.25.11.46.31.63.59,2.08,3.36,4.14,6.68,6.17,9.94,2.04,3.26,4.1,6.57,6.2,9.94v-19.7c.06-.3.2-.53.4-.69.19-.17.43-.25.69-.25h7.01c.35,0,.62.1.86.29.23.19.35.45.35.79v34.49c0,.33-.1.57-.3.72-.2.15-.47.24-.81.24h-7.84c-.21,0-.4-.08-.57-.22-.16-.15-.34-.34-.52-.59-2.17-3.61-4.33-7.18-6.45-10.71-2.13-3.52-4.28-7.09-6.48-10.7v21.13c0,.36-.08.63-.25.81-.16.18-.45.27-.88.27h-6.98c-.37,0-.64-.1-.82-.31-.17-.21-.26-.45-.26-.75v-34.39ZM1195.91,280.17c0-1.74.22-3.4.67-5,.44-1.61,1.07-3.11,1.9-4.51.82-1.4,1.8-2.68,2.95-3.83,1.14-1.15,2.41-2.12,3.8-2.94,1.4-.81,2.89-1.44,4.5-1.89,1.6-.45,3.27-.68,5.02-.68s3.38.23,5,.68c1.61.45,3.11,1.08,4.51,1.89,1.39.81,2.66,1.79,3.81,2.94,1.14,1.15,2.12,2.43,2.94,3.83.81,1.4,1.45,2.9,1.9,4.51.44,1.6.68,3.26.68,5s-.23,3.4-.68,5c-.45,1.6-1.08,3.1-1.9,4.48-.82,1.39-1.8,2.65-2.94,3.79-1.16,1.14-2.42,2.12-3.81,2.94-1.4.82-2.9,1.46-4.51,1.9-1.61.44-3.28.66-5,.66s-3.42-.22-5.02-.66c-1.6-.44-3.1-1.07-4.5-1.9-1.39-.82-2.66-1.8-3.8-2.94-1.14-1.14-2.12-2.4-2.95-3.79-.82-1.39-1.46-2.88-1.9-4.48-.45-1.6-.67-3.26-.67-5M1205.46,280.14c0,1.36.23,2.62.69,3.81.45,1.18,1.09,2.2,1.92,3.08.83.87,1.8,1.56,2.93,2.06,1.13.51,2.38.76,3.74.76s2.6-.25,3.73-.76c1.14-.5,2.12-1.19,2.95-2.06.83-.88,1.47-1.9,1.92-3.08.46-1.18.69-2.45.69-3.81s-.23-2.62-.69-3.81c-.46-1.19-1.09-2.22-1.92-3.11-.83-.89-1.81-1.58-2.95-2.09-1.13-.51-2.38-.76-3.73-.76s-2.61.26-3.74.76c-1.13.52-2.1,1.21-2.93,2.09-.83.88-1.47,1.91-1.92,3.11-.46,1.19-.69,2.46-.69,3.81M1154.24,262.95c0-.29.09-.54.27-.76.18-.21.44-.32.81-.32h7.25c.25,0,.51.1.78.3.27.2.42.46.42.78v34.37c0,.72-.4,1.08-1.21,1.08h-7.25c-.72,0-1.08-.36-1.08-1.08v-34.37ZM1093.53,262.95c0-.33.12-.59.34-.78.21-.2.49-.3.82-.3h26.48c.29,0,.56.09.78.27.23.18.36.45.39.81v6.12c0,.29-.09.58-.3.85-.2.27-.5.41-.88.41h-8.49v26.92c0,.29-.1.56-.32.79-.21.24-.49.36-.84.36h-7.22c-.28,0-.54-.11-.78-.34-.25-.22-.38-.49-.38-.82v-26.92h-8.45c-.33,0-.61-.11-.82-.32-.22-.21-.34-.52-.34-.94v-6.12ZM1051.67,273.35c-.31.84-.62,1.73-.94,2.7-.32.97-.64,1.94-.96,2.93-.3.98-.61,1.95-.94,2.91-.32.96-.64,1.86-.95,2.69h7.55l-3.76-11.23ZM1047.2,262.83c.02-.1.08-.21.17-.32.08-.11.19-.22.33-.32.13-.1.27-.18.42-.24.15-.06.28-.09.42-.09h6.29c.27,0,.52.09.71.26.2.17.35.33.45.46l.61,1.4,12.9,33.31c.13.33.11.59-.07.8-.18.2-.5.31-.94.31h-7.06c-.37,0-.66-.08-.86-.21-.21-.14-.37-.37-.49-.69-.33-.84-.65-1.67-.96-2.5-.31-.83-.62-1.65-.94-2.49h-13.05c-.31.84-.62,1.66-.94,2.49-.32.83-.64,1.66-.95,2.5-.21.61-.63.91-1.26.91h-7.25c-.31,0-.56-.09-.77-.25-.21-.17-.25-.41-.12-.74l13.35-34.59ZM995.54,273.94c0-.49-.09-.98-.27-1.47-.18-.5-.44-.95-.75-1.35-.33-.41-.72-.76-1.18-1.03-.45-.28-.96-.46-1.52-.54-.45-.04-.88-.07-1.28-.09-.4-.02-.84-.03-1.31-.03h-3.38v9.02h4.5c.3,0,.56,0,.79-.02s.48-.04.75-.07c.57-.07,1.09-.24,1.54-.51.46-.27.85-.61,1.16-1,.3-.4.54-.86.7-1.36.16-.5.25-1,.25-1.53M976.32,263c0-.35.09-.61.27-.82.18-.21.45-.32.81-.32h15.88c1.69,0,3.27.32,4.75.95,1.47.63,2.76,1.48,3.86,2.57,1.09,1.08,1.97,2.35,2.6,3.8.63,1.45.95,3,.95,4.64,0,1.11-.15,2.18-.45,3.19-.31,1-.73,1.95-1.27,2.83-.54.88-1.18,1.67-1.92,2.38-.74.72-1.56,1.33-2.45,1.84l6.34,11.9c.12.23.26.5.44.81.18.31.27.58.27.81,0,.26-.09.46-.26.6-.17.14-.41.21-.7.21h-8.46c-.28,0-.53-.09-.75-.25-.23-.17-.37-.38-.43-.66l-5.96-11.24h-3.98v11.09c0,.71-.38,1.06-1.13,1.06h-7.33c-.33,0-.59-.09-.78-.26-.2-.17-.3-.43-.3-.79v-34.34ZM906.71,280.17c0-1.74.22-3.4.66-5,.44-1.61,1.07-3.11,1.91-4.51.82-1.4,1.8-2.68,2.94-3.83,1.14-1.15,2.41-2.12,3.8-2.94,1.4-.81,2.9-1.44,4.51-1.89,1.6-.45,3.27-.68,5.01-.68s3.38.23,5,.68c1.61.45,3.11,1.08,4.51,1.89,1.39.81,2.66,1.79,3.82,2.94,1.15,1.15,2.13,2.43,2.95,3.83.8,1.4,1.44,2.9,1.89,4.51.46,1.6.69,3.26.69,5s-.23,3.4-.69,5c-.45,1.6-1.08,3.1-1.89,4.48-.81,1.39-1.8,2.65-2.95,3.79-1.16,1.14-2.43,2.12-3.82,2.94-1.4.82-2.9,1.46-4.51,1.9-1.62.44-3.29.66-5,.66s-3.41-.22-5.01-.66c-1.61-.44-3.1-1.07-4.51-1.9-1.39-.82-2.66-1.8-3.8-2.94-1.14-1.14-2.12-2.4-2.94-3.79-.83-1.39-1.46-2.88-1.91-4.48-.44-1.6-.66-3.26-.66-5M916.25,280.14c0,1.36.23,2.62.69,3.81.45,1.18,1.09,2.2,1.92,3.08.83.87,1.81,1.56,2.94,2.06,1.13.51,2.38.76,3.73.76s2.61-.25,3.74-.76c1.14-.5,2.12-1.19,2.95-2.06.83-.88,1.47-1.9,1.92-3.08.46-1.18.69-2.45.69-3.81s-.23-2.62-.69-3.81c-.45-1.19-1.09-2.22-1.92-3.11-.83-.89-1.81-1.58-2.95-2.09-1.13-.51-2.39-.76-3.74-.76s-2.61.26-3.73.76c-1.13.52-2.1,1.21-2.94,2.09-.83.88-1.47,1.91-1.92,3.11-.46,1.19-.69,2.46-.69,3.81M867.54,273.8c0-.5-.09-.98-.26-1.48-.17-.49-.43-.93-.76-1.32-.34-.38-.72-.69-1.19-.94-.47-.25-1-.37-1.59-.37h-5.21v8.21h5.21c.59,0,1.12-.12,1.6-.36.47-.24.87-.54,1.2-.92.32-.38.57-.81.74-1.3.17-.49.26-1,.26-1.52M849,263c0-.35.08-.61.26-.82.17-.21.45-.32.81-.32h15.72c1.13,0,2.2.16,3.2.47,1,.32,1.92.75,2.76,1.3.84.54,1.6,1.2,2.27,1.97.67.77,1.24,1.58,1.71,2.48.47.88.83,1.81,1.07,2.79.24.97.37,1.97.37,2.96,0,1.47-.26,2.93-.79,4.33-.54,1.41-1.3,2.67-2.28,3.77-.99,1.1-2.17,1.99-3.54,2.67-1.38.69-2.9,1.04-4.58,1.05h-7.44v11.67c0,.71-.38,1.06-1.13,1.06h-7.33c-.33,0-.59-.09-.78-.26-.2-.17-.29-.43-.29-.79v-34.34ZM808.26,273.94c0-.49-.09-.98-.27-1.47-.18-.5-.44-.95-.75-1.35-.34-.41-.73-.76-1.18-1.03-.45-.28-.95-.46-1.52-.54-.44-.04-.88-.07-1.27-.09-.4-.02-.84-.03-1.31-.03h-3.38v9.02h4.5c.29,0,.56,0,.78-.02.23-.01.47-.04.76-.07.57-.07,1.09-.24,1.54-.51.46-.27.85-.61,1.16-1,.3-.4.54-.86.71-1.36.16-.5.25-1,.25-1.53M789.03,263c0-.35.09-.61.27-.82.18-.21.45-.32.81-.32h15.88c1.68,0,3.26.32,4.74.95,1.47.63,2.77,1.48,3.86,2.57,1.1,1.08,1.96,2.35,2.6,3.8.63,1.45.94,3,.94,4.64,0,1.11-.15,2.18-.44,3.19-.31,1-.74,1.95-1.28,2.83-.54.88-1.18,1.67-1.92,2.38-.74.72-1.56,1.33-2.45,1.84l6.34,11.9c.12.23.26.5.44.81.18.31.27.58.27.81,0,.26-.09.46-.26.6-.17.14-.41.21-.71.21h-8.46c-.27,0-.52-.09-.74-.25-.22-.17-.37-.38-.44-.66l-5.96-11.24h-3.97v11.09c0,.71-.38,1.06-1.14,1.06h-7.32c-.33,0-.59-.09-.78-.26-.2-.17-.3-.43-.3-.79v-34.34ZM719.43,280.17c0-1.74.22-3.4.66-5,.44-1.61,1.07-3.11,1.9-4.51.82-1.4,1.8-2.68,2.95-3.83,1.13-1.15,2.41-2.12,3.8-2.94,1.4-.81,2.9-1.44,4.5-1.89,1.6-.45,3.28-.68,5.02-.68s3.38.23,5,.68c1.6.45,3.1,1.08,4.51,1.89,1.39.81,2.66,1.79,3.81,2.94,1.15,1.15,2.14,2.43,2.94,3.83.81,1.4,1.45,2.9,1.9,4.51.45,1.6.68,3.26.68,5s-.23,3.4-.68,5c-.45,1.6-1.08,3.1-1.9,4.48-.8,1.39-1.79,2.65-2.94,3.79s-2.42,2.12-3.81,2.94c-1.4.82-2.91,1.46-4.51,1.9-1.62.44-3.28.66-5,.66s-3.42-.22-5.02-.66c-1.6-.44-3.09-1.07-4.5-1.9-1.39-.82-2.66-1.8-3.8-2.94-1.14-1.14-2.13-2.4-2.95-3.79-.83-1.39-1.46-2.88-1.9-4.48-.44-1.6-.66-3.26-.66-5M728.96,280.14c0,1.36.23,2.62.69,3.81.45,1.18,1.1,2.2,1.92,3.08.83.87,1.81,1.56,2.94,2.06,1.13.51,2.38.76,3.73.76s2.6-.25,3.73-.76c1.14-.5,2.12-1.19,2.95-2.06.83-.88,1.47-1.9,1.92-3.08.46-1.18.69-2.45.69-3.81s-.23-2.62-.69-3.81c-.45-1.19-1.09-2.22-1.92-3.11-.83-.89-1.82-1.58-2.95-2.09-1.13-.51-2.38-.76-3.73-.76s-2.61.26-3.73.76c-1.13.52-2.11,1.21-2.94,2.09-.83.88-1.47,1.91-1.92,3.11-.46,1.19-.69,2.46-.69,3.81M690.58,264.53c.28.17.49.38.61.64.13.26.1.57-.08.93l-4.16,5.9c-.18.28-.37.43-.57.48-.21.04-.46-.02-.75-.2-.8-.61-1.69-1.08-2.66-1.4-.97-.33-1.99-.5-3.07-.5-1.34,0-2.58.26-3.71.76-1.13.52-2.1,1.21-2.93,2.09-.82.88-1.46,1.91-1.91,3.1-.46,1.18-.69,2.44-.69,3.79s.23,2.6.69,3.77c.45,1.17,1.1,2.19,1.91,3.07.82.87,1.8,1.57,2.93,2.08,1.13.51,2.37.76,3.71.76,1.08,0,2.11-.17,3.09-.51.98-.34,1.88-.8,2.69-1.41.29-.18.54-.25.74-.22.19.03.39.18.59.44l4.2,6.06c.18.37.21.67.07.91-.12.25-.33.45-.61.61-1.54,1.04-3.2,1.83-4.97,2.41-1.78.56-3.66.85-5.63.85-1.73,0-3.39-.22-5-.66-1.59-.44-3.11-1.07-4.5-1.9-1.39-.82-2.66-1.8-3.8-2.94s-2.12-2.4-2.95-3.79c-.82-1.39-1.46-2.88-1.91-4.48-.43-1.6-.66-3.26-.66-5s.22-3.4.66-5c.45-1.61,1.09-3.11,1.91-4.51.82-1.4,1.8-2.68,2.95-3.83,1.14-1.15,2.41-2.12,3.8-2.94,1.39-.81,2.9-1.44,4.5-1.89,1.6-.45,3.26-.68,5-.68,1.97,0,3.83.27,5.57.82,1.74.54,3.38,1.34,4.93,2.37"
            />
          </g>
        </g>
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
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
        color={{
          hue:141,
          saturation: 100,
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
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          footer={footer}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
