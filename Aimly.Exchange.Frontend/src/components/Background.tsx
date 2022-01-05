import React from 'react';
type Props = {
  children: JSX.Element,
};

const Background = ({ children }: Props) =>
{
    return (

        <body className="bg-white dark:bg-black transition-all">
            {children}
        </body>
    )
}
export default Background;