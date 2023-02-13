import type {AppProps} from 'next/app';
import { SWRConfig } from 'swr';
import {fetcher} from "../utils/axios";

const MyApp = ({Component, pageProps}: AppProps) => (
    <SWRConfig value={{
      fetcher: fetcher
    }}>
      <Component/>
    </SWRConfig>
);

export default MyApp;
