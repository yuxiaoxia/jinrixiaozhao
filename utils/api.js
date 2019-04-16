import http from './http'

const prefix = '/';
export const requestCompanyList = (params) => {
  return http({
    url: `endpoints/company`,
    method: 'GET',
    data: params,
  })
}
export const requestCompanyDetail = (params) => {
  return http({
    url: `endpoints/company/${params.id}`,
    method: 'GET',
    data: params,
  })
}
export const requestCompanyEmployment = (params) => {
  return http({
    url: `endpoints/employment`,
    method: 'GET',
    data: params,
  })
}
