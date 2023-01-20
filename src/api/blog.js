import request from '@/utils/request'

//获取博客列表信息
export function getblogdata(parm) {
    // 返回一个axios对象 => promise  // 返回了一个promise对象
    return request({
        url: '/article/page', // 因为所有的接口都要跨域 表示所有的接口要带 /api
        method: 'get',
        params: parm
    })
}