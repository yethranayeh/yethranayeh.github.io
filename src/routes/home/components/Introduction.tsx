import { Flex, Text } from "@/components/Styled";
import { Window, Button, WindowHeader, WindowContent, Toolbar, Frame, Anchor } from "react95";
import { memo } from "react";

import { BlinkingEyesAvatar } from "./BlinkingEyesAvatar";
import { SocialLink } from "@/components/SocialLink";

import Github from "@/assets/icons/github.svg";
import LinkedIn from "@/assets/icons/linkedin.svg";

import styles from "./Introduction.module.scss";

const myAge = new Date().getFullYear() - 1999;

export const IntroductionPage = memo(() => (
	<Flex wrap='wrap' gap={24} justify='space-around' align='center' sx={{ marginTop: 24 }}>
		<Flex align='center' gap={14}>
			<BlinkingEyesAvatar />

			<Flex direction='column'>
				<Text bold variant='title'>
					Alper Aktaş
				</Text>
				<Text>Web Developer</Text>
			</Flex>
		</Flex>
		<Window className={styles.window}>
			<WindowHeader className='window-title'>
				<span>Merhaba.txt</span>
			</WindowHeader>
			<Toolbar>
				<Button disabled variant='menu' size='sm'>
					Dosya
				</Button>
				<Button disabled variant='menu' size='sm'>
					Düzenle
				</Button>
				<Button variant='menu' size='sm'>
					Özgeçmiş
				</Button>
			</Toolbar>
			<WindowContent>
				<Text>Adım Alper, {myAge} yaşındayım. Ege Üniversitesi, İngiliz Dili ve Edebiyatı mezunuyum.</Text>
				<Text>
					Yazılım geliştirmeye duyduğum ilgi doğrultusunda, online kurslara kaydolarak ve testler çözerek kendimi
					Front-end alanında geliştirerek edindiğim bilgi ve tecrübelerle profesyonel hayatıma ilk adımımı attım.
				</Text>
				<Text>
					Şu anda, Etstur'da Yazılım Geliştirme Uzman Yardımcısı olarak çalışıyorum ve şirketin B2B web uygulamarının
					geliştirilmesinde rol alıyorum.
				</Text>
				<Text variant='caption'>
					Web uygulamalarını TypeScript ve React.js ile geliştirip react-testing-library ve Playwright ile test
					ediyorum.
				</Text>
			</WindowContent>
			<Frame variant='well' className={styles.frame}>
				<Flex gap={12} justify='space-between'>
					<Anchor href='mailto:contact@aktasalper.com'>contact@aktasalper.com</Anchor>
					<Flex gap={12}>
						<SocialLink iconSrc={Github} name='Github' link='https://github.com/yethranayeh' />
						<SocialLink iconSrc={LinkedIn} name='LinkedIn' link='https://www.linkedin.com/in/aktasalper/' />
					</Flex>
				</Flex>
			</Frame>
		</Window>
	</Flex>
));
