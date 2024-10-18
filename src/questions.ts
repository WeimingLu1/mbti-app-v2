import { Question } from './types';

export const questions: Question[] = [
  {
    id: 1,
    text: "当你参加聚会时，你更喜欢：",
    answers: [
      { text: "和尽可能多的人互动", type: "E" },
      { text: "和几位亲密的朋友聊聊", type: "I" }
    ]
  },
  {
    id: 2,
    text: "在休息日，你通常更愿意：",
    answers: [
      { text: "和朋友一起出去活动", type: "E" },
      { text: "在家享受安静的时光", type: "I" }
    ]
  },
  {
    id: 3,
    text: "你在社交场合更倾向于：",
    answers: [
      { text: "主动开启对话", type: "E" },
      { text: "等待别人跟你交流", type: "I" }
    ]
  },
  {
    id: 4,
    text: "当你需要做决定时，你更容易依赖：",
    answers: [
      { text: "讨论并获得别人的建议", type: "E" },
      { text: "独自思考，依赖自己的判断", type: "I" }
    ]
  },
  {
    id: 5,
    text: "你更喜欢工作环境是：",
    answers: [
      { text: "动态和充满人际互动的", type: "E" },
      { text: "安静和独立的", type: "I" }
    ]
  },
  {
    id: 6,
    text: "参加一个新活动时，你更愿意：",
    answers: [
      { text: "快速融入新的人群", type: "E" },
      { text: "先观察和了解环境，再做决定", type: "I" }
    ]
  },
  {
    id: 7,
    text: "遇到问题时，你更喜欢：",
    answers: [
      { text: "与他人讨论解决方案", type: "E" },
      { text: "独自思考并解决问题", type: "I" }
    ]
  },
  {
    id: 8,
    text: "你喜欢的社交场合是：",
    answers: [
      { text: "大型的聚会或活动", type: "E" },
      { text: "小型的、亲密的聚会", type: "I" }
    ]
  },
  {
    id: 9,
    text: "当你压力大时，你更倾向于：",
    answers: [
      { text: "通过和别人倾诉来释放压力", type: "E" },
      { text: "通过独处和沉思来平复心情", type: "I" }
    ]
  },
  {
    id: 10,
    text: "你通常更享受：",
    answers: [
      { text: "在人多的地方活动", type: "E" },
      { text: "在安静的环境中独自放松", type: "I" }
    ]
  },
  {
    id: 11,
    text: "你更倾向于相信：",
    answers: [
      { text: "现实中的实际信息和数据", type: "S" },
      { text: "灵感和直觉", type: "N" }
    ]
  },
  {
    id: 12,
    text: "当你解决问题时，你更注重：",
    answers: [
      { text: "事实和具体细节", type: "S" },
      { text: "全局和可能性", type: "N" }
    ]
  },
  {
    id: 13,
    text: "你更喜欢的描述方式是：",
    answers: [
      { text: "实用和具体的", type: "S" },
      { text: "抽象和理论化的", type: "N" }
    ]
  },
  {
    id: 14,
    text: "你更容易被吸引到：",
    answers: [
      { text: "现有的、已知的事物", type: "S" },
      { text: "新的、未来的可能性", type: "N" }
    ]
  },
  {
    id: 15,
    text: "当你学习新事物时，你更注重：",
    answers: [
      { text: "具体的应用和实际例子", type: "S" },
      { text: "潜在的概念和理论", type: "N" }
    ]
  },
  {
    id: 16,
    text: "你处理信息的方式更偏向于：",
    answers: [
      { text: "依赖已知的经验和事实", type: "S" },
      { text: "寻找新的联系和未来的潜力", type: "N" }
    ]
  },
  {
    id: 17,
    text: "你倾向于记住的细节是：",
    answers: [
      { text: "过去的具体事实和细节", type: "S" },
      { text: "概念或未来的可能性", type: "N" }
    ]
  },
  {
    id: 18,
    text: "你更喜欢项目的哪部分：",
    answers: [
      { text: "处理细节和执行阶段", type: "S" },
      { text: "策划和构想的过程", type: "N" }
    ]
  },
  {
    id: 19,
    text: "你认为自己更擅长：",
    answers: [
      { text: "解决眼前的问题", type: "S" },
      { text: "预测未来的趋势", type: "N" }
    ]
  },
  {
    id: 20,
    text: "你更喜欢的讨论话题是：",
    answers: [
      { text: "实际的、日常的生活", type: "S" },
      { text: "理论性或哲学性的话题", type: "N" }
    ]
  },
  {
    id: 21,
    text: "做决策时，你通常：",
    answers: [
      { text: "以逻辑和分析为基础", type: "T" },
      { text: "以个人价值和感受为基础", type: "F" }
    ]
  },
  {
    id: 22,
    text: "你更倾向于：",
    answers: [
      { text: "以公平、公正为原则", type: "T" },
      { text: "以和谐、人际关系为重", type: "F" }
    ]
  },
  {
    id: 23,
    text: "你觉得更重要的是：",
    answers: [
      { text: "客观和事实", type: "T" },
      { text: "体贴和关怀他人", type: "F" }
    ]
  },
  {
    id: 24,
    text: "你在争论中更关注：",
    answers: [
      { text: "正确的逻辑和事实", type: "T" },
      { text: "对方的情感和反应", type: "F" }
    ]
  },
  {
    id: 25,
    text: "你在工作中更倾向于：",
    answers: [
      { text: "注重效率和任务完成", type: "T" },
      { text: "注重团队合作和和谐", type: "F" }
    ]
  },
  {
    id: 26,
    text: "你认为最好的领导风格是：",
    answers: [
      { text: "客观、公正，注重结果", type: "T" },
      { text: "关怀、体贴，注重团队氛围", type: "F" }
    ]
  },
  {
    id: 27,
    text: "当别人向你寻求帮助时，你：",
    answers: [
      { text: "给出实际的建议和解决方案", type: "T" },
      { text: "提供情感上的支持和理解", type: "F" }
    ]
  },
  {
    id: 28,
    text: "你更倾向于：",
    answers: [
      { text: "说实话，即使会伤害到别人", type: "T" },
      { text: "保护他人的感受，即使要避免一些真相", type: "F" }
    ]
  },
  {
    id: 29,
    text: "在处理冲突时，你更倾向于：",
    answers: [
      { text: "专注于找到公平的解决方案", type: "T" },
      { text: "关注彼此的情感和关系", type: "F" }
    ]
  },
  {
    id: 30,
    text: "你更擅长处理：",
    answers: [
      { text: "逻辑分析和问题解决", type: "T" },
      { text: "处理情感和人际关系", type: "F" }
    ]
  },
  {
    id: 31,
    text: "你更喜欢：",
    answers: [
      { text: "提前计划好一切并遵循计划", type: "J" },
      { text: "保持灵活性，顺其自然", type: "P" }
    ]
  },
  {
    id: 32,
    text: "在完成任务时，你更倾向于：",
    answers: [
      { text: "提前开始，确保按时完成", type: "J" },
      { text: "在最后一刻发挥灵感完成任务", type: "P" }
    ]
  },
  {
    id: 33,
    text: "你更喜欢工作方式是：",
    answers: [
      { text: "结构化和有条理的", type: "J" },
      { text: "灵活且有变化的", type: "P" }
    ]
  },
  {
    id: 34,
    text: "你更喜欢的旅行方式是：",
    answers: [
      { text: "提前安排好所有的行程", type: "J" },
      { text: "随时调整，享受即兴发挥的乐趣", type: "P" }
    ]
  },
  {
    id: 35,
    text: "当面对一个项目时，你通常：",
    answers: [
      { text: "一步一步按计划完成任务", type: "J" },
      { text: "采取灵活的方法，随时调整", type: "P" }
    ]
  },
  {
    id: 36,
    text: "你对时间的看法是：",
    answers: [
      { text: "时间有限，必须有效利用", type: "J" },
      { text: "时间是相对的，可以灵活安排", type: "P" }
    ]
  },
  {
    id: 37,
    text: "你在处理日常事务时，更倾向于：",
    answers: [
      { text: "制定明确的计划和安排", type: "J" },
      { text: "依靠随机应变和灵活调整", type: "P" }
    ]
  },
  {
    id: 38,
    text: "你在工作中更喜欢：",
    answers: [
      { text: "按照明确的时间表工作", type: "J" },
      { text: "自由安排时间，跟随灵感", type: "P" }
    ]
  },
  {
    id: 39,
    text: "你处理紧急任务时，通常：",
    answers: [
      { text: "提前做好准备，以防万一", type: "J" },
      { text: "在最后时刻解决问题", type: "P" }
    ]
  },
  {
    id: 40,
    text: "当计划发生变化时，你通常：",
    answers: [
      { text: "感到不安并希望尽快恢复原计划", type: "J" },
      { text: "感到兴奋，享受变化带来的挑战", type: "P" }
    ]
  }
];