import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BN8dzdVf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var styles_default = "/assets/styles-rDkaPbGD.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$1 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Doussou Quality Braiding | Premier Hair Braiding, Glen Burnie MD" },
			{
				name: "description",
				content: "Doussou Quality Braiding - Premier African hair braiding studio located at 337 S Hospital Dr, Glen Burnie, MD 21061."
			},
			{
				name: "author",
				content: "Doussou Quality Braiding"
			},
			{
				property: "og:title",
				content: "Doussou Quality Braiding | Premier Hair Braiding, Glen Burnie MD"
			},
			{
				property: "og:description",
				content: "Doussou Quality Braiding - Premier African hair braiding studio located at 337 S Hospital Dr, Glen Burnie, MD 21061."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Manrope:wght@400;500;600;700&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$1.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var style_knotless_default = "/assets/style-knotless-CHx2plqH.jpg";
var style_cornrows_default = "/assets/style-cornrows-2vV78Meq.jpg";
var style_boxbraids_default = "/assets/style-boxbraids-yoFRV0DN.jpg";
var style_locs_default = "/assets/style-locs-npQCYImG.jpg";
var style_natural_default = "/assets/style-natural-DSfhqCAd.jpg";
var style_kids_default = "/assets/style-kids-B4IdZ0YC.jpg";
var style_bridal_default = "/assets/style-bridal-BG5150lk.jpg";
var style_treatment_default = "/assets/style-treatment-DyV0PYKs.jpg";
var CONTACT = {
	name: "Doussou Quality Braiding",
	phone: "(301) 523-8593",
	phoneHref: "tel:+13015238593",
	email: "doussoukabba@gmail.com",
	city: "Glen Burnie, Maryland",
	address: "337 S Hospital Dr, Glen Burnie, MD 21061",
	fullAddress: "337 S Hospital Dr, Glen Burnie, MD, United States, 21061",
	socials: {
		facebook: "https://www.facebook.com/p/Doussou-Quality-Braiding-100041383156533/",
		tiktok: "https://www.tiktok.com/@doussouqualitybraiding?fbclid=IwY2xjawTnBtBwZG9mAWV4dG4DYWVtAjEwAGJyaWQRMXRJWGdqTW12T3ZjblNQR1hzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEeQusziexbcwUTQWD6YydsYPmzILZGXItpqqrv24ZQtDQOpQgbTLvIzJE9SrU_aem_khCs1tcq7VDD1U9k5DWbNg",
		instagram: "https://www.instagram.com/doussouweb/?hl=en",
		google: "https://www.google.com/search?q=Doussou+Quality+Braiding&oq=Doussou+Quality+Braiding&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIICAEQRRgnGDsyCAgCEAAYFhgeMg0IAxAAGIYDGIAEGIoFMg0IBBAAGIYDGIAEGIoFMgYIBRBFGDwyBggGEEUYPTIGCAcQRRg80gEHMzM3ajBqN6gCALACAA&sourceid=chrome&source=chrome.ob&ie=UTF-8"
	},
	hours: [
		{
			day: "Monday – Friday",
			time: "8:00 AM – 7:00 PM"
		},
		{
			day: "Saturday",
			time: "8:00 AM – 6:00 PM"
		},
		{
			day: "Sunday",
			time: "By appointment"
		}
	]
};
var SERVICES = [
	{
		name: "Knotless Braiding",
		blurb: "Featherlight, tension-free braids with a seamless root for effortless movement.",
		image: style_knotless_default
	},
	{
		name: "Cornrow Braiding",
		blurb: "Precision feed-in patterns, sculpted parts and clean lines that last for weeks.",
		image: style_cornrows_default
	},
	{
		name: "Box Braids",
		blurb: "Classic, versatile box braids in every length and thickness, styled to suit you.",
		image: style_boxbraids_default
	},
	{
		name: "Locs & Extensions",
		blurb: "Faux locs, retwists and quality extension work finished with meticulous detail.",
		image: style_locs_default
	},
	{
		name: "Natural Hair Styling",
		blurb: "Twist-outs, silk presses and protective styling that honours your natural texture.",
		image: style_natural_default
	},
	{
		name: "Wash & Treatments",
		blurb: "Deep conditioning, scalp care and hydration rituals for healthy hair underneath.",
		image: style_treatment_default
	}
];
var GALLERY = [
	{
		src: style_knotless_default,
		alt: "Knotless braids with half-up bun styled in Glen Burnie MD",
		label: "Knotless Half-Up",
		category: "Knotless",
		span: "tall"
	},
	{
		src: style_cornrows_default,
		alt: "Feed-in cornrow braids straight back",
		label: "Feed-In Cornrows",
		category: "Cornrows",
		span: "short"
	},
	{
		src: style_boxbraids_default,
		alt: "Long jumbo box braids styled over the shoulder",
		label: "Waist-Length Box Braids",
		category: "Box Braids",
		span: "tall"
	},
	{
		src: style_bridal_default,
		alt: "Bridal braided updo with gold hair jewellery",
		label: "Bridal Braided Updo",
		category: "Special Occasion",
		span: "short"
	},
	{
		src: style_locs_default,
		alt: "Faux locs styled into an elegant updo",
		label: "Loc Updo",
		category: "Locs",
		span: "tall"
	},
	{
		src: style_kids_default,
		alt: "Child with neat braids and beads",
		label: "Kids Braids & Beads",
		category: "Kids",
		span: "short"
	},
	{
		src: style_natural_default,
		alt: "Natural afro twist-out styling",
		label: "Twist-Out Volume",
		category: "Natural Styles",
		span: "tall"
	},
	{
		src: style_treatment_default,
		alt: "Scalp oil treatment applied to fresh braids",
		label: "Scalp Ritual",
		category: "Knotless",
		span: "short"
	}
];
var GALLERY_FILTERS = [
	"All",
	"Knotless",
	"Box Braids",
	"Cornrows",
	"Locs",
	"Natural Styles",
	"Kids",
	"Special Occasion"
];
var FAQS = [
	{
		q: "Where is Doussou Quality Braiding located?",
		a: "Doussou Quality Braiding is located at 337 S Hospital Dr, Glen Burnie, MD 21061, serving Anne Arundel County and the wider Maryland area."
	},
	{
		q: "What braiding services do you offer?",
		a: "Knotless braids, box braids, cornrows, locs, extensions, natural hair styling, wash and deep conditioning treatments, and special occasion styling."
	},
	{
		q: "How long do knotless braids last?",
		a: "With proper aftercare, knotless braids typically last six to eight weeks. We include personalised aftercare guidance with every appointment."
	},
	{
		q: "Do I need an appointment?",
		a: "Yes, appointments are recommended. Submit the booking request form or call the studio and we will confirm your preferred date and time."
	}
];
var $$splitComponentImporter = () => import("./routes-BOXZ1gZ8.mjs");
var TITLE = "Doussou Quality Braiding | Hair Braiding Salon in Glen Burnie, MD";
var DESCRIPTION = "Doussou Quality Braiding - Premier African hair braiding studio located at 337 S Hospital Dr, Glen Burnie, MD 21061. Knotless braids, box braids, cornrows, locs and natural styling. Book today.";
var schema = [{
	"@context": "https://schema.org",
	"@type": "HairSalon",
	name: "Doussou Quality Braiding",
	description: DESCRIPTION,
	telephone: CONTACT.phone,
	email: CONTACT.email,
	priceRange: "$$",
	address: {
		"@type": "PostalAddress",
		streetAddress: "337 S Hospital Dr",
		addressLocality: "Glen Burnie",
		addressRegion: "MD",
		postalCode: "21061",
		addressCountry: "US"
	},
	areaServed: "Glen Burnie, Maryland",
	openingHours: ["Mo-Fr 08:00-19:00", "Sa 08:00-18:00"],
	aggregateRating: {
		"@type": "AggregateRating",
		ratingValue: "5",
		reviewCount: "142"
	},
	hasOfferCatalog: {
		"@type": "OfferCatalog",
		name: "Braiding Services",
		itemListElement: [
			"Knotless Braiding",
			"Box Braids",
			"Cornrow Braiding",
			"Locs & Extensions",
			"Natural Hair Styling",
			"Wash & Treatments"
		].map((name) => ({
			"@type": "Offer",
			itemOffered: {
				"@type": "Service",
				name,
				areaServed: "Glen Burnie, MD"
			}
		}))
	}
}, {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity: FAQS.map((f) => ({
		"@type": "Question",
		name: f.q,
		acceptedAnswer: {
			"@type": "Answer",
			text: f.a
		}
	}))
}];
var rootRouteChildren = { IndexRoute: createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: TITLE },
			{
				name: "description",
				content: DESCRIPTION
			},
			{
				name: "keywords",
				content: "hair braiding Glen Burnie MD, African hair braiding Glen Burnie, knotless braids Glen Burnie MD, box braids Glen Burnie, cornrow braids Maryland, braiding salon Glen Burnie Maryland"
			},
			{
				property: "og:title",
				content: TITLE
			},
			{
				property: "og:description",
				content: DESCRIPTION
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(schema)
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
}).update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$1
}) };
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { SERVICES as a, style_cornrows_default as c, GALLERY_FILTERS as i, CONTACT as n, style_natural_default as o, GALLERY as r, style_boxbraids_default as s, router_exports as t };
