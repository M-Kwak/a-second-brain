import { ReactNode } from "react";

type direction = 'row' | 'column';

function Container({ children, direction }: { children: ReactNode, direction: direction }): React.JSX.Element {
  const style: React.CSSProperties = {
    display: 'flex',
    flexFlow: `${direction} wrap`,
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={style}>
      {children}
    </div>
  );
}

export default Container;