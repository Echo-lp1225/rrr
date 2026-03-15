import React, { useState } from 'react';
import InputForm from './components/InputForm';
import CardPreview from './components/CardPreview';
import './App.css';

function App() {
  const [cardData, setCardData] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState('professional');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async (formData) => {
    setIsGenerating(true);
    
    // 模拟AI生成（实际使用时替换为真实API调用）
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // 生成示例文案
    const generatedContent = {
      title: `${formData.productName} - ${formData.targetAudience}首选`,
      points: formData.keyPoints.split(',').map(point => point.trim()),
      cta: '立即咨询，了解更多保障详情',
      productInfo: {
        name: formData.productName,
        keyPoints: formData.keyPoints,
        targetAudience: formData.targetAudience
      }
    };
    
    setCardData(generatedContent);
    setIsGenerating(false);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>保险知识卡片生成器</h1>
        <p>输入产品信息，一键生成专业保险知识卡片</p>
      </header>
      
      <main className="app-main">
        <div className="left-panel">
          <InputForm
            onGenerate={handleGenerate}
            isGenerating={isGenerating}
            selectedTemplate={selectedTemplate}
            onTemplateChange={setSelectedTemplate}
          />
        </div>
        
        <div className="right-panel">
          <CardPreview
            cardData={cardData}
            template={selectedTemplate}
            isGenerating={isGenerating}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
