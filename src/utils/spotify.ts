import Spotify from 'spotify-web-api-node';

// Create a new instance of the Spotify API
const createSpotifyApi = (token: string) => {
    const spotify = new Spotify({
        clientId: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
        redirectUri: process.env.REDIRECT_URI,
    });

    spotify.setAccessToken(token);

    return spotify;
};

export default createSpotifyApi;