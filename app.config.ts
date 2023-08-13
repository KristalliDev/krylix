export default defineAppConfig({
  alpine: {
    title: 'Krylix',
    description: 'Krylix A Prototype Site',
    image: {
      src: '/logo.svg',
      alt: 'Real Fake News Logo',
      width: 400,
      height: 300
    },
    header: {
      position: 'left', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/logo.svg', // path of the logo
        pathDark: '/logo-dark.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'rfn' // alt of the logo
      }
    },
    footer: {
      credits: {
        text: 'Real Fake News',
        enabled: true, // possible value are : true | false
        repository: 'https://www.github.com/KristalliDev/krylix' // our github repository
      },
      navigation: true, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: 'Find Us On' // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      instagram: 'kyostisama',
      github: 'KristalliDev',
      discord: {
        icon: 'uil:discord',
        label: 'Discord',
        href: 'https://youtu.be/xvFZjo5PgG0'
      },
    },
    form: {
      successMessage: "Message Sent. You're Welcome!"
    }
  }
})
