"use strict";
import axios from "axios";

export const ceshi1 = (data={}) => {
  return axios.get(`/api/toutiao/index?type=${data.type}&page=${data.page}&page_size=${data.page_size}&key=${data.key}`)
}