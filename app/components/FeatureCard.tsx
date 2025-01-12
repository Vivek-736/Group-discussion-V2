import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, bgColor, textColor }) => {
  return (
    <div className={`${bgColor} p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow`}>
      <h2 className={`text-2xl font-semibold ${textColor} mb-3`}>{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
