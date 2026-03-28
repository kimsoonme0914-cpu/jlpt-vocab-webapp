import { PART2 } from "./vocabPart2";
import { PART3 } from "./vocabPart3";

export const VOCAB_DATA = {
  PART1: {
    title: "주제별 N5, N4 단어",
    days: {
      1: { theme: "숫자, 시점", words: [
        {kanji:"数",reading:"かず",meaning:"수, 숫자"},{kanji:"午後",reading:"ごご",meaning:"오후"},{kanji:"朝",reading:"あさ",meaning:"아침"},{kanji:"昼",reading:"ひる",meaning:"낮"},{kanji:"以上",reading:"いじょう",meaning:"이상"},
        {kanji:"来月",reading:"らいげつ",meaning:"다음 달"},{kanji:"夕方",reading:"ゆうがた",meaning:"저녁 무렵"},{kanji:"今朝",reading:"けさ",meaning:"오늘 아침"},{kanji:"去年",reading:"きょねん",meaning:"작년, 지난해"},{kanji:"今週",reading:"こんしゅう",meaning:"이번 주"},
        {kanji:"眠い",reading:"ねむい",meaning:"졸리다"},{kanji:"遅い",reading:"おそい",meaning:"늦다, 느리다"},{kanji:"毎日",reading:"まいにち",meaning:"매일"},{kanji:"後",reading:"あと",meaning:"후, 뒤, 나중"},{kanji:"夜",reading:"よる",meaning:"밤"},
        {kanji:"寝坊",reading:"ねぼう",meaning:"늦잠"},{kanji:"昨日",reading:"きのう",meaning:"어제"},{kanji:"割る",reading:"わる",meaning:"나누다, 깨뜨리다"},{kanji:"出る",reading:"でる",meaning:"나가다, 나오다"},{kanji:"眠る",reading:"ねむる",meaning:"자다, 잠들다"}
      ]},
      2: { theme: "가족, 일상생활", words: [
        {kanji:"両親",reading:"りょうしん",meaning:"부모님"},{kanji:"母親",reading:"ははおや",meaning:"모친"},{kanji:"家族",reading:"かぞく",meaning:"가족"},{kanji:"妹",reading:"いもうと",meaning:"(나의) 여동생"},{kanji:"弟",reading:"おとうと",meaning:"(나의) 남동생"},
        {kanji:"自分",reading:"じぶん",meaning:"자기 자신"},{kanji:"お兄さん",reading:"おにいさん",meaning:"형, 오빠"},{kanji:"兄弟",reading:"きょうだい",meaning:"형제"},{kanji:"彼女",reading:"かのじょ",meaning:"그녀"},{kanji:"お姉さん",reading:"おねえさん",meaning:"누나, 언니"},
        {kanji:"間",reading:"あいだ",meaning:"사이, 간격"},{kanji:"経験",reading:"けいけん",meaning:"경험"},{kanji:"秘密",reading:"ひみつ",meaning:"비밀"},{kanji:"送る",reading:"おくる",meaning:"보내다"},{kanji:"取る",reading:"とる",meaning:"집다, 들다, 잡다"},
        {kanji:"招待",reading:"しょうたい",meaning:"초대"},{kanji:"貸す",reading:"かす",meaning:"빌려주다"},{kanji:"返す",reading:"かえす",meaning:"돌려주다"},{kanji:"拾う",reading:"ひろう",meaning:"줍다"},{kanji:"手伝う",reading:"てつだう",meaning:"돕다"}
      ]},
      3: { theme: "쇼핑, 음식", words: [
        {kanji:"予定",reading:"よてい",meaning:"예정"},{kanji:"高い",reading:"たかい",meaning:"비싸다, 높다"},{kanji:"甘い",reading:"あまい",meaning:"달다"},{kanji:"用事",reading:"ようじ",meaning:"용무, 볼일"},{kanji:"都合",reading:"つごう",meaning:"형편, 사정"},
        {kanji:"値段",reading:"ねだん",meaning:"가격"},{kanji:"着る",reading:"きる",meaning:"입다"},{kanji:"売る",reading:"うる",meaning:"팔다"},{kanji:"新しい",reading:"あたらしい",meaning:"새롭다"},{kanji:"珍しい",reading:"めずらしい",meaning:"드물다, 희귀하다"},
        {kanji:"果物",reading:"くだもの",meaning:"과일"},{kanji:"野菜",reading:"やさい",meaning:"채소"},{kanji:"薄い",reading:"うすい",meaning:"얇다, 연하다"},{kanji:"料理",reading:"りょうり",meaning:"요리"},{kanji:"安い",reading:"やすい",meaning:"싸다"},
        {kanji:"卵",reading:"たまご",meaning:"달걀"},{kanji:"魚",reading:"さかな",meaning:"생선, 물고기"},{kanji:"靴",reading:"くつ",meaning:"신발"},{kanji:"飲む",reading:"のむ",meaning:"마시다"},{kanji:"包む",reading:"つつむ",meaning:"싸다, 포장하다"}
      ]},
      4: { theme: "식당, 안내", words: [
        {kanji:"食堂",reading:"しょくどう",meaning:"식당"},{kanji:"味",reading:"あじ",meaning:"맛"},{kanji:"予約",reading:"よやく",meaning:"예약"},{kanji:"店員",reading:"てんいん",meaning:"점원"},{kanji:"連絡",reading:"れんらく",meaning:"연락"},
        {kanji:"並ぶ",reading:"ならぶ",meaning:"줄을 서다"},{kanji:"呼ぶ",reading:"よぶ",meaning:"부르다"},{kanji:"喫茶店",reading:"きっさてん",meaning:"찻집, 카페"},{kanji:"食事",reading:"しょくじ",meaning:"식사"},{kanji:"今度",reading:"こんど",meaning:"이번, 이다음"},
        {kanji:"案内",reading:"あんない",meaning:"안내"},{kanji:"払う",reading:"はらう",meaning:"지불하다"},{kanji:"水曜日",reading:"すいようび",meaning:"수요일"},{kanji:"行う",reading:"おこなう",meaning:"행하다"},{kanji:"土曜日",reading:"どようび",meaning:"토요일"},
        {kanji:"説明",reading:"せつめい",meaning:"설명"},{kanji:"閉まる",reading:"しまる",meaning:"닫히다"},{kanji:"注意",reading:"ちゅうい",meaning:"주의"},{kanji:"探す",reading:"さがす",meaning:"찾다"},{kanji:"伝える",reading:"つたえる",meaning:"전달하다, 알리다"}
      ]},
      5: { theme: "날씨, 장소", words: [
        {kanji:"春",reading:"はる",meaning:"봄"},{kanji:"冬",reading:"ふゆ",meaning:"겨울"},{kanji:"天気",reading:"てんき",meaning:"날씨"},{kanji:"上着",reading:"うわぎ",meaning:"상의, 겉옷"},{kanji:"中止",reading:"ちゅうし",meaning:"중지"},
        {kanji:"雪",reading:"ゆき",meaning:"눈"},{kanji:"風",reading:"かぜ",meaning:"바람"},{kanji:"用意",reading:"ようい",meaning:"준비, 마련"},{kanji:"階段",reading:"かいだん",meaning:"계단"},{kanji:"建物",reading:"たてもの",meaning:"건물"},
        {kanji:"町",reading:"まち",meaning:"동네, 마을"},{kanji:"店",reading:"みせ",meaning:"가게"},{kanji:"住所",reading:"じゅうしょ",meaning:"주소"},{kanji:"狭い",reading:"せまい",meaning:"좁다"},{kanji:"暗い",reading:"くらい",meaning:"어둡다"},
        {kanji:"庭",reading:"にわ",meaning:"정원, 뜰"},{kanji:"島",reading:"しま",meaning:"섬"},{kanji:"本屋",reading:"ほんや",meaning:"서점, 책방"},{kanji:"銀行",reading:"ぎんこう",meaning:"은행"},{kanji:"郵便局",reading:"ゆうびんきょく",meaning:"우체국"}
      ]},
      6: { theme: "교통, 의사소통", words: [
        {kanji:"交通",reading:"こうつう",meaning:"교통"},{kanji:"近所",reading:"きんじょ",meaning:"근방, 근처"},{kanji:"地図",reading:"ちず",meaning:"지도"},{kanji:"右",reading:"みぎ",meaning:"오른쪽"},{kanji:"左",reading:"ひだり",meaning:"왼쪽"},
        {kanji:"電車",reading:"でんしゃ",meaning:"전철, 전차"},{kanji:"車",reading:"くるま",meaning:"차"},{kanji:"東",reading:"ひがし",meaning:"동쪽"},{kanji:"北",reading:"きた",meaning:"북쪽"},{kanji:"運転",reading:"うんてん",meaning:"운전"},
        {kanji:"進む",reading:"すすむ",meaning:"나아가다"},{kanji:"角",reading:"かど",meaning:"모퉁이, 구석"},{kanji:"込む",reading:"こむ",meaning:"붐비다"},{kanji:"渡る",reading:"わたる",meaning:"건너다"},{kanji:"乗る",reading:"のる",meaning:"타다"},
        {kanji:"約束",reading:"やくそく",meaning:"약속"},{kanji:"質問",reading:"しつもん",meaning:"질문"},{kanji:"手紙",reading:"てがみ",meaning:"편지"},{kanji:"駅",reading:"えき",meaning:"역"},{kanji:"嘘",reading:"うそ",meaning:"거짓말"}
      ]},
      7: { theme: "인물, 성격", words: [
        {kanji:"親切",reading:"しんせつ",meaning:"친절"},{kanji:"男性",reading:"だんせい",meaning:"남성"},{kanji:"失礼",reading:"しつれい",meaning:"실례"},{kanji:"叱る",reading:"しかる",meaning:"꾸짖다, 혼내다"},{kanji:"知る",reading:"しる",meaning:"알다"},
        {kanji:"大人しい",reading:"おとなしい",meaning:"조용하다, 얌전하다"},{kanji:"厳しい",reading:"きびしい",meaning:"엄하다, 엄격하다"},{kanji:"謝る",reading:"あやまる",meaning:"사과하다"},{kanji:"忙しい",reading:"いそがしい",meaning:"바쁘다"},{kanji:"怒る",reading:"おこる",meaning:"화내다, 꾸짖다"},
        {kanji:"遠慮",reading:"えんりょ",meaning:"사양함, 삼감"},{kanji:"次",reading:"つぎ",meaning:"다음"},{kanji:"若い",reading:"わかい",meaning:"젊다"},{kanji:"弱い",reading:"よわい",meaning:"약하다"},{kanji:"強い",reading:"つよい",meaning:"강하다, 세다"},
        {kanji:"暇だ",reading:"ひまだ",meaning:"한가하다"},{kanji:"下手だ",reading:"へただ",meaning:"서투르다, 못하다"},{kanji:"真面目だ",reading:"まじめだ",meaning:"성실하다"},{kanji:"名前",reading:"なまえ",meaning:"이름"},{kanji:"習慣",reading:"しゅうかん",meaning:"습관"}
      ]},
      8: { theme: "신체, 가정", words: [
        {kanji:"体",reading:"からだ",meaning:"신체, 몸"},{kanji:"背",reading:"せ",meaning:"등, 키"},{kanji:"指",reading:"ゆび",meaning:"손가락"},{kanji:"重い",reading:"おもい",meaning:"무겁다"},{kanji:"太い",reading:"ふとい",meaning:"굵다"},
        {kanji:"家賃",reading:"やちん",meaning:"집세"},{kanji:"結婚",reading:"けっこん",meaning:"결혼"},{kanji:"台所",reading:"だいどころ",meaning:"부엌"},{kanji:"窓",reading:"まど",meaning:"창문"},{kanji:"家具",reading:"かぐ",meaning:"가구"},
        {kanji:"足",reading:"あし",meaning:"발, 다리"},{kanji:"部屋",reading:"へや",meaning:"방"},{kanji:"洗濯",reading:"せんたく",meaning:"세탁"},{kanji:"掃除",reading:"そうじ",meaning:"청소"},{kanji:"頭",reading:"あたま",meaning:"머리"},
        {kanji:"長い",reading:"ながい",meaning:"길다"},{kanji:"汚い",reading:"きたない",meaning:"더럽다"},{kanji:"以外",reading:"いがい",meaning:"이외"},{kanji:"似合う",reading:"にあう",meaning:"어울리다"},{kanji:"洗う",reading:"あらう",meaning:"씻다"}
      ]},
      9: { theme: "공부, 학교생활", words: [
        {kanji:"合格",reading:"ごうかく",meaning:"합격"},{kanji:"辞書",reading:"じしょ",meaning:"사전"},{kanji:"宿題",reading:"しゅくだい",meaning:"숙제"},{kanji:"机",reading:"つくえ",meaning:"책상"},{kanji:"椅子",reading:"いす",meaning:"의자"},
        {kanji:"見学",reading:"けんがく",meaning:"견학"},{kanji:"授業",reading:"じゅぎょう",meaning:"수업"},{kanji:"教わる",reading:"おそわる",meaning:"배우다"},{kanji:"終わる",reading:"おわる",meaning:"끝나다"},{kanji:"将来",reading:"しょうらい",meaning:"장래, 미래"},
        {kanji:"勉強",reading:"べんきょう",meaning:"공부"},{kanji:"帰国",reading:"きこく",meaning:"귀국"},{kanji:"夢",reading:"ゆめ",meaning:"꿈"},{kanji:"乾く",reading:"かわく",meaning:"마르다"},{kanji:"書く",reading:"かく",meaning:"쓰다"},
        {kanji:"図書館",reading:"としょかん",meaning:"도서관"},{kanji:"教える",reading:"おしえる",meaning:"가르치다"},{kanji:"覚える",reading:"おぼえる",meaning:"외우다, 기억하다"},{kanji:"問題",reading:"もんだい",meaning:"문제"},{kanji:"学校",reading:"がっこう",meaning:"학교"}
      ]},
      10: { theme: "신분, 회사", words: [
        {kanji:"紹介",reading:"しょうかい",meaning:"소개"},{kanji:"学生",reading:"がくせい",meaning:"학생"},{kanji:"返事",reading:"へんじ",meaning:"답장, 대답"},{kanji:"相談",reading:"そうだん",meaning:"상담, 상의"},{kanji:"結果",reading:"けっか",meaning:"결과"},
        {kanji:"会社",reading:"かいしゃ",meaning:"회사"},{kanji:"遅刻",reading:"ちこく",meaning:"지각"},{kanji:"成功",reading:"せいこう",meaning:"성공"},{kanji:"働く",reading:"はたらく",meaning:"일하다"},{kanji:"理由",reading:"りゆう",meaning:"이유"},
        {kanji:"仕事",reading:"しごと",meaning:"일, 업무"},{kanji:"工事",reading:"こうじ",meaning:"공사"},{kanji:"戻る",reading:"もどる",meaning:"되돌아가다"},{kanji:"失敗",reading:"しっぱい",meaning:"실패, 실수"},{kanji:"決まる",reading:"きまる",meaning:"정해지다"},
        {kanji:"運ぶ",reading:"はこぶ",meaning:"나르다, 운반하다"},{kanji:"選ぶ",reading:"えらぶ",meaning:"고르다, 선택하다"},{kanji:"習う",reading:"ならう",meaning:"배우다, 익히다"},{kanji:"先生",reading:"せんせい",meaning:"선생(님)"},{kanji:"途中",reading:"とちゅう",meaning:"도중"}
      ]},
      11: { theme: "생각, 감정", words: [
        {kanji:"意見",reading:"いけん",meaning:"의견"},{kanji:"特別だ",reading:"とくべつだ",meaning:"특별하다"},{kanji:"簡単だ",reading:"かんたんだ",meaning:"간단하다"},{kanji:"賛成",reading:"さんせい",meaning:"찬성"},{kanji:"反対",reading:"はんたい",meaning:"반대"},
        {kanji:"心",reading:"こころ",meaning:"마음"},{kanji:"楽しい",reading:"たのしい",meaning:"즐겁다"},{kanji:"気分",reading:"きぶん",meaning:"기분"},{kanji:"易しい",reading:"やさしい",meaning:"쉽다"},{kanji:"悲しい",reading:"かなしい",meaning:"슬프다"},
        {kanji:"残念だ",reading:"ざんねんだ",meaning:"유감이다, 아쉽다"},{kanji:"笑う",reading:"わらう",meaning:"웃다"},{kanji:"思う",reading:"おもう",meaning:"생각하다"},{kanji:"十分だ",reading:"じゅうぶんだ",meaning:"충분하다"},{kanji:"結構だ",reading:"けっこうだ",meaning:"훌륭하다"},
        {kanji:"苦い",reading:"にがい",meaning:"쓰다, 씁쓸하다"},{kanji:"面白い",reading:"おもしろい",meaning:"재미있다"},{kanji:"多い",reading:"おおい",meaning:"많다"},{kanji:"不便だ",reading:"ふべんだ",meaning:"불편하다"},{kanji:"心配だ",reading:"しんぱいだ",meaning:"걱정이다"}
      ]},
      12: { theme: "건강, 환경", words: [
        {kanji:"薬",reading:"くすり",meaning:"약"},{kanji:"疲れる",reading:"つかれる",meaning:"지치다"},{kanji:"病院",reading:"びょういん",meaning:"병원"},{kanji:"倒れる",reading:"たおれる",meaning:"쓰러지다"},{kanji:"医者",reading:"いしゃ",meaning:"의사"},
        {kanji:"具合",reading:"ぐあい",meaning:"상태, 형편"},{kanji:"動物",reading:"どうぶつ",meaning:"동물"},{kanji:"原因",reading:"げんいん",meaning:"원인"},{kanji:"治る",reading:"なおる",meaning:"낫다, 치료되다"},{kanji:"触る",reading:"さわる",meaning:"만지다, 닿다"},
        {kanji:"元気だ",reading:"げんきだ",meaning:"건강하다"},{kanji:"花",reading:"はな",meaning:"꽃"},{kanji:"危険だ",reading:"きけんだ",meaning:"위험하다"},{kanji:"猫",reading:"ねこ",meaning:"고양이"},{kanji:"熱",reading:"ねつ",meaning:"열"},
        {kanji:"森",reading:"もり",meaning:"숲, 삼림"},{kanji:"浅い",reading:"あさい",meaning:"얕다"},{kanji:"湖",reading:"みずうみ",meaning:"호수"},{kanji:"深い",reading:"ふかい",meaning:"깊다"},{kanji:"空",reading:"そら",meaning:"하늘"}
      ]},
      13: { theme: "문화, 여가", words: [
        {kanji:"映画",reading:"えいが",meaning:"영화"},{kanji:"最近",reading:"さいきん",meaning:"최근"},{kanji:"紙",reading:"かみ",meaning:"종이"},{kanji:"写真",reading:"しゃしん",meaning:"사진"},{kanji:"形",reading:"かたち",meaning:"모양, 형식"},
        {kanji:"興味",reading:"きょうみ",meaning:"흥미"},{kanji:"練習",reading:"れんしゅう",meaning:"연습"},{kanji:"切手",reading:"きって",meaning:"우표"},{kanji:"葉書",reading:"はがき",meaning:"엽서"},{kanji:"寺",reading:"てら",meaning:"절(건물)"},
        {kanji:"光る",reading:"ひかる",meaning:"빛나다"},{kanji:"作る",reading:"つくる",meaning:"만들다"},{kanji:"見る",reading:"みる",meaning:"보다"},{kanji:"大切だ",reading:"たいせつだ",meaning:"중요하다, 소중하다"},{kanji:"自由だ",reading:"じゆうだ",meaning:"자유롭다"},
        {kanji:"外国",reading:"がいこく",meaning:"외국"},{kanji:"集める",reading:"あつめる",meaning:"모으다"},{kanji:"毎週",reading:"まいしゅう",meaning:"매주"},{kanji:"始める",reading:"はじめる",meaning:"시작하다"},{kanji:"小説",reading:"しょうせつ",meaning:"소설"}
      ]},
      14: { theme: "취미, 기술", words: [
        {kanji:"旅行",reading:"りょこう",meaning:"여행"},{kanji:"通る",reading:"とおる",meaning:"통하다, 지나다"},{kanji:"準備",reading:"じゅんび",meaning:"준비"},{kanji:"登る",reading:"のぼる",meaning:"오르다"},{kanji:"趣味",reading:"しゅみ",meaning:"취미"},
        {kanji:"景色",reading:"けしき",meaning:"경치"},{kanji:"空港",reading:"くうこう",meaning:"공항"},{kanji:"利用",reading:"りよう",meaning:"이용"},{kanji:"計画",reading:"けいかく",meaning:"계획"},{kanji:"全部",reading:"ぜんぶ",meaning:"전부"},
        {kanji:"試合",reading:"しあい",meaning:"시합"},{kanji:"硬い",reading:"かたい",meaning:"딱딱하다"},{kanji:"軽い",reading:"かるい",meaning:"가볍다"},{kanji:"運動",reading:"うんどう",meaning:"운동"},{kanji:"出発",reading:"しゅっぱつ",meaning:"출발"},
        {kanji:"故障",reading:"こしょう",meaning:"고장"},{kanji:"機械",reading:"きかい",meaning:"기계"},{kanji:"電話",reading:"でんわ",meaning:"전화"},{kanji:"動く",reading:"うごく",meaning:"움직이다"},{kanji:"歩く",reading:"あるく",meaning:"걷다"}
      ]},
      15: { theme: "사회, 과학", words: [
        {kanji:"都会",reading:"とかい",meaning:"도회, 도시"},{kanji:"新聞",reading:"しんぶん",meaning:"신문"},{kanji:"営業",reading:"えいぎょう",meaning:"영업"},{kanji:"人口",reading:"じんこう",meaning:"인구"},{kanji:"英語",reading:"えいご",meaning:"영어"},
        {kanji:"貿易",reading:"ぼうえき",meaning:"무역"},{kanji:"貯金",reading:"ちょきん",meaning:"저금"},{kanji:"世界",reading:"せかい",meaning:"세계"},{kanji:"輸入",reading:"ゆにゅう",meaning:"수입"},{kanji:"輸出",reading:"ゆしゅつ",meaning:"수출"},
        {kanji:"氷",reading:"こおり",meaning:"얼음"},{kanji:"水",reading:"みず",meaning:"물"},{kanji:"建てる",reading:"たてる",meaning:"짓다, 세우다"},{kanji:"増える",reading:"ふえる",meaning:"늘다, 증가하다"},{kanji:"比べる",reading:"くらべる",meaning:"비교하다"},
        {kanji:"研究",reading:"けんきゅう",meaning:"연구"},{kanji:"音",reading:"おと",meaning:"소리, 음"},{kanji:"船",reading:"ふね",meaning:"배"},{kanji:"便利だ",reading:"べんりだ",meaning:"편리하다"},{kanji:"見つかる",reading:"みつかる",meaning:"발견되다"}
      ]}
    }
  },
  PART2,
  PART3
};
