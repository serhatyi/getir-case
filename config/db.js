require('dotenv/config');
const mongoose =  require('mongoose');

const connectDatabase = () => { mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> console.info('DB Connected!'))
.catch(err => console.err('err'));
};
module.exports = connectDatabase ;