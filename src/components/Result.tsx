import React, { useRef, useState } from 'react';
import { Answer } from '../types';
import { RefreshCcw, Download, Unlock, Lock, Star, Zap, Target, Heart, Briefcase, Brain, Users, Clock } from 'lucide-react';
import html2canvas from 'html2canvas';
import { getMBTIDetails } from '../mbtiDetails';

interface ResultProps {
  answers: Answer[];
  onReset: () => void;
  startTime: Date | null;
  endTime: Date | null;
}

const Result: React.FC<ResultProps> = ({ answers, onReset, startTime, endTime }) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  const calculateMBTI = (answers: Answer[]): string => {
    if (answers.length === 0) return 'ISTJ'; // Default type if no answers

    const counts = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    answers.forEach(answer => {
      if (answer && answer.type) {
        counts[answer.type as keyof typeof counts]++;
      }
    });
    return (
      (counts.E > counts.I ? 'E' : 'I') +
      (counts.S > counts.N ? 'S' : 'N') +
      (counts.T > counts.F ? 'T' : 'F') +
      (counts.J > counts.P ? 'J' : 'P')
    );
  };

  const mbtiType = calculateMBTI(answers);
  const mbtiDetails = getMBTIDetails(mbtiType);

  const dimensionScores = {
    EI: (answers.filter(a => a && a.type === 'E').length / 10) * 100,
    SN: (answers.filter(a => a && a.type === 'S').length / 10) * 100,
    TF: (answers.filter(a => a && a.type === 'T').length / 10) * 100,
    JP: (answers.filter(a => a && a.type === 'J').length / 10) * 100,
  };

  const handleSaveImage = async () => {
    if (resultRef.current) {
      const canvas = await html2canvas(resultRef.current);
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = `MBTI-Result-${mbtiType}.png`;
      link.click();
    }
  };

  const calculateTestDuration = () => {
    if (startTime && endTime) {
      const duration = endTime.getTime() - startTime.getTime();
      const minutes = Math.floor(duration / 60000);
      const seconds = Math.floor((duration % 60000) / 1000);
      return `${minutes}分${seconds}秒`;
    }
    return '未知';
  };

  const DetailSection = ({ title, icon, traits, strengths, weaknesses, ideal }: any) => (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        {icon}
        <span className="ml-2">{title}</span>
      </h3>
      <div className="space-y-4">
        <DetailItem title="影响力特质" items={traits} icon={<Star className="w-5 h-5 text-yellow-500" />} />
        <DetailItem title="你的强项" items={strengths} icon={<Zap className="w-5 h-5 text-green-500" />} />
        <DetailItem title="你的短板" items={weaknesses} icon={<Target className="w-5 h-5 text-red-500" />} />
        <p className="text-gray-700"><strong className="font-semibold">理想环境：</strong> {ideal}</p>
      </div>
    </div>
  );

  const DetailItem = ({ title, items, icon }: any) => (
    <div>
      <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
        {icon}
        <span className="ml-2">{title}</span>
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {items.map((item: string, index: number) => (
          <div key={index} className="bg-gray-50 p-2 rounded-md">
            <span className="text-gray-700">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const DimensionBar = ({ dimension, score, color }: { dimension: string, score: number, color: string }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span>{dimension.split('-')[0]}</span>
        <span>{Math.round(score)}%</span>
        <span>{dimension.split('-')[1]}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div className={`h-2.5 rounded-full ${color}`} style={{ width: `${score}%` }}></div>
      </div>
    </div>
  );

  return (
    <div ref={resultRef} className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6 text-center transition-all duration-300 ease-in-out">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">你的MBTI类型是：</h2>
      <div className="text-5xl font-bold text-blue-600 mb-2">{mbtiType}</div>
      <p className="text-xl text-gray-600 mb-4">{mbtiDetails.description}</p>
      <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
        <img src={mbtiDetails.image} alt={mbtiType} className="w-full h-full object-cover" />
      </div>
      <div className="mb-6">
        <DimensionBar dimension="外向-内向" score={dimensionScores.EI} color="bg-blue-500" />
        <DimensionBar dimension="感觉-直觉" score={dimensionScores.SN} color="bg-green-500" />
        <DimensionBar dimension="思考-情感" score={dimensionScores.TF} color="bg-yellow-500" />
        <DimensionBar dimension="判断-知觉" score={dimensionScores.JP} color="bg-purple-500" />
      </div>
      <div className="flex items-center justify-center mb-6 text-gray-600">
        <Clock className="w-5 h-5 mr-2" />
        <span>测试用时：{calculateTestDuration()}</span>
      </div>
      <p className="text-sm text-gray-600 mb-6">
        MBTI类型指示器可以帮助你更好地理解自己的性格特征和行为模式。记住，这只是一个参考，每个人都是独特的个体。
      </p>

      {isUnlocked ? (
        <div className="mt-6 text-left">
          <DetailSection
            title="职业道路"
            icon={<Briefcase className="w-6 h-6 text-blue-500" />}
            traits={mbtiDetails.career.traits}
            strengths={mbtiDetails.career.strengths}
            weaknesses={mbtiDetails.career.weaknesses}
            ideal={mbtiDetails.career.ideal}
          />
          <DetailSection
            title="个人成长"
            icon={<Brain className="w-6 h-6 text-green-500" />}
            traits={mbtiDetails.personalGrowth.traits}
            strengths={mbtiDetails.personalGrowth.strengths}
            weaknesses={mbtiDetails.personalGrowth.weaknesses}
            ideal={mbtiDetails.personalGrowth.ideal}
          />
          <DetailSection
            title="人际关系"
            icon={<Users className="w-6 h-6 text-purple-500" />}
            traits={mbtiDetails.relationships.traits}
            strengths={mbtiDetails.relationships.strengths}
            weaknesses={mbtiDetails.relationships.weaknesses}
            ideal={mbtiDetails.relationships.ideal}
          />
        </div>
      ) : (
        <div className="mt-6 bg-gray-100 rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">解锁更多洞察</h3>
          <p className="text-gray-600 mb-4">了解你的职业道路、个人成长和人际关系模式</p>
          <button
            onClick={() => setIsUnlocked(true)}
            className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition duration-300"
          >
            {isUnlocked ? <Lock className="w-5 h-5 inline mr-2" /> : <Unlock className="w-5 h-5 inline mr-2" />}
            {isUnlocked ? '已解锁' : '立即解锁'}
          </button>
        </div>
      )}

      <div className="mt-6 flex justify-center space-x-4">
        <button
          onClick={onReset}
          className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300 flex items-center"
        >
          <RefreshCcw className="w-5 h-5 mr-2" />
          重新测试
        </button>
        <button
          onClick={handleSaveImage}
          className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition duration-300 flex items-center"
        >
          <Download className="w-5 h-5 mr-2" />
          保存结果
        </button>
      </div>
    </div>
  );
};

export default Result;