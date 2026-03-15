// 专业信任风模板
const professionalTemplate = {
  render: (canvas, data) => {
    const { fabric } = window;
    
    // 背景
    canvas.setBackgroundColor('#1a365d', canvas.renderAll.bind(canvas));
    
    // 顶部装饰条
    const topBar = new fabric.Rect({
      width: 1080,
      height: 180,
      fill: 'linear-gradient(to right, #d4af37, #ffd700)',
      top: 0,
      left: 0
    });
    
    // Logo区域
    const logo = new fabric.Text('🛡️', {
      fontSize: 80,
      top: 50,
      left: 540,
      originX: 'center',
      originY: 'center',
      fill: '#1a365d'
    });
    
    // 标题
    const title = new fabric.Text(data.title, {
      fontSize: 56,
      fontFamily: 'SimHei',
      fontWeight: 'bold',
      fill: '#d4af37',
      top: 220,
      left: 540,
      originX: 'center',
      textAlign: 'center'
    });
    
    // 分割线
    const divider = new fabric.Rect({
      width: 800,
      height: 4,
      fill: '#d4af37',
      top: 320,
      left: 140
    });
    
    // 核心卖点
    data.points.forEach((point, index) => {
      const pointText = new fabric.Text(`${index + 1}. ${point}`, {
        fontSize: 48,
        fontFamily: 'SimHei',
        fill: '#ffffff',
        top: 400 + index * 140,
        left: 540,
        originX: 'center',
        textAlign: 'center'
      });
      
      // 添加装饰圆点
      const dot = new fabric.Circle({
        radius: 12,
        fill: '#d4af37',
        top: 400 + index * 140 + 18,
        left: 200
      });
      
      canvas.add(dot, pointText);
    });
    
    // CTA按钮
    const ctaBtn = new fabric.Rect({
      width: 400,
      height: 120,
      fill: '#d4af37',
      top: 1080,
      left: 340,
      rx: 20,
      ry: 20
    });
    
    const ctaText = new fabric.Text(data.cta, {
      fontSize: 44,
      fontFamily: 'SimHei',
      fontWeight: 'bold',
      fill: '#1a365d',
      top: 1140,
      left: 540,
      originX: 'center',
      originY: 'center',
      textAlign: 'center'
    });
    
    // 底部信息
    const footer = new fabric.Text('专业保障 · 值得信赖', {
      fontSize: 32,
      fontFamily: 'SimHei',
      fill: '#ffffff',
      top: 1280,
      left: 540,
      originX: 'center',
      opacity: 0.8
    });
    
    canvas.add(topBar, logo, title, divider, ctaBtn, ctaText, footer);
  }
};

// 亲和生活风模板
const friendlyTemplate = {
  render: (canvas, data) => {
    const { fabric } = window;
    
    // 背景
    canvas.setBackgroundColor('#fff5f5', canvas.renderAll.bind(canvas));
    
    // 顶部装饰图形
    const topCircle = new fabric.Circle({
      radius: 200,
      fill: '#ffb6c1',
      top: -100,
      left: -50,
      opacity: 0.5
    });
    
    const topCircle2 = new fabric.Circle({
      radius: 150,
      fill: '#ffc0cb',
      top: -80,
      left: 900,
      opacity: 0.5
    });
    
    // 标题区域
    const titleBox = new fabric.Rect({
      width: 1000,
      height: 200,
      fill: '#ffffff',
      top: 120,
      left: 40,
      rx: 20,
      ry: 20,
      shadow: {
        color: 'rgba(0, 0, 0, 0.1)',
        blur: 10,
        offsetX: 0,
        offsetY: 5
      }
    });
    
    const title = new fabric.Text(data.title, {
      fontSize: 52,
      fontFamily: 'SimHei',
      fontWeight: 'bold',
      fill: '#e91e63',
      top: 220,
      left: 540,
      originX: 'center',
      originY: 'center',
      textAlign: 'center'
    });
    
    // 卖点卡片
    data.points.forEach((point, index) => {
      const cardY = 380 + index * 180;
      
      const card = new fabric.Rect({
        width: 950,
        height: 150,
        fill: '#ffffff',
        top: cardY,
        left: 65,
        rx: 15,
        ry: 15,
        shadow: {
          color: 'rgba(0, 0, 0, 0.08)',
          blur: 8,
          offsetX: 0,
          offsetY: 3
        }
      });
      
      const iconText = new fabric.Text(['🌟', '💎', '⭐'][index % 3], {
        fontSize: 50,
        top: cardY + 50,
        left: 120
      });
      
      const pointText = new fabric.Text(point, {
        fontSize: 44,
        fontFamily: 'SimHei',
        fill: '#333',
        top: cardY + 75,
        left: 200,
        originY: 'center'
      });
      
      canvas.add(card, iconText, pointText);
    });
    
    // CTA区域
    const ctaBox = new fabric.Rect({
      width: 900,
      height: 140,
      fill: '#e91e63',
      top: 1050,
      left: 90,
      rx: 25,
      ry: 25
    });
    
    const ctaText = new fabric.Text(data.cta, {
      fontSize: 46,
      fontFamily: 'SimHei',
      fontWeight: 'bold',
      fill: '#ffffff',
      top: 1120,
      left: 540,
      originX: 'center',
      originY: 'center',
      textAlign: 'center'
    });
    
    // 底部
    const footer = new fabric.Text('🤝 为您提供温暖的保障服务', {
      fontSize: 36,
      fontFamily: 'SimHei',
      fill: '#666',
      top: 1280,
      left: 540,
      originX: 'center'
    });
    
    canvas.add(topCircle, topCircle2, titleBox, title, ctaBox, ctaText, footer);
  }
};

// 数据对比风模板
const dataTemplate = {
  render: (canvas, data) => {
    const { fabric } = window;
    
    // 背景
    canvas.setBackgroundColor('#f0f9ff', canvas.renderAll.bind(canvas));
    
    // 顶部色块
    const topHeader = new fabric.Rect({
      width: 1080,
      height: 250,
      fill: '#00bcd4',
      top: 0,
      left: 0
    });
    
    // 标题
    const title = new fabric.Text(data.title, {
      fontSize: 52,
      fontFamily: 'Arial',
      fontWeight: 'bold',
      fill: '#ffffff',
      top: 160,
      left: 540,
      originX: 'center',
      textAlign: 'center'
    });
    
    // 数据展示区域
    const dataBox = new fabric.Rect({
      width: 1000,
      height: 700,
      fill: '#ffffff',
      top: 300,
      left: 40,
      rx: 15,
      ry: 15,
      shadow: {
        color: 'rgba(0, 0, 0, 0.1)',
        blur: 15,
        offsetX: 0,
        offsetY: 5
      }
    });
    
    // 标题栏
    const headerBar = new fabric.Rect({
      width: 1000,
      height: 100,
      fill: '#00bcd4',
      top: 300,
      left: 40,
      rx: 15,
      ry: 15
    });
    
    const headerText = new fabric.Text('产品核心优势', {
      fontSize: 48,
      fontFamily: 'Arial',
      fontWeight: 'bold',
      fill: '#ffffff',
      top: 350,
      left: 540,
      originX: 'center',
      originY: 'center',
      textAlign: 'center'
    });
    
    // 数据行
    data.points.forEach((point, index) => {
      const rowY = 440 + index * 130;
      
      const rowNum = new fabric.Text(`${index + 1}`, {
        fontSize: 56,
        fontFamily: 'Arial',
        fontWeight: 'bold',
        fill: '#00bcd4',
        top: rowY + 37,
        left: 100
      });
      
      const rowText = new fabric.Text(point, {
        fontSize: 44,
        fontFamily: 'SimHei',
        fill: '#333',
        top: rowY + 65,
        left: 200,
        originY: 'center'
      });
      
      canvas.add(rowNum, rowText);
    });
    
    // CTA按钮
    const ctaBtn = new fabric.Rect({
      width: 800,
      height: 130,
      fill: '#00bcd4',
      top: 1080,
      left: 140,
      rx: 25,
      ry: 25
    });
    
    const ctaText = new fabric.Text(data.cta, {
      fontSize: 48,
      fontFamily: 'SimHei',
      fontWeight: 'bold',
      fill: '#ffffff',
      top: 1145,
      left: 540,
      originX: 'center',
      originY: 'center',
      textAlign: 'center'
    });
    
    // 底部标签
    const footerTags = new fabric.Text('#保险 #保障 #安心', {
      fontSize: 36,
      fontFamily: 'Arial',
      fill: '#666',
      top: 1280,
      left: 540,
      originX: 'center'
    });
    
    canvas.add(topHeader, title, dataBox, headerBar, headerText, ctaBtn, ctaText, footerTags);
  }
};

export default {
  professional: professionalTemplate,
  friendly: friendlyTemplate,
  data: dataTemplate
};
