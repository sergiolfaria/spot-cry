import axios from "axios";

export const getthumbFromData = (id) => {
        return axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=E0ozmU9cJDg&key=AIzaSyDgJOkFh7VkgB517gj7-KuCSIRbu5_Ce84`, {
        });
};
