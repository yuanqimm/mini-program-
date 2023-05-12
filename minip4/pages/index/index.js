// pages/index/index.js
var common= require("../../common.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:"hello",
    swiperImg:[
      {src:"https://www.xujc.com/uploads2/img/2022/10/16/2022101619565261.jpg"},
      {src:"https://www.xujc.com/uploads2/img/2022/11/01/20221101095655.jpg"},
      {src:"https://www.xujc.com/uploads2/img/2022/11/04/20221104153257.jpg"}
    ],
    newsList:[
      

    ]
   
  },
  goToDetail:function(e){
    let id=e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../detail/detail?id='+id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let list=common.getNewsList()
    this.setData(
      {
        newsList:list
      }
    )
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})