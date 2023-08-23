/** @format */

import { Flex, Text } from "@/components/Styled";
import { Window, Button, WindowHeader, WindowContent, Toolbar, Frame, Anchor } from "react95";
import { memo } from "react";

import BlinkingEyes from "./BlinkingEyes";
import Github from "@/assets/icons/github.svg";
import LinkedIn from "@/assets/icons/linkedin.svg";

const myAge = new Date().getFullYear() - 1999;

export const IntroductionPage = memo(() => (
	<Flex gap={24} justify='space-around' align='center' style={{ marginTop: 24 }}>
		<Flex align='center' gap={14}>
			<BlinkingEyes />

			<Flex direction='column'>
				<Text bold variant='title'>
					Alper Aktaş
				</Text>
				<Text>Front-end Developer</Text>
			</Flex>
		</Flex>
		<Window style={{ maxWidth: 450 }}>
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
				<Text>Adım Alper, {myAge} Yaşındayım. Ege Üniversitesi, İngiliz Dili ve Edebiyatı mezunuyum.</Text>
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
			<Frame
				variant='well'
				className='footer'
				style={{
					width: "100%",
					padding: "7px 12px 0"
				}}>
				<Flex gap={12} justify='space-between'>
					<Anchor href='mailto:contact@aktasalper.com'>contact@aktasalper.com</Anchor>
					<Flex gap={12}>
						<a href='https://github.com/yethranayeh' target='_blank' title='Github'>
							<img src={Github} alt='GitHub' width={24} />
						</a>
						<a href='https://www.linkedin.com/in/aktasalper/' target='_blank' title='LinkedIn'>
							<img src={LinkedIn} alt='LinkedIn' width={24} />
						</a>
					</Flex>
				</Flex>
			</Frame>
		</Window>
	</Flex>
));
