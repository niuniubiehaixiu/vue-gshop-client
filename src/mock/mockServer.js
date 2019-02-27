/*
使用mockjs来mock数据接口
 */
import Mock from 'mockjs'
import data from './data'

Mock.mock('/goods', {code:0, data:data.goods})
Mock.mock('/info', {code:0, data:data.info})
Mock.mock('/ratings', {code:0, data:data.ratings})
