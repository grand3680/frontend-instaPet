import localFont from 'next/font/local';

const inter = localFont({
  src: [
    {
      path: './Inter/Inter-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './Inter/Inter-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: './Inter/Inter-SemiBold.ttf',
      weight: '600',
      style: 'normal'
    }
  ]
});

export { inter };
