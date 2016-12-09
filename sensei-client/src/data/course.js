
const courses = [
  {
    code: 'c1',
    subject: 'Calculus',
    level: '2',
    teacher: 't1',
    duration: '', //
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
    code: 'c2',
    subject: 'Algebra',
    level: '0',
    teacher: 't1',
    duration: '', //
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
      text: 'de hieu, nhiet tinh',
      stars: '5'
    }]
  },
  {
    code: 'c3',
    subject: 'English',
    level: '1',
    teacher: 't1',
    duration: '', //
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

export default courses