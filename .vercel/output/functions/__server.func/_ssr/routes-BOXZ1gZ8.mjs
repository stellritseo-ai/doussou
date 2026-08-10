import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as SERVICES, c as style_cornrows_default, i as GALLERY_FILTERS, n as CONTACT, o as style_natural_default, r as GALLERY, s as style_boxbraids_default } from "./router-BN8dzdVf.mjs";
import { _ as Calendar, a as Send, b as ArrowUpRight, c as Menu, d as Mail, f as Instagram, g as Check, h as CircleCheck, i as ShieldCheck, l as Maximize2, m as Clock, n as Star, o as Phone, p as Facebook, r as Sparkles, s as Music2, t as X, u as MapPin, v as Award, y as ArrowUp } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BOXZ1gZ8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var logo_default = "/assets/logo-cIlqHELf.png";
var NAV$1 = [
	{
		label: "Home",
		href: "#top"
	},
	{
		label: "About Us",
		href: "#about"
	},
	{
		label: "Services",
		href: "#services"
	},
	{
		label: "Gallery",
		href: "#gallery"
	},
	{
		label: "Reviews",
		href: "#reviews"
	},
	{
		label: "Booking",
		href: "#booking"
	},
	{
		label: "Contact Us",
		href: "#contact"
	}
];
function Header() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [activeItem, setActiveItem] = (0, import_react.useState)("Home");
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "fixed inset-x-0 top-0 z-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hidden bg-plum-deep text-ivory md:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-[40px] max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-[13px] font-medium tracking-wide opacity-90",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { size: 14 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Business hours :- 9:30 am to 8:30pm Mon to Sat" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4 text-[13px] font-medium",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "flex items-center gap-1.5 opacity-90 transition-opacity hover:opacity-100",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-base leading-none",
									children: "🇺🇸"
								}), " English"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "flex items-center gap-1.5 opacity-60 transition-opacity hover:opacity-100",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-base leading-none",
									children: "🇫🇷"
								}), " French"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									className: "flex h-[24px] w-[24px] items-center justify-center rounded-full border border-ivory/80 transition-colors hover:bg-ivory hover:text-plum-deep",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, {
										size: 12,
										strokeWidth: 2.5
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									className: "flex h-[24px] w-[24px] items-center justify-center rounded-full border border-ivory/80 transition-colors hover:bg-ivory hover:text-plum-deep",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, {
										size: 12,
										strokeWidth: 2.5
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									className: "flex h-[24px] w-[24px] items-center justify-center rounded-full border border-ivory/80 transition-colors hover:bg-ivory hover:text-plum-deep",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] font-bold leading-none",
										children: "G"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									className: "flex h-[24px] w-[24px] items-center justify-center rounded-full border border-ivory/80 transition-colors hover:bg-ivory hover:text-plum-deep",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "2.5",
										strokeLinecap: "round",
										strokeLinejoin: "round",
										className: "h-[11px] w-[11px]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" })
									})
								})
							]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("bg-background transition-all duration-300 border-b border-border/40", scrolled ? "shadow-md" : "shadow-sm"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					"aria-label": "Primary",
					className: "mx-auto flex h-[88px] max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#top",
							className: "flex items-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: logo_default,
								alt: "Doussou Quality Braiding",
								className: "h-[68px] lg:h-[74px] w-auto object-contain transition-transform duration-300 hover:scale-105"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "hidden items-center gap-1 xl:gap-2 lg:flex ml-auto mr-4",
							children: NAV$1.map((item) => {
								const isActive = activeItem === item.label;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: item.href,
									onClick: () => setActiveItem(item.label),
									className: cn("rounded-full px-4 py-2 text-[14px] font-semibold transition-all duration-300 inline-block", isActive ? "bg-magenta text-ivory shadow-md scale-105" : "text-foreground/85 hover:bg-plum-deep hover:text-ivory hover:scale-105 hover:shadow-md active:scale-95"),
									children: item.label
								}) }, item.label);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hidden lg:block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: CONTACT.phoneHref,
								className: "flex items-center gap-2 rounded-full bg-magenta px-4 py-2 text-[14px] font-bold tracking-wide text-ivory transition-all hover:bg-plum-deep hover:scale-105 shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
									size: 15,
									fill: "currentColor"
								}), CONTACT.phone]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": open ? "Close menu" : "Open menu",
							"aria-expanded": open,
							onClick: () => setOpen((v) => !v),
							className: "flex h-10 w-10 items-center justify-center rounded-lg text-plum-deep lg:hidden",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 24 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 24 })
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("fixed inset-0 top-[88px] md:top-[128px] z-40 bg-white/50 backdrop-blur-[40px] transition-all duration-500 lg:hidden overflow-y-auto border-t border-white/40 shadow-2xl", open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0 delay-150"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex min-h-full max-w-[1400px] flex-col justify-between px-6 pb-12 pt-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex flex-col gap-6 sm:gap-8",
						children: NAV$1.map((item, i) => {
							const isActive = activeItem === item.label;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "transform transition-all duration-[600ms] cubic-bezier(0.16,1,0.3,1)",
								style: {
									transitionDelay: `${open ? 150 + i * 60 : 0}ms`,
									opacity: open ? 1 : 0,
									transform: open ? "translateX(0)" : "translateX(30px)"
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: item.href,
									onClick: () => {
										setActiveItem(item.label);
										setOpen(false);
									},
									className: cn("group flex items-center justify-between font-display text-4xl sm:text-5xl transition-colors tracking-tight", isActive ? "text-[#C48D46] italic font-serif" : "text-[#2B231D] hover:text-[#C48D46]"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.label }), isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-[2px] w-12 sm:w-16 bg-[#C48D46] rounded-full animate-[fadeLeft_0.5s_ease-out_both]" })]
								})
							}, item.label);
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-14 flex flex-col items-center space-y-8 transition-all duration-700",
						style: {
							transitionDelay: `${open ? 500 : 0}ms`,
							opacity: open ? 1 : 0,
							transform: open ? "translateY(0)" : "translateY(20px)"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: CONTACT.socials.instagram,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "flex h-12 w-12 items-center justify-center rounded-full bg-white/40 text-[#2B231D] border border-white/50 backdrop-blur-md shadow-sm transition-all hover:bg-[#BA1296] hover:text-white hover:scale-110 hover:border-transparent",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, {
									size: 24,
									strokeWidth: 1.5
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: CONTACT.socials.facebook,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "flex h-12 w-12 items-center justify-center rounded-full bg-white/40 text-[#2B231D] border border-white/50 backdrop-blur-md shadow-sm transition-all hover:bg-[#BA1296] hover:text-white hover:scale-110 hover:border-transparent",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, {
									size: 24,
									strokeWidth: 1.5
								})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: CONTACT.phoneHref,
							className: "group flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#C48D46] to-[#A87432] py-4.5 text-base font-bold tracking-wide text-white shadow-lg shadow-[#C48D46]/20 transition-all hover:scale-[1.02] hover:shadow-[#C48D46]/40",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
								size: 18,
								fill: "currentColor",
								className: "transition-transform group-hover:scale-110"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Call to Book: ", CONTACT.phone] })]
						})]
					})]
				})
			})
		]
	});
}
var hero_portrait_default = "/assets/hero-portrait-CKTRHZT2.jpg";
var HERO_IMAGES = [
	{
		src: hero_portrait_default,
		title: "Signature Knotless Braids",
		tag: "Featherlight & Tension-Free",
		alt: "Doussou Quality Braiding Signature Knotless Braids in Glen Burnie"
	},
	{
		src: style_boxbraids_default,
		title: "Waist-Length Box Braids",
		tag: "Classic & Versatile Styling",
		alt: "Doussou Quality Braiding Waist-Length Box Braids"
	},
	{
		src: style_cornrows_default,
		title: "Feed-In Cornrows",
		tag: "Precision Scalped Patterns",
		alt: "Doussou Quality Braiding Feed-In Cornrows"
	}
];
function Hero() {
	const [currentImage, setCurrentImage] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const timer = setInterval(() => {
			setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
		}, 4500);
		return () => clearInterval(timer);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative w-full overflow-hidden bg-[#FAF8F5] pt-36 pb-16 lg:pt-44 lg:pb-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute -left-28 -top-16 h-[650px] w-[650px] rounded-full bg-[#DCD4FD]/60 blur-[140px]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute -left-20 top-[300px] h-[600px] w-[600px] rounded-full bg-[#FCE0D4]/75 blur-[140px]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute -right-20 top-10 h-[500px] w-[500px] rounded-full bg-[#EBDCFD]/40 blur-[120px]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "z-10 animate-[fadeUp_0.9s_cubic-bezier(0.16,1,0.3,1)_both]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 rounded-full bg-[#C48D46]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#C48D46] border border-[#C48D46]/30 mb-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
									size: 13,
									className: "text-[#C48D46]"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "3000+ Happy Customers & Clients" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "font-display text-4xl font-normal leading-[1.2] tracking-tight text-[#2B231D] sm:text-5xl lg:leading-[1.1] lg:text-[3.4rem] xl:text-[4rem]",
								children: ["Doussou Quality Braiding – Premier Hair Braiding in ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-serif italic text-[#C48D46]",
									children: "Glen Burnie, MD"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-[15px] text-[17px] sm:text-[19px] leading-[1.8] sm:leading-[35px] font-medium text-[#5C5046] max-w-xl",
								children: "6 Years of Perfecting the Art of Braids. Experience personalized protective styling designed to celebrate your hair & confidence."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap items-center gap-4 lg:mt-10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#booking",
									className: "group flex items-center gap-2.5 rounded-full bg-[#C48B40] px-8 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#A87432] hover:scale-105 shadow-[0_8px_20px_rgba(196,139,64,0.3)]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { size: 16 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Book an appointment" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: CONTACT.phoneHref,
									className: "flex items-center gap-2.5 rounded-full bg-white border-2 border-[#C48B40] px-8 py-3.5 text-sm font-bold text-[#C48B40] transition-all duration-300 hover:bg-[#C48B40]/10 hover:scale-105 shadow-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 16 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Call Us 9 Am to 8 Pm" })]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-[30px] flex items-center gap-6 border-t border-[#E8DFC8] pt-6 text-[#5C5046]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex text-[#C48D46]",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
													size: 16,
													fill: "currentColor"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
													size: 16,
													fill: "currentColor"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
													size: 16,
													fill: "currentColor"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
													size: 16,
													fill: "currentColor"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
													size: 16,
													fill: "currentColor"
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-bold tracking-wide text-[#2B231D]",
											children: "5.0 Star Rated"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-px bg-[#E8DFC8]" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-semibold tracking-wide",
										children: "3000+ Happy Clients"
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative flex justify-center lg:justify-end animate-[imageReveal_1.2s_cubic-bezier(0.16,1,0.3,1)_both]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative p-[5px] rounded-[200px] sm:rounded-[260px] bg-gradient-to-b from-[#C48D46] via-[#E2B77B] to-[#9E6C2D] shadow-[0_15px_40px_rgba(0,0,0,0.12)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative overflow-hidden rounded-full sm:rounded-[254px] w-[320px] sm:w-[360px] lg:w-[410px] xl:w-[440px] h-[480px] sm:h-[560px] lg:h-[620px] xl:h-[650px]",
									children: HERO_IMAGES.map((img, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: img.src,
										alt: img.alt,
										width: 1104,
										height: 1456,
										fetchPriority: idx === 0 ? "high" : "low",
										className: cn("absolute inset-0 h-full w-full object-cover object-top transition-all duration-1000 ease-in-out", idx === currentImage ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0")
									}, img.src))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute bottom-4 right-1/2 translate-x-1/2 z-20 flex items-center gap-2 rounded-full bg-black/30 backdrop-blur-md px-3 py-1.5",
									children: HERO_IMAGES.map((_, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setCurrentImage(idx),
										"aria-label": `Go to slide ${idx + 1}`,
										className: cn("h-2 rounded-full transition-all duration-300", idx === currentImage ? "w-6 bg-[#C48D46]" : "w-2 bg-white/60 hover:bg-white")
									}, idx))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute -bottom-3 -left-4 sm:left-2 rounded-2xl bg-white/95 backdrop-blur-xl px-5 py-3 text-[#2B231D] shadow-xl border border-[#E8DFC8] hidden sm:flex items-center gap-3 z-20 transition-all duration-500",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex h-9 w-9 items-center justify-center rounded-full bg-[#C48D46]/15 text-[#C48D46]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { size: 18 })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-bold leading-tight",
										children: HERO_IMAGES[currentImage].title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] font-medium text-[#5C5046]",
										children: HERO_IMAGES[currentImage].tag
									})] })]
								})
							]
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        @keyframes fadeUp { from { opacity:0; transform: translateY(28px) } to { opacity:1; transform:none } }
        @keyframes imageReveal { from { opacity:0; transform: scale(0.96) translateY(18px) } to { opacity:1; transform:none } }
      ` })
		]
	});
}
var welcome_default = "/assets/welcome-CBZWLRWk.mp4";
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "about",
		className: "relative w-full overflow-hidden bg-gradient-to-r from-[#FCEAF4] via-[#FFF3F8] to-[#FCEAF4] py-16 lg:py-24 border-y border-[#F5D5E6]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute -left-20 -top-20 h-96 w-96 rounded-full bg-magenta/10 blur-3xl"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-blush/40 blur-3xl"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "inline-block rounded-full bg-[#A81585] px-6 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm mb-6",
							children: "Welcome To Doussou Quality Braiding"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-['Inter'] font-bold -mb-[11px] text-3xl leading-[1.2] text-[#111] sm:text-4xl lg:text-[2.5rem]",
							children: "Expert Braids for Every Style, Texture, and Personality."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-[15px] sm:text-[16px] leading-[1.75] text-[#222] font-normal",
							children: "Welcome to Doussou Quality Braiding, where master braiders bring years of passion and precision to every client. Located in Glen Burnie, MD, we specialize in authentic African hair braiding and modern protective styles for both men and women."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-[15px] sm:text-[16px] leading-[1.75] text-[#222] font-normal",
							children: "For years, we have dedicated ourselves to the art of hair braiding, mastering everything from traditional African techniques to the latest trends like knotless and stitch braids. Our goal is to make every client feel beautiful and confident when they leave our chair. We pride ourselves on a clean, friendly atmosphere where you can relax while we handle your style. We look forward to meeting you and bringing your vision to life!"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#services",
								className: "rounded-full bg-[#A81585] px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#880D6B] hover:scale-105 shadow-md",
								children: "Read More"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#why-us",
								className: "rounded-full bg-[#A81585] px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#880D6B] hover:scale-105 shadow-md",
								children: "Check Out Our Achievements"
							})]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-4 items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden rounded-[24px] sm:rounded-[28px] shadow-lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
								src: welcome_default,
								autoPlay: true,
								loop: true,
								muted: true,
								playsInline: true,
								className: "h-[380px] sm:h-[520px] w-full object-cover object-center transition-transform duration-700 hover:scale-105"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-hidden rounded-[24px] sm:rounded-[28px] shadow-lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: style_cornrows_default,
									alt: "Precision Feed-in Braids",
									className: "h-[182px] sm:h-[250px] w-full object-cover object-top transition-transform duration-700 hover:scale-105"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-hidden rounded-[24px] sm:rounded-[28px] shadow-lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: style_natural_default,
									alt: "Natural Hair Braids Style",
									className: "h-[182px] sm:h-[250px] w-full object-cover object-top transition-transform duration-700 hover:scale-105"
								})
							})]
						})]
					})]
				})
			})
		]
	});
}
var STATS = [
	{
		value: "6+",
		label: "Years of Experience",
		detail: "Master Braider in Glen Burnie, MD",
		icon: Award
	},
	{
		value: "3,000+",
		label: "Styles Created",
		detail: "Knotless, Box & Cornrows",
		icon: Sparkles
	},
	{
		value: "5.0 ★",
		label: "Client Rating",
		detail: "Top-Rated Hair Studio",
		icon: Star
	},
	{
		value: "100%",
		label: "Protective Styling",
		detail: "Scalp-First Care",
		icon: ShieldCheck
	}
];
function Intro() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative w-full overflow-hidden bg-[#FAF8F5] py-16 lg:py-24 border-t border-[#E8DFC8]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute -left-28 top-0 h-[500px] w-[500px] rounded-full bg-[#DCD4FD]/30 blur-[130px]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute -right-28 bottom-0 h-[500px] w-[500px] rounded-full bg-[#FCE0D4]/40 blur-[130px]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full bg-[#C48D46]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#C48D46] border border-[#C48D46]/30 mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
								size: 13,
								className: "text-[#C48D46]"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Doussou Quality Braiding Experience" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-3xl font-normal leading-tight text-[#2B231D] sm:text-4xl lg:text-[2.85rem]",
							children: ["Expert Braids. Exceptional Detail. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-serif italic text-[#C48D46]",
								children: "Your Signature Style."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap gap-4 text-xs font-bold text-[#2B231D]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 border border-[#E8DFC8] shadow-2xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
										size: 14,
										className: "text-[#C48D46]"
									}), "Tension-Free Parting"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 border border-[#E8DFC8] shadow-2xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
										size: 14,
										className: "text-[#C48D46]"
									}), "Long-Lasting Hold"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 border border-[#E8DFC8] shadow-2xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
										size: 14,
										className: "text-[#C48D46]"
									}), "Scalp Comfort Focus"]
								})
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-[24px] bg-white p-7 sm:p-9 border border-[#E8DFC8] shadow-[0_4px_20px_rgba(0,0,0,0.03)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-base sm:text-lg leading-relaxed text-[#5C5046] font-normal",
							children: "For more than six years, Doussou Quality Braiding has been braiding hair for women across Glen Burnie and the surrounding areas. Every appointment begins with a personal consultation, ensuring your style matches your hair texture, lifestyle, and confidence."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-base sm:text-lg leading-relaxed text-[#5C5046] font-normal border-t border-[#E8DFC8]/60 pt-4",
							children: "The result is protective, precise, long-lasting work — clean parting, even tension, and a flawless finish that holds its shape for weeks."
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4",
					children: STATS.map((s) => {
						const IconComponent = s.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group relative flex flex-col justify-between rounded-[24px] bg-white p-6 sm:p-7 border border-[#E8DFC8] shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#C48D46]/40",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#C48D46] transition-transform group-hover:scale-105",
									children: s.value
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-10 w-10 items-center justify-center rounded-full bg-[#F9F5EF] text-[#C48D46] transition-colors group-hover:bg-[#C48D46] group-hover:text-white",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconComponent, { size: 20 })
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-bold uppercase tracking-wider text-[#2B231D]",
									children: s.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-[11px] font-medium text-[#8C7A6B]",
									children: s.detail
								})]
							})]
						}, s.label);
					})
				})]
			})
		]
	});
}
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "services",
		className: "relative w-full overflow-hidden bg-[#FAF8F5] py-[50px] border-t border-[#E8DFC8]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute -right-20 top-20 h-[500px] w-[500px] rounded-full bg-[#DCD4FD]/30 blur-[130px]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute -left-20 bottom-10 h-[500px] w-[500px] rounded-full bg-[#FCE0D4]/40 blur-[130px]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center max-w-4xl mx-auto mb-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 rounded-full bg-[#C48D46]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#C48D46] border border-[#C48D46]/30 mb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
									size: 13,
									className: "text-[#C48D46]"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Our Specialties" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "font-display text-3xl font-normal leading-tight text-[#2B231D] sm:text-4xl lg:text-[2.75rem]",
								children: ["Signature Hair Braiding ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-serif italic text-[#C48D46]",
									children: "Services"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-[14px] sm:text-[17px] text-[#5C5046] font-medium leading-relaxed whitespace-normal md:whitespace-nowrap",
								children: "From timeless classics to modern statement styles, discover a protective look tailored for you."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-12",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap justify-center gap-3",
							children: [
								"Knotless Braids",
								"Box Braids",
								"Feed-In Cornrows",
								"Faux Locs",
								"Twist-Outs",
								"Scalp Treatments",
								"Kids Braiding",
								"Special Occasion Updos"
							].map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#booking",
								className: "rounded-full bg-white border border-[#E8DFC8] px-4 py-2 text-xs font-semibold text-[#2B231D] shadow-2xs transition-all hover:bg-[#C48D46] hover:text-white hover:border-[#C48D46] hover:scale-105",
								children: tag
							}, tag))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
						children: SERVICES.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "group relative flex flex-col overflow-hidden rounded-[28px] bg-white border border-[#E8DFC8] shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(196,141,70,0.12)] hover:border-[#C48D46]/40",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative overflow-hidden aspect-[4/3] w-full bg-[#F9F5EF]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: service.image,
									alt: `${service.name} at Doussou Quality Braiding in Glen Burnie, MD`,
									width: 912,
									height: 1200,
									loading: "lazy",
									className: "h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute top-4 left-4 z-10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-white/90 backdrop-blur-md px-3.5 py-1 text-xs font-bold text-[#2B231D] shadow-sm border border-white/60",
										children: service.name.split(" ")[0]
									})
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-1 flex-col justify-between p-6 sm:p-7",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-2xl font-bold text-[#2B231D] transition-colors group-hover:text-[#C48D46]",
										children: service.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F9F5EF] text-[#C48D46] transition-all duration-300 group-hover:bg-[#C48D46] group-hover:text-white group-hover:rotate-45",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 18 })
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-[14px] leading-relaxed text-[#5C5046] font-normal",
									children: service.blurb
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 border-t border-[#E8DFC8]/60 pt-4 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#booking",
										className: "inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C48D46] transition-all group-hover:gap-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { size: 14 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Book This Style" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] font-semibold text-[#8C7A6B]",
										children: "Glen Burnie, MD"
									})]
								})]
							})]
						}, service.name))
					})
				]
			})
		]
	});
}
var transformation_default = "/assets/transformation-BfCSaWvL.jpg";
function Transformation() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "transformation",
		className: "relative w-full overflow-hidden bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 md:grid-cols-2 w-full",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "group relative flex flex-col items-center justify-center text-center px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14 min-h-[300px] lg:min-h-[360px] overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: transformation_default,
						alt: "Premium Hair Braiding Salon in Minnesota",
						width: 1920,
						height: 1088,
						loading: "lazy",
						className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-[#14221E]/92 via-[#1D2B26]/88 to-[#14221E]/92 backdrop-blur-[2px]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10 flex flex-col items-center max-w-md",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl sm:text-2xl lg:text-[1.85rem] font-bold leading-tight text-white tracking-tight mb-3",
								children: "Premium Hair Braiding Salon in Glen Burnie, MD"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs sm:text-sm text-white/90 font-normal leading-relaxed mb-6 max-w-sm sm:max-w-md",
								children: "At Doussou Quality Braiding, you can trust that your hair will be styled by master braider professionals who know how to give you the exact look that you want."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#booking",
								className: "inline-flex items-center gap-2 rounded-full border border-white/40 bg-black/40 backdrop-blur-md px-6 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:bg-white hover:text-[#1D2B26] hover:scale-105 shadow-md",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { size: 14 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Book Your Appointment" })]
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "group relative flex flex-col items-center justify-center text-center px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14 min-h-[300px] lg:min-h-[360px] overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_portrait_default,
						alt: "At Doussou Quality Braiding we take care of your look",
						width: 1104,
						height: 1456,
						loading: "lazy",
						className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-[#A30D83]/92 via-[#B81395]/88 to-[#A30D83]/92 backdrop-blur-[2px]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10 flex flex-col items-center max-w-md",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl sm:text-2xl lg:text-[1.85rem] font-bold leading-tight text-white tracking-tight mb-3",
								children: "At Doussou Quality Braiding we take care of your look."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs sm:text-sm text-white/90 font-normal leading-relaxed mb-6 max-w-sm sm:max-w-md",
								children: "Call us or book your appointment online today."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: CONTACT.phoneHref,
								className: "inline-flex items-center gap-2 rounded-full border-2 border-white bg-white/10 backdrop-blur-md px-7 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:bg-white hover:text-[#BA1296] hover:scale-105 shadow-md",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 14 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Call Us Now" })]
							})
						]
					})
				]
			})]
		})
	});
}
var icon1_default = "/assets/icon1-DV6kKsfN.png";
var icon2_default = "/assets/icon2-7j-PORm_.png";
var icon3_default = "/assets/icon3-M7eXRQFP.png";
var icon4_default = "/assets/icon4-3MJNJQMO.png";
var icon5_default = "/assets/icon5-2ZnZ_8tM.png";
var icon6_default = "/assets/icon6-q-LHk6uR.png";
var icon7_default = "/assets/icon7-e4LvyAKs.png";
var icon8_default = "/assets/icon8-D1ZL2_92.png";
var LEFT_ITEMS = [
	{
		title: "Braids",
		desc: "Box braids, Knotless braids, Senegalese twist, boho braids, stitch braids, etc.",
		icon: icon1_default
	},
	{
		title: "Natural styles",
		desc: "Silk press, Blow outs, Coily sets etc",
		icon: icon2_default
	},
	{
		title: "Hair Treatments",
		desc: "Scalp Renewal, Hydrating Treatment, etc",
		icon: icon3_default
	},
	{
		title: "Hair Styling",
		desc: "Your complete guide to different types of braids, from box braids to boho...",
		icon: icon4_default
	}
];
var RIGHT_ITEMS = [
	{
		title: "Extension Services",
		desc: "Sew-ins, Wigs, Quick weaves, microlinks etc...",
		icon: icon5_default
	},
	{
		title: "Locs",
		desc: "Starter Locs, Interlocking, Microlocs, Maintenance, etc",
		icon: icon6_default
	},
	{
		title: "Weddings",
		desc: "Deluxe Hair Package, Bridal Hair Consultation, Standard Hair Package",
		icon: icon7_default
	},
	{
		title: "Hair Wash",
		desc: "Start your braiding experience with a fresh, clean foundation. At Doussou Quality Braiding..",
		icon: icon8_default
	}
];
function WhyChooseUs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "why-us",
		className: "relative w-full overflow-hidden bg-[#FAF8F5] py-16 lg:py-24 border-t border-[#E8DFC8]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center max-w-4xl mx-auto mb-12 sm:mb-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 rounded-full bg-[#C48D46]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#C48D46] border border-[#C48D46]/30 mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
							size: 13,
							className: "text-[#C48D46]"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Why Choose Doussou Quality Braiding" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-3xl font-normal leading-tight text-[#2B231D] sm:text-4xl lg:text-[2.75rem]",
						children: ["Specialized Protective ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-serif italic text-[#C48D46]",
							children: "Hair Services"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-[14px] sm:text-[17px] text-[#5C5046] font-medium leading-relaxed whitespace-normal md:whitespace-nowrap",
						children: "Crafted with precision, comfort, and passion to celebrate your hair and natural beauty."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 lg:grid-cols-[1fr_0.8fr_1fr] gap-6 lg:gap-8 items-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-col gap-4",
						children: LEFT_ITEMS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group flex items-center justify-between p-5 sm:p-6 rounded-[20px] bg-[#BA1296] text-white shadow-md transition-all duration-300 hover:scale-[1.02] hover:bg-[#A30D83] border border-white/20",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pr-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-sans text-lg font-bold text-white leading-snug",
									children: item.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-white/90 font-normal leading-relaxed",
									children: item.desc
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-14 w-14 shrink-0 items-center justify-center transition-transform group-hover:scale-110",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: item.icon,
									alt: item.title,
									className: "h-full w-full object-contain"
								})
							})]
						}, item.title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative overflow-hidden rounded-[24px] sm:rounded-[28px] shadow-2xl h-[420px] sm:h-[470px] lg:h-[500px] border-4 border-white",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
								src: welcome_default,
								autoPlay: true,
								loop: true,
								muted: true,
								playsInline: true,
								className: "h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute bottom-6 left-6 right-6 text-white text-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-block rounded-full bg-white/20 backdrop-blur-md px-4 py-1.5 text-xs font-bold text-white border border-white/30",
									children: "She is ready ✨ for Eid"
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-col gap-4",
						children: RIGHT_ITEMS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group flex items-center justify-between p-5 sm:p-6 rounded-[20px] bg-[#BA1296] text-white shadow-md transition-all duration-300 hover:scale-[1.02] hover:bg-[#A30D83] border border-white/20",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pr-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-sans text-lg font-bold text-white leading-snug",
									children: item.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-white/90 font-normal leading-relaxed",
									children: item.desc
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-14 w-14 shrink-0 items-center justify-center transition-transform group-hover:scale-110",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: item.icon,
									alt: item.title,
									className: "h-full w-full object-contain"
								})
							})]
						}, item.title))
					})
				]
			})]
		})
	});
}
function Gallery() {
	const [filter, setFilter] = (0, import_react.useState)("All");
	const [active, setActive] = (0, import_react.useState)(null);
	const items = GALLERY.filter((g) => filter === "All" || g.category === filter);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (e.key === "Escape") setActive(null);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	const lightbox = active !== null ? items[active] : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "gallery",
		className: "relative w-full overflow-hidden bg-[#FAF8F5] py-16 lg:py-24 border-t border-[#E8DFC8]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute -left-20 top-20 h-[500px] w-[500px] rounded-full bg-[#DCD4FD]/30 blur-[130px]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute -right-20 bottom-10 h-[500px] w-[500px] rounded-full bg-[#FCE0D4]/40 blur-[130px]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center max-w-2xl mx-auto mb-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 rounded-full bg-[#C48D46]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#C48D46] border border-[#C48D46]/30 mb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
									size: 13,
									className: "text-[#C48D46]"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Style Portfolio" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "font-display text-3xl font-normal leading-tight text-[#2B231D] sm:text-4xl lg:text-[2.75rem]",
								children: ["Braids That Speak ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-serif italic text-[#C48D46]",
									children: "for Themselves"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-base sm:text-lg text-[#5C5046] font-medium leading-relaxed",
								children: "Explore our latest protective styling work created right here in Glen Burnie, MD."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-12 flex flex-wrap justify-center gap-2.5",
						children: GALLERY_FILTERS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								setFilter(f);
								setActive(null);
							},
							className: cn("rounded-full border px-5 py-2 text-xs font-bold transition-all duration-300 shadow-2xs", filter === f ? "border-[#C48D46] bg-[#C48D46] text-white scale-105 shadow-md" : "border-[#E8DFC8] bg-white text-[#2B231D] hover:border-[#C48D46] hover:text-[#C48D46]"),
							children: f
						}, f))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5",
						children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setActive(i),
							className: "group relative block w-full overflow-hidden rounded-[20px] bg-white border border-[#E8DFC8] shadow-[0_4px_16px_rgba(0,0,0,0.03)] text-left transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#C48D46]/40",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "overflow-hidden aspect-[4/4.5] w-full bg-[#F9F5EF]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: item.src,
										alt: item.alt,
										loading: "lazy",
										className: "h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute inset-x-3 bottom-3 translate-y-3 p-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 flex items-center justify-between rounded-xl bg-white/90 backdrop-blur-md border border-white/60 text-[#2B231D] shadow-lg",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block font-display text-sm font-bold leading-tight",
										children: item.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-[10px] font-medium text-[#C48D46]",
										children: item.category
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#C48D46]/15 text-[#C48D46]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize2, { size: 13 })
									})]
								})
							]
						}) }, item.label))
					})
				]
			}),
			lightbox && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				role: "dialog",
				"aria-modal": "true",
				"aria-label": lightbox.label,
				onClick: () => setActive(null),
				className: "fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 sm:p-6 backdrop-blur-md animate-[fadeIn_0.3s_ease-out]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Close image",
					onClick: () => setActive(null),
					className: "absolute z-[70] right-3 top-3 sm:right-6 sm:top-6 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-all hover:bg-white hover:text-black hover:scale-110",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 20 })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					onClick: (e) => e.stopPropagation(),
					className: "max-h-full max-w-4xl flex flex-col items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: lightbox.src,
						alt: lightbox.alt,
						className: "max-h-[78vh] w-auto rounded-[24px] object-contain shadow-2xl border-2 border-white/20"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
						className: "mt-4 text-center text-white",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-display text-2xl font-bold",
							children: lightbox.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-1 block text-xs font-semibold uppercase tracking-widest text-[#C48D46]",
							children: [lightbox.category, " • Doussou Quality Braiding Glen Burnie"]
						})]
					})]
				})]
			})
		]
	});
}
var ROW_1_REVIEWS = [
	{
		name: "Amara S.",
		location: "Glen Burnie, MD",
		initials: "AS",
		color: "bg-[#AA1585]",
		quote: "The most comfortable knotless braids I have ever had. Six weeks in and they still look like day one. Doussou Quality Braiding takes real pride in hair health!"
	},
	{
		name: "Jasmine K.",
		location: "Baltimore, MD",
		initials: "JK",
		color: "bg-[#16857B]",
		quote: "Immaculate parting, zero scalp tension, and such a warm, welcoming studio. I drove from Baltimore and I would happily do it again every month!"
	},
	{
		name: "Dee M.",
		location: "Annapolis, MD",
		initials: "DM",
		color: "bg-[#C48D46]",
		quote: "She listened to me, then made it even better! My cornrows were completely flawless for my sister's wedding. 10/10 recommend Doussou Quality Braiding!"
	},
	{
		name: "Nia R.",
		location: "Pasadena, MD",
		initials: "NR",
		color: "bg-[#7C1685]",
		quote: "My daughter is usually nervous getting her hair done, but Doussou put her at ease. Gentle, patient, and stunning protective braiding results!"
	}
];
var ROW_2_REVIEWS = [
	{
		name: "Lisa M.",
		location: "Glen Burnie, MD",
		initials: "LM",
		color: "bg-[#AA1585]",
		quote: "Fast, honest, and meticulous work! The job was clean, painless, and turned out better than I imagined. Highly professional master braider."
	},
	{
		name: "Elena P.",
		location: "Columbia, MD",
		initials: "EP",
		color: "bg-[#16857B]",
		quote: "Outstanding service! Doussou took care of my natural hair before braiding and gave me customized aftercare advice. Exceptional experience!"
	},
	{
		name: "Marcus T.",
		location: "Severn, MD",
		initials: "MT",
		color: "bg-[#C48D46]",
		quote: "Cleanest stitch braids in Maryland. Great atmosphere, punctual appointments, and great conversation. Will definitely be a regular client."
	},
	{
		name: "David R.",
		location: "Glen Burnie, MD",
		initials: "DR",
		color: "bg-[#7C1685]",
		quote: "Brought my sister here for box braids and she was thrilled with the results. High quality hair used, no tight tension, and very neat parting."
	}
];
function Testimonials() {
	const topCards = [
		...ROW_1_REVIEWS,
		...ROW_1_REVIEWS,
		...ROW_1_REVIEWS
	];
	const bottomCards = [
		...ROW_2_REVIEWS,
		...ROW_2_REVIEWS,
		...ROW_2_REVIEWS
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "reviews",
		className: "relative w-full overflow-hidden bg-[#FAF8F5] py-[50px] border-t border-[#E8DFC8]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute -right-20 top-20 h-[500px] w-[500px] rounded-full bg-[#DCD4FD]/30 blur-[130px]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute -left-20 bottom-10 h-[500px] w-[500px] rounded-full bg-[#FCE0D4]/40 blur-[130px]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center max-w-4xl mx-auto mb-12 sm:mb-14",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full bg-[#C48D46]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#C48D46] border border-[#C48D46]/30 mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
								size: 13,
								className: "text-[#C48D46]"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Google Verified Reviews" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-3xl font-normal leading-[1.2] text-[#2B231D] sm:text-4xl lg:text-[2.75rem] whitespace-normal md:whitespace-nowrap",
							children: ["Trusted by Women Who ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-serif italic text-[#C48D46]",
								children: "Love Their Style."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex text-[#FFB800]",
									children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
										size: 18,
										fill: "currentColor"
									}, i))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-bold text-[#2B231D]",
									children: "5.0 Average Rating"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-[#8C7A6B] font-medium hidden sm:inline",
									children: "•"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-[#8C7A6B] font-medium",
									children: "100+ Verified Google Reviews"
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-6 w-full overflow-hidden py-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-full overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "animate-marquee-left flex gap-5",
						children: topCards.map((review, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "w-[300px] sm:w-[360px] shrink-0 group flex flex-col justify-between rounded-[24px] bg-white p-6 border border-[#E8DFC8]/70 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-xl hover:border-[#C48D46]/40",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex text-[#FFB800] gap-1 mb-3.5",
								children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
									size: 15,
									fill: "currentColor"
								}, i))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs sm:text-[13px] leading-relaxed text-[#2B231D] font-medium",
								children: [
									"“",
									review.quote,
									"”"
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 border-t border-[#E8DFC8]/60 pt-4 flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${review.color} text-white font-bold text-xs shadow-sm`,
									children: review.initials
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-bold text-[#2B231D]",
										children: review.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
										size: 13,
										className: "text-[#16857B]"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] font-medium text-[#8C7A6B]",
									children: review.location
								})] })]
							})]
						}, `top-${review.name}-${idx}`))
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-full overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "animate-marquee-right flex gap-5",
						children: bottomCards.map((review, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "w-[300px] sm:w-[360px] shrink-0 group flex flex-col justify-between rounded-[24px] bg-white p-6 border border-[#E8DFC8]/70 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-xl hover:border-[#C48D46]/40",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex text-[#FFB800] gap-1 mb-3.5",
								children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
									size: 15,
									fill: "currentColor"
								}, i))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs sm:text-[13px] leading-relaxed text-[#2B231D] font-medium",
								children: [
									"“",
									review.quote,
									"”"
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 border-t border-[#E8DFC8]/60 pt-4 flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${review.color} text-white font-bold text-xs shadow-sm`,
									children: review.initials
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-bold text-[#2B231D]",
										children: review.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
										size: 13,
										className: "text-[#16857B]"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] font-medium text-[#8C7A6B]",
									children: review.location
								})] })]
							})]
						}, `bottom-${review.name}-${idx}`))
					})
				})]
			})
		]
	});
}
var booking_cta_default = "/assets/booking-cta-aKOPaz7y.jpg";
function BookingCTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate w-full overflow-hidden py-20 lg:py-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: booking_cta_default,
				alt: "Hair braiding studio client protective style presentation",
				width: 1920,
				height: 1088,
				loading: "lazy",
				className: "absolute inset-0 -z-20 h-full w-full object-cover object-center"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/75 to-black/85 backdrop-blur-[2px]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 text-center relative z-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full bg-[#C48D46]/20 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#E8C28A] border border-[#C48D46]/40 mb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
								size: 13,
								className: "text-[#E8C28A]"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ready to Transform Your Look?" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-3xl sm:text-4xl lg:text-[3.25rem] font-normal leading-[1.15] text-white",
							children: [
								"Schedule Your Braiding Appointment",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-serif italic text-[#E8C28A]",
									children: "with Our Skilled Stylists."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-base sm:text-lg lg:text-xl text-white/90 font-medium leading-relaxed max-w-2xl mx-auto",
							children: "Make your look unique, unparalleled and unprecedented with a hairstyle that brings out all the natural assets you have."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap items-center justify-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#booking",
								className: "inline-flex items-center gap-2.5 rounded-full bg-[#C48D46] px-8 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-[#b07d3b] hover:scale-105 active:scale-95",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { size: 18 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Book Your Appointment Now" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: CONTACT.phoneHref,
								className: "inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-4 text-sm font-bold text-white border border-white/30 backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:scale-105 active:scale-95",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 16 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Call Studio" })]
							})]
						})
					]
				})
			})
		]
	});
}
var EMPTY = {
	firstName: "",
	lastName: "",
	phone: "",
	email: "",
	service: "",
	date: "",
	time: "",
	message: ""
};
function validate(v) {
	const e = {};
	if (!v.firstName.trim()) e.firstName = "First name is required";
	else if (v.firstName.trim().length > 60) e.firstName = "Too long";
	if (!v.lastName.trim()) e.lastName = "Last name is required";
	if (!/^[0-9+()\-.\s]{7,20}$/.test(v.phone.trim())) e.phone = "Enter a valid phone number";
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = "Enter a valid email address";
	if (!v.service) e.service = "Please select a service";
	if (!v.date) e.date = "Choose a preferred date";
	if (!v.time) e.time = "Choose a preferred time";
	if (v.message.length > 1e3) e.message = "Message is too long";
	return e;
}
var fieldCls = "w-full rounded-xl border border-[#E8DFC8] bg-[#FAF8F5] px-4 py-3.5 text-sm text-[#2B231D] outline-none transition-all placeholder:text-[#8C7A6B]/60 focus:border-[#C48D46] focus:bg-white focus:ring-2 focus:ring-[#C48D46]/20 font-medium";
function Field({ label, error, children, className, htmlFor }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				htmlFor,
				className: "mb-2 block text-xs font-bold uppercase tracking-wider text-[#5C5046]",
				children: label
			}),
			children,
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1.5 text-xs font-semibold text-rose-600",
				children: error
			})
		]
	});
}
function BookingForm() {
	const [values, setValues] = (0, import_react.useState)(EMPTY);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [sent, setSent] = (0, import_react.useState)(false);
	const set = (key) => (e) => setValues((v) => ({
		...v,
		[key]: e.target.value
	}));
	const onSubmit = (e) => {
		e.preventDefault();
		const next = validate(values);
		setErrors(next);
		if (Object.keys(next).length === 0) {
			setSent(true);
			setValues(EMPTY);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "booking",
		className: "relative w-full overflow-hidden bg-[#FAF8F5] py-16 lg:py-24 border-t border-[#E8DFC8]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute -left-20 top-20 h-[500px] w-[500px] rounded-full bg-[#DCD4FD]/30 blur-[130px]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute -right-20 bottom-10 h-[500px] w-[500px] rounded-full bg-[#FCE0D4]/40 blur-[130px]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-12 lg:grid-cols-[0.85fr_1fr] lg:gap-16 items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						id: "contact",
						className: "scroll-mt-32",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 rounded-full bg-[#C48D46]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#C48D46] border border-[#C48D46]/30 mb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
									size: 13,
									className: "text-[#C48D46]"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Booking & Inquiries" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "font-display text-3xl font-normal leading-tight text-[#2B231D] sm:text-4xl lg:text-[2.75rem]",
								children: ["Let’s Create ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-serif italic text-[#C48D46]",
									children: "Your Look."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-base text-[#5C5046] font-medium leading-relaxed max-w-lg",
								children: "Send an appointment request and our master stylists will confirm your date and time within 24 hours."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-4 rounded-[20px] bg-white p-5 border border-[#E8DFC8] shadow-[0_4px_16px_rgba(0,0,0,0.02)] transition-all hover:border-[#C48D46]/40",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#BA1296]/10 text-[#BA1296]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 20 })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] font-bold uppercase tracking-wider text-[#8C7A6B]",
											children: "Direct Phone"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: CONTACT.phoneHref,
											className: "mt-0.5 block font-bold text-[#2B231D] hover:text-[#C48D46] transition-colors",
											children: CONTACT.phone
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-4 rounded-[20px] bg-white p-5 border border-[#E8DFC8] shadow-[0_4px_16px_rgba(0,0,0,0.02)] transition-all hover:border-[#C48D46]/40",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#BA1296]/10 text-[#BA1296]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 20 })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] font-bold uppercase tracking-wider text-[#8C7A6B]",
											children: "Studio Email"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: `mailto:${CONTACT.email}`,
											className: "mt-0.5 block font-bold text-[#2B231D] hover:text-[#C48D46] transition-colors",
											children: CONTACT.email
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-4 rounded-[20px] bg-white p-5 border border-[#E8DFC8] shadow-[0_4px_16px_rgba(0,0,0,0.02)] transition-all hover:border-[#C48D46]/40",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#BA1296]/10 text-[#BA1296]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 20 })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] font-bold uppercase tracking-wider text-[#8C7A6B]",
											children: "Studio Location"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-0.5 font-bold text-[#2B231D]",
											children: CONTACT.city
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-[20px] bg-white p-6 border border-[#E8DFC8] shadow-[0_4px_16px_rgba(0,0,0,0.02)]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-3 mb-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#BA1296]/10 text-[#BA1296]",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { size: 18 })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs font-bold uppercase tracking-wider text-[#2B231D]",
												children: "Studio Hours"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-[#8C7A6B]",
												children: "Appointments & Walk-ins"
											})] })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "space-y-2 text-xs",
											children: CONTACT.hours.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex justify-between items-center border-b border-[#E8DFC8]/50 pb-2 last:border-0 last:pb-0 text-[#2B231D] font-medium",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold",
													children: h.day
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[#8C7A6B]",
													children: h.time
												})]
											}, h.day))
										})]
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-[28px] border border-[#E8DFC8] bg-white p-7 sm:p-10 shadow-xl relative",
						children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-h-[440px] flex-col items-center justify-center text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-16 w-16 items-center justify-center rounded-full bg-[#16857B] text-white shadow-lg",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 28 })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-6 font-display text-3xl font-bold text-[#2B231D]",
									children: "Request Received!"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 max-w-sm text-sm leading-relaxed text-[#5C5046] font-medium",
									children: "Thank you — our team will contact you within 24 hours to confirm your appointment details."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setSent(false),
									className: "mt-8 rounded-full bg-[#C48D46]/10 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#C48D46] hover:bg-[#C48D46] hover:text-white transition-all",
									children: "Submit Another Request"
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							noValidate: true,
							onSubmit,
							className: "grid gap-5 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "First Name",
									htmlFor: "firstName",
									error: errors.firstName,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "firstName",
										className: fieldCls,
										value: values.firstName,
										onChange: set("firstName"),
										maxLength: 60,
										autoComplete: "given-name",
										placeholder: "Amara"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Last Name",
									htmlFor: "lastName",
									error: errors.lastName,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "lastName",
										className: fieldCls,
										value: values.lastName,
										onChange: set("lastName"),
										maxLength: 60,
										autoComplete: "family-name",
										placeholder: "Johnson"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Phone",
									htmlFor: "phone",
									error: errors.phone,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "phone",
										type: "tel",
										className: fieldCls,
										value: values.phone,
										onChange: set("phone"),
										maxLength: 20,
										autoComplete: "tel",
										placeholder: "(612) 555-0147"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Email",
									htmlFor: "email",
									error: errors.email,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "email",
										type: "email",
										className: fieldCls,
										value: values.email,
										onChange: set("email"),
										maxLength: 255,
										autoComplete: "email",
										placeholder: "you@email.com"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Select Service",
									htmlFor: "service",
									error: errors.service,
									className: "sm:col-span-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										id: "service",
										className: cn(fieldCls, "appearance-none"),
										value: values.service,
										onChange: set("service"),
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "",
												children: "Choose a service…"
											}),
											SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: s.name,
												children: s.name
											}, s.name)),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "Special Occasion / Wedding",
												children: "Special Occasion / Wedding"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "Kids Braiding",
												children: "Kids Braiding"
											})
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Preferred Date",
									htmlFor: "date",
									error: errors.date,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "date",
										type: "date",
										className: fieldCls,
										value: values.date,
										onChange: set("date")
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Preferred Time",
									htmlFor: "time",
									error: errors.time,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "time",
										type: "time",
										className: fieldCls,
										value: values.time,
										onChange: set("time")
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Additional Notes / Style Request",
									htmlFor: "message",
									error: errors.message,
									className: "sm:col-span-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										id: "message",
										rows: 4,
										maxLength: 1e3,
										className: cn(fieldCls, "resize-none"),
										value: values.message,
										onChange: set("message"),
										placeholder: "Tell us about the hair braiding style you have in mind…"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "sm:col-span-2 mt-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "submit",
										className: "w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#C48D46] px-8 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-[#b07d3b] hover:scale-[1.01] active:scale-[0.99]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { size: 16 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Submit Appointment Request" })]
									})
								})
							]
						})
					})]
				})
			})
		]
	});
}
var NAV = [
	{
		label: "About Us",
		href: "#about"
	},
	{
		label: "Our Services",
		href: "#services"
	},
	{
		label: "Style Gallery",
		href: "#gallery"
	},
	{
		label: "Client Reviews",
		href: "#reviews"
	},
	{
		label: "Book Appointment",
		href: "#booking"
	}
];
var SERVICE_LINKS = [
	"Knotless Braids",
	"African Hair Braiding",
	"Feed-In Cornrows",
	"Box Braids",
	"Locs & Extensions",
	"Scalp & Wash Rituals"
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "w-full bg-[#1C1613] text-white/80 border-t border-[#332A24] relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1 w-full bg-gradient-to-r from-[#C48D46] via-[#BA1296] to-[#C48D46]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-16 lg:py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#top",
									className: "inline-block",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: logo_default,
										alt: "Doussou Quality Braiding",
										className: "h-[74px] w-auto object-contain"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm leading-relaxed text-white/70 max-w-sm font-medium",
									children: "Premier African hair braiding studio in Glen Burnie, Maryland. Protective, precise styling crafted for your beauty."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center gap-3 pt-2",
									children: [
										{
											Icon: Instagram,
											label: "Instagram",
											href: CONTACT.socials.instagram
										},
										{
											Icon: Facebook,
											label: "Facebook",
											href: CONTACT.socials.facebook
										},
										{
											Icon: Music2,
											label: "TikTok",
											href: CONTACT.socials.tiktok
										}
									].map(({ Icon, label, href }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href,
										target: "_blank",
										rel: "noopener noreferrer",
										"aria-label": label,
										className: "flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white border border-white/15 transition-all duration-300 hover:bg-[#C48D46] hover:scale-110 hover:border-transparent",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 16 })
									}, label))
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-xs font-bold uppercase tracking-[0.18em] text-[#C48D46] mb-5",
							children: "Explore"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-3 text-sm font-medium",
							children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: n.href,
								className: "text-white/70 transition-colors hover:text-[#C48D46]",
								children: n.label
							}) }, n.label))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-xs font-bold uppercase tracking-[0.18em] text-[#C48D46] mb-5",
							children: "Popular Services"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-3 text-sm font-medium",
							children: SERVICE_LINKS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#services",
								className: "text-white/70 transition-colors hover:text-[#C48D46]",
								children: s
							}) }, s))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-xs font-bold uppercase tracking-[0.18em] text-[#C48D46] mb-5",
								children: "Studio Contact"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "space-y-4 text-sm font-medium",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
											size: 16,
											className: "text-[#C48D46] shrink-0"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: CONTACT.phoneHref,
											className: "text-white/70 transition-colors hover:text-white",
											children: CONTACT.phone
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
											size: 16,
											className: "text-[#C48D46] shrink-0"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: `mailto:${CONTACT.email}`,
											className: "text-white/70 transition-colors hover:text-white",
											children: CONTACT.email
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
											size: 16,
											className: "text-[#C48D46] shrink-0 mt-0.5"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-white/70 text-xs leading-relaxed",
											children: CONTACT.fullAddress
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex flex-wrap gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#booking",
									className: "inline-flex items-center justify-center gap-2 rounded-full bg-[#BA1296] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-[#a00e80] hover:scale-105",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Book Appointment" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: CONTACT.socials.google,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-4 py-2.5 text-xs font-bold text-white border border-white/20 transition-all hover:bg-white/20",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Google Profile" })
								})]
							})
						] })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-[#332A24] bg-[#140F0D] py-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-white/50",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "© 2026 Doussou Quality Braiding. All Rights Reserved." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Glen Burnie, MD 21061" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#top",
							className: "flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-[#C48D46]",
							"aria-label": "Back to top",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { size: 14 })
						})]
					})]
				})
			})
		]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Intro, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Transformation, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyChooseUs, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingCTA, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingForm, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#booking",
				className: "fixed inset-x-4 bottom-4 z-40 flex items-center justify-center rounded-lg bg-plum px-6 py-3.5 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-primary-foreground shadow-[0_12px_30px_-14px_var(--plum-deep)] lg:hidden",
				children: "Book Appointment"
			})
		]
	});
}
//#endregion
export { Index as component };
