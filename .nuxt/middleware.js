const middleware = {}

middleware['seo'] = require('..\\middleware\\seo.js')
middleware['seo'] = middleware['seo'].default || middleware['seo']

export default middleware
