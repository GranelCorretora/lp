import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Granel Corretora - Comercialização Agrícola Ágil, Segura e Transparente",
  description: "Granel Corretora é seu parceiro ideal para otimizar a comercialização agrícola. Oferecemos agilidade, segurança e transparência em todas as operações de grãos e commodities.",
  keywords: "comercialização agrícola, grãos, commodities, agronegócio, trading, corretora agrícola, soja, milho, trigo",
  authors: [{ name: "Granel Corretora" }],
  creator: "Granel Corretora",
  publisher: "Granel Corretora",
  robots: "index, follow",
  openGraph: {
    title: "Granel Corretora - Comercialização Agrícola",
    description: "Comercialização agrícola ágil, segura e transparente com equipe especializada",
    url: "https://granelcorretora.com.br",
    siteName: "Granel Corretora",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 600,
        alt: "Granel Corretora",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Granel Corretora - Comercialização Agrícola",
    description: "Comercialização agrícola ágil, segura e transparente",
    images: ["/logo.jpg"],
  },
  verification: {
    google: "verification_token_here", // Substitua pelo token real do Google Search Console
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/logo.jpg" />
        <link rel="apple-touch-icon" href="/logo.jpg" />
        <meta name="theme-color" content="#166534" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Granel Corretora",
              "description": "Comercialização agrícola ágil, segura e transparente",
              "url": "https://granelcorretora.com.br",
              "logo": "https://granelcorretora.com.br/logo.jpg",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+55-66-96895-6261",
                "contactType": "Customer Service",
                "availableLanguage": "Portuguese"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Piso Superior, Av dos Tarumãs, 430",
                "addressLocality": "Sinop",
                "addressRegion": "MT",
                "postalCode": "78550-001",
                "addressCountry": "BR"
              },
              "openingHours": [
                "Mo-Fr 07:30-17:00"
              ],
              "sameAs": [
                // Adicione links de redes sociais aqui quando disponíveis
              ]
            })
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        
        {/* Analytics Scripts - Adicione aqui quando necessário */}
        {/* Google Analytics, Facebook Pixel, etc. */}
      </body>
    </html>
  );
}
