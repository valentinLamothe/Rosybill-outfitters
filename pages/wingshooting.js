import Head from 'next/head';
import Header from '../components/wingshooting/Header';
import FieldReel from '../components/wingshooting/FieldReel';
import Gallery from '../components/wingshooting/Gallery';
import WhatToExpect from '../components/wingshooting/WhatToExpect';
import Footer from '../components/hunting-day/Footer';

import outside1 from '../public/images/aires_house_outside_1.jpg';
import outside2 from '../public/images/aires_house_outside_2.jpg';
import outside3 from '../public/images/aires_house_outside_3.jpg';
import outside4 from '../public/images/aires_house_outside_4.jpg';
import outside5 from '../public/images/aires_house_outside_5.jpg';
import inside1 from '../public/images/aires_house_inside_1.jpg';
import inside2 from '../public/images/aires_house_inside_2.jpg';
import inside3 from '../public/images/aires_house_inside_3.jpg';
import entreRiosImg from '../public/images/accomodation2.webp';
import cordobaImg from '../public/images/accomodation3.webp';

const SITE_URL = 'https://rosybill-outfitters.com';

// One shared strip for all three territories — extend Buenos Aires' run
// as Maxi sends more; the tag is what tells them apart, not a section break.
const TERRITORY_PHOTOS = [
  { src: outside1, label: 'PLATE 01', tag: 'BUENOS AIRES', caption: 'The lodge from the drive in.', alt: 'The Rosybill lodge building seen from the entrance driveway' },
  { src: outside2, label: 'PLATE 02', tag: 'BUENOS AIRES', caption: 'The grounds, morning light.', alt: 'The lodge grounds lit by early morning sun' },
  { src: outside3, label: 'PLATE 03', tag: 'BUENOS AIRES', caption: 'Looking out toward the water.', alt: 'View from the property looking out toward the marsh water' },
  { src: outside4, label: 'PLATE 04', tag: 'BUENOS AIRES', caption: 'The main building, from the side.', alt: 'Side elevation of the main lodge building' },
  { src: outside5, label: 'PLATE 05', tag: 'BUENOS AIRES', caption: 'The property at dusk.', alt: 'The lodge property at dusk with the sky turning orange' },
  { src: inside1, label: 'PLATE 06', tag: 'BUENOS AIRES', caption: 'The main room, before breakfast.', alt: "The lodge's main dining room set before breakfast" },
  { src: inside2, label: 'PLATE 07', tag: 'BUENOS AIRES', caption: 'Where the group gathers at night.', alt: 'A lounge area where guests gather in the evening' },
  { src: inside3, label: 'PLATE 08', tag: 'BUENOS AIRES', caption: 'A quiet corner of the lodge.', alt: 'A quiet seating corner inside the lodge' },
  { src: entreRiosImg, label: 'PLATE 09', tag: 'ENTRE RÍOS · DOVES', caption: 'High-volume shooting in prime agricultural country.', alt: 'Agricultural fields in Entre Ríos used for dove shooting' },
  { src: cordobaImg, label: 'PLATE 10', tag: 'CÓRDOBA · DOVES', caption: 'The dove-shooting capital of the world.', alt: 'Open countryside in Córdoba, known for its dove population' },
];

const monoLabel = { fontFamily: "'JetBrains Mono',monospace", fontSize: 12.5, letterSpacing: '0.14em', textTransform: 'uppercase' };
const rule = { display: 'block', width: 56, height: 1, background: 'rgba(232,227,214,0.35)' };

export default function Wingshooting() {
  return (
    <>
      <Head>
        <title>Wingshooting - Rosybill Outfitters</title>
        <meta name="description" content="Premier wingshooting experiences in Argentina - Buenos Aires, Entre Rios, and Cordoba hunting territories." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`${SITE_URL}/wingshooting`} />

        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/wingshooting`} />
        <meta property="og:title" content="Wingshooting Argentina - Rosybill Outfitters" />
        <meta property="og:description" content="Premier wingshooting experiences in Argentina - Buenos Aires, Entre Rios, and Cordoba hunting territories with expert guides." />
        <meta property="og:image" content={`${SITE_URL}/og-image.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Rosybill Outfitters" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`${SITE_URL}/wingshooting`} />
        <meta name="twitter:title" content="Wingshooting Argentina - Rosybill Outfitters" />
        <meta name="twitter:description" content="Premier wingshooting experiences in Argentina - Buenos Aires, Entre Rios, and Cordoba hunting territories with expert guides." />
        <meta name="twitter:image" content={`${SITE_URL}/og-image.jpg`} />

        <meta name="theme-color" content="#0E1524" />
        <meta name="author" content="Rosybill Outfitters" />
        <meta name="keywords" content="wingshooting, argentina, duck hunting, dove hunting, buenos aires, entre rios, cordoba, hunting guides, outfitters" />
      </Head>

      <div style={{ background: '#0E1524', color: '#E8E3D6', fontFamily: "'Archivo',system-ui,sans-serif" }}>
        <Header />

        {/* HERO */}
        <section style={{ display: 'flex', flexWrap: 'wrap', minHeight: 560 }}>
          <div style={{ flex: '1 1 420px', padding: 'clamp(48px,7vw,90px) clamp(24px,5vw,56px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 22 }}>
              <span style={monoLabel}>WINGSHOOTING</span>
              <span style={{ ...rule, width: 44 }} />
              <span style={{ ...monoLabel, fontSize: 11, color: 'rgba(232,227,214,0.7)' }}>ARGENTINA</span>
            </div>
            <h1 style={{ margin: 0, fontFamily: "'Instrument Serif',serif", fontWeight: 400, fontSize: 'clamp(44px,6vw,68px)', lineHeight: 0.96, letterSpacing: '-0.01em' }}>
              The territory, honestly shown.
            </h1>
            <p style={{ margin: '24px 0 0', fontSize: 16.5, lineHeight: 1.68, maxWidth: 420, color: 'rgba(232,227,214,0.8)' }}>
              Real footage and photos from the field and the lodge, sent straight from the ground — plus everything you need to plan a trip across our three territories.
            </p>
          </div>
          <div style={{ flex: '1 1 480px', minWidth: 0, padding: '0 clamp(24px,5vw,56px) clamp(24px,5vw,56px)', display: 'flex', alignItems: 'center' }}>
            <FieldReel />
          </div>
        </section>

        {/* OUR TERRITORIES: one shared strip for all three provinces */}
        <section style={{ padding: 'clamp(64px,9vw,110px) clamp(24px,5vw,48px) 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
            <span style={monoLabel}>OUR TERRITORIES</span>
            <span style={rule} />
          </div>
          <h2 style={{ margin: '0 0 20px', fontFamily: "'Instrument Serif',serif", fontWeight: 400, fontSize: 'clamp(34px,4.4vw,44px)', lineHeight: 1.02, maxWidth: 560 }}>
            Where we hunt.
          </h2>
          <p style={{ margin: '0 0 40px', fontSize: 16, lineHeight: 1.65, maxWidth: 520, color: 'rgba(232,227,214,0.75)' }}>
            Buenos Aires wetlands for duck and partridge; Entre Ríos and Córdoba for some of the best dove shooting in the world.
          </p>

          <Gallery photos={TERRITORY_PHOTOS} />
        </section>

        {/* WHAT TO EXPECT */}
        <section style={{ padding: 'clamp(90px,10vw,140px) clamp(24px,5vw,48px) 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 40 }}>
            <span style={monoLabel}>WHAT TO EXPECT</span>
            <span style={rule} />
          </div>
          <WhatToExpect />
        </section>

        {/* CTA */}
        <section style={{ marginTop: 'clamp(90px,10vw,140px)', padding: 'clamp(70px,8vw,110px) clamp(24px,5vw,48px)', textAlign: 'center', borderTop: '1px solid rgba(232,227,214,0.35)' }}>
          <h2 style={{ margin: '0 0 20px', fontFamily: "'Instrument Serif',serif", fontWeight: 400, fontSize: 'clamp(36px,5vw,52px)', lineHeight: 1 }}>
            Book your wingshooting adventure.
          </h2>
          <p style={{ margin: '0 0 36px', fontSize: 16, color: 'rgba(232,227,214,0.75)' }}>
            Contact our hunting experts to plan your personalized trip.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}>
            <a href="tel:+14044042333" style={{ display: 'inline-block', padding: '15px 28px', background: '#E8556B', color: '#20070C', fontSize: 13.5, fontWeight: 600, letterSpacing: '0.04em', textDecoration: 'none' }}>
              Call US · 404 404 2333
            </a>
            <a href="https://wa.me/5491169274103?text=Hello%2C%20I%27d%20like%20to%20check%20availability%20for%20a%20hunting%20trip." style={{ display: 'inline-block', padding: '15px 28px', background: 'none', border: '1px solid rgba(232,227,214,0.5)', color: '#E8E3D6', fontSize: 13.5, fontWeight: 600, letterSpacing: '0.04em', textDecoration: 'none' }}>
              WhatsApp Argentina · +54 9 11 6927 4103
            </a>
          </div>
        </section>

        <div style={{ padding: '0 clamp(24px,5vw,48px) 48px' }}>
          <Footer />
        </div>
      </div>
    </>
  );
}
