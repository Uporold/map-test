import Service from "@ember/service";
import { geoJSON } from "../common/const";

export default Service.extend({
  getData() {
    return geoJSON;
  }
});
