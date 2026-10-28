/* EVARA — project data (edit here to add or change projects) */
window.IMG = window.IMG || {};
(function(){ var k=['architecture','courtyard','terra','detail','pr-final','pr-clay','pr-build','pr-docs','architecture-sketch','courtyard-sketch','terra-sketch','detail-sketch'];
  ['architecture','courtyard','terra','detail','pr-final','pr-clay'].forEach(function(n){k.push(n+'-d1',n+'-d2');});
  k.forEach(function(n){ if(!window.IMG[n]) window.IMG[n]='assets/'+n+'.jpg'; }); })();

window.PROJECTS = [
  { slug:'sculptural-residence', title:'The Sculptural Residence', category:'Residential', type:'Private villa', year:'2026', status:'Concept study',
    img:'architecture', sketch:'architecture-sketch', gallery:['pr-clay','pr-docs'],
    intro:'A villa of curved stone floors that open to the landscape.',
    body:['Two sweeping travertine floor plates float above a long reflecting pool, each one shaded by its own deep overhang. Timber fins filter the western sun, while the plan opens fully to the olive grove on the garden side.',
          'The curves follow the natural slope of the site, so the house sits low and calm within its setting.'],
    challenge:'How can a generous family home stay cool and open without relying on mechanical cooling?',
    response:'Deep curved overhangs, cross-ventilated rooms and a reflecting pool on the prevailing breeze keep the interiors comfortable through the day.',
    principles:['Passive shading','Cross-ventilation','Local stone','Landscape-led plan'] },

  { slug:'courtyard-house', title:'Courtyard House', category:'Residential', type:'Family home', year:'2026', status:'Concept study',
    img:'courtyard', sketch:'courtyard-sketch', gallery:['courtyard-sketch','pr-build'],
    intro:'A home around a moment of stillness.',
    body:['This concept explores the courtyard as a centre of everyday life. A series of stone and timber volumes frames a garden, connecting sheltered interiors with open sky.',
          'A long reflecting pool cools the air and doubles the light, making the courtyard the quiet heart of the home.'],
    challenge:'How can a home feel open to the landscape while preserving a sense of retreat?',
    response:'Shaded thresholds, framed views and a planted courtyard create layers between public and private life. A restrained palette lets light and landscape set the atmosphere.',
    principles:['Inward-looking plan','Evaporative cooling','Shaded thresholds','Restrained palette'] },

  { slug:'casa-terra', title:'Casa Terra', category:'Residential', type:'Garden house', year:'2026', status:'Concept study',
    img:'terra', sketch:'terra-sketch', gallery:['terra-sketch','pr-final'],
    intro:'A study in earth, shade, and belonging.',
    body:['An imagined residence where grounded forms and warm materials sit quietly within a planted landscape. The concept places outdoor living at the centre of the daily experience.',
          'Rammed-earth walls, deep eaves and broad terraces soften the line between inside and out.'],
    challenge:'How can a contemporary residence feel rooted in its landscape?',
    response:'Low volumes, deep overhangs and earthy material tones create a continuous relationship between the home and garden.',
    principles:['Rammed earth','Thermal mass','Deep eaves','Outdoor living'] },

  { slug:'atelier-27', title:'Atelier 27', category:'Interiors', type:'Studio interior', year:'2026', status:'Concept study',
    img:'detail', sketch:'detail-sketch', gallery:['detail-sketch','courtyard'],
    intro:'Space for light. Room for thought.',
    body:['An interior concept exploring the meeting of curved stone, warm timber and natural light. Each threshold offers a different way to experience the same simple material palette.',
          'A single sweeping wall guides movement and catches the shifting daylight through the day.'],
    challenge:'How can a restrained interior support a rich spatial experience?',
    response:'Curved surfaces, carefully framed openings and changing daylight create depth without visual excess.',
    principles:['Daylight as material','Honest finishes','Curved thresholds','Few materials, used well'] },

  { slug:'hillside-retreat', title:'Hillside Retreat', category:'Hospitality', type:'Boutique retreat', year:'2026', status:'Concept study',
    img:'pr-final', sketch:'pr-docs', gallery:['pr-clay','pr-build'],
    intro:'A long, low retreat that follows the line of the hill.',
    body:['A single-storey stone pavilion stretches along the contour, with guest rooms opening onto a shared terrace and the olive grove beyond.',
          'A thin roof plane with a generous overhang shades the glazing, while timber screens give each room privacy without closing it off.'],
    challenge:'How can a hospitality space feel generous while touching the land lightly?',
    response:'Building along the contour minimises excavation, and local stone and timber tie the retreat to its hillside.',
    principles:['Built along the contour','Minimal excavation','Local materials','Shared terraces'] },

  { slug:'olive-grove-pavilion', title:'Olive Grove Pavilion', category:'Hospitality', type:'Pavilion & study model', year:'2026', status:'Concept study',
    img:'pr-clay', sketch:'pr-docs', gallery:['pr-docs','pr-final'],
    intro:'A study model of a pavilion set among existing trees.',
    body:['This massing study tests how a simple pavilion can sit between existing olive trees without removing any of them.',
          'Working in white models lets the form, the light and the terraces be judged before any material is chosen.'],
    challenge:'How can a new pavilion keep every existing tree on site?',
    response:'The plan bends around the grove, and stepped terraces follow the original ground levels.',
    principles:['Existing trees kept','Massing studies','Stepped terraces','Form before finish'] }
];
