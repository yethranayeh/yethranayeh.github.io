import type { PropsWithChildren } from "react";

import { useTranslation } from "react-i18next";

import "./Resume.scss";

import { ResumeHeader } from "./components/Header";
import { ResumeSection } from "./components/Section";
import { ResumeExperience } from "./components/Experience";

import content from "@/i18n/tr/content.json";

declare global {
	namespace JSX {
		interface IntrinsicElements {
			page: PropsWithChildren<{ size: "A4" }>;
		}
	}
}

const Vocation = () => <h2 className='vocation'>Frontend Developer</h2>;

export function Resume() {
	const { t } = useTranslation("content");
	return (
		<>
			<page size='A4'>
				<main>
					<ResumeHeader />
					<Vocation />
					<ResumeSection title={t("resume.experience.title")}>
						{content.resume.experience.list.map((experience) => (
							<ResumeExperience key={experience.company} {...experience} />
						))}
					</ResumeSection>
					<ResumeSection title={t("resume.education.title")} />
				</main>
			</page>
			<page size='A4'></page>
		</>
	);
}
