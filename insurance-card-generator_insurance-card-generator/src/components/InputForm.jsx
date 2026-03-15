import React, { useState } from 'react';
import './InputForm.css';

function InputForm({ onGenerate, isGenerating, selectedTemplate, onTemplateChange }) {
  const [formData, setFormData] = useState({
    productName: '',
    keyPoints: '',
    targetAudience: '',
    painPoints: ''
  });

  const templates = [
    { id: 'professional', name: '专业信任风', color: '#1a365d' },
    { id: 'friendly', name: '亲和生活风', color: '#fff5f5' },
    { id: 'data', name: '数据对比风', color: '#f0f9ff' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate(formData);
  };

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <div className="form-section">
        <h3>模板选择</h3>
        <div className="template-selector">
          {templates.map(template => (
            <button
              key={template.id}
              type="button"
              className={`template-btn ${selectedTemplate === template.id ? 'active' : ''}`}
              onClick={() => onTemplateChange(template.id)}
              style={{
                borderColor: selectedTemplate === template.id ? template.color : '#e8e8e8',
                backgroundColor: selectedTemplate === template.id ? template.color : 'white',
                color: selectedTemplate === template.id ? 'white' : '#333'
              }}
            >
              {template.name}
            </button>
          ))}
        </div>
      </div>

      <div className="form-section">
        <h3>产品信息</h3>
        
        <div className="form-group">
          <label>产品名称 *</label>
          <input
            type="text"
            placeholder="例如：平安e生保"
            value={formData.productName}
            onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label>核心卖点 *</label>
          <input
            type="text"
            placeholder="用逗号分隔，例如：百万医疗,0免赔,报销比例高"
            value={formData.keyPoints}
            onChange={(e) => setFormData({ ...formData, keyPoints: e.target.value })}
            required
          />
          <small>请输入3-5个卖点，用逗号分隔</small>
        </div>

        <div className="form-group">
          <label>目标人群 *</label>
          <input
            type="text"
            placeholder="例如：25-45岁中产家庭"
            value={formData.targetAudience}
            onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label>客户痛点</label>
          <textarea
            placeholder="例如：担心生病没钱治，担心理赔难..."
            value={formData.painPoints}
            onChange={(e) => setFormData({ ...formData, painPoints: e.target.value })}
            rows={3}
          />
        </div>
      </div>

      <button
        type="submit"
        className="submit-btn"
        disabled={isGenerating}
      >
        {isGenerating ? '生成中...' : '生成卡片'}
      </button>
    </form>
  );
}

export default InputForm;
