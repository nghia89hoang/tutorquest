
const courses = [
  {
    _id: 'c1',
    subject: 'Calculus',
    level: '2',    
    teacher: 't1',    
    duration: '', //
    city: 'Ha Noi',
    about: 'lorem ipsum ,...',
    num_view: 3,
    num_assigns: 2,
    schedule_in_week: [
      {
        day: 'mon',
        start: '17:00',
        end: '19:00'
      },
      {
        day: 'wed',
        start: '17:00',
        end: '19:00'
      },
      {
        day: 'fri',
        start: '17:00',
        end: '19:00'
      }
    ],
    // Maybe: in person / in group
    type: 'private',
    // teaching location: student resident or 
    prefer_location: 'D.1st - D.4th - D.3rd',    
    price_per_month: 100,
    rating: [{
      author: 'hoc tro 1',
      text: 'de hieu',
      stars: '4'
    },
    {
      author: 'hoc tro 2',
      text: 'de hieu, nhiet tinh',
      stars: '5'
    }]
  },
  {
    _id: 'c2',
    subject: 'Algebra',
    level: '0',
    teacher: 't1',
    duration: '', //
    city: 'Ho Chi Minh',
    about: 'How to plus 1 to 3',
    num_view: 3,
    num_assigns: 2,
    schedule_in_week: [
      {
        day: 'mon',
        start: '17:00',
        end: '19:00'
      },
      {
        day: 'wed',
        start: '17:00',
        end: '19:00'
      },
      {
        day: 'fri',
        start: '17:00',
        end: '19:00'
      }
    ],
    // Maybe: in person / in group
    type: 'private',
    // teaching location: student resident or 
    prefer_location: 'D.1st - D.4th - D.3rd',    
    price_per_month: 120,
    rating: [{
      author: 'hoc tro 1',
      text: 'de hieu',
      stars: '4'
    },
    {
      author: 'hoc tro 2',
      text: 'blah blah blah...',
      stars: '5'
    }]
  },
  {
    _id: 'c3',
    subject: 'English',
    level: '1',
    teacher: 't1',
    duration: '', //
    city: 'Da Nang',
    about: 'About this course...',
    num_view: 3,
    num_assigns: 2,
    schedule_in_week: [
      {
        day: 'mon',
        start: '17:00',
        end: '19:00'
      },
      {
        day: 'wed',
        start: '17:00',
        end: '19:00'
      },
      {
        day: 'fri',
        start: '17:00',
        end: '19:00'
      }
    ],
    // Maybe: in person / in group
    type: 'private',
    // teaching location: student resident or 
    prefer_location: 'D.1st - D.4th - D.3rd',    
    price_per_month: 150,
    rating: [{
      author: 'hoc tro 1',
      text: 'de hieu',
      stars: '4'
    },
    {
      author: 'hoc tro 2',
      text: 'de hieu, nhiet tinh',
      stars: '5'
    }]
  }
]
// Catch teachr on the go
const teachers = [
  {
    _id: 't1',
    facebook: {
      avatar: 'https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e35/12346073_1035047523184672_768982339_n.jpg',
    },
    tutor: {
      display_name: 'Dan Cowel',
      contact_email: 'dc@email.com',      
      dob: '01/10/1990',
      city: 'Ho Chi Minh',
      gender: 'male',
      education: 'BA in IT, XYZ University',
      more_info: 'blah blah blah...',
      street_address: 'Ho Chi Minh',
      subjects: [
        'Javascript', 'Nodejs', 'express'
      ],
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
    }
  }
]

module.exports = {
  courses,
  teachers
}