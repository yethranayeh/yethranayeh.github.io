import type { PropsWithChildren } from "react";

export const WindowTitleText = ({ children }: PropsWithChildren<any>) => (
	<span className='window-title'>{children}</span>
);
