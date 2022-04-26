import axios from "axios";

const KEY = "AIzaSyCzz7AJiF-2qX8CWRSyzTGRs4WpMtxs9zA";
// Youtube api resources: https://console.cloud.google.com/apis/dashboard?project=video-search-346600
export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY,
    },
});
