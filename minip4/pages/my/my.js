// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      num:0,
      nickName:"未登录",
      src:"/images/my.png",
      newsList:[],
      isLogin:false
  },
  /*跳转到详情页*/ 
  goToDetail:function(e){
    let id=e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../detail/detail?id='+id,
    })
  },
  /*获取用户信息*/ 
  getUserProfile(e){
    wx.getUserProfile({
      desc: 'desc',
      success:(res)=>{
        //console.log(res)
        this.setData({
          nickName:res.userInfo.nickName,
          src:res.userInfo.avatarUrl,
          isLogin:true
        })
        this.getMyFavorites()
      }
    })
  },
  /**获取收藏列表 */
  getMyFavorites:function(){
    let info=wx.getStorageInfoSync()
    let keys=info.keys
    let num=keys.length
    let myList=[]
    for(var i=0;i<num;i++){
      let obj=wx.getStorageSync(keys[i])
      myList.push(obj)
    }
    this.setData({
      newsList:myList,
      num:num
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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
    if(this.data.isLogin){
      this.getMyFavorites()
    }
    
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