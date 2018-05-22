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
  currentSong: {
    // songID: 1,
    // songName: "Welcome To New York",
    // albumID: 1,
    // singerID: 1,
    // playCount: 0,
    // lyrics: "/lyrics/Taylor Swift/1989/Welcome To New York.txt",
    // duration: "03:32",
    // image: "/image/album/Taylor Swift/1989.jpg",
    // language: "英语",
    // url: "/music/Taylor Swift/1989/Welcome To New York.m4a",
    // albumName: "1989",
    // singerName: "Taylor Swift"
  },
  user: {
    userIcon: '',
    userName: '',
    userId: '',
    password: '',
    mySongList: []
  }

}

export default state
