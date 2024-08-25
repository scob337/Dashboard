import React from 'react';

interface IProps {
  BG: 'green-100' | 'yellow-100' | 'red-100';
  Color: 'green-400' | 'red-400' | 'yellow-300';
  children: React.ReactNode;
  darkBg: 'green-900' | 'red-900' | 'yellow-900';
  darkText: 'green-300' | 'red-300' | 'yellow-300';
  border: 'red-400' | 'yellow-400' | 'green-400';
}

export default function Alert({ BG, Color, children, darkText, darkBg, border }: IProps) {
  const baseClass = 'text-large w-[100%] font-medium me-2 px-2.5 py-3 rounded border';
  const bgClass = BG === 'green-100' ? 'bg-green-100' : BG === 'yellow-100' ? 'bg-yellow-100' : 'bg-red-100';
  const colorClass = Color === 'green-400' ? 'text-green-400' : Color === 'red-400' ? 'text-red-400' : 'text-yellow-300';
  const darkBgClass = darkBg === 'green-900' ? 'dark:bg-green-900' : darkBg === 'red-900' ? 'dark:bg-red-900' : 'dark:bg-yellow-900';
  const darkTextClass = darkText === 'green-300' ? 'dark:text-green-300' : darkText === 'red-300' ? 'dark:text-red-300' : 'dark:text-yellow-300';
  const borderClass = border === 'red-400' ? 'border-red-400' : border === 'yellow-400' ? 'border-yellow-400' : 'border-green-400';

  return (
    <div className={`${baseClass} ${bgClass} ${colorClass} ${darkBgClass} ${darkTextClass} ${borderClass}`}>
      {children}
    </div>
  );
}
