/**
 * 日期格式化方法
 */

/**
 * 日期格式化
 * @param {Date} date  日期对象
 * @param {string} str 日期的格式
 */
export function formatDate(date,str) {
    var res = str;
    var time = {
        "Y+": date.getFullYear(),
        "M+": date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1),
        "D+": date.getDate() >= 10 ? date.getDate() : "0" + date.getDate(),
        "h+": date.getHours() >= 10 ? date.getHours() : "0" + date.getHours(),
        "m+": date.getMinutes() >= 10 ? date.getMinutes() : "0" + date.getMinutes(),
        "s+": date.getSeconds() >= 10 ? date.getSeconds() : "0" + date.getSeconds()

    }

    for (var key in time) {
        var reg = new RegExp(`(${key})`);
        if (reg.test(res)) {
            res = str.replace(RegExp.$1, time[key]);
            // 反向引用 获取 YYYY MM DD hh mm ss
        }
    }
    return res;
}
//  var res = formatDate(date,"2020/07/16 17:54:50");
//  console.log(res); //2020-07-16  16:57:5