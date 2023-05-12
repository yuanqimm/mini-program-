// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
    num:"0",
    op:"",
    result:null,
    isClear:false
    },
    /**
    * 数字按钮事件函数
    */
   numBtn:function(e){
    var num=e.target.dataset.val
    if(this.data.num==="0"||this.data.isClear){
        this.setData({num:num})
        this.data.isClear=false
    }else{
        this.setData({num:this.data.num+num})
    }
   },
    /**
    * 运算符按钮事件函数
    */
   opBtn:function(e){
        var op=this.data.op
        var num=Number(this.data.num)
        this.setData({
            op:e.target.dataset.val
        })
        if(this.data.isClear){
            return
        }
        this.data.isClear=true
        if(this.data.result===null){
            this.data.result=num
            return
        }
        if(op==="＋"){
            this.data.result=this.data.result+num
        }
        else if(op==="－"){
            this.data.result=this.data.result-num
        }
        else if(op==="×"){
            this.data.result=this.data.result*num
        }
        else if(op==="÷"){
            this.data.result=this.data.result/num
        }
        else if(op==="%"){
            this.data.result=this.data.result%num
        }
        this.setData({
            num:this.data.result+""
        })
   },
     /**
     * 生命周期函数--监听页面加载
     */
    resetBtn:function(){
    this.data.result=null
    this.data.isClear=false
    this.setData({
        op:"",
        num:""
    })
    },

    delBtn:function(){
        var num=this.data.num.substr(0,this.data.num.length-1)
        this.setData({
            num:num===""?"0":num
        })
    },

    dotBtn:function(){
        if(this.data.isClear){
            this.setData({
                num:"0."
        })
        this.data.isClear=false
        return
        }
        if(this.data.num.indexOf(".")>0){
            return
        }
        this.setData({
            num:this.data.num+"."
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