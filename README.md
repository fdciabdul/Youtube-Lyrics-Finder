# Youtube-Lyrics-Finder
a Simple library to Search Lyrics from Youtube Videos
![image](https://user-images.githubusercontent.com/31664438/131443647-c1f99e33-9c83-43e9-b515-bff26fe65efe.png)

```bash
npm install yt-lirik
```

or

``` 
yarn add yt-lirik
```

## Test 

```javascript
const yt = require('yt-lirik');

(async() =>{

    const tes = await yt.getLyrics("https://www.youtube.com/watch?v=DDWKuo3gXMQ");
    console.log(tes)
})()
```

# Author 

Abdul Muttaqin
