// Paris photoshoot experiences: one keyword-targeted landing page per
// location or theme. Content is static and unique per page; the gallery pulls
// photos from the linked CMS album when galleryAlbumSlug is set (editable in
// the admin), and falls back to the curated galleryPhotos list otherwise.
// Generated from the reviewed content batch of 2026-07; edit freely.

export interface ExperienceLink {
  href: string
  label: string
}

export interface ExperienceSpot {
  title: string
  text: string
}

export interface ExperienceFaqItem {
  question: string
  answer: string
}

export interface ExperiencePhoto {
  src: string
  alt: string
}

export interface Experience {
  slug: string
  name: string
  cardTagline: string
  badge: string
  h1: string
  titleTag: string
  keyword: string
  metaDescription: string
  heroSubtitle: string
  secondaryCta: ExperienceLink
  introH2: string
  introParagraphs: string[]
  introButtons: ExperienceLink[]
  spotsH2: string
  spots: ExperienceSpot[]
  galleryH2: string
  gallerySubtitle: string
  galleryAlbumSlug?: string
  galleryPhotos?: ExperiencePhoto[]
  faq: ExperienceFaqItem[]
  ogImage: string
}

export const EXPERIENCES: Experience[] = [
  {
    "slug": "eiffel-tower-photographer",
    "name": "Eiffel Tower",
    "cardTagline": "Trocadero, Bir-Hakeim, and the classic postcard frames.",
    "badge": "Eiffel Tower Sessions",
    "h1": "Paris Photographer at the Eiffel Tower",
    "titleTag": "Your Eiffel Tower Photographer in Paris",
    "keyword": "Eiffel Tower photographer",
    "secondaryCta": {
      "href": "/portfolio/eiffel-tower",
      "label": "See the Eiffel Tower album"
    },
    "galleryAlbumSlug": "eiffel-tower",
    "introButtons": [
      {
        "href": "/portfolio/eiffel-tower",
        "label": "Eiffel Tower album"
      },
      {
        "href": "/blog/when-to-shoot-eiffel-tower",
        "label": "Eiffel Tower photo guide"
      }
    ],
    "ogImage": "/assets/paris-eiffel-tower-photoshoot-01.jpg",
    "metaDescription": "Book an Eiffel Tower photographer in Paris for the Trocadero, Bir-Hakeim and the Seine, with guided posing and edited photos delivered within 72 hours.",
    "heroSubtitle": "The Trocadero esplanade, the arches of Bir-Hakeim, and a relaxed session with a Paris photographer who plans every angle for you.",
    "introH2": "Your Eiffel Tower Photographer in Paris",
    "introParagraphs": [
      "As an Eiffel Tower photographer, I have spent eight years learning exactly where the light falls on this monument and which corners the crowds never find. If you want Paris photography that feels calm instead of rushed, this is the session I recommend starting with.",
      "An Eiffel Tower photographer is a local professional who plans your shoot around the monument’s best viewpoints, from the Trocadero esplanade to Pont de Bir-Hakeim and the Champ de Mars. Sessions are built around soft, flattering light, with guided posing throughout and edited photos delivered within 24 to 72 hours."
    ],
    "spotsH2": "Where Are the Best Photo Spots at the Eiffel Tower?",
    "spots": [
      {
        "title": "Trocadero Esplanade",
        "text": "The classic full view of the Eiffel Tower, wide open frames and the postcard symmetry everyone wants."
      },
      {
        "title": "Pont de Bir-Hakeim",
        "text": "Steel arches that frame you like a tunnel, with the tower rising between the columns."
      },
      {
        "title": "Rue de l'Universite",
        "text": "A quiet street where the Eiffel Tower fills the gap between Haussmann facades."
      },
      {
        "title": "Champ de Mars",
        "text": "Green lawns and tree-lined alleys, relaxed frames right under the tower."
      },
      {
        "title": "Avenue de New York",
        "text": "The riverside quay across the water, with the Eiffel Tower filling your frame."
      },
      {
        "title": "The Love Lock Bridge",
        "text": "Railings full of padlocks over the Seine, one of the most romantic Eiffel Tower angles."
      }
    ],
    "galleryH2": "Recent Photoshoots at the Eiffel Tower",
    "gallerySubtitle": "A look at real couples, families, and solo travelers I have photographed around the tower at different times of day.",
    "faq": [
      {
        "question": "Where does an Eiffel Tower photoshoot take place?",
        "answer": "We move between two or three viewpoints close together, like the Trocadero esplanade, Pont de Bir-Hakeim, and the Seine quays. I plan the route in advance, so the session flows without wasted walking."
      },
      {
        "question": "Will other visitors appear in our photos?",
        "answer": "The famous viewpoints attract people, and part of my work is making them disappear: tighter framing, clean angles, and a little patience. I also know the corners around the tower that stay calm."
      },
      {
        "question": "How do I book an Eiffel Tower photographer?",
        "answer": "Write to me on WhatsApp with your travel dates and your ideas. We choose the moment together, I build the route, and everything is confirmed in a few messages, in English, French, Spanish, or Arabic."
      },
      {
        "question": "Do you photograph couples, families, and solo travelers at the tower?",
        "answer": "Yes, all of them. I adapt the posing and the pace to whoever is in front of the lens, from proposals and anniversaries to family trips and solo portraits. Kids are always welcome on set."
      }
    ]
  },
  {
    "slug": "louvre-photoshoot",
    "name": "The Louvre",
    "cardTagline": "The pyramid, the Cour Carree, and golden reflections.",
    "badge": "Louvre Photoshoot",
    "h1": "Paris Photographer at the Louvre",
    "titleTag": "Paris Photographer at the Louvre Museum",
    "keyword": "Louvre photoshoot",
    "secondaryCta": {
      "href": "/portfolio",
      "label": "View Portfolio"
    },
    "galleryAlbumSlug": "louvre",
    "galleryPhotos": [
      {
        "src": "/assets/paris-instagrammable-photoshoot-02.jpg",
        "alt": "Woman beside the glowing Louvre Pyramid at golden sunset, an aesthetic instagrammable Paris photo spot by SabShots"
      },
      {
        "src": "/assets/paris-street-lifestyle-photoshoot-14.jpg",
        "alt": "Woman in a black tailored suit leaning on the Louvre pyramid glass in Paris, editorial fashion photography by SabShots"
      },
      {
        "src": "/assets/paris-street-lifestyle-photoshoot-04.jpg",
        "alt": "Child watching a giant soap bubble float over the Louvre courtyard in Paris, candid street photography by SabShots"
      },
      {
        "src": "/assets/paris-instagrammable-photoshoot-17.jpg",
        "alt": "Woman on a green chair by a fountain in the Palais-Royal garden, an instagrammable Paris classic by SabShots"
      }
    ],
    "introButtons": [
      {
        "href": "/portfolio/instagrammable-paris",
        "label": "See the aesthetic album"
      },
      {
        "href": "/blog/louvre-photo-spots",
        "label": "Louvre photo spots guide"
      }
    ],
    "ogImage": "/assets/paris-instagrammable-photoshoot-02.jpg",
    "metaDescription": "Book a Louvre photoshoot with a private photographer in Paris. Golden light at the glass pyramid, quiet courtyards, and edited photos within 24 to 72 hours.",
    "heroSubtitle": "I offer private Paris photography sessions at the glass pyramid, in the Cour Carree, and in the calm side courtyards the crowds never find.",
    "introH2": "A Louvre photoshoot planned around the light",
    "introParagraphs": [
      "A Louvre photoshoot gives you the most iconic backdrop in the city without the stress of figuring it out alone. I am Yassir, a private Paris photographer, and for eight years I have guided travelers through the pyramid, the courtyards, and the quiet corners most visitors walk right past. You show up, and I handle everything else.",
      "A Louvre photoshoot is a private photo session around the exterior of the Louvre in Paris, including the glass pyramid, the Cour Carree, and the surrounding arcades. The wide plazas and enclosed courtyards offer flattering light and endless backdrops, and no ticket is needed for the outdoor locations."
    ],
    "spotsH2": "Where are the best photo spots at the Louvre?",
    "spots": [
      {
        "title": "The Glass Pyramid",
        "text": "The icon itself, glass and reflections behind you, shot wide so the pyramid towers over the frame."
      },
      {
        "title": "Cour Carree",
        "text": "An enclosed stone courtyard with soft, even light, made for calm and symmetrical portraits."
      },
      {
        "title": "The Stone Arcades",
        "text": "Repeating arches that frame you naturally and keep gentle shade in every season."
      },
      {
        "title": "The Louvre Colonnade",
        "text": "The monumental east facade, classical columns and clean lines for elegant frames."
      },
      {
        "title": "Palais-Royal Buren Columns",
        "text": "Two minutes away, graphic striped columns for playful and modern shots."
      },
      {
        "title": "Jardin du Palais-Royal",
        "text": "A manicured garden, fountain and the famous green chairs for relaxed candid frames."
      }
    ],
    "galleryH2": "Recent photo sessions at the Louvre",
    "gallerySubtitle": "Sessions at the pyramid, in the Cour Carree, and under the arcades, in every season and every light.",
    "faq": [
      {
        "question": "Do I need a ticket for a photoshoot at the Louvre?",
        "answer": "No ticket is needed for the areas where we shoot. The pyramid plaza, the Cour Carree, and the surrounding courtyards are open outdoor spaces. Going inside the museum is a separate matter, since interiors require tickets and follow the Louvre's own rules, so I keep sessions to the exteriors."
      },
      {
        "question": "Is the Louvre too crowded for a photoshoot?",
        "answer": "The pyramid plaza can be lively, but the Louvre is vast and most visitors gather in one place. A few steps into the Cour Carree or under the arcades and the crowd is gone from your frame."
      },
      {
        "question": "How do I book a Louvre photo session?",
        "answer": "Booking happens over WhatsApp, and I reply fast. Tell me your dates and the moments you want to capture, and I will build the session around them. I work in English, French, Arabic, and Spanish, so we can plan everything in the language you prefer."
      },
      {
        "question": "How soon will I get my edited photos?",
        "answer": "You receive your edited photos within 24 to 72 hours of the session. After eight years of Paris photography, I have a streamlined editing process, so you can post your favorites while you are still traveling instead of waiting weeks for your gallery."
      }
    ]
  },
  {
    "slug": "arc-de-triomphe-photoshoot",
    "name": "Arc de Triomphe",
    "cardTagline": "The Etoile, the Champs-Elysees, and monumental frames.",
    "badge": "Arc de Triomphe Sessions",
    "h1": "Paris Photographer at the Arc de Triomphe",
    "titleTag": "Arc de Triomphe Photoshoot on the Champs-Elysees",
    "keyword": "Arc de Triomphe photoshoot",
    "secondaryCta": {
      "href": "/portfolio",
      "label": "View Portfolio"
    },
    "galleryAlbumSlug": "arc-de-triomphe",
    "galleryPhotos": [
      {
        "src": "https://kzoyeuyblxeailoypohf.supabase.co/storage/v1/object/public/sabshots/street-photography/1781185465968-x1q8cp.jpg",
        "alt": "Man in a brown leather jacket posing at the Arc de Triomphe, Paris street style photography by SabShots"
      },
      {
        "src": "https://kzoyeuyblxeailoypohf.supabase.co/storage/v1/object/public/sabshots/instagrammable-paris/1781186919749-vvufel.jpg",
        "alt": "Woman in black leaning on a lamppost at the Arc de Triomphe, an instagrammable Paris moment by SabShots"
      },
      {
        "src": "/assets/paris-couple-photoshoot-06.jpg",
        "alt": "Elegant couple holding hands along a grand Haussmann avenue in Paris by SabShots"
      }
    ],
    "introButtons": [
      {
        "href": "/portfolio/instagrammable-paris",
        "label": "See the album"
      },
      {
        "href": "/blog/arc-de-triomphe-photo-spots",
        "label": "Arc photo spots guide"
      }
    ],
    "ogImage": "https://kzoyeuyblxeailoypohf.supabase.co/storage/v1/object/public/sabshots/street-photography/1781185465968-x1q8cp.jpg",
    "metaDescription": "Book an Arc de Triomphe photoshoot with a private Paris photographer, from the top of the Champs-Elysees to the grand avenues of the Place de l'Etoile.",
    "heroSubtitle": "The most monumental backdrop in Paris, the Champs-Elysees at your feet, and a photographer who knows every clean angle of the Etoile.",
    "introH2": "An Arc de Triomphe Photoshoot Above the Champs-Elysees",
    "introParagraphs": [
      "An Arc de Triomphe photoshoot puts the grandest monument in Paris behind you, with the Champs-Elysees rolling away at your feet. I am Yassir, a Paris photographer, and around the Place de l’Etoile I know exactly where to stand so the traffic disappears and the carved stone fills your frame.",
      "An Arc de Triomphe photoshoot is a private photo session around the Place de l’Etoile and the top of the Champs-Elysees, using the monument’s carved facades, the avenue perspectives, and the elegant streets of the 8th arrondissement. The scale of the setting gives your portraits a grand, cinematic character."
    ],
    "spotsH2": "Where Are the Best Photo Spots at the Arc de Triomphe?",
    "spots": [
      {
        "title": "Facing the Arc",
        "text": "The full monument behind you, carved stone and a scale that reads instantly."
      },
      {
        "title": "Champs-Elysees Perspective",
        "text": "The most famous avenue in the world stretching toward the Arc behind you."
      },
      {
        "title": "The Etoile Avenues",
        "text": "Twelve grand avenues radiate from the Arc, each one a clean Haussmann backdrop."
      },
      {
        "title": "Pedestrian Crossings",
        "text": "Wide crossings where the Arc rises huge in the background of your frame."
      },
      {
        "title": "Cafes and Storefronts",
        "text": "Terraces, awnings and elegant details of the 8th for a chic Parisian scene."
      },
      {
        "title": "Haussmann Facades",
        "text": "Stone balconies and iron railings, refined frames a minute from the monument."
      }
    ],
    "galleryH2": "Arc de Triomphe Photoshoot Gallery",
    "gallerySubtitle": "Real sessions around the Etoile and the Champs-Elysees, shot by SabShots.",
    "faq": [
      {
        "question": "Do we need to go up or inside the Arc de Triomphe?",
        "answer": "No. The strongest frames are shot from around the Etoile and the top of the Champs-Elysees, so no tickets are needed. If you want portraits right at the base, the pedestrian underpass gets us there safely."
      },
      {
        "question": "Is the traffic around the Etoile a problem for photos?",
        "answer": "The roundabout is famous for its traffic, and that energy is part of the scene. I frame from islands and crossings so the cars blur away or vanish entirely, leaving you and the carved stone."
      },
      {
        "question": "Can we combine the Arc de Triomphe with the Champs-Elysees?",
        "answer": "They belong together. We start around the monument, then work down the avenue for storefronts, terraces and perspective shots with the Arc behind you. One session, two icons of Paris."
      },
      {
        "question": "How do I book an Arc de Triomphe photoshoot?",
        "answer": "Send me a WhatsApp message with your dates and ideas. I reply quickly, plan the route around the Etoile with you, and confirm everything in English, French, Spanish or Arabic."
      }
    ]
  },
  {
    "slug": "montmartre-photographer",
    "name": "Montmartre",
    "cardTagline": "Cobbled lanes, staircases, and the village charm.",
    "badge": "Montmartre Sessions",
    "h1": "Paris Photographer in Montmartre",
    "titleTag": "Montmartre Photographer for Your Paris Visit",
    "keyword": "Montmartre photographer",
    "secondaryCta": {
      "href": "/portfolio",
      "label": "View Portfolio"
    },
    "galleryAlbumSlug": "montmartre",
    "galleryPhotos": [
      {
        "src": "/assets/paris-couple-photoshoot-07.jpg",
        "alt": "Playful couple touching noses on a stone staircase overlooking the Seine in Paris by SabShots"
      },
      {
        "src": "/assets/paris-street-lifestyle-photoshoot-17.jpg",
        "alt": "Man in a long overcoat leaning in a doorway in golden Paris light, editorial menswear street photography by SabShots"
      },
      {
        "src": "/assets/paris-instagrammable-photoshoot-10.jpg",
        "alt": "Woman in a polka-dot skirt in a historic Parisian courtyard, a chic instagrammable Paris look by SabShots"
      }
    ],
    "introButtons": [
      {
        "href": "/portfolio/instagrammable-paris",
        "label": "See the album"
      },
      {
        "href": "/blog/montmartre-photoshoot",
        "label": "Montmartre photoshoot guide"
      }
    ],
    "ogImage": "/assets/paris-couple-photoshoot-07.jpg",
    "metaDescription": "Book a Montmartre photographer for a private photoshoot in the village's cobbled lanes, ivy facades and staircases, with a route built around calm corners.",
    "heroSubtitle": "I am a Paris photographer who knows Montmartre lane by lane, photographing travelers in its quiet cobbled streets and hidden corners.",
    "introH2": "A Montmartre Photographer Who Knows Every Cobbled Lane",
    "introParagraphs": [
      "Montmartre rewards the photographer who knows it street by street. I have spent eight years as a Montmartre photographer, learning which cobbled lane stays calm and which staircase gives the cleanest frame. That knowledge becomes your gallery, a quiet village most visitors only see crowded.",
      "A Montmartre photographer specializes in the hilltop village of northern Paris, photographing travelers among its cobbled lanes, ivy covered facades, staircases, and rooftop views. The village concentrates more distinct backdrops per street than anywhere else in Paris, which makes every session varied without long walks."
    ],
    "spotsH2": "Where Are the Best Photo Spots in Montmartre?",
    "spots": [
      {
        "title": "Rue de l'Abreuvoir",
        "text": "Often called the prettiest street in Paris, a soft curve of pastel facades and ivy."
      },
      {
        "title": "The Montmartre Staircases",
        "text": "Iconic steps and lampposts, depth and leading lines in every frame."
      },
      {
        "title": "La Maison Rose",
        "text": "The famous pink cafe on the corner, a Montmartre postcard in a single frame."
      },
      {
        "title": "The Old Vineyard",
        "text": "The vines of Clos Montmartre, a countryside feel hidden inside Paris."
      },
      {
        "title": "Place du Tertre Side Lanes",
        "text": "The artists’ square energy, photographed from the calmer lanes around it."
      },
      {
        "title": "Rooftop Views Over Paris",
        "text": "The hill opens onto the whole city, layered rooftops stretching behind you."
      }
    ],
    "galleryH2": "Recent Photoshoots in Montmartre",
    "gallerySubtitle": "Engagements, anniversaries, and solo portraits shot between the staircases and the old vineyard.",
    "faq": [
      {
        "question": "Is Montmartre too crowded for photos?",
        "answer": "The main square gets busy, but the village is much larger than most visitors realize. I route sessions through lanes and staircases that stay calm, so your photos feel like a private Montmartre."
      },
      {
        "question": "What should I wear for a Montmartre photoshoot?",
        "answer": "Solid colors and timeless pieces photograph beautifully against the pastel facades and stone streets. Long dresses and coats move well on the staircases, and comfortable shoes matter on the cobbles. Bring one easy change if you want two moods."
      },
      {
        "question": "How do I book a Montmartre photographer?",
        "answer": "Message me on WhatsApp with your travel dates and I will build a village route for your session. We settle the meeting point and any outfit questions in a few messages, in whichever of my four languages suits you."
      },
      {
        "question": "Does a Montmartre session suit couples as much as solo travelers?",
        "answer": "Yes. The staircases and lanes give couples a romantic, film-like backdrop, while solo and creator portraits feed on the colors and textures. Families enjoy it too, since the walking stays gentle."
      }
    ]
  },
  {
    "slug": "sacre-coeur-photoshoot",
    "name": "Sacré-Cœur",
    "cardTagline": "The grand steps, all of Paris below.",
    "badge": "Sacré-Cœur Sessions",
    "h1": "Paris Photographer at the Sacré-Cœur",
    "titleTag": "Sacre-Coeur Photoshoot in Montmartre, Paris",
    "keyword": "Sacre-Coeur photoshoot",
    "secondaryCta": {
      "href": "/portfolio",
      "label": "View Portfolio"
    },
    "galleryAlbumSlug": "sacre-coeur",
    "galleryPhotos": [
      {
        "src": "/assets/paris-instagrammable-photoshoot-09.jpg",
        "alt": "Woman smiling in front of the Sacre-Coeur basilica in Montmartre, a charming instagrammable Paris scene by SabShots"
      },
      {
        "src": "/assets/paris-instagrammable-photoshoot-10.jpg",
        "alt": "Woman in a polka-dot skirt in a historic Parisian courtyard, a chic instagrammable Paris look by SabShots"
      },
      {
        "src": "/assets/paris-street-lifestyle-photoshoot-17.jpg",
        "alt": "Man in a long overcoat leaning in a doorway in golden Paris light, editorial menswear street photography by SabShots"
      }
    ],
    "introButtons": [
      {
        "href": "/portfolio/instagrammable-paris",
        "label": "See the album"
      },
      {
        "href": "/blog/sacre-coeur-photo-spots",
        "label": "Sacre-Coeur photo guide"
      }
    ],
    "ogImage": "/assets/paris-instagrammable-photoshoot-09.jpg",
    "metaDescription": "Plan a Sacre-Coeur photoshoot on the grand steps of Montmartre, with the white domes behind you and all of Paris below, guided by a private local photographer.",
    "heroSubtitle": "I photograph you on the grand steps, with the white domes behind you and the whole of Paris at your feet.",
    "introH2": "Your Sacre-Coeur Photoshoot Above the Rooftops of Paris",
    "introParagraphs": [
      "Few backdrops in Paris photography compete with the Sacre-Coeur: white domes above you, the entire city below, and grand steps built like a stage. A Sacre-Coeur photoshoot turns that drama into portraits, and after eight years on this hill I know exactly where to stand for every frame.",
      "A Sacre-Coeur photoshoot is a private photo session around the basilica at the top of Montmartre, using the grand steps, the lawns below, and the parvis with its panoramic view over Paris. The setting combines monumental architecture with the widest cityscape in Paris, all within a few steps."
    ],
    "spotsH2": "Where Are the Best Photo Spots at the Sacre-Coeur?",
    "spots": [
      {
        "title": "The Grand Steps",
        "text": "The staircase under the basilica works like a stage, with the domes rising behind you."
      },
      {
        "title": "The White Domes Up Close",
        "text": "Bright stone and Byzantine curves, a backdrop that reads instantly as Paris."
      },
      {
        "title": "The Panoramic Parvis",
        "text": "All of Paris stretches behind you, the widest view in the city."
      },
      {
        "title": "Square Louise Michel Lawns",
        "text": "Green terraces below the basilica, softer frames with the domes above."
      },
      {
        "title": "The Carousel Below",
        "text": "The vintage carousel at the foot of the hill, a playful retro note."
      },
      {
        "title": "The Funicular Side",
        "text": "The quieter flank of the hill, ivy and railings with fewer visitors."
      }
    ],
    "galleryH2": "Recent Sessions at the Sacre-Coeur",
    "gallerySubtitle": "A look at how the steps, the domes, and the skyline photograph across the seasons.",
    "faq": [
      {
        "question": "Do I need a permit or ticket for a Sacre-Coeur photoshoot?",
        "answer": "The basilica is an active place of worship, so the shoot happens entirely outside, on the grand steps, the lawns, and the parvis with its panoramic view. That is where the best frames are anyway, and no ticket or permit is needed for a personal session there."
      },
      {
        "question": "Is a Sacre-Coeur photoshoot physically demanding?",
        "answer": "The hill is real, but the session is not a hike. The funicular can carry us up, and once at the top everything happens within a small area: the steps, the parvis, and the lawns just below."
      },
      {
        "question": "Can we combine the Sacre-Coeur with the Montmartre village?",
        "answer": "They pair naturally. We can start at the basilica and drift into the cobbled lanes, or the reverse. Two moods in one session, monumental views and intimate village streets."
      },
      {
        "question": "How soon will I receive my photos?",
        "answer": "Your gallery is edited and sent between one and three days after we shoot, so the photos usually land while you are still in Paris. That leaves time to print one at a souvenir shop or share the view with everyone back home."
      }
    ]
  },
  {
    "slug": "le-marais-photoshoot",
    "name": "Le Marais",
    "cardTagline": "Hidden courtyards, ancient doors, and Place des Vosges.",
    "badge": "Le Marais Sessions",
    "h1": "Paris Photographer in Le Marais",
    "titleTag": "Le Marais Photoshoot with a Paris Photographer",
    "keyword": "Le Marais photoshoot",
    "secondaryCta": {
      "href": "/portfolio",
      "label": "View Portfolio"
    },
    "galleryAlbumSlug": "le-marais",
    "galleryPhotos": [
      {
        "src": "/assets/paris-instagrammable-photoshoot-18.jpg",
        "alt": "Woman walking a quiet cobbled Parisian street, an aesthetic instagrammable Marais scene by SabShots"
      },
      {
        "src": "/assets/paris-instagrammable-photoshoot-15.jpg",
        "alt": "Woman beside a grand wooden Parisian door in golden light, an aesthetic instagrammable Paris portrait by SabShots"
      },
      {
        "src": "/assets/paris-street-lifestyle-photoshoot-16.jpg",
        "alt": "Man in a black hooded coat and leather gloves against an ochre Paris wall, moody editorial street style by SabShots"
      }
    ],
    "introButtons": [
      {
        "href": "/portfolio/street-photography",
        "label": "Street style album"
      },
      {
        "href": "/blog/le-marais-photo-spots",
        "label": "Le Marais spots guide"
      }
    ],
    "ogImage": "/assets/paris-instagrammable-photoshoot-18.jpg",
    "metaDescription": "Book a Le Marais photoshoot with a private Paris photographer. Hidden courtyards, Place des Vosges arcades, and edited photos delivered within 24 to 72 hours.",
    "heroSubtitle": "I photograph you among hidden courtyards, warm stone, and the arcades of Place des Vosges, at an easy and unhurried pace.",
    "introH2": "A Le Marais photoshoot built around hidden courtyards and warm stone",
    "introParagraphs": [
      "If you want photos that feel like old Paris, a Le Marais photoshoot is hard to beat. I have spent 8 years doing Paris photography in these narrow medieval streets, and I still find new corners: heavy ancient doors, quiet courtyards, cafe terraces, and the arcades of Place des Vosges, all within a short walk of each other.",
      "A Le Marais photoshoot is a private photo session in the Marais, the historic district on the Right Bank of Paris. Sessions typically move on foot between Place des Vosges, medieval side streets, and hidden courtyards, so you can capture several distinct backdrops, from grand arcades to textured stone walls, within a single session."
    ],
    "spotsH2": "Where are the best photo spots in Le Marais?",
    "spots": [
      {
        "title": "Place des Vosges",
        "text": "Paris's oldest square, pink brick arcades and a formal garden made for portraits."
      },
      {
        "title": "The Hidden Courtyards",
        "text": "Heavy doors open onto private-feeling courtyards of stone and climbing vines."
      },
      {
        "title": "The Medieval Lanes",
        "text": "Narrow crooked streets, the oldest textures in Paris behind you."
      },
      {
        "title": "The Grand Old Doors",
        "text": "Massive carved doors and brass details, instant character in a single frame."
      },
      {
        "title": "Cafe Terraces and Boutiques",
        "text": "Rattan chairs, storefronts and awnings for a lived-in Parisian scene."
      },
      {
        "title": "Village Saint-Paul",
        "text": "A maze of linked courtyards and antique shops, calm and full of charm."
      }
    ],
    "galleryH2": "Recent photos from Le Marais",
    "gallerySubtitle": "A look at real sessions among the arcades, doorways, and quiet lanes that make this district so photogenic.",
    "faq": [
      {
        "question": "What makes Le Marais special for a photoshoot?",
        "answer": "It is the oldest heart of Paris, with courtyards, carved doors, and brick arcades layered street after street. Every few steps the backdrop changes, which gives one session the variety of three locations."
      },
      {
        "question": "Can we really enter the hidden courtyards?",
        "answer": "Many courtyards open to respectful visitors, and I know which ones welcome a quiet photo session. We treat every doorway with care, and the neighborhood stays as calm as we found it."
      },
      {
        "question": "How do I book a Le Marais photoshoot?",
        "answer": "Send me a WhatsApp message with your travel dates and the mood you want. I will map a route through the squares and courtyards, and we can plan everything in English, French, Spanish, or Arabic."
      },
      {
        "question": "How many locations can we cover in one session in Le Marais?",
        "answer": "Quite a few, because the Marais is compact and flat. In a single session we can usually photograph at Place des Vosges, a couple of medieval side streets, and one or two doorways or courtyards, all without rushing or long walks between spots."
      }
    ]
  },
  {
    "slug": "instagram-photographer-paris",
    "name": "Instagram Friendly",
    "cardTagline": "Feed-ready photos at the city's most aesthetic spots.",
    "badge": "Creator Sessions",
    "h1": "Instagram Photographer in Paris",
    "titleTag": "Instagram Photographer in Paris, Aesthetic Spots",
    "keyword": "Instagram photographer in Paris",
    "secondaryCta": {
      "href": "/portfolio/instagrammable-paris",
      "label": "See the aesthetic album"
    },
    "galleryAlbumSlug": "instagrammable-paris",
    "introButtons": [
      {
        "href": "/portfolio/instagrammable-paris",
        "label": "Instagrammable album"
      },
      {
        "href": "/blog/instagrammable-paris-guide",
        "label": "Instagrammable Paris guide"
      }
    ],
    "ogImage": "/assets/paris-instagrammable-photoshoot-01.jpg",
    "metaDescription": "Book an Instagram photographer in Paris for feed-ready photos: pastel streets, cafe scenes and aesthetic spots, edited and delivered within 72 hours.",
    "heroSubtitle": "I photograph creators and travelers who want feed-ready photos: pastel streets, cafe scenes, and aesthetic light, delivered fast enough to post while you are still in Paris.",
    "introH2": "An Instagram Photographer in Paris Who Shoots for Your Feed",
    "introParagraphs": [
      "If your camera roll never quite matches the Paris you pictured, that is where I come in. As an Instagram photographer in Paris, I plan every session around backdrops that photograph beautifully together. After 8 years as a Paris photographer, I know which pastel streets, cafe terraces, and corners catch the light, and I know exactly when to shoot them.",
      "An Instagram photographer in Paris is a photographer who plans sessions specifically for social media: several aesthetic backdrops within a short walk, a mix of posed shots and candid in-between frames, and images cropped and sized for posting. The goal is a set of varied, cohesive photos that look intentional on your feed rather than like one repeated pose."
    ],
    "spotsH2": "Where Are the Best Instagram Photo Spots in Paris?",
    "spots": [
      {
        "title": "Rue Cremieux Pastels",
        "text": "The pastel street every feed knows, colorful house fronts that carry a whole carousel."
      },
      {
        "title": "Cafe Terraces",
        "text": "Rattan chairs, tiny tables and awnings, the classic Paris aesthetic in one scene."
      },
      {
        "title": "Balcony and Rooftop Views",
        "text": "Eiffel Tower skylines from above, the frame that stops the scroll."
      },
      {
        "title": "The Louvre Pyramid",
        "text": "Glass, geometry and reflections, a minimal backdrop that always performs."
      },
      {
        "title": "Covered Passages",
        "text": "Mosaic floors and glass ceilings, warm frames whatever the weather."
      },
      {
        "title": "Pastel Doors and Facades",
        "text": "Painted doors, flower boxes and color-matched walls for outfit shots."
      }
    ],
    "galleryH2": "Instagram Photos From Recent Paris Sessions",
    "gallerySubtitle": "A look at the pastel streets, cafe scenes, and feed-ready frames my clients have posted from Paris.",
    "faq": [
      {
        "question": "What does an Instagram photoshoot in Paris include?",
        "answer": "A session built for variety: two or three aesthetic backdrops close together, a mix of posed and candid frames, and guidance on angles that work vertically. You leave with a full content set, not one lucky shot."
      },
      {
        "question": "Do you help with outfits and color matching?",
        "answer": "Yes. Before the session I advise on colors that pop against Paris stone and pastels, and how to pair each outfit with each backdrop. One main look plus one easy change covers a whole feed refresh."
      },
      {
        "question": "How fast do we get the photos?",
        "answer": "Photos come back post-ready within 72 hours at most, sized for your feed. Most clients are still in Paris when the gallery lands, which means you can publish with the city outside your window."
      },
      {
        "question": "How do I book an Instagram photographer in Paris?",
        "answer": "A quick WhatsApp message is all it takes. Share your dates and the kind of feed you are building, and I will map out backdrops, outfits, and timing around the light. No forms and no waiting, just a direct conversation with your photographer."
      }
    ]
  },
  {
    "slug": "surprise-proposal-paris",
    "name": "Surprise Proposals",
    "cardTagline": "The kneel, the yes, and the tears, captured in secret.",
    "badge": "Proposal Sessions",
    "h1": "Paris Photographer for Surprise Proposals",
    "titleTag": "Surprise Proposal in Paris, Planned and Captured",
    "keyword": "surprise proposal in Paris",
    "secondaryCta": {
      "href": "/portfolio/proposals",
      "label": "See real proposals"
    },
    "galleryAlbumSlug": "proposals",
    "introButtons": [
      {
        "href": "/portfolio/proposals",
        "label": "See real proposals"
      },
      {
        "href": "/blog/how-to-propose-in-paris",
        "label": "How to propose guide"
      }
    ],
    "ogImage": "/assets/paris-proposal-photoshoot-03.jpg",
    "metaDescription": "Plan a surprise proposal in Paris with a discreet photographer who blends in like a tourist, captures the kneel and the yes, and delivers edited photos fast.",
    "heroSubtitle": "I hide in plain sight, plan every detail with you on WhatsApp, and capture the moment your partner never saw coming.",
    "introH2": "How I Photograph a Surprise Proposal in Paris",
    "introParagraphs": [
      "Pulling off a surprise proposal in Paris comes down to one thing: your partner cannot suspect a photographer is there. That is my specialty. As a Paris photographer, I pose as just another tourist with a camera, standing exactly where we agreed, ready for the second you reach for the ring.",
      "A surprise proposal in Paris is a planned engagement where a hidden photographer documents the moment without the partner knowing. Everything is arranged in advance: the exact spot, the time, where the photographer stands, and a discreet signal. The result is candid photos of the kneel, the reaction, and the ring."
    ],
    "spotsH2": "Where Should You Propose in Paris?",
    "spots": [
      {
        "title": "Trocadero Esplanade",
        "text": "The grand stage facing the Eiffel Tower, the classic knee-drop frame."
      },
      {
        "title": "The Seine Quays",
        "text": "Water, stone and the tower behind you, intimate and calm for the question."
      },
      {
        "title": "Pont de Bir-Hakeim",
        "text": "Architectural drama and privacy in the same frame."
      },
      {
        "title": "A Candlelit Setup",
        "text": "Roses, candles and a styled tablescape facing the Eiffel Tower."
      },
      {
        "title": "Palais-Royal Gardens",
        "text": "A quieter, elegant choice away from the tourist flow."
      },
      {
        "title": "Montmartre and the Views",
        "text": "The hilltop option, village charm with all of Paris behind the yes."
      }
    ],
    "galleryH2": "Real Proposals I Captured in Paris",
    "gallerySubtitle": "A few of the kneels, gasps, and happy tears I have photographed while pretending to admire the view.",
    "faq": [
      {
        "question": "How do you stay invisible before the proposal?",
        "answer": "I arrive early, scout my position, and shoot like a tourist taking street photos. Your partner never notices me until you are down on one knee, and by then the real frames are already taken."
      },
      {
        "question": "How do we plan a surprise proposal in Paris together?",
        "answer": "Everything happens over WhatsApp: the exact spot, where I stand, and the signal you give when you are ready. You get a clear plan, so the only surprise left is theirs."
      },
      {
        "question": "What happens right after the yes?",
        "answer": "We continue with a short celebration session while the emotion is real: the ring, the hug, the happy tears. The edited gallery follows within 24 to 72 hours, ready for the announcement."
      },
      {
        "question": "What if the weather turns bad?",
        "answer": "Paris rain is usually light and short, and covered spots like bridges and arcades can save the moment beautifully. We agree on a plan B in advance, so nothing can shake the plan."
      }
    ]
  },
  {
    "slug": "wedding-photoshoot-paris",
    "name": "Weddings & Elopements",
    "cardTagline": "Chateau ceremonies, rooftop vows, and day-after shoots.",
    "badge": "Wedding Sessions",
    "h1": "Paris Photographer for Your Wedding",
    "titleTag": "Wedding Photoshoot in Paris and Elopements",
    "keyword": "wedding photoshoot in Paris",
    "secondaryCta": {
      "href": "/portfolio/weddings",
      "label": "See the wedding album"
    },
    "galleryAlbumSlug": "weddings",
    "introButtons": [
      {
        "href": "/portfolio/weddings",
        "label": "Paris wedding album"
      },
      {
        "href": "/blog/paris-wedding-photo-ideas",
        "label": "Wedding photo ideas"
      }
    ],
    "ogImage": "/assets/paris-wedding-photoshoot-01.jpg",
    "metaDescription": "Book a wedding photoshoot in Paris with a private photographer for elopements, chateau ceremonies, day-after sessions and timeless couple portraits.",
    "heroSubtitle": "I photograph weddings and elopements across Paris, from chateau ceremonies to rooftop vows, moving between candid moments and timeless portraits.",
    "introH2": "A Wedding Photoshoot in Paris, from Vows to Portraits",
    "introParagraphs": [
      "A wedding photoshoot in Paris deserves more than stiff poses. After eight years photographing weddings and elopements here, I move between documentary moments and guided portraits, so your day is fully covered and your gallery still feels like you. Paris does the rest of the work.",
      "A wedding photoshoot in Paris is professional photography coverage of your ceremony, elopement, or day-after session, combining candid documentary moments with a dedicated couple portrait session. Coverage adapts to the shape of your day, from a chateau ceremony to rooftop vows, with edited photos delivered within 24 to 72 hours."
    ],
    "spotsH2": "Where Should You Take Wedding Photos in Paris?",
    "spots": [
      {
        "title": "Chateau Ceremonies",
        "text": "Grand staircases, gardens and stone facades around Paris for the vows."
      },
      {
        "title": "Rooftop Vows with Eiffel View",
        "text": "Intimate terraces above the city, the tower as your witness."
      },
      {
        "title": "Day-After City Session",
        "text": "Your wedding outfits, the streets of Paris, zero timeline pressure."
      },
      {
        "title": "Elopements for Two",
        "text": "Just you two and Paris, I help choose the spots and handle the flow."
      },
      {
        "title": "The Classic Paris Portraits",
        "text": "Bridges, gardens and Haussmann avenues for the frames you will print."
      },
      {
        "title": "The Vintage Car Exit",
        "text": "A classic car, confetti or doves, the cinematic wedding moment."
      }
    ],
    "galleryH2": "Real Weddings and Elopements in Paris",
    "gallerySubtitle": "A selection of ceremonies, rooftop vows, and day-after sessions photographed for couples from more than 80 nationalities.",
    "faq": [
      {
        "question": "Do you cover full weddings or only couple sessions?",
        "answer": "Both. I move between documentary coverage of the day and a dedicated couple portrait session, and for elopements I also help choose the spots. Tell me the shape of your day and I will build around it."
      },
      {
        "question": "What is a day-after session?",
        "answer": "You put the wedding outfits back on and we shoot across Paris without any timeline pressure: bridges, gardens, avenues. Couples love it because the stress is gone and only the photos remain."
      },
      {
        "question": "Can you photograph our elopement in Paris?",
        "answer": "Yes, elopements are some of my favorite work. Just the two of you and the city: I help pick the setting, guide the flow, and document the vows and the celebration that follows."
      },
      {
        "question": "How do we book a wedding photoshoot in Paris?",
        "answer": "Start the conversation on WhatsApp whenever you are ready. Tell me about your day, from an intimate elopement to a full celebration, and I will shape the coverage around it. We can plan the whole thing in English, French, Spanish, or Arabic."
      }
    ]
  },
  {
    "slug": "event-photographer-paris",
    "name": "Nightlife & Events",
    "cardTagline": "Club nights, DJ sets, and parties in their real light.",
    "badge": "Event Coverage",
    "h1": "Paris Photographer for Events and Nightlife",
    "titleTag": "Event Photographer in Paris, Parties and Brands",
    "keyword": "event photographer in Paris",
    "secondaryCta": {
      "href": "/portfolio/nightclubs",
      "label": "See the nightlife album"
    },
    "galleryAlbumSlug": "nightclubs",
    "introButtons": [
      {
        "href": "/portfolio/nightclubs",
        "label": "Nightlife album"
      },
      {
        "href": "/blog/event-photography-tips",
        "label": "Event photo tips guide"
      }
    ],
    "ogImage": "https://kzoyeuyblxeailoypohf.supabase.co/storage/v1/object/public/sabshots/crops/1781191892072-78t05j.jpg",
    "metaDescription": "Book an event photographer in Paris for club nights, DJ sets, birthdays, and brand events. Discreet coverage, real-light images, delivered in 24 to 72 hours.",
    "heroSubtitle": "Discreet Paris photography for club nights, DJ sets, birthdays, and brand events, shot in the real light of the room and delivered fast.",
    "introH2": "An Event Photographer in Paris Who Works With Real Light",
    "introParagraphs": [
      "If you are looking for an event photographer in Paris who feels at home after dark, you are in the right place. I have spent 8 years covering nights in this city, from packed dance floors to intimate birthday dinners, and my approach to Paris photography is simple: stay discreet, follow the energy, and bring back images that feel like the night itself.",
      "An event photographer in Paris documents club nights, DJ sets, private parties, and brand events as they happen, without staging or interrupting. The work combines low-light technique, fast reactions, and discretion: sharp images of the DJ and the team, wide frames of the dance floor, and detail shots that capture the atmosphere of the room."
    ],
    "spotsH2": "What Do I Capture at Your Event in Paris?",
    "spots": [
      {
        "title": "Club Nights and DJ Sets",
        "text": "The booth, the drop and the crowd, shot in the room's real light."
      },
      {
        "title": "Private Parties",
        "text": "Birthdays and celebrations covered discreetly, guests stay in the moment."
      },
      {
        "title": "Brand and Promo Events",
        "text": "Sharp coverage of the venue, the team and the atmosphere that sells."
      },
      {
        "title": "The Dance Floor",
        "text": "Motion, lasers and energy, the frames that relive the night."
      },
      {
        "title": "Details and Bottle Service",
        "text": "Sparklers, pours and the small scenes that build the story."
      },
      {
        "title": "The Guests",
        "text": "Candid laughter and group shots, everyone gets their frame."
      }
    ],
    "galleryH2": "Recent Event and Nightlife Work",
    "gallerySubtitle": "A selection of frames from club nights, DJ sets, birthdays, and brand events shot across Paris after dark.",
    "faq": [
      {
        "question": "How do you shoot in a dark club without ruining the mood?",
        "answer": "I work with the real light of the room first: LED walls, strobes, lasers, and candles all become part of the image. When I do use flash, it is low-powered and bounced or diffused so it reads as a quick flicker, not an interruption. Guests keep dancing."
      },
      {
        "question": "How fast will we get the photos after the event?",
        "answer": "Galleries go out within 24 to 72 hours, while the night is still fresh and worth posting about. If your team needs a few key images sooner for social posts, mention it when you book over WhatsApp and we will plan around it."
      },
      {
        "question": "Do you photograph private parties and birthdays, or only club events?",
        "answer": "Both. I cover club nights and DJ sets as well as birthdays, dinners that turn into parties, and private celebrations in apartments, bars, and rented venues. The approach adapts to the setting, but the goal stays the same: discreet coverage that lets your guests enjoy the night."
      },
      {
        "question": "Do we need permission from the venue to have a photographer?",
        "answer": "Most venues in Paris are used to photographers at private and promotional events, but each has its own house rules, so it is worth a quick message to confirm. I am happy to coordinate directly with the venue or the promoter once your booking is set."
      }
    ]
  }
]

export function getExperience(slug: string): Experience | undefined {
  return EXPERIENCES.find((e) => e.slug === slug)
}
