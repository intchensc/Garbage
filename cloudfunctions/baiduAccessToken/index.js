const rq = require('request-promise')
// 
/**
 * 获取百度ai AccessToken
 */
exports.main = async(event, context) => {
  let clientId = 'oaTN2sqjC4C0UzZgZmF4UQkZ',
  grantType = 'client_credentials',
  clientSecret = '4mGaBa6rRrS7sA5LiOxMidS77lnl9pSU',
  url = `https://aip.baidubce.com/oauth/2.0/token`

  return new Promise(async(resolve, reject) => {
    try {
      let data = await rq({
        method: 'POST',
        url,
        form: {
          "grant_type": grantType,
          "client_secret": clientSecret,
          "client_id": clientId
        },
        json: true
      })
      resolve({
        code: 0,
        data,
        info: '操作成功！'
      })
    } catch (error) {
      console.log(error)
      if (!error.code) reject(error)
      resolve(error)
    }
  })
}