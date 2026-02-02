const reels = [
  {
    isMuted: true,
    username: "SkullMan",
    likeCount: 12800,
    isLiked: false,
    commentCount: 540,
    caption: "Sunset at Bali hits different ✨🌅",
    video: "./reel/video1.mp4",
    userProfile:
      "https://media.istockphoto.com/id/1341408926/photo/skull-with-virtual-reality-glasses.webp?a=1&s=612x612&w=0&k=20&c=QrAubbYc4W7ZgiHVJ5ayK73S6hnotcPs-PC__0y7Zas=",
    shareCount: 320,
    isFollow: false,
  },
  {
    isMuted: true,
    username: "techno_vision",
    likeCount: 8900,
    isLiked: true,
    commentCount: 310,
    caption: "AI will not replace you. Someone using AI will. 🤖",
    video: "./reel/video2.mp4",
    userProfile:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=800",
    shareCount: 180,
    isFollow: true,
  },
  {
    isMuted: true,
    username: "fitbyzoe",
    likeCount: 15400,
    isLiked: false,
    commentCount: 760,
    caption: "5 min morning routine you can actually stick to 💪🔥",
    video: "./reel/video4.mp4",
    userProfile:
      "https://images.unsplash.com/photo-1761197641747-2803ee4145ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
    shareCount: 430,
    isFollow: false,
  },
  {
    isMuted: true,
    username: "urbanartist",
    likeCount: 6400,
    isLiked: false,
    commentCount: 128,
    caption: "New street mural completed 🎨🚧",
    video: "./reel/video3.mp4",
    userProfile:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=800",
    shareCount: 92,
    isFollow: true,
  },
  {
    isMuted: true,
    username: "foodie_cravings",
    likeCount: 23100,
    isLiked: true,
    commentCount: 1500,
    caption: "Korean cheese corn dogs >>> 🔥🧀",
    video: "./reel/video5.mp4",
    userProfile:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800",
    shareCount: 704,
    isFollow: false,
  },
  {
    isMuted: true,
    username: "ridermax",
    likeCount: 9800,
    isLiked: false,
    commentCount: 420,
    caption: "Late-night ride vibes 🏍️💨",
    video: "./reel/video6.mp4",
    userProfile:
      "https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=800",
    shareCount: 260,
    isFollow: false,
  },
  {
    isMuted: true,
    username: "cinema_frame",
    likeCount: 4600,
    isLiked: false,
    commentCount: 190,
    caption: "When cinematography meets storytelling 🎥✨",
    video: "./reel/video7.mp4",
    userProfile:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800",
    shareCount: 110,
    isFollow: true,
  },
  {
    isMuted: true,
    username: "petpaws",
    likeCount: 28900,
    isLiked: true,
    commentCount: 2200,
    caption: "This golden retriever deserves an Oscar 😂🐶",
    video: "./reel/video8.mp4",
    userProfile:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=800",
    shareCount: 900,
    isFollow: false,
  },
  {
    isMuted: true,
    username: "minimalvibes",
    likeCount: 5200,
    isLiked: false,
    commentCount: 210,
    caption: "Less but better. ✨",
    video: "./reel/video9.mp4",
    userProfile:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800",
    shareCount: 140,
    isFollow: false,
  },
  {
    isMuted: true,
    username: "gaminglounge",
    likeCount: 18300,
    isLiked: true,
    commentCount: 740,
    caption: "This clutch moment was insane 🎮🔥",
    video: "./reel/video10.mp4",
    userProfile:
      "https://images.unsplash.com/photo-1681158592837-4172773a1c3c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fDNkJTIwaWJhY2tncm91bmQlMjBpbWFnZXN8ZW58MHwxfDB8fHww",
    shareCount: 503,
    isFollow: true,
  },
];

let allreels = document.querySelector(".allreels");

function addData() {
  let clutter = "";
  reels.forEach(function (elem, idx) {
    clutter += `<div class="reel">
                    <video autoplay loop ${elem.isMuted?"muted":""} src="${elem.video}"></video>
                    <button id="${idx}" class="mute">${elem.isMuted?'<i class="ri-volume-mute-fill"></i>':'<i class="ri-volume-up-line"></i>'}</button>
                    <div class="bottom">
                        <div class="user">
                            <img class="profile" src="${
                              elem.userProfile
                            }" alt="">
                            <h1>${elem.username}</h1>
                            <button id="${idx}" class="follow">${
      elem.isFollow ? "Unfollow" : "Follow"
    }</button>
                        </div>
                        <p>${elem.caption}</p>
                    </div>
                    <div class="right">
                        <div id="${idx}" class="like">
                            <h4 class="like-icon icon"><i class="${
                              elem.isLiked
                                ? "ri-heart-3-fill"
                                : "ri-heart-3-line"
                            }"></i></h4>
                            <h6>${elem.likeCount}</h6>
                        </div>
                        <div class="comment">
                            <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></h4>
                            <h6>${elem.commentCount}</h6>
                        </div>
                        <div class="share">
                            <h4 class="share-icon icon"><i class="ri-telegram-2-line"></i></h4>
                            <h6>${elem.shareCount}</h6>
                        </div>
                        <div class="menu">
                           <h4 class="menu-icon icon"><i class="ri-more-2-line"></i></h4>
                        </div>
                    </div>
                </div>`;
  });

  allreels.innerHTML = clutter;
}

addData();

allreels.addEventListener("click", function (dets) {
  if (dets.target.className == "like") {
    if (!reels[dets.target.id].isLiked) {
      reels[dets.target.id].likeCount++;
      reels[dets.target.id].isLiked = true;
    } else {
      reels[dets.target.id].likeCount--;
      reels[dets.target.id].isLiked = false;
    }
    addData();
  }
  if (dets.target.className == "follow") {
    if (!reels[dets.target.id].isFollow) {
      reels[dets.target.id].isFollow = true;
    } else {
      reels[dets.target.id].isFollow = false;
    }
    addData();
  }
  if (dets.target.className == "mute") {
    if (!reels[dets.target.id].isMuted) {
      reels[dets.target.id].isMuted = true;
    } else {
      reels[dets.target.id].isMuted = false;
    }
    addData();
  }
});
