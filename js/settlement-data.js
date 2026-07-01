// ── 월말정산 데이터 ── 매달 여기만 수정하면 됩니다

const SETTLEMENT_DATA = {
  year: 2025,
  month: 6,

  // 방송 참여시간 (단위: 분)
  watchTime: [
    { name: "달빛토끼", gif: "assets/settlement/user1.gif", time: 342, prevRank: 2 },
    { name: "솜사탕구름", gif: "assets/settlement/user2.gif", time: 289, prevRank: 1 },
    { name: "노을빛여우", gif: "assets/settlement/user3.gif", time: 251, prevRank: 4 },
    { name: "별빛고양이", gif: "assets/settlement/user4.gif", time: 198, prevRank: 3 },
    { name: "새벽별꽃", gif: "assets/settlement/user5.gif", time: 145, prevRank: 6 },
    { name: "은하수", gif: "assets/settlement/user6.gif", time: 112, prevRank: 5 },
  ],
  // 하이라이트할 고정 인물 이름 목록
  watchTimeHighlight: ["달빛토끼", "솜사탕구름", "노을빛여우"],

  // 채팅수
  chatCount: [
    { name: "솜사탕구름", gif: "assets/settlement/user2.gif", count: 1842, prevRank: 1 },
    { name: "달빛토끼", gif: "assets/settlement/user1.gif", count: 1563, prevRank: 3 },
    { name: "별빛고양이", gif: "assets/settlement/user4.gif", count: 1204, prevRank: 2 },
    { name: "새벽별꽃", gif: "assets/settlement/user5.gif", count: 987, prevRank: 4 },
    { name: "노을빛여우", gif: "assets/settlement/user3.gif", count: 734, prevRank: 6 },
    { name: "은하수", gif: "assets/settlement/user6.gif", count: 512, prevRank: 5 },
  ],
  chatCountHighlight: ["솜사탕구름", "달빛토끼", "별빛고양이"],

  // 금칙어 사용횟수 (1등 이름은 퀴즈용으로 숨김)
  badWord: [
    { rank: 1, name: "달빛토끼", gif: "assets/settlement/user1.gif", count: 47 },
    { rank: 2, name: "솜사탕구름", gif: "assets/settlement/user2.gif", count: 31 },
    { rank: 3, name: "노을빛여우", gif: "assets/settlement/user3.gif", count: 19 },
  ],

  // 채팅금지 횟수
  chatBan: [
    { rank: 1, name: "별빛고양이", gif: "assets/settlement/user4.gif", count: 12 },
    { rank: 2, name: "새벽별꽃", gif: "assets/settlement/user5.gif", count: 8 },
    { rank: 3, name: "달빛토끼", gif: "assets/settlement/user1.gif", count: 5 },
  ],

  // 후원수 (수치 없음, 이름+GIF만)
  donation: [
    { rank: 3, name: "솜사탕구름", gif: "assets/settlement/user2.gif" },
    { rank: 2, name: "별빛고양이", gif: "assets/settlement/user4.gif" },
    { rank: 1, name: "달빛토끼", gif: "assets/settlement/user1.gif" },
  ],
};
