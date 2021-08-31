const yt = require('./');

(async() =>{

    const tes = await yt.getLyrics("https://www.youtube.com/watch?v=DDWKuo3gXMQ");
    console.log(tes)
})()