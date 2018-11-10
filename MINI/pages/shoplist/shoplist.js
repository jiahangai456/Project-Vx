// pages/shoplist/shoplist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      shoplist:[],
      pageIndex:0,
      pageSize:8,
      hasMore:true  //用于记录是否还有更多数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  loadMore:function(){
    //加载数据
    wx.request({
      url:"http://127.0.0.1:3000/produts",
      data:{
            pno:++this.data.pageIndex,
            pageSize:this.data.pageSize
          },
      methods:"GET",
      success:(res)=>{
        //判断是否有更多的数据
        var pageCount= res.data.pageCount;
        
        console.log(pageCount,)
        if(this.data.pageIndex>=pageCount){
          this.setData({
            hasMore:false
          })
        }

        //console.log(res.data.data)
        var rows=this.data.shoplist.concat(res.data.data)
        this.setData({
          shoplist:rows
        })
       
      }
    })
  },
  onLoad: function (options) {
    this.loadMore();
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
    console.log("下拉")
    /*1.显示第一页数据清空*/ 
    this.setData({
      pageIndex:0,
      shoplist:[]
    })
     /*2.加载攻多*/
     this.loadMore();
     //挺直下拉动作多次执行
   wx.stopPullDownRefresh() 
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.loadMore()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  showDetail:function(e){
    //自定义的方法
    var pid = e.target.dataset.pid;
    console.log(pid)
    //1跳转方法 不可返回
    //相对路径跳转
    //绝对路径跳转 /pages/detail/detail
    /*wx.redirectTo({
      //url:"../detail/detail"
      url:"/pages/detail/detail"
    })*/
    //跳转方法2 可以返回
   wx.navigateTo({
      url:"../detail/detail?pid="+pid
    })
    //跳转方法3
     /*wx.reLaunch({
      url:"../detail/detail"+pid
    })*/
  }
})