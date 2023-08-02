import React, { HTMLAttributes } from 'react';
interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
    color?: string;
    backgroundColor?: string;
    children: React.ReactNode;
}
declare const Badge: React.FC<BadgeProps>;
export default Badge;
