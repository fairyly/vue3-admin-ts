import request from '../utils/request';

const loginApi = {
  userLogin: '/api/auth/user/login',
  userInfo: '/api/auth/user/userInfo'
}

class Service {
  /**
   * 用户登录
   */
  static postLogin(data: any) {
    return request({
      url: loginApi.userLogin,
      method: 'POST',
      json: true,
      data
    }).then((res) => {
      if (res.status === 0) {
        return Promise.resolve(res)
      }
      return Promise.reject(res)
    })
  }

  /**
   * 查询用户
   */

  static getAuthUserInfo(data: any) {
    return request({
      url: loginApi.userInfo,
      method: 'get',
      json: true,
      data
    }).then((res) => {
      if (res.status === 0) {
        return Promise.resolve(res)
      }
      return Promise.reject(res)
    })
  }

}
export default Service


