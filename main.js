// const subscriberCount = document.getElementById('subs')
const Recurly = require('recurly')
const getRecurly = new Recurly(require('./recurly.config'))

getRecurly.subscription.list('active', data => console.log(data))
