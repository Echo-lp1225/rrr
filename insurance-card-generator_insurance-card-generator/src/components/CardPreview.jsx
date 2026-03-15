import React, { useEffect, useRef, useState } from 'react';
import './CardPreview.css';
import templates  from '../templates';

function CardPreview({ cardData, template, isGenerating }) {
  const canvasRef = useRef(null);
  const [fabricCanvas, setFabricCanvas] = useState(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const { fabric } = window;
    const canvas = new fabric.Canvas(canvasRef.current, {
      width: 1080,
      height: 1440,
      backgroundColor: '#f5f5f5'
    });

    setFabricCanvas(canvas);

    return () => {
      canvas.dispose();
    };
  }, []);

  useEffect(() => {
    if (!cardData || !fabricCanvas) return;

    // 清空画布
    fabricCanvas.clear();
    
    // 获取当前模板配置
    const templateConfig = templates[template];
    
    // 应用模板
    templates[template].render(fabricCanvas, cardData);
    
    fabricCanvas.renderAll();
  }, [cardData, template, fabricCanvas]);

  const handleExport = () => {
    if (!fabricCanvas) return;
    
    const dataURL = fabricCanvas.toDataURL({
      format: 'png',
      quality: 1,
      multiplier: 1
    });

    const link = document.createElement('a');
    link.download = `保险知识卡片-${Date.now()}.png`;
    link.href = dataURL;
    link.click();
  };

  return (
    <div className="card-preview">
      <div className="preview-header">
        <h3>卡片预览</h3>
        {cardData && (
          <button className="export-btn" onClick={handleExport}>
            下载卡片
          </button>
        )}
      </div>
      
      <div className="preview-container">
        <canvas ref={canvasRef} className="card-canvas" />
        
        {!cardData && !isGenerating && (
          <div className="empty-state">
            <div className="empty-icon">📄</div>
            <p>填写左侧信息并生成卡片</p>
          </div>
        )}
        
        {isGenerating && (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>正在生成卡片...</p>
          </div>
        )}
      </div>
      
      {cardData && (
        <div className="preview-tips">
          <p>💡 提示：点击"下载卡片"保存到本地</p>
        </div>
      )}
    </div>
  );
}

export default CardPreview;
