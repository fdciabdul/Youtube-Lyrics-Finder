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
    

}
  
