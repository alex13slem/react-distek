import { Accordion } from "../../../common/accordion"
import { accordionData } from "../../../../data/mainPage/accordionData"
import companys from "../../../../data/companys.json"
import contacts from "../../../../data/contacts.json"
import { useState } from "react"
import { Link } from "react-scroll"

export const HeroPage = () => {

	// Установка активности для карточки справа 
	const [slideActive, setSlideActive] = useState<string>('');

	return (

		<section className="hero-page" id="hero-page">
			<div className="hero-page__wrap">

				<div className="hero-page__inner hero-page__inner_top-block">

					<div className="hero-page__title-block">
						<h1 className="hero-page__title">
							Distek – дистрибьютор <br />
							программного обеспечения
						</h1>
						<h2 className="hero-page__subtitle">
							решения для BIM-моделирования
						</h2>
					</div>

					<div className="hero-page__product-links">
						{
							companys.map(item => (
								<a
									className="hero-page__product-link product-link"
									href={item.link}
									key={item.id}
								>
									<div className="product-link__logo">
										<img
											src={item.srcImage}
											alt={item.shortname}
										/>
									</div>
									<p>{item.name}</p>
								</a>
							))
						}
					</div>

				</div>

				<div className={`hero-page__inner hero-page__inner_bottom-block`}>

					<div className={`slide-block ${slideActive}`}>
						<Link
							to='dealers'
							spy={true}
							smooth={true}
							offset={-100}
							duration={100}
							className="hero-page__clients clients"
							onMouseOver={() => setSlideActive('slide-active')}
							onMouseLeave={() => setSlideActive('')}
						>
							<div className="hero-page__box-number box-number">
								<svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M0 2.86252V0H19.1776L22 2.86252V8.62524L19.1776 11.4501H3.36513L2.75 12.0527V17.1751H22V20H0V14.3126L5.5 8.62524H19.1776V2.86252H0Z" fill="#393838" />
								</svg>
							</div>
							<div className="clients__title">
								<h3>пользователям</h3>
								<p>
									Подберите программные продукты для моделирования конструкции и визуализации проектов
								</p>
							</div>
							<div className="clients__link">
								<svg className="arrow-circle" viewBox="0 0 33 34" xmlns="http://www.w3.org/2000/svg">
									<path d="M16.1797 0.820312C20.4232 0.820312 24.4928 2.52495 27.4934 5.55923C30.494 8.59351 32.1797 12.7089 32.1797 17C32.1797 21.2911 30.494 25.4065 27.4934 28.4408C24.4928 31.475 20.4232 33.1797 16.1797 33.1797C11.9362 33.1797 7.86656 31.475 4.86598 28.4408C1.8654 25.4065 0.179688 21.2911 0.179688 17C0.179688 12.7089 1.8654 8.59351 4.86598 5.55923C7.86656 2.52495 11.9362 0.820312 16.1797 0.820312ZM9.17969 15.9888C8.91447 15.9888 8.66012 16.0953 8.47258 16.285C8.28504 16.4746 8.17969 16.7318 8.17969 17C8.17969 17.2682 8.28504 17.5254 8.47258 17.715C8.66012 17.9047 8.91447 18.0112 9.17969 18.0112H20.7657L16.4717 22.3514C16.2839 22.5413 16.1784 22.7988 16.1784 23.0674C16.1784 23.3359 16.2839 23.5935 16.4717 23.7833C16.6595 23.9732 16.9141 24.0799 17.1797 24.0799C17.4452 24.0799 17.6999 23.9732 17.8877 23.7833L23.8877 17.716C23.9808 17.622 24.0547 17.5104 24.1051 17.3876C24.1555 17.2647 24.1815 17.133 24.1815 17C24.1815 16.867 24.1555 16.7353 24.1051 16.6124C24.0547 16.4896 23.9808 16.378 23.8877 16.284L17.8877 10.2167C17.6999 10.0268 17.4452 9.92011 17.1797 9.92011C16.9141 9.92011 16.6595 10.0268 16.4717 10.2167C16.2839 10.4065 16.1784 10.6641 16.1784 10.9326C16.1784 11.2012 16.2839 11.4587 16.4717 11.6486L20.7657 15.9888H9.17969Z" />
								</svg>
								<svg className="arrow-down" viewBox="0 0 16 14" xmlns="http://www.w3.org/2000/svg">
									<mask id="path-1-inside-1_1134_1092" fill="white">
										<path fillRule="evenodd" clipRule="evenodd" d="M10.646 13.854C10.6924 13.9006 10.7476 13.9375 10.8084 13.9627C10.8691 13.9879 10.9342 14.0009 11 14.0009C11.0658 14.0009 11.1309 13.9879 11.1916 13.9627C11.2524 13.9375 11.3076 13.9006 11.354 13.854L15.354 9.854C15.4479 9.76011 15.5006 9.63278 15.5006 9.5C15.5006 9.36722 15.4479 9.23989 15.354 9.146C15.2601 9.05211 15.1328 8.99937 15 8.99937C14.8672 8.99937 14.7399 9.05211 14.646 9.146L11.5 12.293V2.5C11.5 1.83696 11.2366 1.20107 10.7678 0.732233C10.2989 0.263392 9.66304 0 9 0H1C0.867392 0 0.740214 0.0526784 0.646446 0.146447C0.552678 0.240215 0.5 0.367392 0.5 0.5C0.5 0.632608 0.552678 0.759785 0.646446 0.853553C0.740214 0.947322 0.867392 1 1 1H9C9.39782 1 9.77936 1.15804 10.0607 1.43934C10.342 1.72064 10.5 2.10218 10.5 2.5V12.293L7.354 9.146C7.26011 9.05211 7.13278 8.99937 7 8.99937C6.86722 8.99937 6.73989 9.05211 6.646 9.146C6.55211 9.23989 6.49937 9.36722 6.49937 9.5C6.49937 9.63278 6.55211 9.76011 6.646 9.854L10.646 13.854Z" />
									</mask>
									<path fillRule="evenodd" clipRule="evenodd" d="M10.646 13.854C10.6924 13.9006 10.7476 13.9375 10.8084 13.9627C10.8691 13.9879 10.9342 14.0009 11 14.0009C11.0658 14.0009 11.1309 13.9879 11.1916 13.9627C11.2524 13.9375 11.3076 13.9006 11.354 13.854L15.354 9.854C15.4479 9.76011 15.5006 9.63278 15.5006 9.5C15.5006 9.36722 15.4479 9.23989 15.354 9.146C15.2601 9.05211 15.1328 8.99937 15 8.99937C14.8672 8.99937 14.7399 9.05211 14.646 9.146L11.5 12.293V2.5C11.5 1.83696 11.2366 1.20107 10.7678 0.732233C10.2989 0.263392 9.66304 0 9 0H1C0.867392 0 0.740214 0.0526784 0.646446 0.146447C0.552678 0.240215 0.5 0.367392 0.5 0.5C0.5 0.632608 0.552678 0.759785 0.646446 0.853553C0.740214 0.947322 0.867392 1 1 1H9C9.39782 1 9.77936 1.15804 10.0607 1.43934C10.342 1.72064 10.5 2.10218 10.5 2.5V12.293L7.354 9.146C7.26011 9.05211 7.13278 8.99937 7 8.99937C6.86722 8.99937 6.73989 9.05211 6.646 9.146C6.55211 9.23989 6.49937 9.36722 6.49937 9.5C6.49937 9.63278 6.55211 9.76011 6.646 9.854L10.646 13.854Z" fill="#393838" />
									<path d="M10.646 13.854L11.354 13.1478L11.3531 13.1469L10.646 13.854ZM11.354 13.854L10.6469 13.1469L10.646 13.1478L11.354 13.854ZM15.354 9.854L16.0611 10.5611L15.354 9.854ZM15 8.99937V9.99937V8.99937ZM14.646 9.146L13.9389 8.43889L13.9388 8.43901L14.646 9.146ZM11.5 12.293H10.5V14.7078L12.2072 13L11.5 12.293ZM1 0V-1V0ZM1 1V2V1ZM10.5 12.293L9.79278 13L11.5 14.7078V12.293H10.5ZM7.354 9.146L8.06122 8.43901L8.06111 8.43889L7.354 9.146ZM7 8.99937V7.99937V8.99937ZM6.49937 9.5H5.49937H6.49937ZM6.646 9.854L5.93889 10.5611L6.646 9.854ZM9.938 14.5602C10.0773 14.6999 10.2429 14.8107 10.4251 14.8863L11.1916 13.0391C11.2524 13.0643 11.3076 13.1012 11.354 13.1478L9.938 14.5602ZM10.4251 14.8863C10.6073 14.962 10.8027 15.0009 11 15.0009V13.0009C11.0658 13.0009 11.1309 13.0139 11.1916 13.0391L10.4251 14.8863ZM11 15.0009C11.1973 15.0009 11.3927 14.962 11.5749 14.8863L10.8084 13.0391C10.8691 13.0139 10.9342 13.0009 11 13.0009V15.0009ZM11.5749 14.8863C11.7571 14.8107 11.9227 14.6999 12.062 14.5602L10.646 13.1478C10.6924 13.1012 10.7476 13.0643 10.8084 13.0391L11.5749 14.8863ZM12.0611 14.5611L16.0611 10.5611L14.6469 9.14689L10.6469 13.1469L12.0611 14.5611ZM16.0611 10.5611C16.3425 10.2797 16.5006 9.89799 16.5006 9.5H14.5006C14.5006 9.36756 14.5532 9.24054 14.6469 9.14689L16.0611 10.5611ZM16.5006 9.5C16.5006 9.10201 16.3425 8.72032 16.0611 8.43889L14.6469 9.85311C14.5532 9.75946 14.5006 9.63244 14.5006 9.5H16.5006ZM16.0611 8.43889C15.7797 8.15747 15.398 7.99937 15 7.99937V9.99937C14.8676 9.99937 14.7405 9.94676 14.6469 9.85311L16.0611 8.43889ZM15 7.99937C14.602 7.99937 14.2203 8.15747 13.9389 8.43889L15.3531 9.85311C15.2595 9.94676 15.1324 9.99937 15 9.99937V7.99937ZM13.9388 8.43901L10.7928 11.586L12.2072 13L15.3532 9.85299L13.9388 8.43901ZM12.5 12.293V2.5H10.5V12.293H12.5ZM12.5 2.5C12.5 1.57174 12.1313 0.681504 11.4749 0.0251263L10.0607 1.43934C10.342 1.72064 10.5 2.10218 10.5 2.5H12.5ZM11.4749 0.0251263C10.8185 -0.631251 9.92826 -1 9 -1V1C9.39782 1 9.77936 1.15804 10.0607 1.43934L11.4749 0.0251263ZM9 -1H1V1H9V-1ZM1 -1C0.602176 -1 0.220645 -0.841965 -0.0606605 -0.56066L1.35355 0.853553C1.25978 0.947322 1.13261 1 1 1V-1ZM-0.0606605 -0.56066C-0.341967 -0.279354 -0.5 0.102177 -0.5 0.5H1.5C1.5 0.632606 1.44732 0.759784 1.35355 0.853553L-0.0606605 -0.56066ZM-0.5 0.5C-0.5 0.897823 -0.341967 1.27935 -0.0606605 1.56066L1.35355 0.146447C1.44732 0.240216 1.5 0.367394 1.5 0.5H-0.5ZM-0.0606605 1.56066C0.220645 1.84197 0.602176 2 1 2V0C1.13261 0 1.25978 0.0526778 1.35355 0.146447L-0.0606605 1.56066ZM1 2H9V0H1V2ZM9 2C9.13261 2 9.25978 2.05268 9.35355 2.14645L10.7678 0.732233C10.2989 0.263393 9.66304 0 9 0V2ZM9.35355 2.14645C9.44732 2.24022 9.5 2.36739 9.5 2.5H11.5C11.5 1.83696 11.2366 1.20107 10.7678 0.732233L9.35355 2.14645ZM9.5 2.5V12.293H11.5V2.5H9.5ZM11.2072 11.586L8.06122 8.43901L6.64678 9.85299L9.79278 13L11.2072 11.586ZM8.06111 8.43889C7.77968 8.15747 7.39799 7.99937 7 7.99937V9.99937C6.86756 9.99937 6.74054 9.94676 6.64689 9.85311L8.06111 8.43889ZM7 7.99937C6.60201 7.99937 6.22032 8.15747 5.93889 8.43889L7.35311 9.85311C7.25946 9.94676 7.13244 9.99937 7 9.99937V7.99937ZM5.93889 8.43889C5.65747 8.72032 5.49937 9.10201 5.49937 9.5H7.49937C7.49937 9.63244 7.44676 9.75946 7.35311 9.85311L5.93889 8.43889ZM5.49937 9.5C5.49937 9.89799 5.65747 10.2797 5.93889 10.5611L7.35311 9.14689C7.44676 9.24054 7.49937 9.36756 7.49937 9.5H5.49937ZM5.93889 10.5611L9.93889 14.5611L11.3531 13.1469L7.35311 9.14689L5.93889 10.5611Z" fill="#393838" mask="url(#path-1-inside-1_1134_1092)" />
								</svg>

								<p>подробнее о решениях для ваших задач</p>
							</div>
						</Link>
						<div className="hero-page__advantages advantages">
							<div className="hero-page__box-number box-number">
								<svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M0 2.86252V0H12.3547L15.064 2.86252V17.1751H22V20H0V17.1751H12.3547V2.86252H0Z" fill="#393838" />
								</svg>
							</div>
							<div className="advantages__title">
								<h3>партнерам и вендорам</h3>
								<a href={`mailto:${contacts.email}`}>{contacts.email}</a>
							</div>
							<div className="advantages__decor"><img src="/images/hero-page/main-screen-animation-1-large.gif" alt="" /></div>
							<div className="advantages__content">
								<h4 className="advantages__content-title">преимущества</h4>
								<Accordion
									items={accordionData}
									classAccordion="advantages__drop-down-list"
									classItem="advantages__list-item"
									classTrigger="advantages__list-title"
									classContent="advantages__list-text"
								/>
							</div>
						</div>
					</div>

				</div>
			</div>

		</section>

	)

}