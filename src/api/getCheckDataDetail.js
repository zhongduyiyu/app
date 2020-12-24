/*
 * @Description: 
 * @Version: 0.01
 * @Autor: MoXu
 * @Date: 2020-12-24 18:25:29
 * @LastEditors: MoXu
 * @LastEditTime: 2020-12-24 18:25:30
 */

import req from "./req"

//登录
export const getCheckDataDetail = params => req.get('/checkDataDetail',params)
