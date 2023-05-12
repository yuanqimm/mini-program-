// pages/detail/detail.js
var common= require("../../common.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    article:{
      id:"32644",
      title:"12连冠！我校问鼎“回响中国”2022年度中国高水平独立学院榜",
      poster:"https://www.xujc.com/uploads2/img/2022/12/28/20221228145843.jpg",
      content:"12月26日，2022“回响中国”腾讯新闻·教育频道年度高峰论坛在北京举行。厦门大学嘉庚学院以排名第一的成绩，登上2022年度中国高水平独立学院榜。此次获奖是对我校办学水平和办学成果的肯定。我校已连续12年入选腾讯教育年度总评榜，位列独立学院榜榜首，先后获得中国最具品牌价值独立学院、中国最具品牌影响力独立学院、最具领导力独立学院、最具知名度独立学院、品牌实力独立学院、综合影响力独立学院、综合实力独立学院、中国高水平独立学院等称号。",
      add_date:"2022-12-28"
    }
  },
  addFavorites:function(options){
    let article=this.data.article;
    wx:wx.setStorageSync(article.id, article);
    this.setData({
      isAdd:true
    })

  },
  cancelFavorites:function(){
    let article=this.data.article;
    wx.removeStorageSync(article.id);
    this.setData({
        isAdd:false
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
      let id=options.id
      let article=wx.getStorageSync(id)
      if(article!=""){
        this.setData({
          article:article,
          isAdd:true
        })
      }
      else{
        let result=common.getNewsDetail(id)
        if(result.code==200){
          this.setData({
            article:result.news
          })
        }
      }
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