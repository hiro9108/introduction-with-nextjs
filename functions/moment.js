import moment from "moment"
import "moment/locale/ja"

moment.locale("en")

exports.handler = function (event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: moment().format()
  })
}