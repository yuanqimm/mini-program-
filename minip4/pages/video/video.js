

// pages/video/video.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    danmuTxt:"",
    list:[
      {
        id:"32531",
        title:"新闻在线：消防防恐齐演练，“嘉园”安全筑防线",
        videoUrl:"https://c.xujc.com/uploads/video/2022/11/20221116171978214.mp4"
      },{
        id:"32244",
        title:"【态度短片】为什么辩论是用“打”的？",
        videoUrl:"https://c.xujc.com/uploads/video/2022/07/20220715091594381.mp4"
      
      },{
        id:"32131",
        title:"厦门大学嘉庚学院2022年招生宣传片《最好的自己》",
        videoUrl:"https://c.xujc.com/uploads/video/2022/06/20220610153756061.mp4"
      
      }
    ]
  },
  /**
   * 
      自定义函数--播放视频
   */
  playVideo:function(e){
    this.videoCtx.stop()
    this.setData(
      {
        src:e.currentTarget.dataset.url
      }
    ) 
    this.videoCtx.play()
  }, /**
  * 
     自定义函数--播放视频
  */
  getDanmu:function(e){
    this.setData({
      danmuTxt:e.detail.value
    })
  },
  sendDanmu:function(e){
    this.videoCtx.sendDanmu({
      text:this.data.danmuTxt,
      color:"red"
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.videoCtx=wx.createVideoContext('myVideo')

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