const API_KEY = process.env.API_KEY;

export default {
    fetchTrending:{
        title : "Trending",
        url : `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchTopRated:{
        title : "Top Rated",
        url : `/movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    fetchActionMovie:{
        title : "Action",
        url : `/discover/movie?api_key=${API_KEY}&with_genres=28`
    },
    fetchComedyMovie:{
        title : "Comedy",
        url : `/discover/movie?api_key=${API_KEY}&with_genres=35`
    },
    fetchHorrorMovie:{
        title : "Horror",
        url : `/discover/movie?api_key=${API_KEY}&with_genres=27`
    },
    fetchRomanceMovie:{
        title : "Romance",
        url : `/discover/movie?api_key=${API_KEY}&with_genres=10749`
    },
    fetchMysteryMovie:{
        title : "Mystery",
        url : `/discover/movie?api_key=${API_KEY}&with_genres=9648`
    },
    fetchSciFiMovie:{
        title : "SciFi",
        url : `/discover/movie?api_key=${API_KEY}&with_genres=879`
    },
    fetchWesternMovie:{
        title : "Western",
        url : `/discover/movie?api_key=${API_KEY}&with_genres=37`
    },
    fetchAnimationMovie:{
        title : "Animation",
        url : `/discover/movie?api_key=${API_KEY}&with_genres=16`
    },
    fetchTvMovie:{
        title : "TV",
        url : `/discover/movie?api_key=${API_KEY}&with_genres=10770`
    }
}