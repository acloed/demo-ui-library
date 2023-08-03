import React, { HTMLAttributes } from 'react';


// Interface for the Badge props
interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  // Additional props can be defined here if needed
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  status?: 'positive' | 'negative' | 'neutral' | 'error' | 'warning' | 'selected';
  color?: string;
  backgroundColor?: string;
  children: React.ReactNode;
  
}

//const App: React.FC = () => {
  //return (
    //<div>
      //<Badge variant="primary">Primary Badge</Badge>
      //<Badge variant="secondary">Secondary Badge</Badge>
      //<Badge variant="success">Success Badge</Badge>
      //<Badge variant="warning">Warning Badge</Badge>
      //<Badge variant="danger">Danger Badge</Badge>
    //</div>
  //);
//};

const SBadge: React.FC<BadgeProps> = ({ children, variant = 'primary', ...rest }) => {
  // Define Tailwind CSS classes based on the variant prop
  const getBadgeClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-blue-500 text-white';
      case 'secondary':
        return 'bg-gray-500 text-white';
      case 'success':
        return 'bg-green-500 text-white';
      case 'warning':
        return 'bg-yellow-500 text-black';
      case 'danger':
        return 'bg-red-500 text-white';
      default:
        return 'bg-blue-500 text-white';
    }
  };

  const badgeClasses = `px-2 py-1 rounded-full ${getBadgeClasses()}`;

  return <span className={badgeClasses} {...rest}>{children}</span>;
};



export default SBadge;

