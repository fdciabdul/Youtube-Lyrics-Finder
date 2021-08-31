const yt = require('./lib/getLyrics');
module.exports = {
    getLyrics: async (id) => {
      try {
        const artist = await yt.getArtist(id);
        const lirik = await yt.searchLyric(artist.song , artist.artist)
        return {
            song : artist.song , 
            artist: artist.artist,
            lyrics : lirik

        }
      } catch (err) {
        throw err;
      }
    }
    // searchLyricsByKeywords: async(keyword) =>{
    //     try {
    //         const word = await yt.searchVideo(keyword);
    //         const artist = await yt.getArtist(word[0].id);
    //         const lirik = await yt.searchLyric(artist.song , artist.artist)
    //         return {
    //             song : artist.song , 
    //             artist: artist.artist,
    //             lyrics : lirik
    
    //         }
    //     } catch (error) {
    //         throw error;
    //     }
    // }

}
  