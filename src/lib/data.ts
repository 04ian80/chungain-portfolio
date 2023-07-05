export type IntroData = {
  id: number;
  title: string;
  content: {
    subtitle?: string;
    subcontent: string;
  }[];
};
export const introDatas: IntroData[] = [
  {
    id: 0,
    title: '프론트엔드 입문 과정',
    content: [
      {
        subtitle: '입문하게 된 계기',
        subcontent: `줄곧 하나의 길만을 바라보며 걸어온 저에게는 취미가 하나 있습니다. 바로 미드와 영화 시청,
          그리고 그림입니다. 한번 빠지면 수십 번은 반복해서 시청하는 덕후 기질, 그리고 한번 꽂히면
          종일 그 림을 그리는 집중력을 보고 개발 공부 중이던 지인이 저에게 프론트엔드를 추천해
          주었습니다. HTML과 CSS로 직접 실습하면서 웹페이지가 생각했던 대로 그려지는 것에 희열을
          느껴 점점 빠져 들게 되었습니다.`,
      },
      {
        subtitle: '입문',
        subcontent: `자바스크립트와 관련된 기술을 배우기 시작하면서 새로운 기술에 욕심도 많아졌고, 그저
          클론하기보다는 직접 실전으로 배우는 것이 효율적일 것으로 생각하여 사이드 프로젝트를
          시작하였습니다. 그 당시 배우고 싶었던 Next.js와 TypeScript를 적용하여 개인 프로젝트로
          시작하였지만, 그 후 서비스에 대한 애착이 생겨 백엔드 팀원들이 합류되어 팀 프로젝트를
          진행하였습니다.`,
      },
      {
        subtitle: '꾸준히 성장 중',
        subcontent: `웹 페이지를 개발하면서 제일 성취감이 높은 부분은 UI/UX 구현입니다. UI 면에 있어서는
          1px의 오차도 없어야 하는 완벽주의자이며, 사용자가 되어 시뮬레이션을 그리며 UX를 고민하는
          것을 좋아하고, 보기 편한 UI들을 참고해 이를 조합하여 최고의 결과물을 도출해 낼 때 저는
          다시 한번 희열을 느낍니다. 이러한 과정들 덕분에 저는 프론트엔드 개발자가 되기로 결심하게
          되었으며, 꾸준히 성장하고 있습니다.`,
      },
    ],
  },
  {
    id: 1,
    title: '커뮤니케이션 습관화',
    content: [
      {
        subcontent: `프론트엔드 개발자는 IT 협업의 중심입니다. 백엔드 개발자, 기획자, 디자이너 그리고 우리의
        웹페이지를 사용하는 사용자까지 프론트엔드의 커뮤니케이션이 필요하지 않은 곳이 없습니다.
        그만큼 커 뮤니케이션의 중요성을 자각하고 제가 생각하는 이상적인 커뮤니케이션 방법을
        실현하고 있습니다.`,
      },
      {
        subtitle: '커뮤니케이션 경험',
        subcontent: `저는 오랜 해외 생활을 이어왔기 때문에 소통의 가치를 높게 사고 있습니다. 해결되지 않은
        대화는 서로 소통이 안 된다고 해서 끝내는 것이 아니라, 더 깊은 대화를 나누어 진정한 소통을
        해야 합니 다. 저는 언어가 다른 사람과 소통을 해본 경험이 있고, 지구 반대편에 있는 문화를
        가진 사람들과 교류하면서 다양한 경험을 쌓았고, 이를 계기로 커뮤니케이션 습관을 지니게
        되었습니다.`,
      },
      {
        subcontent: `덕분에 에러를 마주하여 공식 문서를 살펴봐야 할 때, 오픈 소스에 문의하거나 기여해야 할 때
        등 등 영어로 된 문서를 참고하거나 영어로 소통해야 하는 상황을 피하지 않고 적극적으로
        시도합니 다. 최근 Next.js로 만든 사이드 프로젝트에서 발생한 next/font 관련 이슈를
        해결하고자 font를 넣는 위치를 바꾸는 등, 다양한 시도를 해보았지만 해결되지 않아, Next.js
        오픈 디스코드 help- forum에 문의하여 버그를 찾아낸 경험이 있습니다.`,
      },
      {
        subtitle: '경험을 통해 얻은 것',
        subcontent: `이러한 남들과는 사뭇 다른 경험을 통해 깨달은 점이 있습니다. 팀 내의 좋은 분위기를
        유지하면서 팀을 이끌어나갈 커뮤니케이션의 핵심은 사소한 내용도 적극적으로 소통해야 한다는
        점입니다. 또 한, 본인의 생각이 대다수와 다를지라도 본인의 의견을 듣는 사람의 입장에서 조리
        있게 전달하는 방식이 저를 성장시키는 요소입니다. 저는 이러한 이유로 팀 프로젝트 진행 시
        투명한 커뮤니케이션을 지향하며, 팀원이 제공하는 의견 을 경청하며 피드백을 적극적으로
        반영합니다. 앞서 언급한 핵심을 지키며 코드 리뷰를 적극적으로 진행한 팀으로 선정되었습니다.
        이러한 경험을 토대로 좋은 코드 리뷰를 위한 방향성을 가지는 계기 가 되었습니다.`,
      },
    ],
  },
  {
    id: 2,
    title: '상위 10%를 향한 목표',
    content: [
      {
        subcontent: `상위 10%가 되기 위한 태도는 어느 환경에서나 중요합니다. 저는 어떠한 환경에서라도 10%가 되 기 위한 태도를 갖춥니다. 개발자로서 10%의 태도를 갖추기 위한 규칙들은 단순합니다. 제가 제일 최근에 참여했던 원티드 프리온보딩 교육기관에서의 예를 들어보자면 이러한 것들이 있습니다.`,
      },
      {
        subcontent: `팀 활동이 있다면 100% 적극적으로 참여합니다.`,
      },
      {
        subcontent: `팀원들과 서로의 의견을 유연하고 투명하게, 진정성 있게 전달하고 경청합니다.`,
      },
      {
        subcontent: `사소한 의견일지라도 팀원들의 의견이 필요하다면 망설이지 않고 공유합니다.`,
      },
      {
        subcontent: `구현한 코드에 집착합니다.`,
      },
      {
        subcontent: `더 효율적인 코드가 있을지 지속해서 고민합니다.`,
      },
      {
        subcontent: `이러한 규칙들을 지킨 결과, 프론트엔드 개발자 교육기관에서 지원자 300명 중 최종 우수 교육생 10 인에 선정되었습니다.`,
      },
    ],
  },
  {
    id: 3,
    title: '공유 문화 선호',
    content: [
      {
        subtitle: '저의 지식을 공유하는 것을 좋아합니다.',
        subcontent: `팀 프로젝트를 하면서 제가 접해보지 못한 다른 운영체제에 관한 에러를 팀원이 물어봤을 때, 직접 구글링하여 해결책을 제안해 준 경험이 있습니다. 또한, 팀 원이 Git 관리에 익숙하지 않아 시각적으로 보여주면서 직접 설명한 경험이 있습니다. 이러한 경험을 통해 저 자신도 이미 알고 있는 선에서 지식을 더 확장할 수 있다는 것을 깨달았습니다.`,
      },
      {
        subtitle: '저의 지식을 공유하는 것을 좋아합니다.',
        subcontent: `공유를 좋아하는 만큼 다른 사람의 지식을 배우는 것도 좋아합니다. 팀원의 동의를 받아 서로의 개 발 지식을 엿볼 수 있는 블로그 공유 채널을 만들어 일주일에 최소 하나씩 글을 작성해야 하는 계기 및 원동력을 만드는 등, 혼자 하는 것이 아닌 다른 사람들과 함께 앞으로 나아가고자 하는 바입니다.`,
      },
    ],
  },
];