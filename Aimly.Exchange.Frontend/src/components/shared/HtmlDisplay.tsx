import React, { useMemo } from 'react';
import dompurify from 'dompurify';

// The purpose of this component is to display
// a content string in a safe way.

interface Props {
  content: string | null;
  className?: string;
}

const HtmlDisplay = ({ content, className }: Props) => {
  // Are we working with Html?
  const isHtml = useMemo(() => {
    return content && content.startsWith('<') && content.endsWith('>');
  }, [content]);

  // Just return if we are not using Html
  if (!isHtml || !content) {
    return <p className={className}>{content}</p>;
  }

  // Sanitize the content
  const sanitizer = dompurify.sanitize;

  return (
    <p
      className={'prose dark:prose-invert max-w-none ' + className}
      dangerouslySetInnerHTML={{ __html: sanitizer(content) }}
    ></p>
  );
};

export default HtmlDisplay;
