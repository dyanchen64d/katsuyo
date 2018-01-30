const config = require('../../config.js')

Page({
  data: {
    inputValue: '',
    resultData: {},
    resultKeys: [],
    katsuyoKeys: [
      'katsuyo_jisho_js',
      'katsuyo_masu_js',
      'katsuyo_te_js',
      'katsuyo_ta_js',
      'katsuyo_nai_js',
      'katsuyo_nakatta_js',
      'katsuyo_ba_js',
      'katsuyo_shieki_js',
      'katsuyo_ukemi_js',
      'katsuyo_meirei_js',
      'katsuyo_kano_js',
      'katsuyo_ishi_js'
    ],
    katsuyoNames: [
      '辞書形',
      '〜ます形',
      '〜て形',
      '〜た形',
      '〜ない形',
      '〜なかった形',
      '〜ば形',
      '使役形',
      '受身形',
      '命令形',
      '可能形',
      '〜う形'
    ]
  },
  onLoad: function () {
    //
  },
  submit () {
    if (!this.data.inputValue) return

    wx.showLoading({ title: 'loading' })
    let _this = this
    // console.log(this.data.inputValue);
    wx.request({
      url: config.domain + 'search-katsuyo',
      method: 'POST',
      data: { word: this.data.inputValue },
      success (res) {
        wx.hideLoading()
        // console.log(res.data);
        let keys = []
        for (let key in res.data) { keys.push(key) }
        _this.setData({ resultData: res.data, resultKeys: keys })
      }
    })
  },
  inputting (e) {
    this.data.inputValue = e.detail.value
  }
})
