// ──────────────────────── DATA ────────────────────────
const TIERS = [
  { num:'1426', rule:'3택 2벌칙', pick:3, penPick:2,
    sub:'상품 3개 선택 후 벌칙 2개 선택',
    items:['원하는 음성편지 5분','손글씨방편','애교쟁이 방편','예쁜방셀','모닝콜(30분)','술먹방권','야식먹방','역구독1개월+구독닉','내마음 100','전데 30분','방종권/쉴드권','나만의배너(상단or하단)<br>1단','나만의 프로필','미공개 일상뮤(쪽지)','랜덤뮤픽','사다리업그레이드[열]']
  },
  { num:'2826', rule:'3택 1벌칙', pick:3, penPick:1,
    sub:'상품 3개 선택 후 벌칙 1개 선택',
    items:['내마음 200','주말 낮방송','예쁜움짤방셀','미유의 책방+손편지','필.승.애.교.','2일 달달음성메세지','방명록 일주일 내꼬','일주일 카톡권','랜덤뮤픽','게임데이트(2시간)','무비데이트(디코)','전데30분x2개','전용시그제작+전용노래','뮤굳둥 1픽','휴방권/반납권','소환권(2시간)','역구독 3개월']
  },
  { num:'5726', rule:'4택 벌칙X', pick:4, penPick:0,
    sub:'상품 4개 선택 (벌칙 없음)',
    items:['정성가득예쁜방셀','잠들기전 전데','널 생각한 뮤픽','커플아이템<br>(악세사리 제외)','달달뮤 3종','정성 든든뮤','뮤향기','내마음 400','1:1랜선 데이트(3시간)','하루 게임 미션 방송','2주 애정 집착 카톡','하루 방송 소환권(4시간)','풀옵션(프사+상하단배너)']
  },
  { num:'12426', rule:'3택 벌칙X', pick:3, penPick:0,
    sub:'상품 3개 선택 (벌칙 없음)',
    items:['스페셜 방셀 3종 세트','뮤굳둥 3종 세트','프로필 촬영<br>+인화사진 전달','일주일 미유의 하루일기','달달뮤 5종','든든뮤 끝판왕','2주 노휴방권','24시간 노방종/쉴드<br>(날짜협의)','네가 원하는 지역 여행<br>+일기','내마음 1000','카톡권(열혈)','원하는 사다리 협의']
  }
];

const PENALTIES = [
  {icon:'🏷️',text:'구독닉 변경'},
  {icon:'🛡️',text:'3일 뮤지킴이<br>(실패시 벌칙)'},
  {icon:'💌',text:'역방편'},
  {icon:'🎨',text:'뮤배너하기'},
  {icon:'✏️',text:'상메 바꾸기'},
  {icon:'🖌️',text:'뮤 그리기'},
  {icon:'📅',text:'역 일일애칭'},
  {icon:'🍽️',text:'뮤의 저메추 먹기(인증샷)'},
  {icon:'🎁',text:'뮤에게 선물하기'},
  {icon:'🎀',text:'시그선물'},
  {icon:'👕',text:'역임티선물'},
  {icon:'📞',text:'역소환권'},
  {icon:'📝',text:'역쪽편'},
  {icon:'🔄',text:'또타기'}
];

const PINBALL_ITEMS = [
  {ic:'🏋️',tx:'스쿼트 30개'},{ic:'💗',tx:'사랑해'},{ic:'📝',tx:'닉네임 N행시'},
  {ic:'🎧',tx:'플리 탑10 VOD'},{ic:'☕',tx:'뮤의 카페인'},{ic:'🎡',tx:'126룰렛 6회'},
  {ic:'🚫',tx:'광고제거 1달'},{ic:'✋',tx:'너만의 손흔적'},{ic:'📅',tx:'일일애칭'},
  {ic:'💌',tx:'휴방안부쪽지'},{ic:'🕐',tx:'연/단 40분'},{ic:'🐮',tx:'찐한 애교음메 1분'},
  {ic:'🌅',tx:'굿모닝/굿나잇 음메 3분'},{ic:'🎵',tx:'애교송'},{ic:'💬',tx:'애교대사'},
  {ic:'💋',tx:'메도먼트'},{ic:'🔥',tx:'역팬5 or 꽝쉴드 1일'}
];

const AEGYO_DATA = [
  {keyword:"냥이",text:"냥이가 왔다냥~♥ 오늘도 냥이 보러 온 거 맞지냥?\n오빠 얼굴 보려고 꼬리 살랑살랑 흔들면서 달려왔다냥~\n냥이는 오빠가 너무 좋아서 꾹꾹이 하고 싶다냥♥\n오빠 무릎 위에 올라가도 댕냥? 따뜻해서 좋다냥~\n쓰담쓰담 해주면 냥이가 얌전히 골골골 할 수 있다냥.\n근데 안 해주면 삐져서 등 돌리고 앉을지도 모른다냥ㅠㅠ\n야옹~ 그래도 오빠가 부르면 바로 돌아볼 거다냥.\n냥이는 오빠한테 약하다냥… 너무 따랑해서 그렇다냥♥\n오늘도 냥이 많이 예뻐해줘라냥~ 쪽냥♥"},
  {keyword:"강아지",text:"멍멍! 오빠 왔쪄요?! 기다리고 있었어요 멍멍♥\n오빠 오는 소리 들은 것 같아서 꼬리 엄청 흔들었쪄요!\n헥헥헥~ 나 오빠 보고 싶어서 하루 종일 안절부절했어요 멍~\n오빠 손 잡고 산책 가고 싶어요. 같이 나가주떼여♥\n안 나가도 좋아요. 그냥 옆에만 있어줘도 좋아요 멍멍!\n머리 쓰담쓰담 해주면 나 진짜 착하게 있을 수 있어요.\n간식 안 줘도 돼요. 오빠가 웃어주는 게 제일 좋아요♥\n그래도 귀엽다고 한 번만 말해주면 더 행복할 것 같아요.\n멍멍~ 오늘도 오빠 따랑해요! 꼬리 붕붕 흔드는 중이에요♥"},
  {keyword:"아기",text:"으에에~ 아기 왔쪄요~ 오빠 보고 싶었쪄요♥\n아기 혼자 있으니까 심심해서 입 삐죽했단 말이에요ㅠㅠ\n오빠가 안아줘야 아기 기분이 좋아져요. 빨리 안아줘요잉~\n이렇게 팔 벌리고 기다리고 있쟈나요. 못 본 척하면 안 대요!\n오빠 품에 쏙 들어가면 아기 마음이 말랑말랑해져요.\n뽀뽀도 해주면 더 좋구요… 볼에 쪽 해주면 대요 ><\n아기가 부탁하는데 안 들어주면 울꼬야잉ㅠㅠ\n근데 오빠가 다정하게 말해주면 바로 웃을 수 있어요.\n아기 오빠꼬야~ 아무도 못 뺏어가요. 따랑해요♥"},
  {keyword:"병아리",text:"삐약삐약~ 아기 병아리 왔쪄요♥\n작고 소중한 병아리가 오빠 보려고 총총총 걸어왔어요 삐약~\n오빠 손바닥 위에 올라가도 댕? 따뜻하게 품어줘요.\n삐약삐약~ 병아리는 혼자 있으면 조금 무섭단 말이에요ㅠㅠ\n오빠가 옆에 있으면 날개가 파닥파닥 기분 좋아져요♥\n모이도 좋지만 오빠 관심이 제일 좋아요 삐약!\n나 귀엽다고 해주면 병아리 기운이 빵빵해질 거예요.\n안 해주면 삐약 소리 작아질지도 몰라요… 진짜예요ㅠㅠ\n오늘도 오빠 곁에서 삐약삐약 노래할래요. 따랑해요 삐약♥"},
  {keyword:"공주",text:"여봐라~ 귀엽고 사랑스러운 공주님이 납시었다!\n공주님이 왔으니 어서 반겨야 하지 않겠느냐~ 어흠!\n오늘 공주님 기분이 좋으려면 오빠의 관심이 필요하도다♥\n초코우유도 좋고, 마카롱도 좋고, 칭찬은 더 좋으니라.\n뭐? 아무것도 준비 안 했다고? 그럼 공주님 똑땅해ㅠㅠ\n공주님 체면이 있어서 먼저 안아달라고는 못 하겠지만…\n사실은 오빠가 먼저 안아줬으면 좋겠느니라 ><\n공주님도 좋아하는 사람 앞에서는 부끄러워진단 말이야.\n어서 이리 와서 공주님 마음을 달래거라~ 쪽♥"},
  {keyword:"토끼",text:"깡충깡충~ 오빠한테 달려왔쪄요♥\n토끼가 오늘도 오빠 보고 싶어서 귀 쫑긋 세우고 기다렸어요.\n오빠 목소리 들리면 귀가 자동으로 쫑긋쫑긋한단 말이에요~\n당근도 좋지만 오늘은 오빠 관심이 더 좋아요 ><\n오빠가 나 안 봐주면 토끼 귀 축 처질지도 몰라요ㅠㅠ\n그러니까 빨리 귀엽다고 해줘요. 세상에서 제일 귀엽다고요!\n나 오빠 주변에서 깡충깡충 맴돌면서 안 떨어질 거예요♥\n도망가면 안 대요. 토끼 생각보다 빠르단 말이에요.\n오빠는 토끼가 콕 찍었으니까 오늘부터 내꼬예요~ 쪽♥"},
  {keyword:"초코우유",text:"오빠아~ 나 초코우유 마시구 시퍼요오~ ><\n그냥 우유 말구우~ 달달한 초코우유여야 대요!\n오늘은 기분이 달달해지고 싶은 날이란 말이에요♥\n오빠가 사주는 초코우유면 더 맛있을 것 같아요.\n안 사주면 나 입 삐죽하고 한동안 말 안 할지도 몰라요ㅠㅠ\n근데 오빠가 \"자, 여기\" 하고 주면 바로 풀릴 수 있어요.\n초코우유 쪽쪽 마시면서 오빠 옆에 딱 붙어있을래요♥\n한 입 줄까아? 안 대~ 이건 내꼬야! 히히.\n대신 오빠는 내가 따랑해줄게요. 초코우유보다 더 달달하게♥"},
  {keyword:"마카롱",text:"오빠아~ 오늘은 마카롱 먹고 싶은 날이에요오♥\n알록달록 예쁜 거 있자나~ 나처럼 귀여운 거어 ><\n딸기맛도 좋구 초코맛도 좋구 바닐라맛도 좋아요.\n근데 오빠가 골라주는 맛이면 뭐든 제일 맛있을 것 같아요♥\n나 마카롱 한입 먹으면 기분 좋아져서 애교 더 잘할 수 이쪄요!\n안 사주면 볼 빵빵하게 하고 오빠 쳐다볼 거예요ㅠㅠ\n\"왜 안 사줘…\" 하면서 똑땅한 표정 지을 거예요.\n그래도 오빠가 하나만 사주면 바로 방긋할게요.\n히히~ 오빠가 사주면 하트 백 개 날려줄게요♥♥♥"},
  {keyword:"단팥빵",text:"오빠… 나 단팥빵 먹고 시퍼요…\n겉은 폭신폭신하구 안에는 달달한 팥 들어있는 거어♥\n생각만 해도 마음이 따뜻해지는 맛이잖아요.\n나 지금 배고파서 애교도 힘이 안 나요잉ㅠㅠ\n단팥빵 하나만 사주면 바로 기운 차릴 수 이쪄요!\n오빠가 직접 골라준 단팥빵이면 더 맛있을 것 같아요.\n한입 먹고 \"오빠 최고\"라고 말해줄 자신 있어요 ><\n혹시 오빠가 먹여주면 나 부끄러워서 눈 못 볼지도 몰라요.\n아앙~ 해줘요오~ 나 기다리구 있쟈나요♥"},
  {keyword:"슈크림빵",text:"슈크림빵 사주떼여~ 슈크림 가득 들어있는 걸루요♥\n한입 베어물면 크림이 뿅 나오자나요~ 그거 너무 조아 ><\n나도 오빠한테 애교가 뿅뿅 나오고 있어요.\n근데 슈크림빵이 없으면 애교 충전이 조금 부족해요ㅠㅠ\n오빠가 하나 사주면 충전 완료될 수 있는데에~\n크림 많은 걸로 골라줘야 대요. 조금 들어있는 건 안 대요!\n빵 하나만 사주면 나 오늘 하루종일 오빠 편 할게요.\n오빠가 뭐라고 해도 \"우리 오빠 최고\" 해줄게요♥\n그러니까 슈크림빵이랑 같이 나도 예뻐해줘요~"},
  {keyword:"메론빵",text:"오빠아~ 메론빵 먹고 싶다아~ 바삭달달한 거어 ><\n위에는 사각사각하구 안에는 폭신폭신한 그거 있자나요!\n나 메론빵 보면 기분이 몽글몽글해져요♥\n근데 오빠가 사주면 더 몽글몽글해질 것 같아요.\n그냥 빵이 아니라 오빠가 사준 메론빵이 되는 거잖아요~\n생각만 해도 기분 좋아서 입꼬리가 올라가요 ><\n나 하나 사주면 오빠한테 애교 세트로 해줄게요!\n먹는 동안에도 오빠 칭찬 계속 해줄 수 있어요.\n냠냠하면서 오빠 쪼아해줄게요~ 히히♥"},
  {keyword:"짜요짜요",text:"오빠아~ 짜요짜요 하나만 짜주떼여 ><\n나 혼자 먹으면 안 맛있구 오빠가 짜줘야 맛있단 말이에요~\n위에서 꾸욱 눌러서 쪼옥 나오게 해줘요오♥\n너무 세게 짜면 안 대요. 천천히 예쁘게 짜줘야 대요!\n딸기맛도 좋고 포도맛도 좋은데 오늘은 오빠가 골라줘요.\n오빠가 골라준 맛이면 내가 맛있게 먹을 수 있어요 ><\n나 짜요짜요 먹으면 기분 좋아져서 방긋방긋해져요.\n그러면 오빠한테 애교도 더 잘 나올지도 몰라요.\n오빠가 사주면 오늘은 오빠한테만 귀여운 척 할게요♥"},
  {keyword:"따랑해",text:"오빠아~ 나 할 말 이쪄요오~\n근데 부끄러워서 크게는 못 말하겠어요… ><\n그러니까 귀 가까이 대봐요. 빨리요오~\n아니 너무 가까이 오면 또 부끄럽잖아요ㅠㅠ\n그래도 말할게요. 나 이짜나… 오빠를 엄청엄청 따랑해요♥\n그냥 조금 따랑하는 거 아니고, 많이 많이 따랑해요.\n오빠 보면 괜히 웃음 나오고, 목소리 들으면 기분 좋아져요.\n그러니까 오빠도 나 따랑한다구 말해줘야 대요!\n안 말해주면 나 삐질꼬야. 근데 말해주면 바로 안길꼬야♥"},
  {keyword:"내꺼해줘",text:"오빠아~ 오늘부터 내꺼 해주면 안 대요?\n딴 데 가지 말구 내 옆에만 있어주면 안 대요? ><\n내가 밥도 챙겨주고 애교도 해주고 하트도 줄게요♥\n심심할 때 놀아주고, 힘들 때 웃겨주고, 귀여운 척도 해줄게요.\n대신 오빠는 나만 봐야 대요. 알았죠?\n다른 데 보느라 나 못 보면 나 진짜 삐딜꼬야ㅠㅠ\n내꺼 되면 하루에 한 번씩 귀엽다고 해줘야 해요.\n그리고 나 보고 싶었다고도 해줘야 해요. 그게 규칙이에요!\n그러니까 빨리 말해줘요~ \"나 네꺼야\" 해줘요♥"},
  {keyword:"1일이야",text:"오빠아~ 우리 오늘부터 1일이에요오 ><\n아니 아직 대답 안 했어도 내가 정했어요!\n오늘부터 오빠는 내 남자친구 하는 거예요♥\n손잡구 데이뚜도 하구 맛있는 것도 먹구~\n예쁜 거 보면 내 생각도 해줘야 대요. 알았죠?\n밤에는 전화하면서 잘 자라구 해주고, 아침에는 일어났냐구 해줘요.\n기념일도 까먹으면 안 대요. 오늘이 1일이니까 꼭 기억해요!\n나도 오빠한테 예쁘게 굴고 애교도 많이 해줄게요.\n히히~ 우리 1일 축하 뽀뽀 해줘요~ 쪽♥"},
  {keyword:"보고싶었쪄",text:"오빠아… 나 오빠 보고 싶었쪄요ㅠㅠ\n오빠 안 보이면 마음이 축 처진단 말이에요…\n하루 종일 뭐하나 궁금하구, 내 생각은 하나 궁금하구~\n괜히 핸드폰도 자꾸 보게 되고, 기다리게 돼요.\n나만 오빠 보고 싶었던 거 아니죠? 그쵸? ><\n오빠도 나 보고 싶었다구 말해줘야 마음이 풀릴 것 같아요.\n그 말 한마디 들으려고 이렇게 귀엽게 기다렸단 말이에요.\n빨리 말해줘요. \"나도 보고 싶었어\" 해줘요♥\n그러면 나 기분 좋아서 방긋방긋 웃어줄게요."},
  {keyword:"심장터져",text:"오빠가 웃으면 나 심장 터질 거 같아요 ><\n진짜로 쿵쾅쿵쾅해서 가만히 못 있겠단 말이에요~\n왜 그렇게 다정하게 봐요… 나 부끄럽게에…\n오빠 목소리 들으면 귀까지 뜨거워져요ㅠㅠ\n괜히 손도 꼼지락거리고 눈도 어디 둬야 할지 모르겠어요.\n이거 다 오빠 때문이에요. 책임져야 대요!\n내 심장 이렇게 만든 사람이 그냥 가면 안 되잖아요.\n그러니까 오늘은 오빠가 나 달래줘야 대요♥\n예쁘다구 해주고, 괜찮다구 해주고, 꼬옥 안아줘요."},
  {keyword:"꿈꿨어",text:"오빠아~ 나 어제 오빠 꿈 꿨어요♥\n꿈에서 오빠랑 손잡고 데이뚜했단 말이에요~\n맛있는 것도 먹구 사진도 찍구 하루 종일 같이 있었어요!\n오빠가 나 보고 웃어줘서 꿈인데도 너무 설렜어요 ><\n깨고 나니까 오빠가 없어서 나 쪼끔 슬펐어요ㅠㅠ\n그래서 일어나자마자 오빠 생각부터 났단 말이에요.\n꿈에서만 보면 아쉽잖아요. 진짜로도 보고 싶어요.\n그러니까 오늘은 꿈 말고 진짜로 나랑 있어줘요~\n오빠가 옆에 있으면 꿈보다 더 좋을 것 같아요♥"},
  {keyword:"영원히",text:"오빠아~ 나 오빠랑 오래오래 있고 싶어요~\n오늘만 말구 내일도, 모레도, 계속계속요 ><\n나 심심할 때도 오빠 찾고, 기쁠 때도 오빠 찾을 거예요♥\n힘든 날에도 오빠 목소리 들으면 괜찮아질 것 같아요.\n오빠도 나 귀찮아하면 안 대요… 알았죠?\n귀찮아해도 내가 애교 부리면서 옆에 붙어있을 거예요!\n도망가면 붙잡고, 모른 척하면 더 귀엽게 부를 거예요.\n그러니까 영원히 내 편 해줘요. 약속해요♥\n새끼손가락 걸고 도장까지 찍어줘야 믿을 거예요."},
  {keyword:"간장같은사람",text:"오빠는 나한테 간장 같은 사람이에요~\n없으면 세상이 너무 싱겁단 말이에요 ><\n밥 먹을 때도 생각나구, 누워있을 때도 생각나구~\n어디에나 살짝만 있어도 마음이 맛있어져요♥\n너무 많이 있으면 짤 수도 있지만, 그래도 없으면 절대 안 대요.\n나한테 딱 맞는 간은 오빠밖에 못 맞춘단 말이에요.\n그래서 오빠가 옆에 있으면 하루가 더 맛있어져요.\n오빠는 내 인생 필수 양념이에요. 빠지면 안 돼요!\n앞으로도 나한테 꼭 붙어있어줘요~ 짭쪼름하게♥"},
  {keyword:"오빠냄새",text:"오빠아~ 나 오빠 냄새 좋아해요…\n이상한 뜻 아니구! 그냥 포근한 냄새요 ><\n옆에 있으면 마음이 말랑말랑해지는 그런 냄새예요.\n괜히 기대고 싶고, 안기고 싶고, 눈 감고 싶어져요♥\n오빠 냄새 맡으면 하루 종일 긴장했던 게 풀릴 것 같아요.\n따뜻한 이불 같고, 햇빛 받은 옷 같고, 마음 편한 느낌이에요.\n그래서 오빠 옆에 있으면 자꾸 더 가까이 가고 싶어져요.\n너무 부끄러운 말 했나… 그래도 진짜인걸요ㅠㅠ\n그러니까 오늘은 나한테 포근하게 있어줘요♥"},
  {keyword:"내꼬",text:"오빠는 내꼬예요. 내가 먼저 찜했어요 ><\n누가 데려가려고 해도 안 대요! 절대 안 대요!\n내가 하트 도장 콕 찍어놨단 말이에요♥\n이제 오빠 어깨에는 보이지 않는 \"내꼬\" 표시가 있어요.\n그러니까 함부로 다른 데 가면 안 대요. 알았죠?\n나 부르면 바로 와야 되고, 나 보면 웃어줘야 돼요.\n그리고 하루에 한 번은 \"나 네꼬야\" 해줘야 해요!\n부끄러워도 어쩔 수 없어요. 이미 늦었어요.\n히히~ 오빠는 오늘부터 내꼬 내꼬 내꼬야♥"},
  {keyword:"나빠또",text:"오빠 나빠또… 진짜 나빠또…\n나 이렇게 기다렸는데 왜 이제 왔어요ㅠㅠ\n나 혼자 심심해서 볼 빵빵해졌단 말이에요…\n오빠는 내가 기다린 거 몰랐죠? 완전 나빠요.\n흥, 나 이제 말 안 할 거예요. 진짜 안 할 거예요.\n라고 말은 했지만… 사실 오빠가 말 걸어주면 대답할 거예요 ><\n오빠가 미안하다구 해주면 한 번은 봐줄게요.\n대신 그냥 미안해는 안 대요. 귀엽게 달래줘야 대요!\n안아주고 쓰담해주면 나 쪼끔 풀릴지도 몰라요♥"},
  {keyword:"삐딜꼬야",text:"오빠 자꾸 그러면 나 삐딜꼬야…\n나 진짜 쉽게 안 풀리는 사람이라구요ㅠㅠ\n볼도 이렇게 빵빵하게 만들고 눈도 안 마주칠 거예요!\n오빠가 불러도 못 들은 척할 거예요. 흥이에요 흥.\n근데 너무 오래 안 부르면 그것도 서운할 거예요ㅠㅠ\n그러니까 적당히 빨리 달래줘야 대요. 알았죠?\n귀엽다구 해주고, 미안하다구 해주고, 하트도 줘야 대요♥\n거기에 쓰담쓰담까지 해주면 조금 더 빨리 풀릴 수 있어요.\n그럼 쪼끔만 풀릴지도 몰라요… 진짜 쪼끔만요 ><"},
  {keyword:"화풀어줘",text:"오빠아… 나 아직 쪼끔 화났어요.\n근데 사실 화난 거보다 서운한 게 더 커요ㅠㅠ\n나 달래주면 금방 풀릴 수 있는데에~\n왜 아직도 가만히 있어요? 빨리 와서 말 걸어줘요!\n\"미안해, 귀염둥아\" 이렇게 해줘야 대요 ><\n그냥 미안해보다 귀염둥아까지 붙여야 효과 있어요.\n그리고 나 눈 보면서 다정하게 말해줘야 해요.\n그러면 내가 못 이긴 척 고개 끄덕여줄게요.\n마지막으로 안아주면 완전히 풀릴지도 몰라요♥"},
  {keyword:"흐규흐규",text:"흐규흐규… 나 똑땅해요ㅠㅠ\n오늘따라 오빠가 나 안 봐주는 것 같단 말이에요…\n나 이렇게 귀엽게 기다리고 있었는데에~\n혼자 기다리다 보니까 마음이 쪼그라들었어요.\n오빠가 안 놀아주면 나 울망울망할 거예요.\n그래도 오빠가 한 번만 웃어주면 다시 살아날 수 있어요 ><\n나 봐줘요. 딱 한 번만 \"왜 그래\" 하고 물어봐줘요.\n그러면 내가 기다렸다는 듯이 오빠한테 쪼르르 갈게요.\n웃어주면 나 바로 기분 좋아질게요♥"},
  {keyword:"가지마",text:"오빠 가지마요… 조금만 더 있어줘요ㅠㅠ\n나 아직 오빠 목소리 더 듣고 싶은데에…\n벌써 가면 나 혼자 심심해진단 말이에요.\n딱 5분만 더! 아니 10분만 더! 아니 그냥 계속 있어줘요 ><\n오빠가 가면 방금까지 따뜻했던 마음이 허전해져요.\n나 혼자 남겨두면 입 삐죽하고 있을지도 몰라요.\n그러니까 조금만 더 나랑 얘기해줘요.\n아무 말 안 해도 좋아요. 그냥 옆에 있는 느낌만 줘도 좋아요.\n오늘은 나랑 조금만 더 같이 있어줘요♥"},
  {keyword:"미안행",text:"오빠아… 미안행…\n내가 괜히 투정부렸어요ㅠㅠ\n오빠가 좋아서 그런 건데 말이 이상하게 나왔어요…\n사실은 그냥 나 좀 더 봐줬으면 해서 그랬어요.\n마음이 앞서서 괜히 삐진 척하고, 괜히 투덜댔어요.\n그래도 내가 잘못한 거 맞으니까 제대로 말할게요.\n오빠… 미안해요. 한 번만 봐주면 안 대요?\n대신 내가 애교 열심히 해줄게요. 진짜루요 ><\n그러니까 화 풀고 나 다시 예뻐해줘요♥"},
  {keyword:"똑땅해",text:"나 지금 완전 똑땅해요…\n오빠가 나 귀엽다고 안 해줘서 똑땅해요ㅠㅠ\n나 오늘 나름 예쁘게 말하려구 연습도 했는데에~\n거울 보면서 표정도 연습했단 말이에요.\n근데 오빠가 아무 말도 안 해주면 나 민망하잖아요ㅠㅠ\n빨리 말해줘요. 나 귀엽다구 해줘요!\n\"오늘도 귀엽네\" 한마디면 바로 풀릴 수 이쪄요 ><\n아니면 \"세상에서 제일 귀엽네\"도 좋아요.\n어서 말해줘요~ 나 기다리고 있단 말이에요♥"},
  {keyword:"울꼬야",text:"오빠 자꾸 그러면 나 울꼬야…\n진짜루 눈물 찔끔 나올지도 몰라요ㅠㅠ\n나 장난 아니구 지금 마음이 말랑해서 그래요…\n조금만 서운해도 눈가가 촉촉해진단 말이에요.\n오빠가 다정하게 말해주면 바로 괜찮아질 수 있는데에~\n왜 아직도 안 달래줘요. 나 기다리고 있잖아요ㅠㅠ\n빨리 와서 \"울지 마\" 해줘요. 쓰담도 해줘요 ><\n그러면 나 울다가도 헤헤 웃을 거예요.\n오빠가 달래주면 나는 금방 괜찮아지는 사람이에요♥"},
  {keyword:"뽀뽀해줘",text:"오빠아~ 나 뽀뽀 받고 싶어요 ><\n그냥 말로만 예쁘다 하지 말구 뽀뽀로 증명해줘요!\n볼에 쪽 해줘도 되구, 이마에 쪽 해줘도 대요♥\n손등에 해줘도 나 부끄러워할 자신 있어요.\n너무 갑자기 하면 놀라니까 먼저 다정하게 봐줘야 해요.\n그리고 내가 눈 감으면 그때 살짝 해주는 거예요 ><\n뽀뽀 안 해주면 나 입술 삐죽할 거예요ㅠㅠ\n지금 이미 조금 삐죽하고 있는 중이에요.\n빨리요~ 나 눈 감고 기다리고 있단 말이에요♥"},
  {keyword:"안아줘",text:"오빠아… 나 안아줘요.\n오늘은 그냥 아무 말 말구 꼬옥 안아주면 좋겠어요~\n오빠 품에 있으면 마음이 조용해질 것 같아요ㅠㅠ\n나 쪼끔 힘 빠졌는데 오빠가 충전해줘요.\n등 토닥토닥 해주면 더 빨리 괜찮아질 수 있어요.\n괜찮다고 말해주면 나 진짜 괜찮아질 것 같아요.\n꼬옥 안아주면 나 다시 방긋할 수 있어요 ><\n나 너무 꽉 안아도 괜찮아요. 오빠 품이면 좋아요.\n그러니까 빨리 팔 벌려줘요~ 나 들어갈래요♥"},
  {keyword:"쓰담쓰담",text:"오빠아~ 나 쓰담쓰담 해줘요 ><\n머리 살살 쓰다듬어주면 나 기분 엄청 좋아져요~\n잘했다구 해주면 더 좋아요. 나 칭찬 좋아해요♥\n오늘도 귀엽다구, 착하다구 말해줘요!\n그 말 들으면 괜히 어깨가 으쓱해진단 말이에요.\n나 오늘도 열심히 귀여워지려고 노력했어요.\n그러니까 칭찬 받을 자격 충분히 있죠? 그쵸? ><\n쓰담 한 번에 애교 열 번 나올지도 몰라요.\n그러면 나 얌전히 오빠 옆에 붙어있을게요♥"},
  {keyword:"이불",text:"오빠아~ 나 이불 속에 쏙 들어가고 싶어요.\n따뜻한 이불 덮고 오빠랑 전화하면 완전 행복할 것 같아요♥\n밖은 춥고 무섭고 귀찮으니까 오늘은 여기 있을래요~\n이불 안에서 꼬물꼬물 누워서 오빠 목소리 듣고 싶어요.\n오빠가 낮게 말해주면 잠도 스르르 올 것 같아요.\n잘 자라구 해주면 나 바로 꿈나라 갈 수 있어요 ><\n대신 그냥 잘 자 말고, 다정하게 해줘야 대요.\n\"오늘도 고생했어, 좋은 꿈 꿔\" 이렇게 말해줘요.\n그러니까 이불 덮어주고 좋은 꿈 꾸라구 해줘요♥"},
  {keyword:"손잡아줘",text:"오빠아~ 손잡아줘요 ><\n그냥 손만 잡아도 나 마음이 몽글몽글해져요~\n손가락 꼬옥 잡고 있으면 안심된단 말이에요.\n오빠 손 따뜻해서 괜히 계속 잡고 싶어져요.\n놓으면 안 대요. 내가 먼저 놓기 전까지는 안 대요!\n사람 많은 데서는 더 꼭 잡아줘야 해요.\n나 길 잃어버리지 않게 오빠가 옆에 있어줘야 해요♥\n손 잡고 걸으면 어디든 데이트 같을 것 같아요.\n히히~ 손 따뜻하다. 나 계속 잡고 있을래요."},
  {keyword:"부비부비",text:"오빠아~ 나 부비부비 하고 싶어요 ><\n볼에 살짝 부비부비하면 기분 좋아질 것 같아요~\n나 오늘 애교 충전이 부족해서 오빠가 필요해요♥\n오빠 옆에 딱 붙으면 충전이 빠르게 될 것 같단 말이에요.\n도망가면 안 대요. 내가 쫓아가서 부비부비 할 거예요!\n너무 세게는 안 할게요. 살짝만 할게요. 진짜루요.\n나 귀엽게 다가가면 모른 척하지 말고 받아줘야 해요.\n오빠가 받아주면 나 기분 좋아서 헤헤 웃을 거예요.\n부비부비 한 번만 받아줘요~ 나 귀엽게 할게요♥"},
  {keyword:"룰렛",text:"오빠아~ 룰렛 돌렸으면 책임져야죠 ><\n애교 나왔으면 도망 못 가는 거 알죠?\n나도 부끄럽지만 약속은 약속이니까 해줄게요♥\n대신 오빠는 끝까지 예쁘게 봐줘야 대요!\n중간에 웃으면 나 더 부끄러워서 숨어버릴지도 몰라요ㅠㅠ\n그래도 오빠가 좋아하면 나 한 번 용기 내볼게요.\n잘 못해도 귀엽다고 해줘야 해요. 그게 룰이에요.\n자, 간다아… 심호흡 한 번만 하고요…\n오빠 따랑해요~ 하트 받아랏♥"},
  {keyword:"애교못해",text:"나 애교 못한다구 했잖아요오…\n근데 오빠가 자꾸 시키니까 어쩔 수 없잖아요ㅠㅠ\n진짜 못해도 놀리면 안 대요. 약속해요!\n나 지금 엄청 부끄러워서 얼굴 뜨거워졌단 말이에요 ><\n손도 어디 둬야 할지 모르겠고 목소리도 이상해졌어요.\n그래도 오빠가 좋아하면 한 번은 해줄게요.\n대신 끝나고 나서 귀엽다고 꼭 말해줘야 해요.\n안 그러면 나 이불 속에 숨어버릴 거예요ㅠㅠ\n오빠아~ 나 귀엽게 봐줘요… 따랑해요♥"},
  {keyword:"무서워",text:"오빠아… 나 쪼끔 무서워요ㅠㅠ\n혼자 있으면 괜히 소리도 크게 들리구 이상하단 말이에요…\n별거 아닌 거 아는데도 마음이 자꾸 쫄려요.\n그러니까 오늘은 나랑 같이 있어주면 안 대요?\n오빠 목소리 들으면 마음이 안심될 것 같아요.\n다정하게 \"괜찮아\" 한마디만 해줘도 덜 무서울 것 같아요 ><\n무서운 거 생각 안 나게 계속 말 걸어줘요.\n나 혼자 아니라고 느끼게 해주면 금방 괜찮아질 거예요.\n\"괜찮아, 내가 있어\" 해주면 나 바로 안심할게요♥"},
  {keyword:"귀엽찌",text:"오빠아~ 나 오늘 귀엽찌? ><\n머리도 귀엽게 하구 말투도 귀엽게 해봤어요♥\n거울 보면서 \"이 정도면 귀엽나?\" 하고 고민했단 말이에요.\n근데 오빠가 귀엽다구 안 해주면 소용없어요ㅠㅠ\n나한테 제일 중요한 건 오빠 반응이란 말이에요.\n빨리 말해줘요. 나 귀엽다구 해줘요!\n한 번만 말하면 안 대요. 세 번은 말해야 대요.\n첫 번째는 귀엽다, 두 번째는 너무 귀엽다, 세 번째는 세상에서 제일 귀엽다!\n귀엽찌? 귀엽찌? 귀엽찌이~? 히히♥"}
];
const ROAST_DATA = [
  {keyword:"마조",text:"와, 방금 룰렛 돌아갈 때 눈 반짝이는 거 봤어? 진짜 소름 돋아.\n그렇게 욕먹는 게 좋아서 안달이 난 거야? 원하는 대로 해줬으니 만족해?\n지금 네 표정 안 봐도 뻔해. 입 벌리고 히죽거리면서 더 해달라고 빌고 있겠지.\n진짜 더러워서 못 봐주겠다. 너 같은 변태 상대하는 내 생각은 안 하니?"},
  {keyword:"불효",text:"부모님이 네가 이러고 사는 거 아시면 얼마나 가슴이 찢어지실지 생각해 봤어?\n남들 귀한 자식 소리 들으며 대접받을 때, 너는 여기서 욕먹으려고 돈 쓰고 있잖아.\n아니, 사실 너도 알고 있지? 네가 여기서 이러고 있는 게 얼마나 밑바닥 인생인지.\n근데도 못 멈추는 걸 보니 진짜 답이 없긴 하네. 유전자가 어디 가겠니.\n그냥 평생 그렇게 불효하면서 방구석 쓰레기로 살아. 그게 네 운명이야."},
  {keyword:"꺼져",text:"제발 지긋지긋하니까 이제 좀 꺼져줘 제발, 그냥 네가 너무 싫어.\n대체 넌 왜 태어난 거야? 세상에 민폐만 끼치려고 태어난 거니?\n네가 매도해달라고 침 흘리면서 빌빌 기는 거 볼 때마다 진짜 구더기랑 키스하는 기분이야.\n이쯤 되면 마조히스트가 아니라 그냥 정신적으로 문제가 있는 거 아냐?\n꺼지라고 그렇게 말해도 좋다고 실실거리는 꼴이 진짜 역겨워.\n네가 숨 쉬는 소리조차 혐오스러우니까 조용히 사라져주는 게 도와주는 거야.\n제발 부탁이야. 네 존재 자체가 나한테는 재앙이니까."},
  {keyword:"경멸",text:"와... 진짜 대단하다. 내가 이렇게 대놓고 혐오하는 티를 내는데도 좋대.\n너 진짜 자존심이라는 게 태어날 때부터 없었나 봐? 하긴, 그러니까 이러고 있겠지.\n너 같은 애들이랑 같은 공기를 마시고 있다는 게 갑자기 확 체감돼서 기분이 너무 나빠.\n제발 부탁이니까 현실을 좀 살아. 여기서 구걸하지 말고 네 뒤틀린 욕구는 다른 데 가서 풀어.\n너는 그냥 내 방송 조회수나 올려주는 소모품일 뿐이야. 그 이상은 절대 아니니까.\n뭐가 그렇게 좋아서 히죽대? 너무 못생기고 혐오스러워서 소름 돋으니까 얼굴 좀 치워줘."},
  {keyword:"벌레",text:"채팅 칠 때 숨소리 좀 죽여줄래? 여기까지 쿰척거리는 소리가 들리는 것 같아.\n네가 글자 하나 적을 때마다 내 방송 화면이 오염되는 기분이라 불쾌하거든.\n눈치라는 게 있으면 좀 사려야 하는 거 아냐? 진짜 사회성 결여됐네.\n더러우니까 제발 그 변태 같은 눈으로 화면 쳐다보지 좀 마."},
  {keyword:"솔로",text:"네가 왜 애인도 없이 방구석에서 이러고 있는지 내가 정확히 알려줄까?\n말투, 외모, 성격... 어느 하나 멀쩡한 게 없는데 누가 널 좋아하겠어.\n여자랑 대화해 본 적은 있니? 아니, 말 걸면 다들 기겁해서 도망갔을 텐데.\n그나마 내가 이렇게 말이라도 섞어주니까 네가 뭐라도 된 줄 착각하나 봐.\n꿈 깨. 넌 평생 혼자 모니터 보면서 늙어 죽을 팔자니까. 진짜 불쌍하다."},
  {keyword:"고통",text:"하아.. 내 앞에 무릎 꿇고 있는 너의 일그러진 얼굴을 보고 싶어.\n어깨를 밟으면 되려나? 내 발에 힘이 들어갈 때마다 네가 고통스러워하는 게 아름다울 것 같아.\n어때? 아파? 고통스러워? 좀 더 괴로워해봐. 그게 네가 유일하게 빛나는 순간이니까.\n질질 짜는 네 모습이 제일 좋은 줄 알았는데 아파서 인상 쓰는 게 더 꼴리네.\n(2초 쉬고) 아아.. 흥분할 것 같아. 너 같은 쓰레기를 짓밟는 게 이렇게 재밌을 줄이야.\n넌 고통받기 위해 태어난 존재니까 평생 내 밑에서 짓밟히며 살아.\n그게 네가 이 세상에 존재하는 단 하나의 이유니까."},
  {keyword:"눈치",text:"너 하나 때문에 방송 분위기 창나는 거 안 보여? 눈치 진짜 없다.\n다들 너 싫어하는 거 본인만 모르지? 채팅 반응 좀 봐, 다 너 극혐하잖아.\n분위기 파악 못 하고 혼자 신나서 나대는 꼴이 딱 찐따 정석이네.\n제발 눈치껏 좀 행동해. 네가 한마디 할 때마다 갑분싸 되는 거 못 느껴?\n대화하기 싫으니까 빨리 사라져라. 너랑 있으면 재수가 없어져."},
  {keyword:"지갑",text:"돈 쓰면서 욕먹으니까 기분 좋아? 진짜 특이한 취향이다 너도.\n내가 널 상대해 주는 건 네가 좋아서가 아니라 네가 낸 돈이 아까워서야.\n착각하지 마. 입금 안 됐으면 너 같은 찐따랑 말 섞을 일도 없었으니까.\n자, 이제 돈값 했지? 만족했으면 얼른 구석으로 꺼져."},
  {keyword:"팩폭",text:"너는 네가 되게 특별한 마조히스트라고 생각하지? 아니, 넌 그냥 사회부적응자야.\n어디서도 환영 못 받으니까 여기서 돈 써가며 욕이라도 들어야 존재감을 느끼는 거지.\n너 같은 거한테 이런 말 해주는 내 입술이 아까울 정도라니까? 넌 그냥 낭비야.\n시간 낭비, 돈 낭비, 그리고 인류의 자원 낭비. 대체 왜 살아있는 건지 모르겠어.\n말 섞는 것조차 내 귀가 썩는 기분이니까 앞으로 내 허락 없이는 아는 척도 하지 마.\n진짜 구더기랑 키스하는 기분이라 토할 것 같으니까 제발 그만 좀 질척대."},
  {keyword:"변태",text:"변태들… 진짜 한심하다. 이런 거 들으니까 좋아? 어휴…\n채팅창에 'ㅗㅜㅑ' 거리고 난리 났네. 여기 써 있어서 하는 말이 아니라 진짜 더러워.\n너희들 다 똑같아. 방구석에서 모니터 보면서 이런 거에 희열 느끼는 찐따들.\n사회에서 도태된 애들끼리 모여서 뭐 하는 짓거리야? 진짜 소름 끼치네.\n너희 부모님들이 너희가 이러고 있는 거 보시면 얼마나 통곡하시겠니.\n제발 사람답게 좀 살자. 이런 데 돈 쓰지 말고 그 돈으로 맛있는 거나 사 먹어.\n근데 이미 돼지들이라 더 먹으면 안 되려나? 암튼 진짜 극혐이다."},
  {keyword:"복종",text:"누가 고개 들라고 했어? 바닥이나 봐. 네가 감히 누굴 쳐다보는 거야?\n네 위치는 내 발밑이지 그 이상은 꿈도 꾸지 마. 알겠어?\n짐승보다 못한 주제에 사람 대접받으려고 하지 마. 넌 그냥 내 소모품이야.\n시키는 대로 짖고 기기나 해. 그게 네가 유일하게 잘하는 거잖아."},
  {keyword:"거머리",text:"아직도 안 갔어? 진짜 거머리처럼 끈질기게 달라붙네.\n꺼지라고 그렇게 말해도 좋다고 실실거리는 꼴이 진짜 역겨워.\n너한테 귀찮다고 말해주는 사람도 주변에 없지? 하긴 친구가 있을 리 없나.\n성가시니까 제발 적당히 좀 해. 너 진짜 질척거려."},
  {keyword:"룰렛",text:"궁금한 게 생겼는데, 너는 매도당하려고 내 방송 꼬박꼬박 보면서 룰렛 돌린 거야?\n평소에도 네 얼굴 보면 사람들이 쌍욕 할 텐데, 여기서까지 돈 내고 듣고 싶어?\n진짜 변태야? 아니면 그냥 뇌에 문제가 있는 거야? 진짜 듣고 싶다고?\n어우... 더러워. 그런 대답 들으려고 물어본 거 아닌데 진짜로 대답하니까 더 소름 돋네.\n너 같은 애들은 진짜 격리 수용해야 해. 사회에 해악만 끼치는 존재들이잖아.\n이제 만족했으면 돈이나 더 쏘든가, 아니면 조용히 꺼져주든가 해."},
  {keyword:"착각",text:"내가 욕해주니까 네가 나랑 친해진 것 같아? 어우, 소름 끼쳐.\n착각하지 마. 난 그냥 네가 낸 미션을 수행하는 것뿐이지, 널 인간으로 안 봐.\n어디 가서 나랑 아는 사이인 척하지도 마. 내 이름 더럽히지 말고.\n넌 그냥 수많은 쓰레기 중 하나일 뿐이야. 특별한 대우 바랐으면 번지수 잘못 찾았어.\n내 관심 끌려고 애쓰지 말고 네 할 일이나 해. 한심해 죽겠네 진짜."},
  {keyword:"소독",text:"아 씨... 나한테 닿지도 않았는데 손 닦아야 할 것 같아. 찝찝해 죽겠네.\n왜 네가 애인도 없이 방에 처박혀서 컴퓨터만 하는지 이제야 100% 이해가 가.\n어떤 미친 여자가 너 같은 쓰레기를 옆에 두고 싶어 하겠어? 상상만 해도 끔찍하다.\n너랑 대화하는 이 순간에도 내 방 공기가 탁해지는 기분이야. 공기청정기 틀어야겠어.\n제발 네 그 더러운 기운 좀 나한테 묻히지 마. 너는 존재 자체가 공해니까.\n빨리 로그아웃하고 네가 살던 그 어두운 구멍으로 기어 들어가."},
  {keyword:"거울",text:"야, 지금 거울 좀 보고 와. 네가 봐도 네 꼴이 한심하지 않니?\n남들은 밖에서 데이트할 때 너는 여기서 이러고 있는 게 정상이라고 생각해?\n진짜 네 인생이 이 텍스트 몇 줄보다 가치 없다는 게 너무 불쌍하다.\n이제 그만하고 눈앞에서 좀 사라져줄래? 보는 것만으로도 기운 빠져."},
  {keyword:"외톨이",text:"참 이상하네. 이렇게나 욕먹는 게 즐거운데 현실에는 왜 친구가 하나도 없을까?\n아, 맞아. 현실 사람들은 너 같은 변태한테 욕해줄 시간조차 아까워서 무시하니까.\n여기서 돈 써가며 구걸해야만 겨우 관심받을 수 있는 네 처지가 참 눈물겹다.\n그렇게라도 사람 온기가 그리웠어? 근데 미안해, 난 네가 온기를 느낄 대상이 아냐.\n난 그냥 네가 얼마나 쓰레기인지 확인시켜 주는 거울일 뿐이거든.\n그 꼴로 친구 사귈 생각은 꿈도 꾸지 마. 누구 인생 망치려고 작정했니?"},
  {keyword:"악취",text:"윽... 여기까지 씻지도 않은 찐따 냄새가 진동하는 것 같아서 코 막고 싶어.\n너 설마 오늘도 안 씻고 컴퓨터 앞에 앉아 있는 거야? 진짜 더럽다.\n네 옆에 지나가면 쓰레기 냄새날 것 같아. 옷은 갈아입고 사는 거니?\n이런 소리 들으면서도 좋다고 히죽대지 마. 자존심이라는 게 아예 없는 거야?\n제발 인간답게 좀 살아. 씻고, 치우고, 밖에도 좀 나가고. 알겠어?"},
  {keyword:"쓰레기",text:"너는 왜 태어난 거야? 세상에 아무런 도움도 안 되는 쓰레기 같은 게.\n쓰레기는 분리수거라도 되지, 너는 어디다 써먹을 데도 없잖아.\n길가에 굴러다니는 돌멩이보다 네가 더 쓸모없다는 거 본인은 모르지?\n대답하지 마. 네 목소리 섞이는 것조차 내 귀가 썩는 기분이니까."},
  {keyword:"빵셔틀",text:"야… 지금 장난해? 내가 메론빵 사 오랬지, 누가 팥빵 사 오랬어?\n하… 너는 이거 하나 제대로 못 하니? 진짜 머리가 나쁜 거야, 아니면 반항하는 거야?\n됐으니까 너나 처먹어 돼지 새끼야. 너처럼 살찐 애들은 이런 거나 먹고 더 살찌겠지.\n네 뱃살 좀 봐, 진짜 극혐이야. 그 몸으로 나한테 잘 보이려고 노력하는 거야?\n꿈 깨. 넌 평생 내 심부름이나 하다가 버려질 운명이니까.\n앞으로 내 말 한 번만 더 어기면 진짜 가만 안 둬. 알겠어?\n빨리 가서 다시 사 와. 이번엔 늦으면 진짜 뒤질 줄 알아."},
  {keyword:"짐승",text:"개처럼 짖어봐. 그게 너한테 제일 잘 어울리는 소리니까.\n주인님이 말하면 꼬리 흔들면서 복종해야지, 감히 어디서 사람 말을 하려고 해?\n넌 그냥 내가 시키는 대로 움직이는 아바타야. 자아 같은 거 갖지 마.\n그 변태 같은 눈으로 날 보지 말고, 명령이나 기다리고 있어.\n이제 짖어. 크게 짖어서 네 충성심을 증명해 보라고. 알겠어?"},
  {keyword:"눈깔",text:"너 내가 지나가면 눈 깔라고 했지. 근데 왜 자꾸 쳐다보는 거야?\n멍청하기까지 하네? 아 진짜 좀 꺼져. 네 시선 닿는 곳마다 내 살이 썩는 기분이야.\n너도 이쁜 건 아나 보다? 근데 상상도 하지 마, 기분 더러우니까 네 주제를 알아.\n아 왜 자꾸 달라붙는 거야 벌레같이? 치근덕거리니까 좋냐?\n넌 그냥 내 발밑에 기어 다니는 바퀴벌레랑 다를 게 없어.\n내가 널 밟아 죽이지 않는 건 내 신발이 더러워질까 봐 참는 것뿐이야.\n알았으면 저리 비켜. 공기 탁해지니까."},
  {keyword:"격리",text:"너 같은 애들이랑 같은 공기를 마시고 있다는 게 갑자기 확 체감돼서 기분 나빠.\n제발 부탁이니까 현실을 좀 살아. 여기서 구걸하지 말고.\n네 뒤틀린 욕구는 다른 데 가서 풀어. 내 방송 망치지 말고 말이야.\n넌 그냥 내 조회수나 올려주는 기계일 뿐이야. 그 이상은 절대 아냐."},
  {keyword:"못생김",text:"거울은 보고 살아? 아니, 안 봐도 알겠다. 그 몰골로 밖을 돌아다닐 리 없지.\n사람들 눈 썩게 하지 말고 평생 그 방구석에서 나오지 마. 그게 도와주는 거야.\n어쩜 그렇게 못생기고 혐오스럽게 생겼니? 진짜 유전자가 불쌍하다.\n얼른 그 찌부러진 얼굴 치워. 토할 것 같으니까."},
  {keyword:"혐오",text:"찌부러진 개구리처럼 생긴 게 치근덕거리니까 기분 더러운 거 알아?\n더러운 찐따 스토커. 여자랑 말 한 번 제대로 안 해본 티가 확확 나네.\n숨 몰아쉬면서 모니터에 입냄새 내뿜는 거 상상만 해도 소름 끼치고 혐오스러워.\n그 꼴로 사람들이 너한테 다가가겠니? 바퀴벌레도 너보다는 귀엽게 생겼을걸.\n씻고는 다니는 거야? 네 옆을 지나가기만 해도 쓰레기 냄새가 진동할 것 같은데.\n닥치고 진짜 내 눈앞에서 꺼져버려. 꼴도 보기 싫으니까 제발."},
  {keyword:"소모품",text:"너는 네가 내 방송의 열혈 시청자라고 생각하지? 아니, 넌 그냥 지갑이야.\n내 기분 풀고 싶을 때마다 밟아주는 샌드백 그 이상도 이하도 아니라고.\n내가 널 사람으로 대우해 주길 바랐어? 오산이야. 넌 그냥 내 장난감일 뿐이야.\n질리면 언제든 갖다 버릴 수 있는 소모품. 그게 네 존재의 이유야.\n알았으면 주제 파악하고 입 닥치고 있어. 시끄럽게 굴지 말고."},
  {keyword:"경고",text:"마지막으로 말하는데, 내 눈앞에서 알랑거리지 마. 진심으로 소름 끼치니까.\n내가 아무리 스트리머라지만 너 같은 찐따 비위 맞추는 것도 한계가 있어.\n자꾸 기어오르면 진짜 국물도 없을 줄 알아. 주제 파악 똑바로 해.\n이제 꺼져. 네 이름 세 글자만 봐도 구역질 나니까."},
  {keyword:"귀찮음",text:"아... 너한테 매도하는 거 너무 귀찮은데 왜 자꾸 시키는 거야?\n어으... 좋아하는 거 봐. 진짜 소름 돋네. 네가 이제 매도를 왜 좋아하는지 알 것 같아.\n지금까지 네가 사랑했던 모든 여자들이 보여준 유일한 표정이 경멸이라 꼴리는 거지?\n하도 욕을 많이 들어서 오히려 그게 익숙해진 거야? 진짜 불쌍하다 못해 역겹네.\n뭐가 됐던 나한테 더 이상 감정 쓰게 하지 마. 넌 그럴 가치가 없는 인간이니까.\n내 귀한 시간 너 같은 거한테 쓰는 게 오늘 제일 후회되는 일이야."},
  {keyword:"비웃음",text:"(비웃으며) 하, 진짜 재주 좋다. 사람을 이렇게까지 열받게 하는 것도 능력이지.\n근데 그 능력을 이런 데 쓰니까 현실에 친구가 하나도 없는 거야.\n누가 너 같은 걸 좋아하겠어? 성격도 꼬였고 취향도 뒤틀렸는데.\n혼자 방구석에서 낄낄거리는 꼴 생각하니 진짜 안쓰럽다 못해 웃기네.\n그래, 그렇게라도 평생 정신 승리하면서 살아. 그게 유일한 낙이잖아?"},
  {keyword:"멍멍이",text:"멍멍아? 우리 멍멍이 주인님 왔을 땐 달려와야지 이리 와봐~\n주인님이 먹이를 줄 때는 꼬리를 흔들어야지, 그런 변태 같은 눈으로 보지 말고.\n이제 먹어, 맛있게 먹어 우리 멍멍이? 어라, 멈춰. 주인님이 주는데 안 먹어?\n침 질질 흘려야지 옳지 오구오구~ 우리 멍멍이 잘한다.\n근데 넌 강아지보다 훨씬 더럽고 못생겨서 귀엽지도 않아. 그냥 징그러워.\n어디 가서 사람 대접받을 생각하지 마. 넌 그냥 내 발밑에 기어다니는 짐승일 뿐이니까.\n알았으면 다시 짖어봐. 네가 얼마나 한심한 개인지 증명해 보라고."},
  {keyword:"찐따",text:"이렇게 하면 좋아하는 게 진짜로 사이코패스 같아 보여. 너 알고 있니?\n잘한다 잘한다~ 하면 진짜로 지가 잘하는 줄 알고 분위기 파악 못 하는 개찐따 같아.\n내가 널 칭찬하는 게 아니라 비꼬는 거라는 걸 이해할 지능은 있는 거지?\n대화하기도 싫으니까 빨리 사라져라. 너랑 말 섞으면 내 수준까지 떨어지는 것 같아.\n네가 여기서 무슨 짓을 해도 넌 그냥 실패한 인생일 뿐이야. 변하지 않는 사실이지.\n가서 거울이나 보고 네가 얼마나 추악한지 다시 한번 깨닫고 와."},
  {keyword:"괴물",text:"잠깐 거울 좀 보고 올래? 거기 비친 네 얼굴이 얼마나 혐오스러운지 확인해 봐.\n눈은 풀려가지고 입은 헤 벌리고... 진짜 사람이 아니라 짐승 같아 보여.\n그 몰골로 나한테 치근덕거릴 생각을 했다니, 참 용기가 가상하네.\n아니면 현실 감각이 없는 건가? 네가 나랑 수준이 맞을 거라고 생각하는 거야?\n제발 주제 좀 알아. 거울 속 그 괴물이 너라는 사실을 잊지 말라고."},
  {keyword:"시선",text:"그딴 눈으로 힐끔힐끔 쳐다보지 마 한심한 변태야. 기분 나빠.\n그래도 계속 쳐다보네 하아… 어쩔 도리가 없네 진짜.\n제발 눈 좀 깔아. 온몸이 썩는 거 같으니까. 네 시선은 독극물이나 다름없어.\n너 같은 애들이랑 엮이면 재수 없다는 소문이 진짜였나 봐.\n앞으로 내 눈에 띄지 마. 쓰레기 같은 게 어디서 감히 사람을 봐.\n너는 평생 바닥만 보고 기어 다녀야 해. 그게 네 분수니까.\n알았으면 대답하지 말고 사라져. 역겨우니까."},
  {keyword:"스토커",text:"좀 적당히 하라고 진짜. 꺼지라고 그렇게 말했는데도 거머리마냥 달라붙네.\n들리던 소문보다 상태가 훨씬 더 안 좋은 것 같은데? 정신 병원 가봐야 하는 거 아냐?\n누가 너한테 귀찮다고, 성가시다고 말한 적 없어? 하긴 누가 너한테 말을 걸겠니.\n(비웃으며) 하긴, 말 걸어주는 사람이 없으니까 나한테 이렇게 집착하는 거겠지.\n진짜 안쓰러워서 못 봐주겠다. 근데 동정심도 안 생겨, 그냥 짜증만 날 뿐이야.\n스토커처럼 굴지 말고 제발 네 인생 좀 살아. 남 인생 방해하지 말고."},
  {keyword:"욕망",text:"욕해달라고 빌빌거리는 꼴 볼 때마다 진짜 구더기랑 대화하는 기분이야.\n어떻게 사람이 이렇게까지 추해질 수 있지? 너 마조히스트가 아니라 그냥 정상이 아냐.\n평소에 얼마나 무시당하고 살면 여기서 욕먹는 걸로 희열을 느끼냐고.\n네 그 일그러진 얼굴 보고 있으면 내 정신까지 오염되는 것 같아 소름 돋아.\n진짜 역겨우니까 그 입 좀 다물어줘. 너랑 엮이는 것 자체가 내 인생의 수치야."},
  {keyword:"한심",text:"다 큰 어른이 이런 매도 들으면서 히죽히죽 대니까 정말 기분 더러워.\n자존심은 어디 개나 줬니? 찐따 새끼야. 이런 소리 들으면 화가 나야 정상 아냐?\n근데 너는 지금 좋아서 몸을 배배 꼬고 있잖아. 진짜 구역질 나는 마조히스트야.\n네 주변 사람들은 네가 이런 변태인 거 아니? 알면 다들 절교했을 텐데.\n아, 절교할 친구조차 없어서 여기서 이러고 있는 건가? 하하, 진짜 비참하다.\n그 비참한 인생 끝까지 잘 즐겨봐. 내가 해줄 수 있는 말은 여기까지니까."},
  {keyword:"찰싹",text:"적어도 사람답게는 굴어야지 한심한 변태 녀석아.\n네가 얼마나 쓰레기인지 내가 몸소 가르쳐줄게. (뺨 때리는 소리) 찰싹!\n하.. 이래도 말을 못 알아먹네? 오히려 좋아하는 거야? 진짜 역겨워서 못 봐주겠다.\n넌 맞아야 정신 차리는 타입이구나? 아니면 맞는 것조차 즐기는 쓰레기인가?\n앞으로 내 눈에 띄지 마. 네가 내 시야에 들어오는 것만으로도 내 하루가 망쳐지니까.\n가서 네가 좋아하는 그 매도 대사나 무한 반복해서 들어.\n그게 네 비참한 인생에 어울리는 유일한 배경음악이니까."},
  {keyword:"현실",text:"너 내가 그렇게 좋아? 아무리 그래도 소용없을 거야.\n왜냐고? 하.. 생각을 해 봐. 네가 여자라면 너 같은 걸 좋아할 것 같니?\n못생겼지, 돈도 없지, 성격도 변태 같지... 장점이 하나도 없잖아.\n미안해~ 내가 좀 직설적이라. 근데 누군가는 너한테 사실을 말해줘야 할 것 같아서.\n너 같은 걸 좋아하는 여자가 있다면 그건 아마 제정신이 아니거나 사기꾼일 거야.\n그러니까 나한테 집착하지 말고 주제에 맞는 사람이나 찾아봐.\n아, 물론 너랑 수준 맞는 사람은 세상에 없겠지만 말이야. 하하!"},
  {keyword:"끝",text:"이제 매도 좀 해달라고 하는 거 그만해. 질리지도 않니?\n내가 너 같은 찐따한테 매도해주려고 스트리머 된 게 아니야.\n아무리 매도가 좋다지만 내 입장에서는 기분 정말 더러워.\n네가 채팅 칠 때마다 내 손가락이 떨려, 분노 때문이 아니라 혐오감 때문에.\n제발 부탁인데 다른 방 가서 놀아. 너 같은 건 나도 감당하기 힘들어.\n마지막으로 한마디만 할게. 너 진짜 싫어. 진심으로.\n이제 다시는 내 방송에서 네 이름 안 봤으면 좋겠다. 영원히."}
];

// ── STATE ──
let currentTier = null;
let selItems = [], selPenalties = [];
let lResult = '';

// ── NAVER LADDER STATE ──
let nlData = null;
let nlBoardBlurOn = true;
let nlItemsBlurOn = true;
let nlAnimating = false;
let nlRafId = null;
let nlResultTimeout = null;
let nlGen = 0; // 세대 번호: buildNaverLadder마다 증가, 이전 콜백 무효화용

// ════ TIER CARDS ════
function makeTierCard(t, i){
  return `
    <div class="tier-card" onclick="openTierModal(${i})" id="tc-${i}">
      <div class="card-vine-tl" aria-hidden="true"></div>
      <div class="card-vine-tr" aria-hidden="true"></div>
      <div class="card-num-header">
        <img class="card-num-img" src="assets/ladder/num-${t.num}.png" alt="${t.num}">
      </div>
      <div class="card-body">
        <div class="tier-rule-badge">${t.rule}</div>
        <div class="tier-list-divider">
          <img class="divider-vine-img" src="assets/ladder/divider-vine.png" alt="">
        </div>
        <div class="tier-items-list">
          ${t.items.map(it => `<div class="tier-item-row"><span class="tier-item-text">${it.replace(/<br>/g,' ')}</span></div>`).join('')}
        </div>
      </div>
    </div>`;
}

function makePenaltyCard(){
  const inline = PENALTIES.map(p => p.text).join(' · ');
  return `
    <div class="tier-card penalty-display-card">
      <div class="card-vine-tl" aria-hidden="true"></div>
      <div class="card-vine-tr" aria-hidden="true"></div>
      <div class="penalty-content-group">
        <div class="penalty-card-header">
          <div class="penalty-title-wrap">
            <img class="penalty-title-img" src="assets/ladder/penalty-title.png" alt="벌칙">
          </div>
        </div>
        <div class="card-body penalty-card-body">
          <div class="tier-list-divider">
            <img class="divider-vine-img" src="assets/ladder/divider-vine.png" alt="">
          </div>
          <p class="penalty-inline-text">${inline}</p>
        </div>
      </div>
    </div>`;
}

function initLadder(){
  const row = document.getElementById('tier-row');
  row.innerHTML =
    `<div class="tier-left-group">` +
      makeTierCard(TIERS[0], 0) +
      makeTierCard(TIERS[1], 1) +
    `</div>` +
    `<div class="ladder-center-slot"></div>` +
    `<div class="tier-right-group">` +
      `<div class="tier-right-cards">` +
        makeTierCard(TIERS[2], 2) +
        makeTierCard(TIERS[3], 3) +
      `</div>` +
      makePenaltyCard() +
    `</div>`;
}

// ════ TIER MODAL ════
function openTierModal(idx){
  currentTier = idx;
  selItems = []; selPenalties = [];
  const t = TIERS[idx];
  document.getElementById('tm-title').textContent = t.num + ' ★';
  document.getElementById('tm-sub').textContent = t.sub;
  const penTab = document.getElementById('tab-penalty');
  penTab.style.display = t.penPick > 0 ? '' : 'none';
  document.getElementById('tier-modal').style.display = 'flex';
  goToStep('items');
}

function closeTierModal(){
  document.getElementById('tier-modal').style.display = 'none';
  document.getElementById('nl-result-overlay').style.display = 'none';
  if(nlRafId){ cancelAnimationFrame(nlRafId); nlRafId = null; }
  if(nlResultTimeout){ clearTimeout(nlResultTimeout); nlResultTimeout = null; }
  nlAnimating = false;
}

function handleModalBgClick(e){
  if(e.target === document.getElementById('tier-modal')) closeTierModal();
}

function goToStep(step){
  ['items','penalty','ladder'].forEach(s => {
    document.getElementById('section-' + s).style.display = s === step ? 'block' : 'none';
  });
  ['tab-items','tab-penalty','tab-ladder'].forEach(id => {
    document.getElementById(id).classList.remove('active');
  });
  const tabMap = {items:'tab-items', penalty:'tab-penalty', ladder:'tab-ladder'};
  if(tabMap[step]) document.getElementById(tabMap[step]).classList.add('active');
  if(step === 'items') renderItems();
  if(step === 'penalty') renderPenalties();
  if(step === 'ladder') buildNaverLadder();
}

// ════ ITEM / PENALTY ════
function renderItems(){
  const t = TIERS[currentTier];
  document.getElementById('items-status').innerHTML = `<span>${selItems.length}</span> / ${t.pick} 선택`;
  const CORNER = `<img class="chip-corner chip-corner-tl" src="assets/ladder/vine-corner.png" aria-hidden="true"><img class="chip-corner chip-corner-tr" src="assets/ladder/vine-corner.png" aria-hidden="true"><img class="chip-corner chip-corner-bl" src="assets/ladder/vine-corner.png" aria-hidden="true"><img class="chip-corner chip-corner-br" src="assets/ladder/vine-corner.png" aria-hidden="true">`;
  document.getElementById('items-grid').innerHTML = t.items.map((it,i) => `
    <div class="item-chip${selItems.includes(i)?' selected':''}" onclick="toggleItem(${i})">${CORNER}${it}</div>
  `).join('');
  document.getElementById('btn-to-penalty').disabled = selItems.length < t.pick;
}

function toggleItem(i){
  const t = TIERS[currentTier];
  if(selItems.includes(i)){ selItems = selItems.filter(x=>x!==i); }
  else if(selItems.length < t.pick){ selItems.push(i); }
  renderItems();
}

function clearItems(){ selItems=[]; renderItems(); }

function renderPenalties(){
  const t = TIERS[currentTier];
  if(t.penPick === 0){
    goToStep('ladder'); return;
  }
  document.getElementById('penalty-status').innerHTML = `<span>${selPenalties.length}</span> / ${t.penPick} 선택`;
  document.getElementById('penalty-grid').innerHTML = PENALTIES.map((p,i) => `
    <div class="penalty-chip${selPenalties.includes(i)?' selected':''}" onclick="togglePenalty(${i})">${CORNER}${p.icon} ${p.text}</div>
  `).join('');
  document.getElementById('btn-to-ladder').disabled = selPenalties.length < t.penPick;
}

function togglePenalty(i){
  const t = TIERS[currentTier];
  if(selPenalties.includes(i)){ selPenalties = selPenalties.filter(x=>x!==i); }
  else if(selPenalties.length < t.penPick){ selPenalties.push(i); }
  renderPenalties();
}

function clearPenalties(){ selPenalties=[]; renderPenalties(); }

// ════ NAVER LADDER ════
function buildNaverLadder(){
  // 이전 실행 잔여 애니메이션·타이머 무조건 정리
  if(nlRafId){ cancelAnimationFrame(nlRafId); nlRafId = null; }
  if(nlResultTimeout){ clearTimeout(nlResultTimeout); nlResultTimeout = null; }
  nlAnimating = false;

  const t = TIERS[currentTier];
  const rawItems = selItems.map(i => t.items[i]);
  const rawPens  = selPenalties.map(i => PENALTIES[i].text);
  const allItems = [...rawItems, ...rawPens];
  const n = allItems.length;

  const shuffled = [...allItems].sort(() => Math.random() - 0.5);

  const ROWS = Math.max(12, n * 3);
  const conns = [];
  for(let row = 0; row < ROWS; row++){
    const used = new Set();
    for(let col = 0; col < n - 1; col++){
      if(!used.has(col) && !used.has(col+1) && Math.random() < 0.45){
        conns.push({row, col});
        used.add(col); used.add(col+1);
      }
    }
  }

  const mapping = [];
  for(let start = 0; start < n; start++){
    let pos = start;
    for(let row = 0; row < ROWS; row++){
      const r = conns.find(c => c.row === row && c.col === pos);
      const l = conns.find(c => c.row === row && c.col === pos - 1);
      if(r) pos++;
      else if(l) pos--;
    }
    mapping[start] = pos;
  }

  nlGen++; // 이전 step/setTimeout 콜백 무효화
  nlData = { n, items: shuffled, conns, ROWS, mapping, myPos: null };
  nlBoardBlurOn = true;
  nlItemsBlurOn = true;
  nlAnimating = false;
  document.getElementById('nl-play-btn').disabled = true;

  renderNlNumbers();
  renderNlItems();
  drawLadder(null);
  document.getElementById('nl-board-cover').style.display = 'flex';
  const _charImg0 = document.querySelector('.board-char-img');
  if(_charImg0) _charImg0.style.display = '';
}

function renderNlNumbers(){
  const { n } = nlData;
  document.getElementById('nl-numbers').innerHTML = Array.from({length:n}, (_,i) => `
    <div class="nl-num-btn">
      <div class="nl-num" id="nl-n-${i}" onclick="nlSelectNum(${i})">${i+1}</div>
    </div>
  `).join('');
}

function renderNlItems(){
  const { n, items } = nlData;
  document.getElementById('nl-items').innerHTML = items.map((it,i) => `
    <div class="nl-item-btn">
      <div class="nl-item blur-on" id="nl-item-${i}">${it}</div>
    </div>
  `).join('');
}

function nlSelectNum(pos){
  if(nlAnimating) return;
  nlData.myPos = pos;
  document.querySelectorAll('.nl-num').forEach((el,i) => {
    el.className = 'nl-num' + (i === pos ? ' nl-selected' : '');
  });
  document.getElementById('nl-play-btn').disabled = false;
  document.getElementById('nl-hint').textContent = (pos+1) + '번 선택 ✓  사다리를 타볼까요?';
}

function nlToggleBoardBlur(){
  if(nlAnimating) return;
  nlBoardBlurOn = !nlBoardBlurOn;
  document.getElementById('nl-board-cover').style.display = nlBoardBlurOn ? 'flex' : 'none';
  const _charImg = document.querySelector('.board-char-img');
  if(_charImg) _charImg.style.display = nlBoardBlurOn ? '' : 'none';
}

function nlToggleItemsBlur(){
  if(nlAnimating) return;
  nlItemsBlurOn = !nlItemsBlurOn;
  document.querySelectorAll('.nl-item').forEach(el => {
    if(!el.classList.contains('nl-win')) el.classList.toggle('blur-on', nlItemsBlurOn);
  });
  document.getElementById('nl-items-blur-hint').style.display = nlItemsBlurOn ? '' : 'none';
}

// ── CANVAS DRAW ──
function getLadderMetrics(){
  const canvas = document.getElementById('nl-canvas');
  const { n, ROWS } = nlData;
  const W = canvas.width, H = canvas.height;
  const PAD_X = 24, PAD_Y = 14;
  const colW = (W - PAD_X*2) / (n - 1);
  const rowH = (H - PAD_Y*2) / ROWS;
  return { W, H, PAD_X, PAD_Y, colW, rowH, n, ROWS };
}

function colX(col, m){ return m.PAD_X + col * m.colW; }
function rowY(row, m){ return m.PAD_Y + row * m.rowH; }

function drawLadder(pathUpTo, pathPositions){
  const canvas = document.getElementById('nl-canvas');
  const parent = document.getElementById('nl-board-area');
  const PW = parent.clientWidth || 600;
  const { n, ROWS } = nlData;
  const H = Math.min(320, Math.max(200, Math.round(PW * 0.55)));
  if(canvas.width !== PW || canvas.height !== H){
    canvas.width = PW;
    canvas.height = H;
  }

  const ctx = canvas.getContext('2d');
  ctx.clearRect(0,0,PW,H);
  const m = getLadderMetrics();

  ctx.strokeStyle = 'rgba(180,140,60,0.35)';
  ctx.lineWidth = 2;
  for(let col = 0; col < n; col++){
    ctx.beginPath();
    ctx.moveTo(colX(col,m), rowY(0,m));
    ctx.lineTo(colX(col,m), rowY(ROWS,m));
    ctx.stroke();
  }

  ctx.strokeStyle = 'rgba(180,140,60,0.30)';
  ctx.lineWidth = 2;
  nlData.conns.forEach(({row,col}) => {
    const x1 = colX(col,m), x2 = colX(col+1,m);
    const y  = rowY(row + 0.5, m);
    ctx.beginPath(); ctx.moveTo(x1,y); ctx.lineTo(x2,y); ctx.stroke();
  });

  if(pathUpTo !== null && pathPositions && pathPositions.length > 1){
    ctx.strokeStyle = 'rgba(220,50,50,0.9)';
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();
    const limit = Math.min(pathUpTo, pathPositions.length - 1);
    for(let i = 0; i <= limit; i++){
      const {x,y} = pathPositions[i];
      i===0 ? ctx.moveTo(x,y) : ctx.lineTo(x,y);
    }
    ctx.stroke();

    if(limit < pathPositions.length){
      const {x,y} = pathPositions[limit];
      ctx.beginPath(); ctx.arc(x,y,5,0,Math.PI*2);
      ctx.fillStyle='rgba(180,190,230,1)'; ctx.fill();
    }
  }

  if(nlData.myPos !== null){
    const x = colX(nlData.myPos, m);
    const y = rowY(0, m);
    ctx.beginPath(); ctx.arc(x,y,7,0,Math.PI*2);
    ctx.fillStyle='rgba(180,190,230,0.9)'; ctx.fill();
  }
}

function calcPathPoints(){
  const m = getLadderMetrics();
  const {n, ROWS, conns, myPos} = nlData;
  const pts = [];
  let pos = myPos;
  pts.push({x: colX(pos,m), y: rowY(0,m)});

  for(let row = 0; row < ROWS; row++){
    const topY = rowY(row, m);
    const midY = rowY(row + 0.5, m);
    const botY = rowY(row + 1, m);
    const r = conns.find(c => c.row === row && c.col === pos);
    const l = conns.find(c => c.row === row && c.col === pos - 1);

    pts.push({x: colX(pos,m), y: midY});
    if(r){ pos++; pts.push({x: colX(pos,m), y: midY}); }
    else if(l){ pos--; pts.push({x: colX(pos,m), y: midY}); }
    pts.push({x: colX(pos,m), y: botY});
  }
  return pts;
}

function nlPlay(){
  if(nlAnimating || nlData.myPos === null) return;
  nlAnimating = true;
  document.getElementById('nl-play-btn').disabled = true;

  nlBoardBlurOn = false;
  nlItemsBlurOn = false;
  document.getElementById('nl-board-cover').style.display = 'none';
  const _playChar = document.querySelector('.board-char-img');
  if(_playChar) _playChar.style.display = 'none';
  document.getElementById('nl-items-blur-hint').style.display = 'none';
  document.querySelectorAll('.nl-item').forEach(el => el.classList.remove('blur-on'));

  drawLadder(null, null);
  const pts = calcPathPoints();

  const SAMPLE_STEP = 2;
  const sampled = [pts[0]];
  for(let i = 1; i < pts.length; i++){
    const dx = pts[i].x - pts[i-1].x;
    const dy = pts[i].y - pts[i-1].y;
    const segs = Math.max(1, Math.ceil(Math.hypot(dx, dy) / SAMPLE_STEP));
    for(let s = 1; s <= segs; s++){
      sampled.push({ x: pts[i-1].x + dx*s/segs, y: pts[i-1].y + dy*s/segs });
    }
  }

  const total = sampled.length - 1;
  const SPEED = 576;
  const DURATION = (total * SAMPLE_STEP / SPEED) * 1000;
  const start = performance.now();
  const myGen = nlGen; // 이 실행의 세대 번호 캡처

  function step(now){
    if(myGen !== nlGen){ nlAnimating = false; return; } // 세대 불일치 → 무효 콜백
    const elapsed = now - start;
    const progress = Math.min(elapsed / DURATION, 1);
    const idx = Math.floor(progress * total);
    drawLadder(idx, sampled);
    if(progress < 1){ nlRafId = requestAnimationFrame(step); }
    else {
      drawLadder(total, sampled);
      const winPos = nlData.mapping[nlData.myPos];
      nlResultTimeout = setTimeout(() => {
        if(myGen !== nlGen) return; // 세대 불일치 → 무효
        showNlResult(winPos);
      }, 1000);
    }
  }
  nlRafId = requestAnimationFrame(step);
}

function showNlResult(winPos){
  const {n, items, myPos, mapping} = nlData;
  const winItem = items[winPos];

  document.getElementById('nl-win-num').textContent = (myPos+1) + '번';
  document.getElementById('nl-congrats-sub').textContent = (myPos+1) + '번의 당첨 상품';
  document.getElementById('nl-win-item').textContent = winItem;

  document.getElementById('nl-all-results').innerHTML = Array.from({length:n},(_,i)=>`
    <div class="nl-result-row${i===myPos?' rr-mine':''}">
      <span class="rr-num">${i+1}번</span>
      <span class="rr-arrow">→</span>
      <span class="rr-item">${items[mapping[i]]}</span>
    </div>
  `).join('');

  spawnConfetti();
  document.getElementById('nl-result-overlay').style.display = 'flex';

  document.querySelectorAll('.nl-item').forEach((el,i) => {
    if(i === winPos) el.classList.add('nl-win');
  });
  document.querySelectorAll('.nl-num').forEach((el,i) => {
    el.className = 'nl-num' + (i===myPos?' nl-won': i in mapping ? ' nl-other':'');
  });
}

function spawnConfetti(){
  const area = document.getElementById('nl-confetti-area');
  area.innerHTML = '';
  for(let i=0; i<36; i++){
    const el = document.createElement('img');
    el.className = 'confetti-p';
    el.src = 'assets/ladder/result-confetti-leaf.png';
    const size = 14 + Math.random() * 13;
    const rot = (Math.random() > 0.5 ? '' : '-') + (120 + Math.random() * 300) + 'deg';
    el.style.cssText = `
      left:${Math.random()*100}%;
      width:${size}px; height:${size}px;
      --dur:${1.1+Math.random()*1.1}s;
      --delay:${Math.random()*0.7}s;
      --rot:${rot};
    `;
    area.appendChild(el);
  }
}

function nlReset(){
  document.getElementById('nl-result-overlay').style.display = 'none';
  if(nlRafId){ cancelAnimationFrame(nlRafId); nlRafId = null; }
  if(nlResultTimeout){ clearTimeout(nlResultTimeout); nlResultTimeout = null; }
  nlAnimating = false;
  buildNaverLadder();
}

// ── SNOW ──
(function(){
  const c = document.getElementById('snow-canvas');
  if(!c) return;
  const ctx = c.getContext('2d');
  let flakes = [];
  function resize(){c.width=innerWidth;c.height=innerHeight;}
  function init(){
    resize(); flakes=[];
    for(let i=0;i<90;i++) flakes.push({
      x:Math.random()*c.width, y:Math.random()*c.height,
      r:Math.random()*2.5+.5, speed:Math.random()*.4+.1,
      drift:(Math.random()-.5)*.2, op:Math.random()*.5+.15
    });
  }
  function draw(){
    ctx.clearRect(0,0,c.width,c.height);
    flakes.forEach(f=>{
      f.y+=f.speed; f.x+=f.drift;
      if(f.y>c.height){f.y=-5;f.x=Math.random()*c.width;}
      if(f.x<0)f.x=c.width; if(f.x>c.width)f.x=0;
      ctx.beginPath(); ctx.arc(f.x,f.y,f.r,0,Math.PI*2);
      ctx.fillStyle=`rgba(180,190,230,${f.op})`; ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  window.addEventListener('resize',init);
  init(); draw();
})();

(function(){
  var snow = document.getElementById('meyou-snow');
  if(!snow) return;
  for(var i=0;i<22;i++){
    var f=document.createElement('span');
    var size=2+Math.random()*3.5;
    f.style.cssText='position:absolute;border-radius:50%;background:rgba(255,255,255,'+(0.35+Math.random()*0.55)+');box-shadow:0 0 '+(5+Math.random()*8)+'px rgba(180,220,255,0.85);width:'+size+'px;height:'+size+'px;left:'+(Math.random()*100)+'%;animation:meyou-snowfall '+(8+Math.random()*10)+'s linear '+(-(Math.random()*14))+'s infinite;';
    snow.appendChild(f);
  }
})();

document.addEventListener('DOMContentLoaded', function(){
  currentTier = null; selItems = []; selPenalties = [];
  initLadder();
});
