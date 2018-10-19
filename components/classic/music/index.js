// components/classic/music/index.js
import {
  classicBehavior
} from '../classic-beh.js';
const backgroundAudioManager = wx.getBackgroundAudioManager()

Component({
  /**
   * 组件的属性列表
   */
  behaviors: [classicBehavior],
  properties: {
    playing: {
      type: Boolean
    },
    src: {
      type: String
    }
  },
  attached: function() {
    this._recoverPlaying()
    this._monitorSwitch()
  },
  /**
   * 组件的初始数据
   */
  data: {
    playingUrl: 'images/player@playing.png',
    waittingUrl: 'images/player@waitting.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onPlay() {
      if (this.properties.playing) {
        this.setData({
          playing: false
        })
        backgroundAudioManager.stop()
      } else {
        this.setData({
          playing: true
        })
        backgroundAudioManager.src = this.properties.src;
      }
    },
    _recoverPlaying: function() {
      if (backgroundAudioManager.paused) {
        this.setData({
          playing: false
        })
        return
      }
      if (backgroundAudioManager.src == this.properties.src) {
        if (!backgroundAudioManager.paused) {
          this.setData({
            playing: true
          })
        }
      }
    },

    _monitorSwitch: function() {
      backgroundAudioManager.onPlay(() => {
        this._recoverPlaying()
      })
      backgroundAudioManager.onPause(() => {
        this._recoverPlaying()
      })
      backgroundAudioManager.onStop(() => {
          this._recoverPlaying()
        }),
        backgroundAudioManager.onEnded(() => {
          this._recoverPlaying()
        })
    }
  }
})