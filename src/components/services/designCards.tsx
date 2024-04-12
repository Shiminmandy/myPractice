import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;

// 定义一个接口来描述组件的 props
interface DesignCardsProps {
  imageUrl: string; // 定义 imageUrl 为字符串类型
  title: string;
  description: string;
}

// 使用 TypeScript 泛型将 props 类型传递给 React 组件
const DesignCards: React.FC<DesignCardsProps> = ({ imageUrl , title, description}) => {
  return (
    <Card
      hoverable
      style={{ width: 260 }}
      cover={
        <img 
          alt="example" 
          src={imageUrl}
          style={{ height: '200px', width: '100%', objectFit: 'cover' }}
        />
      }
    >
      <Meta title={title} description={description} />
    </Card>
  );
};

// 导出这个组件
export default DesignCards;
