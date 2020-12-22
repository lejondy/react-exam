import axios from "utils/axios";

export async function findLocationById(id) {
  const endpoint = "/locations";

  return axios.request({
    url: `${endpoint}?id=${id}`,
  });
}
