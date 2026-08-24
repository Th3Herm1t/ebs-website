import React from 'react';

interface FormattedTitleProps {
  text: string;
}

export function FormattedTitle({ text }: FormattedTitleProps) {
  if (typeof text === 'string' && text.trim().endsWith('.')) {
    const textWithoutPeriod = text.trim().slice(0, -1);
    return (
      <>
        {textWithoutPeriod}
        <span className="text-[#2B8FAB]">.</span>
      </>
    );
  }

  return <>{text}</>;
}
