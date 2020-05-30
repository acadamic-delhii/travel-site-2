exports.handler = function(event, context, callback) {
    let secretContent = `
    <h3>Wise choice!</h3>
    <p>Feel free to contact me</p>
    `

    let body

    if (event.body) {
        body = JSON.parse(event.body)
    } else{
        body = {}
    }

    if (body == "iwantyou") {
        callback(null, {
            statusCode: 200, 
            body: secretContent
        })
    } else {
        callback(null, {
            statusCode: 401
        })
    }
}