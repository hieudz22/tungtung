module.exports = {
  url: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/CLUB3333',
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // Nếu bạn muốn đặt dbName riêng, có thể thêm:
    dbName: process.env.DB_NAME || 'CLUB3333',
  },
};
