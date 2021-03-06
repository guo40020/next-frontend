import { getWakaTimeSummary } from "api/wakatime";
import Head from "next/head";
import type { GetStaticProps, NextPage } from "next";
import Header from "../components/header";
import classNames from "../styles/Home.module.scss";
import { IWakatimeSummary } from "models/wakatime/summary";
import { useEffect } from "react";
import Script from "next/script";
import Summary from "components/summary";
// import { Octokit } from "octokit";

export const getStaticProps: GetStaticProps = async () => {
  const wakatimeSummary = await getWakaTimeSummary();
  return {
    props: { wakatimeSummary },
    revalidate: 100,
  };
};

interface IHomepageProps {
  wakatimeSummary: IWakatimeSummary;
}

const Home: NextPage<IHomepageProps> = ({ wakatimeSummary }) => {
  useEffect(() => {}, []);
  return (
    <div>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-1FT0N56JB1"
      />
      <Script id="googleAnalytics">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-1FT0N56JB1');`}
      </Script>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"
        />
      </Head>
      <div className={classNames.root}>
        <Header />
        <Summary wakatimeSummary={wakatimeSummary} />
      </div>
    </div>
  );
};

export default Home;
