/*
 * @Author: 单新林
 * @Date: 2019-10-26 22:10:31
 * @Last Modified by: 单新林
 * @Last Modified time: 2019-10-26 22:10:31
 */
import { Notification, Message } from "element-ui";
import { format } from "../utils/date";
import { createFragment } from "../utils/dom";

/**
 * @desc 模拟埋点Action
 */
export default function trackAction(evt, addtional = {}) {
  const data = {
    evt,
    ...addtional,
    action_time: format(Date.now())
  };

  if (evt === "1") {
    Message("统计UVPV埋点");
  }
  if (evt === "2") {
    Message({
      message: "统计页面停留时间埋点",
      customClass: "message-offset"
    });
	
  }
  console.log(data)
  Notification.success({
    title: "上报数据如下：",
    dangerouslyUseHTMLString: true,
    message: createFragment(data),
    customClass: "notification__large",
    position: evt === "1" || evt === "2" ? "top-left" : "top-right"
  });
  // if(this.$router.path == 'MaiTrack'){
	 //  console.log(data)
  // }
}
