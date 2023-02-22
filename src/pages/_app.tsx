import type {AppProps} from 'next/app';
import { SWRConfig } from 'swr';
import {fetcher} from "../utils/axios";
import moment from "moment/moment";

const MyApp = ({Component, pageProps}: AppProps) => {
    moment.locale('ru');
    return (
        <SWRConfig value={{
            fetcher: fetcher
        }}>
            <Component/>
        </SWRConfig>
    );
}

export default MyApp;
