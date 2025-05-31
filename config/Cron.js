

const cron = require('node-cron');

module.exports = function () {
  // Cron đơn giản chạy mỗi 10 giây (chỉ để test)
  cron.schedule('*/10 * * * * *', () => {
    console.log('Cron job đang chạy mỗi 10 giây...');
  });
};
