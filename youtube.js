var player;
      var named;
      var indexed;
      var getValued;
      var num = 0;
      var indexG;
      var vList;
      var nowIndex;
      var speaker;
      function aaa(){return speaker};

      var listF = ["7_S_EjaUhzE", "Bpj02hx083c", "CvNeikSsivw"];
      var listJ = ["lKjI9ehi3A4", "NDFULbHgL6E", "Bbp9ZaJD_eA"];
      var listC = ["JdDPVmfETy8", "lKMGL_CHBik", "WadaEMcVojM"];

      var exist 

      var arr = {
        name: "我的精選",
        songName: [],
        time: [],
        cdName: [],
        id: [],
        like: [],
        play:[],
      };

      function ejectStart(index, arrs) {
        indexG = index;
        function loadPlaylist_video_ids() {
          player.cuePlaylist({
            playlist: arrs.id,
            index: index,
            startSeconds: 0,
            suggestedQuality: "small",
          });
        }

        loadPlaylist_video_ids();
      }

      function ejectEnd(name, index, getValue) {
        var lists = [
          {
            name: "范瑋琪精選",
            songName: ["我們之間的事", "I think i", "你是答案"],
            time: ["4:25", "4:00", "4:45"],
            cdName: ["真善美", "我們的紀念日", "哲學家"],
            id: ["7_S_EjaUhzE", "Bpj02hx083c", "CvNeikSsivw"],
            like: ["", "", ""],
            play: ["", "", ""],
          },
          {
            name: "周杰倫精選",
            songName: ["稻香", "世界末日", "七里香"],
            time: ["3:43", "4:22", "5:03"],
            cdName: ["魔杰座", "范特西", "七里香"],
            id: ["lKjI9ehi3A4", "NDFULbHgL6E", "Bbp9ZaJD_eA"],
            like: ["", "", ""],
            play: ["", "", ""],
          },
          {
            name: "張宇精選",
            songName: ["雨一直下", "傻瓜與野丫頭", "小小的太陽"],
            time: ["4:45", "4:24", "5:00"],
            cdName: ["雨一直下", "大丈夫", "月亮、太陽"],
            id: ["JdDPVmfETy8", "lKMGL_CHBik", "WadaEMcVojM"],
            like: ["", "", ""],
            play: ["", "", ""],
          },
        ];

        function run(name) {
          if (name === "范瑋琪精選") {
            return 0;
          } else if (name === "周杰倫精選") {
            return 1;
          } else if (name === "張宇精選") {
            return 2;
          }
        }

        var newSong = lists[run(name)];

        arr.songName.push(newSong.songName[index]);
        arr.time.push(newSong.time[index]);
        arr.cdName.push(newSong.cdName[index]);
        arr.id.push(newSong.id[index]);
        arr.like.push("fa-heart");
        arr.play.push("");
      }

      window.onYouTubeIframeAPIReady = function () {
        player = new YT.Player("player", {
          height: "390",
          width: "640",
          playerVars: { controls: 0 },           
          events: {
            onReady: turn,
            onStateChange: onPlayerStateChange,
          },
        });
      };

      function onPlayerStateChange(event) {
        if(event.data === 1){
          speaker = player.getPlaylistIndex();
          //vList.play[speaker] = ' fa-volume-up';
          
        }
        if (event.data === 5) {
          
          document.querySelector(".player").src =
            "https://cdn0.iconfinder.com/data/icons/media-greyscale/60/001_-_play-256.png";
            
        }else if (event.data === 2) {
          document.querySelector(".player").src =
            "https://cdn0.iconfinder.com/data/icons/media-greyscale/60/001_-_play-256.png";
            
        }else {
          document.querySelector(".player").src =
            "https://cdn0.iconfinder.com/data/icons/media-greyscale/60/004_-_Pause-256.png";
        }
           
        
        if (event.data === 0){
          if(exist){ player.playVideo() ;
              nowIndex = player.getPlaylistIndex();
              document.querySelector('.song').textContent = vList[0].songName[player.getPlaylistIndex()];
              document.querySelector('.cd').textContent = vList[0].cdName[player.getPlaylistIndex()];
              document.querySelector('.time').textContent = vList[0].time[player.getPlaylistIndex()];
          }
          else{
            nowIndex = player.getPlaylistIndex();
            player.stopVideo();
            player.playVideoAt(indexG);
            player.stopVideo();
            
            }
            
        } 
      }

      function turn() {
        var i = 0;

        document.querySelector(".fan").addEventListener("click", function () {
          function loadPlaylist_video_ids() {
            player.cuePlaylist({
              playlist: listF,
              listType: "playlist",
              index: 0,
              startSeconds: 0,
              suggestedQuality: "small",
            });
          }
          player.stopVideo();
          loadPlaylist_video_ids();
          document.querySelector('.cd').style.color = 'pink';
          document.querySelector('.time').style.color = 'pink';
          document.querySelector('.song').style.color = 'pink';
        });

        document.querySelector(".jhou").addEventListener("click", function () {
          function loadPlaylist_video_ids() {
            player.cuePlaylist({
              playlist: listJ,
              listType: "playlist",
              index: 0,
              startSeconds: 0,
              suggestedQuality: "small",
            });
          }
          player.stopVideo();
          loadPlaylist_video_ids();
          document.querySelector('.cd').style.color = 'pink';
          document.querySelector('.time').style.color = 'pink';
          document.querySelector('.song').style.color = 'pink';
        });

        document.querySelector(".chang").addEventListener("click", function () {
          function loadPlaylist_video_ids() {
            player.cuePlaylist({
              playlist: listC,
              listType: "playlist",
              index: 0,
              startSeconds: 0,
              suggestedQuality: "small",
            });
          }
          player.stopVideo();
          loadPlaylist_video_ids();
          document.querySelector('.cd').style.color = 'pink';
          document.querySelector('.time').style.color = 'pink';
          document.querySelector('.song').style.color = 'pink';
        });

        document.querySelector(".love").addEventListener("click", function () {
          function loadPlaylist_video_ids() {
            player.cuePlaylist({
              playlist: arr.id,
              listType: "playlist",
              index: 0,
              startSeconds: 0,
              suggestedQuality: "small",
            });
          }

          player.stopVideo();
          loadPlaylist_video_ids();
          document.querySelector('.cd').style.color = 'pink';
          document.querySelector('.time').style.color = 'pink';
          document.querySelector('.song').style.color = 'pink';
          
        });

        document
          .querySelector(".player")
          .addEventListener("click", function () {
            if (
              document.querySelector(".player").src ===
              "https://cdn0.iconfinder.com/data/icons/media-greyscale/60/004_-_Pause-256.png"
            ) {
              player.playVideo();
            } else {
              player.stopVideo();
            }
          });
      }

      var vm = new Vue({
        el: "#add",

        data: {
          test1:aaa(),
          test:'',
          number: 0,
          name: "",
          check: "",
          songName:'',
          time:"",
          cdName: "",
          list: [],
          lists: [
            {
              name: "范瑋琪精選",
              songName: ["我們之間的事", "I think i", "你是答案"],
              time: ["4:25", "4:00", "4:45"],
              cdName: ["真善美", "我們的紀念日", "哲學家"],
              id: ["7_S_EjaUhzE", "Bpj02hx083c", "CvNeikSsivw"],
              like: ["", "", ""],
              play: ["", "", ""],
            },
            {
              name: "周杰倫精選",
              songName: ["稻香", "世界末日", "七里香"],
              time: ["3:43", "4:22", "5:03"],
              cdName: ["魔杰座", "范特西", "七里香"],
              id: ["lKjI9ehi3A4", "NDFULbHgL6E", "Bbp9ZaJD_eA"],
              like: ["", "", ""],
              play: ["", "", ""],
            },
            {
              name: "張宇精選",
              songName: ["雨一直下", "傻瓜與野丫頭", "小小的太陽"],
              time: ["4:45", "4:24", "5:00"],
              cdName: ["雨一直下", "大丈夫", "月亮、太陽"],
              id: ["JdDPVmfETy8", "lKMGL_CHBik", "WadaEMcVojM"],
              like: ["", "", ""],
              play: ["", "", ""],
            },
            arr,
          ],
        },
        
      watch: {
        lists:{
          handler(val,oldVal){
            if(this.test === ''){
              this.test = 123
            }else if(this.test === 123){
              this.test = ''
            };
            //alert(this.test1)
          
          },
          deep:true
          
              },
            
          },
                        
        methods: {
          decreaseIndex: function () {
            
            if (nowIndex > 0) {
              nowIndex = nowIndex - 1;
            } else {
              nowIndex = 0;
            }

            this.songName = this.lists[this.number].songName[nowIndex];
            this.time = this.lists[this.number].time[nowIndex];
            this.cdName = this.lists[this.number].cdName[nowIndex];
          },

          addIndex: function () {
            if (nowIndex < this.lists[this.number].songName.length - 1) {
              nowIndex = nowIndex + 1;
            } else {
              nowIndex = this.lists[this.number].cdName.length - 1;
            }

            this.songName = this.lists[this.number].songName[nowIndex];
            this.time = this.lists[this.number].time[nowIndex];
            this.cdName = this.lists[this.number].cdName[nowIndex];
          },

          emit: function (i, y) {
            if (i === 3) {
              document.querySelector(".wrapL").style.display = "none";
              document.querySelector(".like").style.display = "none";
            } else {
              document.querySelector(".wrapL").style.display = "block";
              document.querySelector(".like").style.display = "block";
            }

            document.querySelector('#player').style.display = 'none';
            document.querySelector('.cd').style.color = 'pink';
            document.querySelector('.time').style.color = 'pink';
            document.querySelector('.song').style.color = 'pink';

            this.number = i;
            vList = [];
            vList.push(this.lists[i]);
            this.list = vList;
            var yT = "translate(0px," + y + "px) ";
            document.querySelector(
              ".fas.fa-angle-double-right"
            ).style.transform = yT;
          },

          ejectStart: function (song, time, cd, index, name) {
            this.songName = song;
            this.time = time;
            this.cdName = cd;

            document.querySelector('#player').style.display = 'block';
            document.querySelector('.cd').style.color = 'black';
            document.querySelector('.time').style.color = 'red';
            document.querySelector('.song').style.color = 'black';

            this.name = name;
            nowIndex = index;

            var newList = this.lists;
            var arrs;
            if (name === "范瑋琪精選") {
              arrs = newList[0];
            } else if (name === "周杰倫精選") {
              arrs = newList[1];
            } else if (name === "張宇精選") {
              arrs = newList[2];
            } else {
              arrs = newList[3];
            }

            ejectStart(index, arrs);
          },

          ejectEnd: function () {
            
            var newList = this.lists;

            function getValue() {
              return newList[0].id[0];
            }

            var name = this.name;
            var index = nowIndex;

            this.lists[this.number].like[nowIndex] = "fa-heart";

            ejectEnd(name, index, getValue());
          },

          turnNum: function () {
            if (num === 0) {
              num = 1;
            } else {
              num = 0;
            }
          },
        },

        

        mounted() {
          var listEl = document.querySelector(".list");
          var listElObj = window.getComputedStyle(listEl, null);

          document
            .querySelector(".next")
            .addEventListener("click", function () {
              player.nextVideo();
              player.stopVideo();
            });

          document
            .querySelector(".previous")
            .addEventListener("click", function () {
              player.previousVideo();
              player.stopVideo();
            });

          document.querySelector(".wrapL").onclick = function () {
            document.querySelector(".wrapL").style.opacity = 0.6;
            var change = function () {
              document.querySelector(".wrapL").style.opacity = 0.0;
            };
            setTimeout(change, 150);
          };

          document.querySelector(".repeat ").onclick = function () {
            if (
              document.querySelector(".repeat .cover").style.display !==
              "block"
            ) {
              document.querySelector(".repeat .cover").style.display =
              "block";
              exist = 1;
              vLiter = player.getPlaylistIndex()
            } else {
              document.querySelector(".repeat .cover").style.display =
              "none";
              exist = 0;
              vLiter = player.getPlaylistIndex()
            }
          };

          document.querySelector(".list .motion").onclick = function (e) {
            e.preventDefault();
            if (listElObj.transform === "matrix(1, 0, 0, 1, 0, 0)") {
              document.querySelector(".list").style.transform =
                "translate(-500px) rotate(45deg)";

              document.querySelector(".cdPlayer").style.transform =
                "translate(-300px)";
            } else if (listElObj.transform !== "matrix(1, 0, 0, 1, 0, 0)") {
              document.querySelector(".list").style.transform =
                "translate(0px) rotate(0deg)";
              document.querySelector(".cdPlayer").style.transform =
                "translate(0px)";
            }
          };

          document.querySelector(".previous").onclick = function () {
            document.querySelector(".previous .wrap").style.display = "block";
            var change = function () {
              document.querySelector(".previous .wrap").style.display = "none";
            };
            setTimeout(change, 150);
          };
          document.querySelector(".next").onclick = function () {
            document.querySelector(".next .wrap").style.display = "block";
            var change = function () {
              document.querySelector(".next .wrap").style.display = "none";
            };
            setTimeout(change, 150);
          };
          document.querySelector(".player").onclick = function (e) {
            if(document.querySelector('.cd').style.color === 'black'){
              if (
                document.querySelector(".player").src ===
                "https://cdn0.iconfinder.com/data/icons/media-greyscale/60/001_-_play-256.png"
              ) {
                document.querySelector(".player").src =
                  "https://cdn0.iconfinder.com/data/icons/media-greyscale/60/004_-_Pause-256.png";
              } else {
                document.querySelector(".player").src =
                  "https://cdn0.iconfinder.com/data/icons/media-greyscale/60/001_-_play-256.png";
              }
            }
            
          };
        },

      });