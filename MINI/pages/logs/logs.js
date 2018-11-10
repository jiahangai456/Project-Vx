Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagelist:[],
    imgdetail:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url:"http://127.0.0.1:3000/imageslist",
      methods:"GET",
      success:(res)=>{
        console.log(res.data)
      this.setData({
        imagelist:res.data
      })
      }
    }),
    wx.request({
      url:"http://127.0.0.1:3000/imgdetail",
      methods:"GET",
      success:(res)=>{
        console.log(res.data)
        this.setData({
          imgdetail:res.data
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
    console.log("3.show....")
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
    console.log("5.下拉")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("6.上啦")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})