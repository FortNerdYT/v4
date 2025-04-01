var apps = [
    {
      'id': 'customapp',
      'title': 'Add custom app',
      'image': 'assets/images/add.png'
    },
    {
      "id": "google",
      "title": "Google",
      "url": "https://www.google.com/?safe=active&ssui=on",
      'image': 'https://img.freepik.com/free-icon/search_318-265146.jpg'
      
    },
    {
      "id": "discord",
      "title": "Discord",
      "url": "https://discord.com/app",
      'image': 'https://static.vecteezy.com/system/resources/previews/006/892/625/original/discord-logo-icon-editorial-free-vector.jpg'
    },
    {
      "id": "telegram",
      "title": "Telegram",
      "url": "https://web.telegram.org/a/",
      'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/512px-Telegram_logo.svg.png'
    }, 
    {
      "id": "guilded",
      "title": "Guilded",
      "url": "https://www.guilded.gg/",
      'image': 'https://yt3.googleusercontent.com/cPlwwgZkQQgHRLAg7jvJG4yKGLDId6NH7H_S87TCoEV_dbsF9Me_4YSBL5DyMsndx6hzoZxHUw=s176-c-k-c0x00ffffff-no-rj'
    },
    {
      "id": "geforce",
      "title": "GeForce NOW (may not work)",
      "url": "https://play.geforcenow.com",
      'image': 'https://raw.githubusercontent.com/proudparrot2/cdn/main/8z9zeDIT_400x400-removebg-preview.png'
    },
    {
      'id': 'vscode',
      'title': 'Visual Studio Code',
      'url': 'https://vscode.dev/',
      'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png'
    },
    {
      "id": "tiktok",
      "title": "TikTok",
      "url": "https://tiktok.com",
      'image': 'https://sf-tb-sg.ibytedtos.com/obj/eden-sg/uhtyvueh7nulogpoguhm/tiktok-icon2.png'
    },
    {
      "id": "reddit",
      "title": "Reddit",
      "url": "https://reddit.com",
      'image': 'https://www.redditinc.com/assets/images/site/reddit-logo.png'
    },
    {
      "id": "youtube",
      "title": "YouTube",
      "url": "https://youtube.com",
      'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/YouTube_social_red_square_%282017%29.svg/2048px-YouTube_social_red_square_%282017%29.svg.png'
    },
    {
      "id": "twitter",
      "title": "Twitter",
      "url": "https://twitter.com",
      'image': 'https://seeklogo.com/images/T/twitter-icon-square-logo-108D17D373-seeklogo.com.png'
    },
    {
      'id': 'spotify',
      'title': 'Spotify',
      'url': 'https://open.spotify.com/browse',
      'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png'
    },
    {
      'id': 'chess',
      'title': 'Chess.com',
      'url': 'https://chess.com',
      'image': 'https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/SamCopeland/phpmeXx6V.png'
    },
    {
      'id': 'movie-web',
      'title': 'movie-web',
      'url': 'http://movie-web.app/',
      'image': 'https://github.com/movie-web/movie-web/blob/dev/public/android-chrome-512x512.png?raw=true'
    },
    {
      'id': 'coolmathgames',
      'title': 'Cool Math Games',
      'url': 'https://coolmathgames.com',
      'image': 'https://docs.google.com/drawings/d/e/2PACX-1vR6y2GvcGu9PdrX9zzE24dhm24hClcNsdAmZjIgSUC8sFOahf6t7Yg6l_W8Rd4GduWOH_X02GHVFdBb/pub?w=512&h=512'
    },
    {
      'id': 'win11',
      'title': 'Windows 11 in React',
      'url': 'https://win11.blueedge.me/',
      "image": "https://cdn.upload.systems/uploads/lnysPmIS.png",
      "description": "A remake of the Windows 11 UI in React.js"
    },
    {
      'id': 'win10',
      'title': 'Windows 10 in React',
      'url': 'https://win-10.vercel.app/',
      "image": "https://downlody.com/windows/files/image/Windows-10-icon.png",
      "description": "Windows 10 recreation in React.js"
    },
    {
      'id': 'winxp',
      'title': 'Windows XP in React',
      'url': 'https://www.oonjaa.com/',
      "image": "https://archive.org/services/img/1d9464dbff7a1630882d0e2090cb714c",
      "description": "Windows XP recreation in React.js"
    },
    {
      'id': 'gbaemulator',
      'title': 'GBA Emulator',
      'url': 'https://cattn.github.io/gba',
      "image": "https://cattn.github.io/gba/pwa/apple-icon-180.png",
      "description": "A Game Boy Advance retro emulator with over 3000 games, and other consoles as well"
    },
    {
      'id': 'xboxcloudgaming',
      'title': 'Xbox Cloud Gaming',
      'url': 'https://www.xbox.com/en-us/play',
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5CerSHu4YCZ1HJgV0DYZN8ws6-2v9jEvL6g&s",
      "description": "Play your favorite games"
    },
    {
      'id': 'kahoothack',
      'title': 'Kahoot Hack',
      'url': 'https://kahoot.club',
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfdk6xYeVre9cUN7a5yTAxpSziredLCR8qMw&s",
      "description": "Kahoot Answer Hack"
    },
    {
      'id': 'replit',
      'title': 'Replit',
      'url': 'https://replit.com',
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6uXOsbFIMVL3teJz9KaJtN6WGgmylyPQp4A&s",
      "description": "Replit"
    },
    {
      'id': 'pinterest',
      'title': 'Pinterest',
      'url': 'https://www.pinterest.com',
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRS-meG8HDT-iFgfeMdVxdjT_zYLvMVrd8Nw&s",
      "description": "Pinterest"
    },
    {
      'id': 'internetarchive',
      'title': 'Internet Archive Book Website',
      'url': 'https://archive.org/details/internetarchivebooks',
      "image": "https://upload.wikimedia.org/wikipedia/commons/8/84/Internet_Archive_logo_and_wordmark.svg",
      "description": "Books an stuff idk"
    },
    {
      'id': 'github',
      'title': 'Github',
      'url': 'https://github.com',
      "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAZlBMVEX///8AAAD6+vrz8/Pa2trd3d2lpaWrq6vr6+vJycmenp55eXlGRkb39/clJSVZWVmMjIxUVFSzs7M2NjZlZWW/v787OzuUlJTl5eUWFhYbGxvPz89LS0ssLCyBgYFgYGAODg5tbW33dDBNAAACIUlEQVRIib2W7XaCMAyGG0BEEBRQmKBu3v9NztI2TUs/8Jyd5RctfUia5k1h7O8tqZNPkbSrBhA2tc+u2Ih1R7Csz+O+67NNCXvWYa50Y9zKALZr/BxAs/NxeQjjtndzVYwDqFzcd5wDuKy5yxYO4GVznlNY29nkrnL6dvMBP6qWrpRL5eSJsaJ0seOXDiolYCvnumW0F877Yein5VGc/ay/ruygPjyLcbLPsMKSLJcuCrXqgCAWTOY6J2W1WvWwMwPgLSoDRJcDzswhEEOFu5j40snLQ6AODIS0Rz0R3GOq15VWpCHJGS6PfJjgcApzjPW4lLeSeatDVRkqi3oU3CE3nUYuaa2LeBvEpVwjWohpFHyopVyWJwQjHfBt2HF5obcfeMSTaw2P8T3+UI96j8ES56bLnDetJ46uMVAf+ZPRNuzsmtT0yXE1oPwBNm9xUaQOfHuRiwN4WGOfaTVAY0UOfQi863WiK+/0BAxenzW9p6UcSKzeq6yjaxo5uQirY4W8586rlrUbze6OH+eDqSDSPJKrJb+DbfhOAOR6IM2aZSuO7Ebs8t1IXjJHNFD7pn6QdyKxFa4y+uvBAg0tlCpYNp+r0ax2CxzNxC2qvNvpdIAn+3Xv+JqwmXKO2loS1B546SResHH91JGaMvZPzmNw/wxWMXD1r6Ls6gRRBJ2Pe0vg5QBl47+Eu2d2VAdqgm30YmFZhbKRYUxQRTvnP9gvtLMTQIVu4K8AAAAASUVORK5CYII=",
      "description": "Github"
    },
  ]
  
  var customapps = JSON.parse(localStorage.getItem("customapps"))
  if (customapps) customapps.forEach(app => {
    apps.push(app)
  })
  
  console.log("Loaded " + apps.length + " apps")
  if (customapps) console.log("Loaded " + customapps.length + " custom apps")
