export enum SectionTypes {
  HAIR_LOSS,
  ERECETILE_DISFUNCTION,
}

export const SECTIONS_DATA = {
  [SectionTypes.HAIR_LOSS]: {
    topic: 'Hair loss',
    title: 'Hair loss needn’t be irreversible. We can help! ',
    text: 'We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.',
    imageDescription:
      'Rear view of a Black man’s head showing a patch of hair loss on the scalp, with surrounding curly hair against a light green background.',
    number: '01',
    image: '/images/hair-loss.image.png',
  },
  [SectionTypes.ERECETILE_DISFUNCTION]: {
    topic: 'Erecetile dysfunction',
    title: 'Erections can be a tricky thing. But no need to feel down!',
    text: 'We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.',
    number: '02',
    image: '/images/erecetile-dysfunction.image.png',
    imageDescription:
      'Portrait of a smiling middle-aged man with salt-and-pepper hair and a beard, wearing a denim shirt over a light pink T-shirt. The background is a soft, uniform green.',
  },
};
