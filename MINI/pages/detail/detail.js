// pages/detail/detail.js
Page({
  tapHandle:function(e){
    var id = e.target.dataset.index;
    console.log(id)
  },
  tapHandle3:function(){
    
    console.log("父元素")
  },
  tapHandle4:function(){
    
    console.log("阻止魔炮子元素")
  },
  tampHandle5:function(){
    console.log("组织冒泡之父元素")
  },
  /**
   * 页面的初始数据
   */
  data: {
    number:1,
    imageList:[],
    info:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /*console.log("获取上一个传递的参数")
    console.log(options)*/
    /*1.发请求获取轮播图*/ 
    wx.request({
      url:"http://127.0.0.1:3000/message",
      methods:"GET",
      success:(res)=> {
        //console.log(res.data)
        this.setData({
          imageList:res.data
        })
      }
    })
    /*2.请求获取商品信息*/
    var pid = options.pid;
    wx.request({
      url:"http://127.0.0.1:3000/product",
      methods:"GET",
      data:{pid:pid},
      success:(res)=>{
        console.log(res.data)
        this.setData({
          info:res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /*+ - 操作*/
addNum:function(){
  var n =this.data.number + 1;
  if (n>10){
    n= this.data.number + 2
  }else if(n>999) n=999;
  this.setData(
    {number:n}
  )
},
subNum:function(){
  var n = this.data.number - 1;
  if (n<0){
    n=0
  }
  this.setData({
    number:n
  })
}
})