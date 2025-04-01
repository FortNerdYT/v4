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
      'id': '123movies',
      'title': '123Movies',
      'url': 'https://ww19.0123movie.net',
      'image': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAS1BMVEX////T6+Sv3M6a08Kp2cvM6OD5/fzr9vOCyrUor44xsZA1spIhrot1xa/e8Os+tJVnwahLuJtHt5lbvaLx+fa13tKOz7zZ7ujA49kprdamAAAA00lEQVR4Aa2Rhw7CUAhF6S5c6G71/7/UEEnKU7M9GR0nbPoLVd00bdf/MMPILICw2vTpGsUcQMfSLTInsPbZYS7AlnJ6HJiTNQoG9c+Fqu1OrlXI0ZNKTUStIiT2kDy7bP31MA6rAzlVkkTd/M4tJzm1ZOkj+zeu9wdKSYO4tN+S0jCtlHJYcKftOMvYso/m9JrkKTEpx20MIemx8hyskWjyUIx0mL9E4JPy/jB7xry9YMVcIsct+62wkIEyprfm/aCSalcBAOH1Sd8M52V21RP9gReN2RPlWu54BQAAAABJRU5ErkJggg=='
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
      'url': 'https://khanswers.vercel.app/',
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
    {
      'id': 'koyeb',
      'title': 'Koyeb',
      'url': 'https://app.koyeb.com/auth/signin',
      "image": "data:image/png;base64,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",
      "description": "Koyeb"
    },
    {
      'id': 'soundcloud',
      'title': 'SoundCLoud',
      'url': 'http://soundcloud.com',
      "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAIAAAD9b0jDAAABlElEQVR4Aa2RAUQDURjHHwAABYAgECAymUzArEErDYZUFJZkSotqgFBAFlKAgaGQIAsiIgIFDBBBbHfublur3/XZdrqnLd7zc9u9e9/v/d/3VLtgHtXeMw7SXeMg3TaP+swZB+mGcZBmzaNaa8ZBujIYi6qVUXZaWatDVkY108wwr4dv/UHh5CJ26fCrMxrV1/p+QtRh2F8PBfJsJJVzmnMebhChCw77bKeZ0tRSpsHNjlNgXxWt63OrfGzfltzn+7CUUVseC5eHjCnfaF0U0OGy78pATO/lSStljTfNaSgMSlM9RGofLGAUl89jRWJqpa2Pd7xAZFGDkh/erXySgNwGp8YoLiAjhKXhYW0mxIvOp360Tjqncik6EQV1zbcq/C1lmbTiRxpXuCSXWIKIcRAprfCmRBqHXlLothL+dXxqvRi2jpTYdKR+kvfvvVwE9pBt5MbkrvqfPR6Qgkw5M8P27MgvrLlReda25vUsRd0J1ZXyb2BiipbpiQVXitQ0bGIewhsHadQ4SCeNgzRiHuVOmOcbe7MFPYep+uEAAAAASUVORK5CYII=",
      "description": "Music"
    },
    {
      'id': 'unblockedbrowser',
      'title': 'Maybe An Unblocked Browser',
      'url': 'https://haven.proxyhaven.repl.co',
      "image": "data:image/png;base64,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",
      "description": "Might Be Broken"
    },
  ]
  
  var customapps = JSON.parse(localStorage.getItem("customapps"))
  if (customapps) customapps.forEach(app => {
    apps.push(app)
  })
  
  console.log("Loaded " + apps.length + " apps")
  if (customapps) console.log("Loaded " + customapps.length + " custom apps")
