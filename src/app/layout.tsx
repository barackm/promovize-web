import './globals.css';
import '../styles/main.scss';
import localFont from 'next/font/local';

export const metadata = {
  title: 'Promovize',
  description:
    'Promovize, the ultimate social media management app for startups looking to improve their online visibility.',
};

const myfonts = localFont({
  src: './fonts/fonts/SF-Pro-Rounded-Light.otf',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={myfonts.className}>{children}</body>
    </html>
  );
}
