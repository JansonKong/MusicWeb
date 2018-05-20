const state = {
  songList: [],
  playerSongList: [{
    src: 'https://p.qpic.cn/music_cover/oQ7QIr12iawo8AdKZPxIeuUneZQTUL489DXnNEkpG9Ltz39j6dBOsfw/300?n=1',
    songName: '望',
    singer: '张碧晨',
    songTime: '4:30'
  }],
  songIndex: 1,
  songPlayNow: {
    src: 'https://p.qpic.cn/music_cover/oQ7QIr12iawo8AdKZPxIeuUneZQTUL489DXnNEkpG9Ltz39j6dBOsfw/300?n=1',
    songName: '望',
    singer: '张碧晨',
    songTime: '4:30'
  },
  linkIndex: 1,
  tagLink: 1,
  isLogin: false,
  singer: [],
  playing: false,
  playList: [],
  currentIndex: -1,
  serverUrl: "http://localhost:8080/MusicWeb",
  currentSong: [],
  user: {
    userIcon: '',
    userName: '',
    userId: '',
    password: '',
    mySongList: []
  }

}

export default state
