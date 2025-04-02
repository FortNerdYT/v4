var apps = [
    {
      'id': 'customapp',
      'title': 'Add custom app',
      'image': 'assets/images/add.png'
    },
    {
      "id": "discord",
      "title": "Discord",
      "url": "https://discord.com/app",
      'image': 'https://static.vecteezy.com/system/resources/previews/006/892/625/original/discord-logo-icon-editorial-free-vector.jpg'
    },
    {
      "id": "tiktok",
      "title": "TikTok",
      "url": "https://tiktok.com",
      'image': 'https://sf-tb-sg.ibytedtos.com/obj/eden-sg/uhtyvueh7nulogpoguhm/tiktok-icon2.png'
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
      'title': 'Unblocked Browser',
      'url': 'https://duckduckgo.com/',
      "image": "https://cdn-icons-png.freepik.com/512/4387/4387430.png",
      "description": "Stuff is unblocked on here I think"
    },
    {
      'id': 'chatroom',
      'title': 'Public Chatroom',
      'url': 'https://earnest-scone-794946.netlify.app',
      "image": "data:image/png;base64,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",
      "description": "Chatroom for you guys... This might not go well"
    },
  ]
  
  var customapps = JSON.parse(localStorage.getItem("customapps"))
  if (customapps) customapps.forEach(app => {
    apps.push(app)
  })
  
  console.log("Loaded " + apps.length + " apps")
  if (customapps) console.log("Loaded " + customapps.length + " custom apps")
