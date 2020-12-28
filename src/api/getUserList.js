/*
 * @Description: 
 * @Version: 0.01
 * @Autor: MoXu
 * @Date: 2020-12-28 17:52:20
 * @LastEditors: MoXu
 * @LastEditTime: 2020-12-28 17:53:16
 */

import req from "./req"

//登录
export const getUserList = params => req.get('/getUserList',params)
