import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | Valid Swap',
  defaultTitle: 'Valid Swap',
  description:
    'Cheaper and faster than Uniswap? Discover Swapster, the leading DEX on EVM chains with the best farms in DeFi.',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@Swapster',
    site: '@Swapster',
  },
  openGraph: {
    title: 'Swapster - A next evolution DeFi exchange on EVM chains',
    description: 'The most popular AMM on BSC/ETH by user count!',
    images: [{ url: 'https://swapster.io/logo.png' }],
  },
}
