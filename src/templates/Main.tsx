import Link from 'next/link';
import type { ReactNode } from 'react';

import { AppConfig } from '../utils/AppConfig';
import Head from "next/head";
import Script from 'next/script';
type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div >
    {props.meta}
      <Head>
          <link rel="shortcut icon" href="/assets/img/favicon.png" type="image/x-icon" />

          <link rel="stylesheet" href="/assets/css/font-icons.css"/>

          <link rel="stylesheet" href="/assets/css/plugins.css"/>

          <link rel="stylesheet" href="/assets/css/style.css"/>

          <link rel="stylesheet" href="/assets/css/responsive.css"/>

      </Head>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js" strategy="beforeInteractive"></Script>
      <Script src="/assets/js/plugins.js" strategy="beforeInteractive"></Script>
      <Script src="/assets/js/main.js"></Script>
      <div >{props.children}</div>



  </div>
);

export { Main };
