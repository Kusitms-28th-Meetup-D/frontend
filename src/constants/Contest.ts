export enum TEAM_DETAIL_STATUS {
  _1_내가오픈한경우 = 1,
  _2_남이오픈한경우_내가지원안함 = 2,
  _3_남이오픈한경우_내가지원완료_승인 = 3,
  _4_남이오픈한경우_내가지원완료_반려 = 4,
  _5_남이오픈한경우_내가지원완료_승인반려아님 = 5,
}

export const CONTEST_DATA = {
  title: '제 5회 대학(원)생 아이디어 소논문 공모전',
  images: [
    'https://thumb.mt.co.kr/06/2017/10/2017101714471864350_1.jpg/dims/optimize/',
    'https://thumb.mt.co.kr/06/2017/10/2017101714471864350_1.jpg/dims/optimize/',
  ],
  data: '더미데이터더미데이터더미데이\n터더미데이터더\n미데이터\n더미데이터더미데이터더\n미데이터더미데이터더\n미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이\n터더미데이터더\n미데이터\n더미데이터더미데이터더\n미데이터더미데이터더\n미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이\n터더미데이터더\n미데이터\n더미데이터더미데이터더\n미데이터더미데이터더\n미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이\n터더미데이터더\n미데이터\n더미데이터더미데이터더\n미데이터더미데이터더\n미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터더미데이터',
  remainDay: 8,
};
export const TEAMS_DATA = [
  {
    max: 7,
    cur: 4,
    talk: '봄 감자가 맛있단다.\n얼마나 맛있게요',
    leader: {
      name: '박형준',
      image:
        'https://i.namu.wiki/i/ZnBMAAGJaiFKqDmASXCt-977Xuq6gLA-G8AsD4K1BKCVBEzrjISoW9QyfcSKPnacwuBpCGSSyBtCJv8E-UocNQ.webp',
      part: '중재하기',
      major: '체육학과',
    },
    members: [
      {
        name: '채영대',
        image:
          'https://news.nateimg.co.kr/orgImg/jt/2021/12/30/ac963887-1bd3-4169-b98a-ab59f5bcc777.jpg',
        part: '혜린 갈구기',
        major: '의예과',
      },
      {
        name: '민혜린',
        image: 'https://cdn.theproof.co.kr/news/photo/202308/592_830_2319.jpg',
        part: '영대 갈구기',
        major: '언어학과',
      },
      {
        name: '이재영',
        image:
          'https://image.ytn.co.kr/general/jpg/2022/1118/202211181457199274_d.jpg',
        part: '우리팀디자이너최고',
        major: '토목공학과',
      },
      {
        name: '오진영',
        image:
          'https://mblogthumb-phinf.pstatic.net/MjAxNzA0MTRfMjUz/MDAxNDkyMTc2ODU0ODYz.rXc4wFsIK1QCEtUNhyhA61JkhWI2gpnAEmBFdEMvKkIg.Gd0-Vrcg8t2VNZsTTTzvYoJzP16ciIS6NZSlRH9CjZcg.JPEG.sinjeongcc/%EB%A7%8C%EB%93%A4%EC%96%B4%EC%A7%84_%EC%8B%A0_02.jpg?type=w420',
        part: 'chatgpt',
        major: '신',
      },
    ],
  },
  {
    max: 7,
    cur: 4,
    talk: '봄 감자가 맛있단다',
    leader: {
      name: '박형준',
      image:
        'https://i.namu.wiki/i/ZnBMAAGJaiFKqDmASXCt-977Xuq6gLA-G8AsD4K1BKCVBEzrjISoW9QyfcSKPnacwuBpCGSSyBtCJv8E-UocNQ.webp',
      part: '중재하기',
      major: '체육학과',
    },
    members: [
      {
        name: '이민정',
        image:
          'https://thumb.mtstarnews.com/06/2023/06/2023062215005684112_1.jpg/dims/optimize',
        part: '귀요미',
        major: '귀여움학과',
      },
      {
        name: '채영대',
        image:
          'https://news.nateimg.co.kr/orgImg/jt/2021/12/30/ac963887-1bd3-4169-b98a-ab59f5bcc777.jpg',
        part: '혜린 갈구기',
        major: '의예과',
      },
      {
        name: '박예진',
        image: 'https://cdn.iusm.co.kr/news/photo/201106/216370_60801_1153.jpg',
        part: '술먹기',
        major: '주류학과',
      },
      {
        name: '민혜린',
        image: 'https://cdn.theproof.co.kr/news/photo/202308/592_830_2319.jpg',
        part: '영대 갈구기',
        major: '언어학과',
      },
      {
        name: '이재영',
        image:
          'https://image.ytn.co.kr/general/jpg/2022/1118/202211181457199274_d.jpg',
        part: '우리팀디자이너최고',
        major: '토목공학과',
      },

      {
        name: '오진영',
        image:
          'https://mblogthumb-phinf.pstatic.net/MjAxNzA0MTRfMjUz/MDAxNDkyMTc2ODU0ODYz.rXc4wFsIK1QCEtUNhyhA61JkhWI2gpnAEmBFdEMvKkIg.Gd0-Vrcg8t2VNZsTTTzvYoJzP16ciIS6NZSlRH9CjZcg.JPEG.sinjeongcc/%EB%A7%8C%EB%93%A4%EC%96%B4%EC%A7%84_%EC%8B%A0_02.jpg?type=w420',
        part: 'chatgpt',
        major: '자퇴생',
      },
    ],
  },
  {
    max: 7,
    cur: 4,
    talk: '봄 감자가 맛있단다',
    leader: {
      name: '박형준',
      image:
        'https://i.namu.wiki/i/ZnBMAAGJaiFKqDmASXCt-977Xuq6gLA-G8AsD4K1BKCVBEzrjISoW9QyfcSKPnacwuBpCGSSyBtCJv8E-UocNQ.webp',
      part: '중재하기',
      major: '체육학과',
    },
    members: [
      {
        name: '채영대',
        image:
          'https://news.nateimg.co.kr/orgImg/jt/2021/12/30/ac963887-1bd3-4169-b98a-ab59f5bcc777.jpg',
        part: '혜린 갈구기',
        major: '의예과',
      },
      {
        name: '민혜린',
        image: 'https://cdn.theproof.co.kr/news/photo/202308/592_830_2319.jpg',
        part: '영대 갈구기',
        major: '언어학과',
      },
      {
        name: '이재영',
        image:
          'https://image.ytn.co.kr/general/jpg/2022/1118/202211181457199274_d.jpg',
        part: '우리팀디자이너최고',
        major: '토목공학과',
      },
      {
        name: '오진영',
        image:
          'https://mblogthumb-phinf.pstatic.net/MjAxNzA0MTRfMjUz/MDAxNDkyMTc2ODU0ODYz.rXc4wFsIK1QCEtUNhyhA61JkhWI2gpnAEmBFdEMvKkIg.Gd0-Vrcg8t2VNZsTTTzvYoJzP16ciIS6NZSlRH9CjZcg.JPEG.sinjeongcc/%EB%A7%8C%EB%93%A4%EC%96%B4%EC%A7%84_%EC%8B%A0_02.jpg?type=w420',
        part: 'chatgpt',
        major: '자퇴생',
      },
    ],
  },
  {
    max: 7,
    cur: 4,
    talk: '봄 감자가 맛있단다',
    leader: {
      name: '박형준',
      image:
        'https://i.namu.wiki/i/ZnBMAAGJaiFKqDmASXCt-977Xuq6gLA-G8AsD4K1BKCVBEzrjISoW9QyfcSKPnacwuBpCGSSyBtCJv8E-UocNQ.webp',
      part: '중재하기',
      major: '체육학과',
    },
    members: [],
  },
];
