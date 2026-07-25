// Paris photoshoot experiences: one keyword-targeted landing page per
// location or theme. Content is static and unique per page; the gallery pulls
// photos from the linked CMS album when galleryAlbumSlug is set (editable in
// the admin), and falls back to the curated galleryPhotos list otherwise.
// Generated from the reviewed content batch of 2026-07; edit freely.

export interface ExperienceLink {
  href: string
  label: string
}

export interface LinksLineSegment {
  text?: string
  href?: string
  label?: string
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
  linksLine: LinksLineSegment[]
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
    "cardTagline": "Trocadero sunrise, Bir-Hakeim, and the night sparkles.",
    "badge": "Eiffel Tower Sessions",
    "h1": "Paris Photographer at the Eiffel Tower",
    "titleTag": "Your Eiffel Tower Photographer in Paris",
    "keyword": "Eiffel Tower photographer",
    "secondaryCta": {
      "href": "/portfolio/eiffel-tower",
      "label": "See the Eiffel Tower album"
    },
    "galleryAlbumSlug": "eiffel-tower",
    "linksLine": [
      {
        "text": "Browse the full "
      },
      {
        "href": "/portfolio/eiffel-tower",
        "label": "Eiffel Tower photo album"
      },
      {
        "text": " and read my guide on "
      },
      {
        "href": "/blog/when-to-shoot-eiffel-tower",
        "label": "the best time to shoot at the Eiffel Tower"
      },
      {
        "text": "."
      }
    ],
    "ogImage": "/assets/paris-eiffel-tower-photoshoot-01.jpg",
    "metaDescription": "Book an Eiffel Tower photographer for sunrise at Trocadero, Bir-Hakeim, and the Seine. Warm guidance, edited photos in 24 to 72 hours, easy WhatsApp booking.",
    "heroSubtitle": "Golden sunrise light at Trocadero, the steel arches of Bir-Hakeim, and a relaxed session with a Paris photographer who plans every angle for you.",
    "introH2": "Your Eiffel Tower Photographer for Sunrise and Golden Light",
    "introParagraphs": [
      "As an Eiffel Tower photographer, I have spent eight years learning exactly where the light falls on this monument, hour by hour. My favorite moment is sunrise at Trocadero, when the esplanade is nearly empty and the stone glows gold. If you want Paris photography that feels calm instead of rushed, this is the session I recommend starting with.",
      "An Eiffel Tower photographer is a local professional who plans your shoot around the monument's best light and viewpoints, from the Trocadero esplanade to Pont de Bir-Hakeim and the Champ de Mars. Sessions are timed for soft light, with guided posing throughout and edited photos delivered within 24 to 72 hours.",
      "We usually start on the Trocadero esplanade while it is still quiet, then walk down toward the Seine and cross to Bir-Hakeim as the light warms up. I give you simple prompts the whole way, so you never have to pose on your own. The pace stays easy, with breaks whenever you need them."
    ],
    "spotsH2": "Where Are the Best Photo Spots at the Eiffel Tower?",
    "spots": [
      {
        "title": "Trocadero Esplanade at Sunrise",
        "text": "This is the classic full view of the tower, and at sunrise it belongs almost entirely to you. The first light turns the esplanade gold and the crowds have not arrived yet. I place you against the open sky so the tower rises cleanly behind you, with no one in the frame."
      },
      {
        "title": "Pont de Bir-Hakeim Steel Arches",
        "text": "The bridge's repeating steel arches create a natural tunnel that frames you perfectly, with the tower visible through the columns. It photographs beautifully in soft morning light, and the geometry gives your gallery a completely different mood from the open esplanade shots. We shoot along the covered walkway for depth."
      },
      {
        "title": "Rue de l'Universite Street Frame",
        "text": "This narrow street lines up so the tower fills the gap between Haussmann buildings, and it feels like a secret even though it is minutes from the Champ de Mars. I like it for close, intimate portraits where the tower looms surprisingly large behind you. Early mornings keep the sidewalk calm."
      },
      {
        "title": "The Five-Minute Sparkle",
        "text": "After dark, the tower sparkles for five minutes at the start of every hour, and it is worth planning your evening around. We set up on the Seine quays a little early, frame the shot, and wait for the lights to start. Bring a warm layer, since evenings by the river cool off fast."
      }
    ],
    "galleryH2": "Recent Photoshoots at the Eiffel Tower",
    "gallerySubtitle": "A look at real couples, families, and solo travelers I have photographed around the tower at different times of day.",
    "faq": [
      {
        "question": "What is the best time for an Eiffel Tower photoshoot?",
        "answer": "Sunrise is the best time by far. The Trocadero esplanade is nearly empty, the light is soft and golden, and we can move between viewpoints freely. Midday tends to be crowded with harsh overhead light, so I usually steer clients toward early morning or the golden hour before sunset."
      },
      {
        "question": "Can we photograph the Eiffel Tower sparkling at night?",
        "answer": "Yes. The tower sparkles for five minutes at the start of every hour after dark, and it makes a magical closing shot. I plan the route so we are already set up on the Seine quays before the lights begin, which takes the stress out of timing it."
      },
      {
        "question": "How do you avoid crowds during an Eiffel Tower shoot?",
        "answer": "I schedule sessions at sunrise, when the main viewpoints are nearly empty, and I mix famous angles with quieter spots like Rue de l'Universite and the bridge walkways. Eight years of Paris photography have taught me exactly where to stand so other visitors stay out of your frame."
      },
      {
        "question": "How do I book and when do I get my photos?",
        "answer": "To hold a sunrise slot, write to me on WhatsApp with your dates. Trocadero mornings are the first to go, especially from spring to early fall, so the sooner you reach out, the more choice we have for your session."
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
    "linksLine": [
      {
        "text": "You can see more frames from this area in my "
      },
      {
        "href": "/portfolio/instagrammable-paris",
        "label": "instagrammable Paris album"
      },
      {
        "text": ", and explore the wider list in my guide to "
      },
      {
        "href": "/blog/best-photo-spots-in-paris",
        "label": "the best photo spots in Paris"
      },
      {
        "text": "."
      }
    ],
    "ogImage": "/assets/paris-instagrammable-photoshoot-02.jpg",
    "metaDescription": "Book a Louvre photoshoot with a private photographer in Paris. Golden light at the glass pyramid, quiet courtyards, and edited photos within 24 to 72 hours.",
    "heroSubtitle": "I offer private Paris photography sessions at the glass pyramid, in the Cour Carree, and in the calm side courtyards the crowds never find.",
    "introH2": "A Louvre photoshoot planned around the light",
    "introParagraphs": [
      "A Louvre photoshoot gives you the most iconic backdrop in the city without the stress of figuring it out alone. I am Yassir, a private Paris photographer, and for eight years I have guided travelers through the pyramid, the courtyards, and the quiet corners most visitors walk right past. You show up, and I handle everything else.",
      "A Louvre photoshoot is a private photo session around the exterior of the Louvre in Paris, including the glass pyramid, the Cour Carree, and the surrounding arcades. Sessions usually take place at sunrise or sunset, when the light is soft and the courtyards are quiet, and no ticket is needed for the outdoor locations.",
      "We usually start at the pyramid before the crowds build, then drift into the Cour Carree for calmer, softer frames. I guide you through simple, natural poses the whole way, so you never feel stiff. If you want variety, the Palais-Royal columns are a two minute walk, an easy final stop before we wrap."
    ],
    "spotsH2": "Where are the best photo spots at the Louvre?",
    "spots": [
      {
        "title": "The Glass Pyramid at Golden Hour",
        "text": "The pyramid catches warm reflections at sunrise and again just before sunset, and both ends of the day give the glass a golden glow. I shoot low and wide so the structure towers behind you, and at sunrise we often have the plaza almost to ourselves for clean, uncluttered frames."
      },
      {
        "title": "Cour Carree, the Quiet Courtyard",
        "text": "The Cour Carree is my favorite corner of the Louvre because the enclosed stone walls bounce soft, even light onto your face from every direction. Early in the morning it is often nearly empty, which means unhurried portraits, wide symmetrical compositions, and time to try several outfits without an audience."
      },
      {
        "title": "Arcades and Stone Colonnades",
        "text": "The arcades around the courtyards work as natural frames, with repeating arches that pull the eye straight to you. They are ideal in the middle of the session when the sun climbs higher, because the covered walkways hold gentle shade while the background stays bright, elegant, and unmistakably Parisian."
      },
      {
        "title": "Palais-Royal, Two Minutes Away",
        "text": "Two minutes from the Louvre, the Palais-Royal adds a playful second act to the session. The striped Buren columns give graphic, modern frames where you can sit, stand, or jump, and the garden's green chairs make a relaxed, candid closing scene once the formal shots are done."
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
        "question": "What is the best time for photos at the Louvre?",
        "answer": "Sunrise is the strongest choice. The plaza is nearly empty, the light is soft, and the glass pyramid picks up warm reflections. Sunset is beautiful too, with golden tones on the stone, though you will share the space with more people. Midday works best in the shaded arcades."
      },
      {
        "question": "How do I book a Louvre photo session?",
        "answer": "Booking happens over WhatsApp, and I reply fast. Tell me your dates and the moments you want to capture, and I will suggest a time built around the best light. I work in English, French, Arabic, and Spanish, so we can plan everything in the language you prefer."
      },
      {
        "question": "How soon will I get my edited photos?",
        "answer": "You receive your edited photos within 24 to 72 hours of the session. After eight years of Paris photography, I have a streamlined editing process, so you can post your favorites while you are still traveling instead of waiting weeks for your gallery."
      }
    ]
  },
  {
    "slug": "montmartre-photographer",
    "name": "Montmartre",
    "cardTagline": "Cobbled lanes, staircases, and the village at dawn.",
    "badge": "Montmartre Sessions",
    "h1": "Paris Photographer in Montmartre",
    "titleTag": "Montmartre Photographer for Your Paris Visit",
    "keyword": "Montmartre photographer",
    "secondaryCta": {
      "href": "/portfolio",
      "label": "View Portfolio"
    },
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
    "linksLine": [
      {
        "text": "Start with my article on "
      },
      {
        "href": "/blog/montmartre-photoshoot",
        "label": "planning a Montmartre photoshoot"
      },
      {
        "text": ", then browse the "
      },
      {
        "href": "/portfolio/instagrammable-paris",
        "label": "instagrammable Paris album"
      },
      {
        "text": " for the mood."
      }
    ],
    "ogImage": "/assets/paris-couple-photoshoot-07.jpg",
    "metaDescription": "Book a Montmartre photographer for a private photoshoot in the village's cobbled lanes, ivy facades, and staircases, timed for the quiet early light.",
    "heroSubtitle": "I am a Paris photographer who spends his best mornings in Montmartre, photographing travelers in quiet cobbled lanes before the village wakes up.",
    "introH2": "A Montmartre Photographer Who Knows Every Cobbled Lane",
    "introParagraphs": [
      "Montmartre taught me the most important lesson in Paris photography: arrive before the village wakes up. I have spent eight years as a Montmartre photographer, learning which cobbled lane catches the first light and which staircase stays empty until the bakeries open. That knowledge becomes your gallery, calm frames of a village most visitors only see crowded.",
      "A Montmartre photographer specializes in the hilltop village of northern Paris, photographing travelers among its cobbled lanes, ivy covered facades, staircases, and rooftop views. Sessions are usually scheduled early in the morning, when the streets are still empty, the light is soft, and the village feels like it belongs to you.",
      "The route begins in the side streets, where the village is still asleep. and work our way through the village at a relaxed walking pace, changing backdrops every few minutes. I guide you with simple prompts the whole time, so posing never becomes your job. Most of the walking is gentle, with a few staircases along the way."
    ],
    "spotsH2": "Where Are the Best Photo Spots in Montmartre?",
    "spots": [
      {
        "title": "The Curve of Rue de l'Abreuvoir",
        "text": "This gently bending street is the postcard of the village, with pastel facades and the famous pink corner house at the bottom of the curve. I shoot it early, before nine, when it is often completely empty. The bend lets me frame you with the street falling away behind you."
      },
      {
        "title": "Staircases and Old Lampposts",
        "text": "Montmartre's staircases, framed by iron railings and vintage lampposts, give photos instant depth. I place you a few steps up and shoot from below, so the steps lead the eye straight to you. On misty mornings the lamps and trees turn the whole frame soft and cinematic."
      },
      {
        "title": "The Vineyard and Hidden Corners",
        "text": "Just behind the busiest lanes, the old vineyard corner and its surrounding streets stay surprisingly calm even in high season. Ivy-covered walls, shuttered windows, and leafy fences make this the greenest part of the walk, and I use it for quieter, more intimate frames between the classic views."
      },
      {
        "title": "Rooftop Views Over Paris",
        "text": "From the upper streets of the hill, the rooftops of Paris stretch out behind you in soft layers of zinc and chimneys. I save this angle for the end of the session, when the light has warmed up, and frame you above the city without any crowds in the shot."
      }
    ],
    "galleryH2": "Recent Photoshoots in Montmartre",
    "gallerySubtitle": "Engagements, anniversaries, and solo portraits shot between the staircases and the old vineyard.",
    "faq": [
      {
        "question": "What is the best time for a photoshoot in Montmartre?",
        "answer": "Early morning is by far the best. Before nine, the cobbled lanes are mostly empty, the light is soft, and we can shoot the famous corners without waiting. Weekdays are much calmer than weekends, so if your schedule allows, a weekday morning gives you the quietest village."
      },
      {
        "question": "Is Montmartre too crowded for photos?",
        "answer": "The main square gets busy by late morning, but the village is larger than most visitors realize. I route sessions through side streets, staircases, and the vineyard corners, where we often have entire lanes to ourselves. Starting early makes even the famous spots feel private."
      },
      {
        "question": "What should I wear for a Montmartre photoshoot?",
        "answer": "Solid colors and timeless pieces photograph beautifully against the pastel facades and stone streets. Long dresses move nicely on the staircases, and a light jacket works well for early mornings on the hill. Comfortable shoes matter here, since the village is built on cobblestones and slopes."
      },
      {
        "question": "How do I book a Montmartre photographer?",
        "answer": "Message me on WhatsApp with your travel dates and I will hold a quiet-morning slot for the village. We can sort the meeting point, the route, and your outfit questions in a few messages, in whichever of my four languages suits you best."
      }
    ]
  },
  {
    "slug": "sacre-coeur-photoshoot",
    "name": "Sacré-Cœur",
    "cardTagline": "First light on the steps, all of Paris below.",
    "badge": "Sacré-Cœur Sessions",
    "h1": "Paris Photographer at the Sacré-Cœur",
    "titleTag": "Sacre-Coeur Photoshoot in Montmartre, Paris",
    "keyword": "Sacre-Coeur photoshoot",
    "secondaryCta": {
      "href": "/portfolio",
      "label": "View Portfolio"
    },
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
    "linksLine": [
      {
        "text": "The hill has two moods, and I photograph both: read about "
      },
      {
        "href": "/blog/montmartre-photoshoot",
        "label": "the Montmartre photoshoot experience"
      },
      {
        "text": " or browse "
      },
      {
        "href": "/portfolio/instagrammable-paris",
        "label": "my instagrammable Paris album"
      },
      {
        "text": "."
      }
    ],
    "ogImage": "/assets/paris-instagrammable-photoshoot-09.jpg",
    "metaDescription": "Plan a Sacre-Coeur photoshoot at first light: portraits on the grand steps with all of Paris below you, guided by a private local photographer at sunrise.",
    "heroSubtitle": "I photograph you on the grand steps at first light, with the white domes behind you and the whole of Paris at your feet.",
    "introH2": "Your Sacre-Coeur Photoshoot Above the Rooftops of Paris",
    "introParagraphs": [
      "Few places lift a photo the way this basilica does. A Sacre-Coeur photoshoot gives you white domes glowing against the sky, grand stone steps, and the entire city rolling out below the parvis. As a Paris photographer with 8 years of experience, I know exactly where to place you so the view works for you, not against you.",
      "A Sacre-Coeur photoshoot is a private photography session at the basilica crowning Paris's highest hill. It typically covers the grand steps, the lawns below, and the parvis with its panoramic view over the whole city. Most sessions run at sunrise or in the early morning, when the light is soft and the steps are still quiet.",
      "We usually meet at the top and start on the parvis while the light is soft, then work our way down the steps toward the lawns and the carousel. I guide you through every pose with simple, natural prompts, and we keep a relaxed pace. The funicular is right there if you would rather skip the climb."
    ],
    "spotsH2": "Where Are the Best Photo Spots at the Sacre-Coeur?",
    "spots": [
      {
        "title": "The Grand Steps at Sunrise",
        "text": "The wide staircase below the basilica is the classic shot, and it belongs to you if you arrive early. At sunrise the steps are nearly empty, the stone takes on a warm tone, and I can frame the domes rising directly behind you without a single stranger in the background."
      },
      {
        "title": "The Parvis Panorama Over Paris",
        "text": "From the terrace in front of the basilica, the whole city spreads out to the horizon. I shoot this facing east early in the day, when the sun climbs over the rooftops and the sky often turns dramatic. It is the one backdrop no other monument in Paris can offer."
      },
      {
        "title": "The Lawns and the Carousel",
        "text": "Halfway down the hill, the sloped lawns of Square Louise Michel give you a softer, greener frame with the white domes floating above. At the very bottom, the vintage carousel adds a playful note, and its spot works well later in the morning when the steps get busy."
      },
      {
        "title": "Right Beneath the White Domes",
        "text": "Standing close to the facade, I shoot upward so the domes tower over you like white meringue against the sky. This angle hides the crowds completely, works even in the middle of the day, and gives the photos a scale you simply cannot get from farther down the hill."
      }
    ],
    "galleryH2": "Recent Sessions at the Sacre-Coeur",
    "gallerySubtitle": "A look at how the steps, domes, and skyline photograph across sunrise, morning, and golden hour with real clients.",
    "faq": [
      {
        "question": "When is the best time for photos at the Sacre-Coeur?",
        "answer": "Aim for first light. The parvis faces east, so you watch the sun come up over the whole city while the steps are still yours. You face east over the city, the sky often turns pink and gold, and the grand steps are close to empty. Early morning is the next best window. By late morning the steps and parvis fill up quickly, especially in summer."
      },
      {
        "question": "Do I need a permit or ticket for a Sacre-Coeur photoshoot?",
        "answer": "The basilica is an active place of worship, so the shoot happens entirely outside, on the grand steps, the lawns, and the parvis with its panoramic view. That is where the best frames are anyway, and no ticket or permit is needed for a personal session there."
      },
      {
        "question": "How do we get to the top for the shoot?",
        "answer": "We can meet directly at the basilica, and I will send you a precise meeting point over WhatsApp. If you prefer not to climb the stairs, the funicular runs up the hill from the bottom of the steps. I always answer quickly, so finding each other is easy."
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
    "linksLine": [
      {
        "text": "See how these streets photograph in my "
      },
      {
        "href": "/portfolio/street-photography",
        "label": "street style photo album"
      },
      {
        "text": ", or plan the wider day with "
      },
      {
        "href": "/blog/best-photo-spots-in-paris",
        "label": "the best photo spots in Paris"
      },
      {
        "text": "."
      }
    ],
    "ogImage": "/assets/paris-instagrammable-photoshoot-18.jpg",
    "metaDescription": "Book a Le Marais photoshoot with a private Paris photographer. Hidden courtyards, Place des Vosges arcades, and edited photos delivered within 24 to 72 hours.",
    "heroSubtitle": "I photograph you among hidden courtyards, warm stone, and the arcades of Place des Vosges, at an easy and unhurried pace.",
    "introH2": "A Le Marais photoshoot built around hidden courtyards and warm stone",
    "introParagraphs": [
      "If you want photos that feel like old Paris, a Le Marais photoshoot is hard to beat. I have spent 8 years doing Paris photography in these narrow medieval streets, and I still find new corners: heavy ancient doors, quiet courtyards, cafe terraces, and the arcades of Place des Vosges, all within a short walk of each other.",
      "A Le Marais photoshoot is a private photo session in the Marais, the historic district on the Right Bank of Paris. Sessions typically move on foot between Place des Vosges, medieval side streets, and hidden courtyards, so you can capture several distinct backdrops, from grand arcades to textured stone walls, within a single session.",
      "Place des Vosges comes first, before the arcades fill up. From there we drift into the older lanes. then wander the side streets toward the older lanes, stopping wherever the light and doorways look right. I guide every pose, so you never have to guess what to do with your hands. The whole route is flat and walkable, with plenty of pauses."
    ],
    "spotsH2": "Where are the best photo spots in Le Marais?",
    "spots": [
      {
        "title": "The arcades of Place des Vosges",
        "text": "The pink brick and repeating arches give a frame within a frame that flatters every couple and solo traveler. I line you up under the arches so the repeating brick vaults stack behind you, then step into the garden for softer, greener backgrounds. Early morning is quietest; on Sunday afternoons I simply angle the shots to keep the crowd behind us."
      },
      {
        "title": "Hidden courtyards and ancient doors",
        "text": "The Marais is full of heavy wooden doors and courtyards hiding behind doors most people never think to push open. When one stands open, the soft shade inside is beautiful for close portraits. Even closed, those massive carved doors make a rich, textured backdrop that instantly says old Paris."
      },
      {
        "title": "Narrow medieval streets at sunrise",
        "text": "These lanes are among the oldest in the city, with warm stone that glows when the sun is low. I love shooting down their length so the street lines pull the eye straight to you. Go early and we often have an entire lane to ourselves for several minutes at a time."
      },
      {
        "title": "Cafe terraces and boutique corners",
        "text": "For a more lived-in, editorial feel, we use cafe terraces and the windows of designer boutiques. A coffee in hand gives you something natural to do, and the reflections in the shop glass add depth. These frames balance the historic stone shots with something modern and relaxed."
      }
    ],
    "galleryH2": "Recent photos from Le Marais",
    "gallerySubtitle": "A look at real sessions among the arcades, doorways, and quiet lanes that make this district so photogenic.",
    "faq": [
      {
        "question": "What is the best time of day for photos in Le Marais?",
        "answer": "Early morning is my favorite. The streets are nearly empty, the low sun warms the stone, and Place des Vosges is calm. Late afternoon also works well for golden light on the facades. Sundays are lively, which suits candid, street-style photos more than quiet portraits."
      },
      {
        "question": "How many locations can we cover in one session in Le Marais?",
        "answer": "Quite a few, because the Marais is compact and flat. In a single session we can usually photograph at Place des Vosges, a couple of medieval side streets, and one or two doorways or courtyards, all without rushing or long walks between spots."
      },
      {
        "question": "Do I need a permit for a photo session in Le Marais?",
        "answer": "Personal sessions in the public streets and squares are straightforward, and I handle the practical side of choosing spots. Private courtyards belong to residents, so we only photograph inside them when they are clearly open, and we always stay quiet and respectful of the neighborhood."
      },
      {
        "question": "How do I book, and when will I receive my photos?",
        "answer": "Send me a WhatsApp message with your travel dates. Mornings in the Marais go first, so the earlier you write, the better the light slot I can hold for you. We can plan everything in English, French, Spanish, or Arabic."
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
    "linksLine": [
      {
        "text": "Scroll the "
      },
      {
        "href": "/portfolio/instagrammable-paris",
        "label": "instagrammable Paris album"
      },
      {
        "text": ", then check "
      },
      {
        "href": "/blog/instagrammable-paris-guide",
        "label": "my local guide to instagrammable Paris"
      },
      {
        "text": " and "
      },
      {
        "href": "/blog/what-to-wear-paris-photoshoot",
        "label": "what to wear for a Paris photoshoot"
      },
      {
        "text": "."
      }
    ],
    "ogImage": "/assets/paris-instagrammable-photoshoot-01.jpg",
    "metaDescription": "Book an Instagram photographer in Paris for feed-ready photos: pastel streets, cafe scenes, and golden hour tones, edited and delivered within 72 hours.",
    "heroSubtitle": "I photograph creators and travelers who want feed-ready photos: pastel streets, cafe scenes, and golden hour light, delivered fast enough to post while you are still in Paris.",
    "introH2": "An Instagram Photographer in Paris Who Shoots for Your Feed",
    "introParagraphs": [
      "If your camera roll never quite matches the Paris you pictured, that is where I come in. As an Instagram photographer in Paris, I plan every session around backdrops that photograph beautifully together. After 8 years as a Paris photographer, I know which pastel streets, cafe terraces, and corners catch the light, and I know exactly when to shoot them.",
      "An Instagram photographer in Paris is a photographer who plans sessions specifically for social media: several aesthetic backdrops within a short walk, a mix of posed shots and candid in-between frames, and images cropped and sized for posting. The goal is a set of varied, cohesive photos that look intentional on your feed rather than like one repeated pose.",
      "Before we meet, I ask what your feed looks like and suggest outfit colors that match each backdrop. On the day, we cover two or three spots within a short walk, moving at an easy pace. I direct every pose, then keep shooting between poses, because those relaxed frames are usually the ones you post first."
    ],
    "spotsH2": "Where Are the Best Instagram Photo Spots in Paris?",
    "spots": [
      {
        "title": "The Pastel Doors of Rue Cremieux",
        "text": "This little pastel street looks like it was painted for a feed. I shoot it early in the morning, when the light is soft and the street is quiet. It is a residential street, so we work quickly and respectfully, and neutral or cream outfits pop beautifully against the colored facades."
      },
      {
        "title": "Striped Columns at Palais-Royal",
        "text": "The black and white columns in the Palais-Royal courtyard give you clean, graphic frames that stand out on any feed. The courtyard stays evenly lit for much of the day, which makes it a reliable backdrop. I mix wide symmetrical shots with closer candid ones as you walk between the columns."
      },
      {
        "title": "A Classic Cafe Terrace Scene",
        "text": "Rattan chairs, a small round table, coffee and a croissant: the cafe shot is a Paris staple for a reason. I frame you from across the terrace so the scene feels caught rather than staged, and I time it for morning, when terraces are calmer and the light is kinder."
      },
      {
        "title": "Haussmann Balconies at Golden Hour",
        "text": "In the last hour before sunset, the limestone facades and wrought iron balconies turn warm gold, the exact tones you see all over Paris feeds. I shoot along quiet side streets facing west, catching you mid-stride with the glow behind you for that effortless end-of-day look."
      }
    ],
    "galleryH2": "Instagram Photos From Recent Paris Sessions",
    "gallerySubtitle": "A look at the pastel streets, cafe scenes, and golden hour frames my clients have posted from their sessions.",
    "faq": [
      {
        "question": "How do I book an Instagram photoshoot in Paris?",
        "answer": "A quick WhatsApp message is all it takes. Share your dates and the kind of feed you are building, and I will map out backdrops, outfits, and timing around the light. No forms and no waiting, just a direct conversation with your photographer."
      },
      {
        "question": "What should I wear for an Instagram photoshoot in Paris?",
        "answer": "Bring outfits that contrast gently with each backdrop rather than blending into it. Cream, beige, and soft red work well against pastel and limestone tones. Once we plan your route, I give you outfit-to-backdrop color advice, and many clients change one layer between spots for extra variety."
      },
      {
        "question": "How quickly will I get my photos back to post them?",
        "answer": "Photos come back post-ready within 72 hours at most, sized and ready to post, so most clients share their first frames while they are still in Paris. If you have a specific posting date in mind, tell me on WhatsApp and I will plan the delivery around it."
      },
      {
        "question": "Do I need to know how to pose for the camera?",
        "answer": "Not at all. I direct every pose in clear, simple steps, then keep shooting the natural moments in between, which is where the best candid frames come from. My Paris photography sessions have included clients from more than 80 nationalities, and helping people relax is part of the job."
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
    "linksLine": [
      {
        "text": "See the moments in my "
      },
      {
        "href": "/portfolio/proposals",
        "label": "Paris proposal album"
      },
      {
        "text": " and read "
      },
      {
        "href": "/blog/how-to-propose-in-paris",
        "label": "my full guide on how to propose in Paris"
      },
      {
        "text": "."
      }
    ],
    "ogImage": "/assets/paris-proposal-photoshoot-03.jpg",
    "metaDescription": "Plan a surprise proposal in Paris with a discreet photographer who blends in like a tourist, captures the kneel and the yes, and delivers edited photos fast.",
    "heroSubtitle": "I hide in plain sight, plan every detail with you on WhatsApp, and capture the moment your partner never saw coming.",
    "introH2": "How I Photograph a Surprise Proposal in Paris",
    "introParagraphs": [
      "Pulling off a surprise proposal in Paris comes down to one thing: your partner cannot suspect a photographer is there. That is my specialty. As a Paris photographer, I pose as just another tourist with a camera, standing exactly where we agreed, ready for the second you reach for the ring.",
      "A surprise proposal in Paris is a planned engagement where a hidden photographer documents the moment without the partner knowing. Everything is arranged in advance: the exact spot, the time, where the photographer stands, and a discreet signal. The result is candid photos of the kneel, the reaction, and the ring.",
      "We rehearse everything on WhatsApp before you land, down to the signal you will give me, so on the day your only job is the question. I capture the kneel from a distance, then step forward, introduce myself, and guide you both through a relaxed mini couple session while the joy is still completely unposed."
    ],
    "spotsH2": "Where Should You Propose in Paris?",
    "spots": [
      {
        "title": "Sunrise on Pont de Bir-Hakeim",
        "text": "At sunrise this double-decker bridge is nearly empty, which matters when you want zero strangers in the frame. I position you between the steel columns with the Eiffel Tower rising behind, then wait a few arches away, looking like a tourist photographing the view. Privacy comes first, drama second."
      },
      {
        "title": "Golden Hour at Pont Alexandre III",
        "text": "The gilded lampposts and wide sidewalks give me clean angles from across the bridge, so you never sense a camera pointed your way. Late afternoon light turns the stone honey gold. After the yes, we walk down to the lower quay for quieter frames right at water level."
      },
      {
        "title": "Evening Sparkles Over the Seine",
        "text": "If you want drama, propose after dark when the tower lights up and sparkles. We coordinate your walk on WhatsApp so you drop to one knee just as the glitter starts. Evenings draw more people, so I scout a pocket of quay where the crowd stays out of frame."
      },
      {
        "title": "The Quiet Columns of Palais-Royal",
        "text": "The striped columns and symmetrical arcades make a graphic, unmistakably Parisian backdrop, and the courtyard feels calm compared to the big landmarks. I frame the kneel through the colonnade for depth, then use the soft, even shade for close-ups of the ring and your partner's reaction."
      }
    ],
    "galleryH2": "Real Proposals I Captured in Paris",
    "gallerySubtitle": "A few of the kneels, gasps, and happy tears I have photographed while pretending to admire the view.",
    "faq": [
      {
        "question": "How do you stay hidden during a surprise proposal?",
        "answer": "I dress and behave like a tourist, camera out, photographing the scenery near your chosen spot. We agree in advance on exactly where I stand and on a simple signal, so I am already shooting before you kneel. Most partners only notice me when I walk over afterward."
      },
      {
        "question": "What time of day is best for a proposal photoshoot in Paris?",
        "answer": "Sunrise gives you soft light and nearly empty landmarks, which is the best choice if privacy makes you less nervous. Evening brings the city lights and a more dramatic mood, with bigger crowds to plan around. We talk through both on WhatsApp and pick what fits your story."
      },
      {
        "question": "What happens if it rains on the day of the proposal?",
        "answer": "We always have a plan B. Because everything is coordinated over WhatsApp, we can shift the time by a few hours, move to a covered spot like an arcade or bridge underpass, or slide to another day if your travel dates allow. Paris looks romantic in soft rain too."
      },
      {
        "question": "How quickly will we get our proposal photos?",
        "answer": "The edited gallery follows within 24 to 72 hours, ready for the announcement, so you can share the news while you are still in the city. After 8 years of Paris photography and couples from more than 80 nationalities, I know you want to call your families with pictures in hand."
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
    "linksLine": [
      {
        "text": "Browse "
      },
      {
        "href": "/portfolio/weddings",
        "label": "my Paris wedding album"
      },
      {
        "text": ", and if a surprise is part of the plan, see "
      },
      {
        "href": "/experiences/surprise-proposal-paris",
        "label": "the surprise proposal experience"
      },
      {
        "text": "."
      }
    ],
    "ogImage": "/assets/paris-wedding-photoshoot-01.jpg",
    "metaDescription": "Book a wedding photoshoot in Paris with a private photographer for elopements, chateau ceremonies, day-after sessions, and golden hour couple portraits.",
    "heroSubtitle": "I photograph weddings and elopements across Paris, from chateau ceremonies to rooftop vows, moving between candid moments and timeless portraits.",
    "introH2": "A Wedding Photoshoot in Paris, from Vows to Golden Hour",
    "introParagraphs": [
      "A wedding photoshoot in Paris deserves more than stiff poses, and after 8 years as a private Paris photographer I have learned to disappear into your day. I document the real moments, the vows, the laughter, the quiet glances, then steal you away for a short golden hour portrait session with the city as your backdrop.",
      "A wedding photoshoot in Paris is professional photography coverage of your ceremony, elopement, or day-after celebration in the city. It typically combines documentary coverage of key moments with a dedicated couple portrait session, often at golden hour. Sessions range from intimate elopements to full chateau weddings, with edited photos delivered within 24 to 72 hours.",
      "On the day, I stay close but unobtrusive, guiding you only when it helps. For elopements, I help you pick the spots and the hour in advance, then we move at a relaxed pace between locations. During portraits I give simple, natural direction, so you never feel posed, just present with each other."
    ],
    "spotsH2": "Where Should You Take Wedding Photos in Paris?",
    "spots": [
      {
        "title": "Golden Hour on the Seine Banks",
        "text": "After the ceremony energy settles, the stone quays along the Seine give soft, warm light in the last hour before sunset. The low angle flatters gowns and suits, and the river reflections add depth behind you. I time this portrait break precisely so we catch the light at its best."
      },
      {
        "title": "Chateau Ceremonies, Inside and Out",
        "text": "At a chateau wedding I work in documentary mode, covering the preparations, the ceremony, and the reception without interrupting them. Between courses I watch the gardens, because tall windows and long gravel paths make elegant frames for a few quiet couple portraits away from your guests."
      },
      {
        "title": "Rooftop Vows with an Eiffel View",
        "text": "Private rooftops facing the tower are made for intimate vow exchanges. I frame you against the skyline while keeping the focus on your faces and hands, then step back for one wide shot of the whole scene. Late afternoon light works beautifully here, and there are no crowds to manage."
      },
      {
        "title": "Day-After Session in Your Wedding Attire",
        "text": "Wearing your dress and suit again the morning after removes all time pressure. We start at sunrise when the streets are nearly empty, wander between bridges and small squares at an easy pace, and finish with coffee. Couples relax completely because there is no schedule waiting for them."
      }
    ],
    "galleryH2": "Real Weddings and Elopements in Paris",
    "gallerySubtitle": "A selection of ceremonies, rooftop vows, and day-after sessions photographed for couples from more than 80 nationalities.",
    "faq": [
      {
        "question": "Do you photograph elopements as well as full weddings?",
        "answer": "Yes. Elopements are some of my favorite days to photograph. I help you choose the spots and the best hour for light, suggest a simple route, and cover everything from the vows to the celebration afterward, whether that lasts two hours or the whole day."
      },
      {
        "question": "How quickly will we receive our wedding photos?",
        "answer": "Your finished gallery lands within one to three days of the shoot. For weddings I select and edit the images carefully rather than sending everything unfiltered, so what you receive is a finished gallery you can share with family right away, often before your flight home."
      },
      {
        "question": "Can we do a wedding photoshoot at a chateau or private venue?",
        "answer": "Yes. I regularly cover chateau ceremonies and private venues around Paris. Outdoor grounds and courtyards are usually straightforward to photograph, while interiors follow each venue's own rules, so I coordinate with your planner or the venue in advance to keep the day smooth."
      },
      {
        "question": "How do we book a Paris photographer for a wedding or elopement?",
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
    "linksLine": [
      {
        "text": "Feel the energy in "
      },
      {
        "href": "/portfolio/nightclubs",
        "label": "my Paris nightlife album"
      },
      {
        "text": ", or plan a birthday with "
      },
      {
        "href": "/blog/birthday-photoshoot-paris",
        "label": "my birthday photoshoot guide"
      },
      {
        "text": "."
      }
    ],
    "ogImage": "https://kzoyeuyblxeailoypohf.supabase.co/storage/v1/object/public/sabshots/crops/1781191892072-78t05j.jpg",
    "metaDescription": "Book an event photographer in Paris for club nights, DJ sets, birthdays, and brand events. Discreet coverage, real-light images, delivered in 24 to 72 hours.",
    "heroSubtitle": "Discreet Paris photography for club nights, DJ sets, birthdays, and brand events, shot in the real light of the room and delivered fast.",
    "introH2": "An Event Photographer in Paris Who Works With Real Light",
    "introParagraphs": [
      "If you are looking for an event photographer in Paris who feels at home after dark, you are in the right place. I have spent 8 years covering nights in this city, from packed dance floors to intimate birthday dinners, and my approach to Paris photography is simple: stay discreet, follow the energy, and bring back images that feel like the night itself.",
      "An event photographer in Paris documents club nights, DJ sets, private parties, and brand events as they happen, without staging or interrupting. The work combines low-light technique, fast reactions, and discretion: sharp images of the DJ and the team, wide frames of the dance floor, and detail shots that capture the atmosphere of the room.",
      "Before your event I ask about the schedule, the key people, and the moments you cannot miss. On the night I arrive early to read the room and the light, then move quietly between the floor, the booth, and the details. Guests barely notice me, and your team gets a clear plan for coverage."
    ],
    "spotsH2": "What Do I Capture at Your Event in Paris?",
    "spots": [
      {
        "title": "The DJ Booth, Front and Center",
        "text": "The booth is the heart of the night, so I spend real time there. I shoot tight portraits of the DJ mid-mix, hands on the decks, then turn around for the crowd-from-the-booth angle that every artist and promoter wants. Strobes and LED washes become part of the image, not a problem to fight."
      },
      {
        "title": "The Dance Floor at Peak Hour",
        "text": "When the floor fills up, I work inside the crowd rather than around it. Slow shutter drags catch the motion, quick flash frames freeze the best faces, and I time bursts to the drops when hands go up. These are the images people tag themselves in the morning after."
      },
      {
        "title": "Details That Sell the Atmosphere",
        "text": "I watch for bottle service arriving with sparklers, the bar mid-pour, laser lines cutting through haze, the merch table, and the smoking terrace conversations. I collect the small frames that promoters and brands need to sell the next date, because a gallery of faces alone never tells the full story of a night."
      },
      {
        "title": "Birthdays and Private Parties After Dark",
        "text": "For birthdays and private events I focus on the guest of honor first: the entrance, the cake or toast, the reactions around the table. I keep flash low and my presence lower, so friends stay in the moment. You get the group photos too, done fast before the party moves on."
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
