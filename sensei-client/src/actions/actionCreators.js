export function socialLogin(provider, profile) {
  return {
    type: 'SOCIAL_LOGIN',
    provider,
    profile
  }
}
export function socialLogout(provider) {
  return {
    type: 'SOCIAL_LOGOUT',
    provider
  }
}
export function listCourses(courses) {
  return {
    type: 'LIST_COURSES',
    courses
  }
}

export function listTeachers(teachers) {
  return {
    type: 'LIST_TEACHERS',
    teachers
  }
}

export function addListCourses(courses) {
  return {
    type: 'ADD_LIST_COURSES',
    courses
  }
}
export function addCourse(course) {
  return {
    type: 'ADD_COURSE',
    course
  }
}
export function refreshCourses() {
  return {
    type: 'REFRESH_COURSES'
  }
}
export function listTeacher(teachers) {
  
}