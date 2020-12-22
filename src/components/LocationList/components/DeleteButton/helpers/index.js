import axios from "utils/axios";

export async function deleteLocationById(id) {
  const endpoint = "/locations";

  return axios.request({
    url: `${endpoint}/${id}`,
    method: "delete",
  });
}
