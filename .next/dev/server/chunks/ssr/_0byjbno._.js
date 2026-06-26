module.exports = [
"[project]/src/config/navigation.config.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "navigationItems",
    ()=>navigationItems
]);
const navigationItems = [
    {
        label: "Platform",
        href: "#platform"
    },
    {
        label: "Features",
        href: "#features"
    },
    {
        label: "Pricing",
        href: "#pricing"
    },
    {
        label: "FAQ",
        href: "#faq"
    }
];
}),
"[project]/src/components/interactive/MobileNavIsland.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MobileNavIsland
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$navigation$2e$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/navigation.config.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function MobileNavIsland() {
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const toggleMenu = ()=>{
        setIsOpen((prev)=>!prev);
    };
    const closeMenu = ()=>{
        setIsOpen(false);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const menu = menuRef.current;
        if (!menu) return;
        if (isOpen) {
            menu.style.display = "flex";
            requestAnimationFrame(()=>{
                menu.style.opacity = "1";
                menu.style.transform = "translateY(0)";
            });
        } else {
            menu.style.opacity = "0";
            menu.style.transform = "translateY(-8px)";
            setTimeout(()=>{
                if (!isOpen) {
                    menu.style.display = "none";
                }
            }, 300);
        }
    }, [
        isOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const menu = menuRef.current;
        if (menu) {
            menu.style.opacity = "0";
            menu.style.transform = "translateY(-8px)";
            menu.style.transition = "opacity 300ms cubic-bezier(0.16,1,0.3,1), transform 300ms cubic-bezier(0.16,1,0.3,1)";
            menu.style.display = "none";
        }
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center md:hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: toggleMenu,
                className: "rounded-lg p-2 text-oceanic-noir transition-colors duration-[180ms] hover:bg-mystic-mint",
                "aria-label": isOpen ? "Close navigation menu" : "Open navigation menu",
                "aria-expanded": isOpen,
                children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 1.5,
                    stroke: "currentColor",
                    width: "24",
                    height: "24",
                    "aria-hidden": "true",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M6 18 18 6M6 6l12 12"
                    }, void 0, false, {
                        fileName: "[project]/src/components/interactive/MobileNavIsland.tsx",
                        lineNumber: 69,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/interactive/MobileNavIsland.tsx",
                    lineNumber: 59,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 1.5,
                    stroke: "currentColor",
                    width: "24",
                    height: "24",
                    "aria-hidden": "true",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/interactive/MobileNavIsland.tsx",
                        lineNumber: 86,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/interactive/MobileNavIsland.tsx",
                    lineNumber: 76,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/interactive/MobileNavIsland.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: menuRef,
                className: "fixed inset-x-0 top-[60px] z-50 flex-col gap-2 border-b border-mystic-mint bg-arctic-powder/95 px-4 py-4 backdrop-blur-md",
                role: "navigation",
                "aria-label": "Mobile navigation",
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$navigation$2e$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["navigationItems"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: item.href,
                            onClick: closeMenu,
                            className: "block rounded-lg px-4 py-3 font-heading text-sm font-medium text-oceanic-noir transition-colors duration-[180ms] hover:bg-mystic-mint",
                            children: item.label
                        }, item.label, false, {
                            fileName: "[project]/src/components/interactive/MobileNavIsland.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#pricing",
                        onClick: closeMenu,
                        className: "mt-2 block rounded-lg bg-forsythia px-4 py-3 text-center font-heading text-sm font-medium text-oceanic-noir transition-colors duration-[180ms] hover:bg-deep-saffron",
                        children: "Book a Demo"
                    }, void 0, false, {
                        fileName: "[project]/src/components/interactive/MobileNavIsland.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/interactive/MobileNavIsland.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/interactive/MobileNavIsland.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/config/features.config.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "features",
    ()=>features
]);
const features = [
    {
        title: "AI Workflow Routing",
        description: "Automatically route data tasks based on rules, context, anomalies, and business logic.",
        icon: "arrow-path"
    },
    {
        title: "Smart Data Transformation",
        description: "Clean, normalize, deduplicate, and enrich operational data before it reaches your teams.",
        icon: "cube-16-solid"
    },
    {
        title: "Pipeline Observability",
        description: "Monitor workflow health, sync status, failures, latency, and automation reliability.",
        icon: "chart-pie"
    },
    {
        title: "Integration Layer",
        description: "Connect APIs, databases, SaaS tools, spreadsheets, and internal systems from one automation layer.",
        icon: "link"
    },
    {
        title: "Decision Analytics",
        description: "Turn workflow events into operational insights your team can act on immediately.",
        icon: "arrow-trending-up"
    },
    {
        title: "Governance Controls",
        description: "Manage permissions, audit trails, workflow ownership, and secure execution paths.",
        icon: "cog-8-tooth"
    }
];
}),
"[project]/src/components/ui/Icon.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const iconMap = {
    "arrow-path": "/icons/arrow-path.svg",
    "arrow-trending-up": "/icons/arrow-trending-up.svg",
    "chart-pie": "/icons/chart-pie.svg",
    "chevron-down": "/icons/chevron-down.svg",
    "chevron-left": "/icons/chevron-left.svg",
    "chevron-right": "/icons/chevron-right.svg",
    "chevron-up-solid": "/icons/chevron-up-solid.svg",
    "chevron-up": "/icons/chevron-up.svg",
    "cog-8-tooth": "/icons/cog-8-tooth.svg",
    "cube-16-solid": "/icons/cube-16-solid.svg",
    "link-solid": "/icons/link-solid.svg",
    link: "/icons/link.svg",
    search: "/icons/search.svg",
    "x-mark": "/icons/x-mark.svg"
};
function Icon({ name, className, size = 24 }) {
    const src = iconMap[name];
    if (!src) return null;
    return(// eslint-disable-next-line @next/next/no-img-element
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: src,
        alt: "",
        width: size,
        height: size,
        className: className,
        "aria-hidden": "true",
        draggable: false
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Icon.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this));
}
}),
"[project]/src/components/interactive/BentoAccordionIsland.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BentoAccordionIsland
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$features$2e$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/features.config.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Icon.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const MOBILE_QUERY = "(max-width: 767px)";
function BentoAccordionIsland() {
    const activeIndexRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const matchMediaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isMobileRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const updateDesktopCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((index)=>{
        activeIndexRef.current = index;
        const cards = document.querySelectorAll("[data-bento-card]");
        cards.forEach((card, i)=>{
            if (i === index) {
                card.classList.add("active");
                card.setAttribute("data-active", "true");
            } else {
                card.classList.remove("active");
                card.setAttribute("data-active", "false");
            }
        });
    }, []);
    const updateAccordion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((index)=>{
        activeIndexRef.current = index;
        const triggers = document.querySelectorAll("[data-accordion-trigger]");
        const panels = document.querySelectorAll("[data-accordion-panel]");
        triggers.forEach((trigger, i)=>{
            if (i === index) {
                trigger.setAttribute("data-open", "true");
                trigger.setAttribute("aria-expanded", "true");
            } else {
                trigger.setAttribute("data-open", "false");
                trigger.setAttribute("aria-expanded", "false");
            }
        });
        panels.forEach((panel, i)=>{
            if (i === index) {
                panel.setAttribute("data-open", "true");
            } else {
                panel.setAttribute("data-open", "false");
            }
        });
    }, []);
    const handleBentoInteraction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((index)=>{
        updateDesktopCard(index);
    }, [
        updateDesktopCard
    ]);
    const handleAccordionClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((index)=>{
        if (activeIndexRef.current === index) {
            updateAccordion(-1);
            activeIndexRef.current = -1;
        } else {
            updateAccordion(index);
        }
    }, [
        updateAccordion
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const handleChange = undefined;
    }, [
        updateAccordion,
        updateDesktopCard
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "features",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:block",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bento-grid",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$features$2e$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["features"].map((feature, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-bento-card": true,
                            "data-active": i === 0 ? "true" : "false",
                            className: `bento-card ${i === 0 ? "active" : ""}`,
                            role: "button",
                            tabIndex: 0,
                            onMouseEnter: ()=>handleBentoInteraction(i),
                            onFocus: ()=>handleBentoInteraction(i),
                            onClick: ()=>handleBentoInteraction(i),
                            onKeyDown: (e)=>{
                                if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    handleBentoInteraction(i);
                                }
                            },
                            "aria-label": feature.title,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-nocturnal-expedition/10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        name: feature.icon,
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/interactive/BentoAccordionIsland.tsx",
                                        lineNumber: 132,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/interactive/BentoAccordionIsland.tsx",
                                    lineNumber: 131,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-heading text-base font-bold text-oceanic-noir",
                                    children: feature.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/interactive/BentoAccordionIsland.tsx",
                                    lineNumber: 134,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-sm leading-relaxed text-nocturnal-expedition/60",
                                    children: feature.description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/interactive/BentoAccordionIsland.tsx",
                                    lineNumber: 137,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, feature.title, true, {
                            fileName: "[project]/src/components/interactive/BentoAccordionIsland.tsx",
                            lineNumber: 113,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/interactive/BentoAccordionIsland.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/interactive/BentoAccordionIsland.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2 md:hidden",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$features$2e$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["features"].map((feature, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                "data-accordion-trigger": true,
                                "data-open": i === 0 ? "true" : "false",
                                "aria-expanded": i === 0 ? "true" : "false",
                                "aria-controls": `accordion-panel-${i}`,
                                className: "accordion-trigger",
                                onClick: ()=>handleAccordionClick(i),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-nocturnal-expedition/10",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    name: feature.icon,
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/interactive/BentoAccordionIsland.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/interactive/BentoAccordionIsland.tsx",
                                                lineNumber: 158,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-heading text-sm font-bold text-oceanic-noir",
                                                children: feature.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/interactive/BentoAccordionIsland.tsx",
                                                lineNumber: 161,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/interactive/BentoAccordionIsland.tsx",
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "accordion-chevron",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            name: "chevron-down",
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/interactive/BentoAccordionIsland.tsx",
                                            lineNumber: 166,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/interactive/BentoAccordionIsland.tsx",
                                        lineNumber: 165,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/interactive/BentoAccordionIsland.tsx",
                                lineNumber: 149,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                id: `accordion-panel-${i}`,
                                "data-accordion-panel": true,
                                "data-open": i === 0 ? "true" : "false",
                                role: "region",
                                "aria-labelledby": `accordion-trigger-${i}`,
                                className: "accordion-panel",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border border-t-0 border-mystic-mint bg-arctic-powder/50 px-4 pb-4 pt-2 text-sm leading-relaxed text-nocturnal-expedition/70",
                                    children: feature.description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/interactive/BentoAccordionIsland.tsx",
                                    lineNumber: 177,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/interactive/BentoAccordionIsland.tsx",
                                lineNumber: 169,
                                columnNumber: 13
                            }, this)
                        ]
                    }, feature.title, true, {
                        fileName: "[project]/src/components/interactive/BentoAccordionIsland.tsx",
                        lineNumber: 148,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/interactive/BentoAccordionIsland.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/interactive/BentoAccordionIsland.tsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/config/pricing.config.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ANNUAL_DISCOUNT",
    ()=>ANNUAL_DISCOUNT,
    "billingMatrix",
    ()=>billingMatrix,
    "currencyMatrix",
    ()=>currencyMatrix,
    "pricingTiers",
    ()=>pricingTiers
]);
const ANNUAL_DISCOUNT = 0.2;
const billingMatrix = {
    monthly: {
        months: 1,
        discountMultiplier: 1
    },
    annual: {
        months: 12,
        discountMultiplier: 1 - ANNUAL_DISCOUNT
    }
};
const currencyMatrix = {
    USD: {
        code: "USD",
        symbol: "$",
        locale: "en-US",
        exchangeRateFromUsd: 1,
        regionalTariff: 1
    },
    EUR: {
        code: "EUR",
        symbol: "€",
        locale: "de-DE",
        exchangeRateFromUsd: 0.92,
        regionalTariff: 1.08
    },
    INR: {
        code: "INR",
        symbol: "₹",
        locale: "en-IN",
        exchangeRateFromUsd: 83,
        regionalTariff: 0.82
    }
};
const pricingTiers = [
    {
        key: "starter",
        name: "Starter",
        description: "For small teams automating essential data workflows.",
        baseMonthlyUsd: 49,
        features: [
            "5 automated workflows",
            "10 connected sources",
            "Basic AI routing",
            "Email support"
        ],
        cta: "Start Free",
        highlighted: false
    },
    {
        key: "scale",
        name: "Scale",
        description: "For growing teams managing high-volume operations.",
        baseMonthlyUsd: 149,
        features: [
            "Unlimited workflows",
            "Advanced AI routing",
            "Pipeline observability",
            "Priority support"
        ],
        cta: "Start Automating",
        highlighted: true
    },
    {
        key: "enterprise",
        name: "Enterprise",
        description: "For organizations requiring advanced governance and support.",
        baseMonthlyUsd: 399,
        features: [
            "Custom workflow limits",
            "Advanced governance",
            "Dedicated success manager",
            "Enterprise security review"
        ],
        cta: "Talk to Sales",
        highlighted: false
    }
];
}),
"[project]/src/lib/pricing.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "computePrice",
    ()=>computePrice
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$pricing$2e$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/pricing.config.ts [app-ssr] (ecmascript)");
;
function computePrice(baseMonthlyUsd, currency, billing) {
    const currencyConfig = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$pricing$2e$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["currencyMatrix"][currency];
    const billingConfig = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$pricing$2e$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["billingMatrix"][billing];
    return baseMonthlyUsd * currencyConfig.exchangeRateFromUsd * currencyConfig.regionalTariff * billingConfig.months * billingConfig.discountMultiplier;
}
}),
"[project]/src/lib/formatCurrency.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatCurrency",
    ()=>formatCurrency
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$pricing$2e$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/pricing.config.ts [app-ssr] (ecmascript)");
;
function formatCurrency(value, currency) {
    const config = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$pricing$2e$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["currencyMatrix"][currency];
    return new Intl.NumberFormat(config.locale, {
        style: "currency",
        currency,
        maximumFractionDigits: 0
    }).format(value);
}
}),
"[project]/src/components/interactive/PricingIsland.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PricingIsland
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$pricing$2e$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/pricing.config.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pricing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/pricing.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatCurrency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/formatCurrency.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function PricingIsland() {
    const currencyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])("USD");
    const billingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])("monthly");
    const isUpdatingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const updatePrices = ()=>{
        if (isUpdatingRef.current) return;
        isUpdatingRef.current = true;
        const currency = currencyRef.current;
        const billing = billingRef.current;
        // Update only the price text nodes
        const priceNodes = document.querySelectorAll("[data-price-node]");
        priceNodes.forEach((node)=>{
            const tierKey = node.getAttribute("data-tier");
            const tier = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$pricing$2e$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pricingTiers"].find((t)=>t.key === tierKey);
            if (tier) {
                const price = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pricing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["computePrice"])(tier.baseMonthlyUsd, currency, billing);
                node.textContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatCurrency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(price, currency);
            }
        });
        // Update the period label
        const periodNodes = document.querySelectorAll("[data-period-node]");
        periodNodes.forEach((node)=>{
            node.textContent = billing === "annual" ? "/mo (billed annually)" : "/mo";
        });
        // Update savings badge
        const savingsNodes = document.querySelectorAll("[data-savings-node]");
        savingsNodes.forEach((node)=>{
            if (billing === "annual") {
                node.style.display = "inline-block";
            } else {
                node.style.display = "none";
            }
        });
        isUpdatingRef.current = false;
    };
    const handleCurrencyChange = (code)=>{
        currencyRef.current = code;
        // Update currency selector UI
        const currencyButtons = document.querySelectorAll("[data-currency-option]");
        currencyButtons.forEach((btn)=>{
            btn.setAttribute("data-active", btn.getAttribute("data-currency-code") === code ? "true" : "false");
        });
        updatePrices();
    };
    const handleBillingChange = (cycle)=>{
        billingRef.current = cycle;
        // Update billing toggle UI
        const billingButtons = document.querySelectorAll("[data-billing-option]");
        billingButtons.forEach((btn)=>{
            btn.setAttribute("data-active", btn.getAttribute("data-billing-cycle") === cycle ? "true" : "false");
        });
        updatePrices();
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Initialize prices on mount
        updatePrices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const currencyCodes = [
        "USD",
        "EUR",
        "INR"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "currency-selector",
                        children: currencyCodes.map((code)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                "data-currency-option": true,
                                "data-currency-code": code,
                                "data-active": code === "USD" ? "true" : "false",
                                className: "currency-option",
                                onClick: ()=>handleCurrencyChange(code),
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$pricing$2e$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["currencyMatrix"][code].symbol,
                                    " ",
                                    code
                                ]
                            }, code, true, {
                                fileName: "[project]/src/components/interactive/PricingIsland.tsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/interactive/PricingIsland.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "billing-toggle",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                "data-billing-option": true,
                                "data-billing-cycle": "monthly",
                                "data-active": "true",
                                className: "billing-toggle-option",
                                onClick: ()=>handleBillingChange("monthly"),
                                children: "Monthly"
                            }, void 0, false, {
                                fileName: "[project]/src/components/interactive/PricingIsland.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                "data-billing-option": true,
                                "data-billing-cycle": "annual",
                                "data-active": "false",
                                className: "billing-toggle-option",
                                onClick: ()=>handleBillingChange("annual"),
                                children: [
                                    "Annual",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-1 text-[10px] text-deep-saffron",
                                        children: "−20%"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/interactive/PricingIsland.tsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/interactive/PricingIsland.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/interactive/PricingIsland.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/interactive/PricingIsland.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 gap-6 md:grid-cols-3",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$pricing$2e$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pricingTiers"].map((tier)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `relative rounded-xl border p-6 transition-shadow duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${tier.highlighted ? "border-forsythia bg-white shadow-lg" : "border-mystic-mint bg-white/80"}`,
                        children: [
                            tier.highlighted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-forsythia px-3 py-1 font-heading text-[10px] font-bold uppercase tracking-wider text-oceanic-noir",
                                children: "Most Popular"
                            }, void 0, false, {
                                fileName: "[project]/src/components/interactive/PricingIsland.tsx",
                                lineNumber: 139,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-heading text-lg font-bold text-oceanic-noir",
                                children: tier.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/interactive/PricingIsland.tsx",
                                lineNumber: 144,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-sm text-nocturnal-expedition/60",
                                children: tier.description
                            }, void 0, false, {
                                fileName: "[project]/src/components/interactive/PricingIsland.tsx",
                                lineNumber: 147,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 flex items-baseline gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "data-price-node": true,
                                        "data-tier": tier.key,
                                        className: "font-heading text-4xl font-bold text-oceanic-noir",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatCurrency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pricing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["computePrice"])(tier.baseMonthlyUsd, "USD", "monthly"), "USD")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/interactive/PricingIsland.tsx",
                                        lineNumber: 152,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "data-period-node": true,
                                        className: "text-sm text-nocturnal-expedition/50",
                                        children: "/mo"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/interactive/PricingIsland.tsx",
                                        lineNumber: 162,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/interactive/PricingIsland.tsx",
                                lineNumber: 151,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "data-savings-node": true,
                                style: {
                                    display: "none"
                                },
                                className: "mt-1 inline-block font-heading text-xs font-medium text-deep-saffron",
                                children: "Save 20% with annual billing"
                            }, void 0, false, {
                                fileName: "[project]/src/components/interactive/PricingIsland.tsx",
                                lineNumber: 170,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "mt-6 space-y-2.5",
                                children: tier.features.map((feature)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-start gap-2 text-sm text-nocturnal-expedition/70",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mt-0.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-forsythia"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/interactive/PricingIsland.tsx",
                                                lineNumber: 184,
                                                columnNumber: 19
                                            }, this),
                                            feature
                                        ]
                                    }, feature, true, {
                                        fileName: "[project]/src/components/interactive/PricingIsland.tsx",
                                        lineNumber: 180,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/interactive/PricingIsland.tsx",
                                lineNumber: 178,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: `mt-6 block w-full rounded-lg py-3 text-center font-heading text-sm font-medium transition-all duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${tier.highlighted ? "bg-forsythia text-oceanic-noir hover:bg-deep-saffron" : "border-2 border-nocturnal-expedition text-oceanic-noir hover:bg-nocturnal-expedition hover:text-arctic-powder"}`,
                                children: tier.cta
                            }, void 0, false, {
                                fileName: "[project]/src/components/interactive/PricingIsland.tsx",
                                lineNumber: 190,
                                columnNumber: 13
                            }, this)
                        ]
                    }, tier.key, true, {
                        fileName: "[project]/src/components/interactive/PricingIsland.tsx",
                        lineNumber: 130,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/interactive/PricingIsland.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/interactive/PricingIsland.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}
}),
"[project]/src/components/ui/Container.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Container
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Container({ children, className, as: Tag = "div" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className),
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Container.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/SectionHeader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SectionHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function SectionHeader({ label, title, description, className, align = "center" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("mb-12 max-w-3xl", align === "center" && "mx-auto text-center", className),
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mb-3 inline-block font-heading text-xs font-medium uppercase tracking-[0.15em] text-deep-saffron",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/ui/SectionHeader.tsx",
                lineNumber: 27,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "font-heading text-3xl font-bold leading-tight text-oceanic-noir sm:text-4xl",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/ui/SectionHeader.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 text-lg leading-relaxed text-nocturnal-expedition/70",
                children: description
            }, void 0, false, {
                fileName: "[project]/src/components/ui/SectionHeader.tsx",
                lineNumber: 35,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/SectionHeader.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/config/faq.config.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "faqItems",
    ()=>faqItems
]);
const faqItems = [
    {
        question: "What tools can Fluxora AI connect to?",
        answer: "Fluxora AI integrates with a wide range of data sources including CRMs like Salesforce and HubSpot, databases like PostgreSQL and BigQuery, SaaS tools like Stripe and Zendesk, spreadsheet platforms, REST and GraphQL APIs, and custom internal systems. Our integration layer is designed to be extensible, so if you need a connector we don't yet offer, our team can build it quickly."
    },
    {
        question: "Does Fluxora AI replace my data warehouse?",
        answer: "No. Fluxora AI is an automation and intelligence layer that works alongside your data warehouse. It connects your tools, routes and transforms data before it reaches your warehouse, and monitors pipeline health. Think of it as the intelligent orchestration layer that sits between your sources and your storage or analytics systems."
    },
    {
        question: "How does AI workflow routing work?",
        answer: "Fluxora AI uses contextual rules, anomaly detection, and business logic to automatically route data tasks to the right destination. You define the rules and conditions — or let our AI suggest them — and Fluxora handles the execution, retries, and alerting. This reduces manual routing decisions and ensures data reaches the right team or system at the right time."
    },
    {
        question: "Is my data secure?",
        answer: "Absolutely. Fluxora AI is built with security-first principles. All data in transit is encrypted via TLS 1.3, and data at rest uses AES-256 encryption. We support role-based access controls, audit trails, and SOC 2 compliance. Enterprise customers receive a dedicated security review and can configure custom governance policies."
    },
    {
        question: "Can engineers customize automations?",
        answer: "Yes. Fluxora AI provides both a visual workflow builder for non-technical users and a code-first automation SDK for engineers. You can write custom transformations in Python or SQL, define complex branching logic, and integrate with version control systems. Engineers get full observability into automation execution logs."
    },
    {
        question: "What happens when a workflow fails?",
        answer: "Fluxora AI provides real-time monitoring and alerting for all workflows. When a failure occurs, you receive instant notifications via email, Slack, or webhook. The system automatically retries based on configurable policies, logs detailed error context, and surfaces the failure in your observability dashboard so your team can resolve issues quickly."
    },
    {
        question: "Can I switch currency or billing cycle?",
        answer: "Yes. You can switch between monthly and annual billing at any time. Annual billing includes a flat 20% discount. You can also view pricing in INR, USD, or EUR. If you switch billing mid-cycle, prorated credits are applied to your next invoice."
    },
    {
        question: "Do you support enterprise deployment?",
        answer: "Yes. Our Enterprise plan includes dedicated infrastructure, advanced governance controls, custom security reviews, SSO integration, a dedicated success manager, and SLA guarantees. We also support private cloud and on-premises deployment for organizations with strict compliance requirements."
    },
    {
        question: "How quickly can a team get started?",
        answer: "Most teams are up and running within minutes. You can connect your first data source, create an automated workflow, and see results in under 15 minutes. Our onboarding wizard guides you through the setup, and our documentation covers common patterns and use cases. For enterprise teams, we offer a white-glove onboarding experience."
    }
];
}),
"[project]/src/components/sections/FAQSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FAQSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Container.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SectionHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/SectionHeader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$faq$2e$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/faq.config.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function FAQSection() {
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const toggleItem = (index)=>{
        setOpenIndex(openIndex === index ? null : index);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "faq",
        className: "bg-white/40 py-20",
        "aria-labelledby": "faq-heading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SectionHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    label: "FAQ",
                    title: "Common questions, clear answers",
                    description: "Everything you need to know about Fluxora AI before getting started."
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/FAQSection.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-3xl",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$faq$2e$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faqItems"].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "faq-trigger",
                                    onClick: ()=>toggleItem(i),
                                    "aria-expanded": openIndex === i,
                                    "aria-controls": `faq-panel-${i}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "pr-4 font-heading text-sm font-bold text-oceanic-noir sm:text-base",
                                            children: item.question
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/FAQSection.tsx",
                                            lineNumber: 37,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            strokeWidth: 1.5,
                                            stroke: "currentColor",
                                            width: "20",
                                            height: "20",
                                            className: "flex-shrink-0 transition-transform duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
                                            style: {
                                                transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)"
                                            },
                                            "aria-hidden": "true",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "m19.5 8.25-7.5 7.5-7.5-7.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/FAQSection.tsx",
                                                lineNumber: 55,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/FAQSection.tsx",
                                            lineNumber: 40,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/FAQSection.tsx",
                                    lineNumber: 31,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    id: `faq-panel-${i}`,
                                    role: "region",
                                    className: "faq-panel",
                                    "data-open": openIndex === i ? "true" : "false",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "pb-4 pt-1 text-sm leading-relaxed text-nocturnal-expedition/60 sm:text-base",
                                        children: item.answer
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/FAQSection.tsx",
                                        lineNumber: 68,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/FAQSection.tsx",
                                    lineNumber: 62,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/src/components/sections/FAQSection.tsx",
                            lineNumber: 30,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/FAQSection.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/FAQSection.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/FAQSection.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
];

//# sourceMappingURL=_0byjbno._.js.map