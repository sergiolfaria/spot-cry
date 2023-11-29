import axios from "axios";

export const getdetailFromData = (id) => {
        return axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${id}&part=contentDetails&key=AIzaSyDgJOkFh7VkgB517gj7-KuCSIRbu5_Ce84`, {
        });
};



