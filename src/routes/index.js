const newsRouter = require('./news')
const siteRouter = require('./site')
function route(app) {
    app.use('/news',newsRouter)
    app.use('/',siteRouter)//Cứ gạch chéo thì đưa xuống
}

module.exports = route;
