import Head from 'next/head';
import HuntingDay from '../components/hunting-day/HuntingDay';

const SITE_URL = 'https://rosybill-outfitters.com';

export default function Home() {
  return (
    <>
      <Head>
        <title>Rosybill Outfitters - A Day of Wingshooting in Argentina</title>
        <meta
          name="description"
          content="Follow one full day of duck and dove hunting at Rosybill Outfitters, Argentina's family-run wingshooting lodge on the wetlands of Buenos Aires since 1993."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`${SITE_URL}/`} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:title" content="Rosybill Outfitters - A Day of Wingshooting in Argentina" />
        <meta
          property="og:description"
          content="Follow one full day of duck and dove hunting at Rosybill Outfitters, Argentina's family-run wingshooting lodge since 1993."
        />
        <meta property="og:image" content={`${SITE_URL}/og-image.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Rosybill Outfitters" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`${SITE_URL}/`} />
        <meta name="twitter:title" content="Rosybill Outfitters - A Day of Wingshooting in Argentina" />
        <meta
          name="twitter:description"
          content="Follow one full day of duck and dove hunting at Rosybill Outfitters, Argentina's family-run wingshooting lodge since 1993."
        />
        <meta name="twitter:image" content={`${SITE_URL}/og-image.jpg`} />

        {/* Additional Meta */}
        <meta name="theme-color" content="#0E1524" />
        <meta name="author" content="Rosybill Outfitters" />
        <meta name="keywords" content="hunting, argentina, wingshooting, waterfowl, duck hunting, dove hunting, outfitters, guides, estancia, buenos aires, entre rios, cordoba" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LodgingBusiness',
              name: 'Rosybill Outfitters',
              description: "Argentina's premier wingshooting lodge, family-run since 1993.",
              image: `${SITE_URL}/images/hunting-day/hd/rosybill-logo.png`,
              telephone: '+54 9 11 6927 4103',
              email: 'Máxidominguez_20@hotmail.com',
              address: { '@type': 'PostalAddress', addressLocality: 'Buenos Aires', addressCountry: 'AR' },
              areaServed: ['Buenos Aires Province', 'Córdoba Province', 'Entre Ríos Province'],
              url: `${SITE_URL}/`,
            }),
          }}
        />
      </Head>
      <HuntingDay />
    </>
  );
}
