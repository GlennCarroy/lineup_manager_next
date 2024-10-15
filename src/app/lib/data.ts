export const data = {
    players : [
        {
            name: '/',
            derbyname: 'La Moche',
            id: 12,
            rotation: 1,
            leads: 0,
            penalties: 0,
            jammer: true
        },
        { 
            name: 'Capu',
            derbyname: 'Cass\'',
            id: 56,
            rotation: 2,
            leads: 0,
            penalties: 0,
            jammer: true
        },
        {
            name: '/',
            derbyname: 'Legs',
            id: 1395,
            rotation: 2,
            leads: 0,
            penalties: 0,
            jammer: true
        },
        {
            name: '/',
            derbyname: 'Moche & Moshi',
            id: 160,
            rotation: 3,
            leads: 0,
            penalties: 0,
            jammer: true
        },
        {
            name: '/',
            derbyname: 'Fuckeuse',
            id: 4950,
            rotation: 3,
            leads: 0,
            penalties: 0,
            jammer: true
        },
        {
          name: 'Anaïs',
          derbyname: 'Bobo',
          id: 141,
          rotation: 1,
          penalties: 0,
          pivot: true
        },
        {
          name: '',
          derbyname: 'Bully',
          id: 54,
          rotation: 1,
          penalties: 0,
          pivot: true
        },
        {
          name: 'aka Guigui',
          derbyname: 'Guinness',
          id: 911,
          rotation: 2,
          penalties: 0
        },
        {
          name: 'Sarah',
          derbyname: 'Tracky',
          id: 21,
          rotation: 2,
          penalties: 0
        },
        {
          name: 'Rose',
          derbyname: 'Roz',
          id: 22,
          rotation: 2,
          penalties: 0
        },
        {
          name: '/',
          derbyname: 'Kiki',
          id: 999,
          rotation: 3,
          penalties: 0
        },
        {
          name: '/',
          derbyname: 'Gipsy Queen',
          id: 729,
          rotation: 2,
          penalties: 0
        },
        {
          name: 'Orel',
          derbyname: 'Sally',
          id: 72,
          rotation: 1,
          penalties: 0
        },
        {
          name: '/',
          derbyname: 'Louve',
          id: 71,
          rotation: 3,
          penalties: 0
        },
        {
          name: '/',
          derbyname: 'Lux',
          id: 17,
          rotation: 2,
          penalties: 0
        }
    ],
    lines: [
      {
        id: 'PACK 1',
        tripod: {
          tete: [22],
          inte: [911, 999],
          exte: [21]
        },
        offense: [54]
      },
      {
        id: 'PACK 2',
        tripod: {
          tete: [72],
          inte: [71, 17],
          exte: [729]
        },
        offense: [141]
      },
      {
        id: 'Fat Line',
        tripod: {
          tete: [72],
          inte: [911],
          exte: [21]
        },
        offense: [141]
      },
      {
        id: 'Power Block',
        tripod: {
          tete: [72],
          inte: [911, 17],
          exte: [21]
        },
        offense: [141]
      },
      {
        id: 'Power Jam',
        tripod: {
          tete: [71],
          inte: [911, 17],
          exte: [21, 22]
        },
        offense: [141]
      },
    ],
    backups: {
      inte: [4],
      exte: [22]
    },
    game: {
      jams: [],
      stats: {}
    }
}