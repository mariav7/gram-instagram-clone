/* eslint-disable no-plusplus */
// NOTE: replace '43vLLTDDxaehXONlMcgTsr9lSsF3' with your Firebase auth user id (can be taken from Firebase)
export function seedDatabase(firebase) {
  const users = [
    {
      userId: '43vLLTDDxaehXONlMcgTsr9lSsF3',
      username: 'test',
      fullName: 'Test',
      emailAddress: 'test@yopmail.com',
      following: ['2', '3'],
      followers: ['1', '2', '3'],
      dateCreated: Date.now()
    },
    {
      userId: '1',
      username: 'ada',
      fullName: 'Ada Lovelace',
      emailAddress: 'ada@lovelace.com',
      following: ['2', '3', '4', '43vLLTDDxaehXONlMcgTsr9lSsF3'],
      followers: [''],
      dateCreated: Date.now()
    },
    {
      userId: '2',
      username: 'roman',
      fullName: 'Roman Kramer',
      emailAddress: 'roman@sanzio.com',
      following: ['3', '43vLLTDDxaehXONlMcgTsr9lSsF3'],
      followers: ['1', '3', '4', '5', '6'],
      dateCreated: Date.now()
    },
    {
      userId: '3',
      username: 'sophia',
      fullName: 'Sophia Reynolds',
      emailAddress: 'sophia@reynolds.com',
      following: ['2', '43vLLTDDxaehXONlMcgTsr9lSsF3'],
      followers: ['1', '2', '4', '5', '6'],
      dateCreated: Date.now()
    },
    {
      userId: '4',
      username: 'oliver',
      fullName: 'Oliver Mitchell',
      emailAddress: 'oliver@mitchell.com',
      following: ['2', '3'],
      followers: [''],
      dateCreated: Date.now()
    },
    {
      userId: '5',
      username: 'kim',
      fullName: 'Kim H.',
      emailAddress: 'kim@howdy.com',
      following: ['2', '3'],
      followers: [''],
      dateCreated: Date.now()
    },
    {
      userId: '6',
      username: 'pink',
      fullName: 'Pink Red',
      emailAddress: 'pink@red.com',
      following: ['2', '3'],
      followers: [''],
      dateCreated: Date.now()
    }
  ];

  // eslint-disable-next-line prefer-const
  for (let k = 0; k < users.length; k++) {
    firebase.firestore().collection('users').add(users[k]);
  }

  // eslint-disable-next-line prefer-const
  for (let i = 1; i <= 5; ++i) {
    firebase
    .firestore()
    .collection('photos')
    .add({
      photoId: i,
      userId: '3',
      imageSrc: `/images/users/sophia/${i}.jpg`,
      caption: 'Vive la France',
      likes: [],
      comments: [
        {
          displayName: 'ramon',
          comment: 'Love this place, looks like my animal farm!'
        },
        {
          displayName: 'oliver',
          comment: 'Would you mind if I used this picture?'
        }
      ],
      userLatitude: '40.7128°',
      userLongitude: '74.0060°',
      dateCreated: Date.now()
    });
    firebase
      .firestore()
      .collection('photos')
      .add({
        photoId: i,
        userId: '2',
        imageSrc: `/images/users/roman/${i}.jpg`,
        caption: 'Saint George and the Dragon',
        likes: [],
        comments: [
          {
            displayName: 'dali',
            comment: 'Love this place, looks like my animal farm!'
          },
          {
            displayName: 'orwell',
            comment: 'Would you mind if I used this picture?'
          }
        ],
        userLatitude: '40.7128°',
        userLongitude: '74.0060°',
        dateCreated: Date.now()
      });
  }
  firebase
  .firestore()
  .collection('photos')
  .add({
    photoId: 6,
    userId: '2',
    imageSrc: `/images/users/roman/6.jpg`,
    caption: 'Random photo capture',
    likes: [],
    comments: [
      {
        displayName: 'kim',
        comment: 'nice!'
      },
      {
        displayName: 'oliver',
        comment: 'you paparazzi lol'
      }
    ],
    userLatitude: '40.7128°',
    userLongitude: '74.0060°',
    dateCreated: Date.now()
  });
}
