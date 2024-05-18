import localFont from 'next/font/local';

export const ttNorms = localFont({
  src: [
    {
      path: '../../public/fonts/TTNorms-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/TTNorms-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/TTNorms-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/TTNorms-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
});
