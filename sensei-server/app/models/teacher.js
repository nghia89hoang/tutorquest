const mongoose, {Schema} = require('mongoose')

let teacherSchema = Schema({
    _id: ObjectId,
    fullname: String,  
    email: String,
    avatar_src: String,
    dob: Date,
    gender: String,
    education: String,
    more_info: String,
    street_address: String,
    subjects: [String],
    reviews: [
      {
        from: 'Nghia',
        stars: 4,
        text: 'good teacher',
        date: '11/10/2016'
      },
      {
        from: 'Thang',
        stars: 5,
        text: 'Great teacher',
        date: '11/10/2016'
      },
    ]
})