window.WP_Grid_Builder&&WP_Grid_Builder.on('init',onInit);function onInit(wpgb){wpgb.facets&&wpgb.facets.on('appended',onAppended)}
function onAppended(content){if(typeof doExtrasLightbox=='function'&&jQuery(content).has('.oxy-lightbox')){doExtrasLightbox(jQuery(content))}
if(typeof doExtrasReadmore=='function'&&jQuery(content).has('.oxy-read-more-less')){doExtrasReadmore(jQuery(content))}
if(typeof doExtrasTabs=='function'&&jQuery(content).has('.oxy-dynamic-tabs')){doExtrasTabs(jQuery(content))}
if(typeof doExtrasAccordion=='function'&&jQuery(content).has('.oxy-pro-accordion')){doExtrasAccordion(jQuery(content))}
if(typeof doExtrasCarousel=='function'&&jQuery(content).has('.oxy-carousel-builder')){doExtrasCarousel(jQuery(content))}}