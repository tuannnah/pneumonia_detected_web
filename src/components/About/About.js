import './About.css';
import {useTranslation} from 'react-i18next'

function About() {
	const {t} = useTranslation()
	return (
		<div className="about">
			<h2>{t('About')}</h2>
			<p>
			{t('about_1')}
			</p>
			<p>
			{t('about_2')}
			</p>
			<br />
			<h2>{t('Symptoms')}</h2>
			<p>{t('Symptoms_1')}
			</p>
			<p>{t('Symptoms_2')}</p>
			<div className="about__symptoms">
				<p>{t('about__symptoms_1')}</p>
				<p>{t('about__symptoms_2')} </p>
				<p>{t('about__symptoms_3')} </p>
				<p>{t('about__symptoms_4')}</p>
				<p>{t('about__symptoms_5')} </p>
				<p>{t('about__symptoms_6')} </p>
				<p>{t('about__symptoms_7')} </p>
				<p>{t('about__symptoms_8')} </p>
			</div>
			<br />
			<h2>{t('Causes')}</h2>
			<p>{t('Causes_1')}
			</p>
		</div>
	);
}

export default About;
