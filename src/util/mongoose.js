module.exports = {
  // Chuyển đổi một mảng các đối tượng Mongoose thành mảng các đối tượng JavaScript thông thường
  mutipleMongooseToObject: function (mongooses) {
    return mongooses.map((mongoose) => mongoose.toObject());
  },

  // Chuyển đổi một đối tượng Mongoose thành đối tượng JavaScript thông thường
  mongooseToObject: function (mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
  },
};
