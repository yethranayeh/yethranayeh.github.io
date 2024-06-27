import type { PropsWithChildren } from "react";

export const ResumeSection = ({ children, title }: PropsWithChildren<{ title: string }>) => (
	<section className='section'>
		<div className='section-title_container'>
			<h2 className='section-title'>{title}</h2>
		</div>
		<article className='section-content'>{children}</article>
	</section>
);
