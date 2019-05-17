//MAIN NAVBAR BUTTOMS----------------------------------------------

const pamokuLaikas = document.querySelector('.pamoku__laikas');
const kainininkas = document.querySelector('.kainininkas');
const statistic = document.querySelector('.statistic');
const methods = document.querySelector('.methods');

const pamokuLaikasItem = document.querySelector('.nav_bar-item1');
const kainininkasItem = document.querySelector('.nav_bar-item2');
const statisticItem = document.querySelector('.nav_bar-item3');
const methodsItem = document.querySelector('.nav_bar-item4');

const pamokuLaikasH = document.querySelector('.nav_bar-h1');
const kainininkasH = document.querySelector('.nav_bar-h2');
const statisticH = document.querySelector('.nav_bar-h3');
const methodsH = document.querySelector('.nav_bar-h4');

const pamokuLaikasClick = document.querySelector('.pamoku__laikas-click');
const kainininkasClick = document.querySelector('.kainininkas-click');
const statistikaClick = document.querySelector('.statistika-click');
const metodikaClick = document.querySelector('.metodika-click');

displayNonePamokuLaikas = () => {
  pamokuLaikas.classList.remove('display-none');

  pamokuLaikasItem.classList.add('active');
  pamokuLaikasH.classList.add('active__textColor');

  kainininkasItem.classList.remove('active');
  kainininkasH.classList.remove('active__textColor');

  statisticItem.classList.remove('active');
  statisticH.classList.remove('active__textColor');

  methodsItem.classList.remove('active');
  methodsH.classList.remove('active__textColor');

  kainininkas.classList.add('display-none');
  statistic.classList.add('display-none');
  methods.classList.add('display-none');
};

displayNoneKainininkas = () => {
  kainininkas.classList.remove('display-none');

  pamokuLaikasItem.classList.remove('active');
  pamokuLaikasH.classList.remove('active__textColor');

  kainininkasItem.classList.add('active');
  kainininkasH.classList.add('active__textColor');

  statisticItem.classList.remove('active');
  statisticH.classList.remove('active__textColor');

  methodsItem.classList.remove('active');
  methodsH.classList.remove('active__textColor');

  pamokuLaikas.classList.add('display-none');
  statistic.classList.add('display-none');
  methods.classList.add('display-none');
};

displayNoneMethods = () => {
  methods.classList.remove('display-none');

  pamokuLaikasItem.classList.remove('active');
  pamokuLaikasH.classList.remove('active__textColor');

  kainininkasItem.classList.remove('active');
  kainininkasH.classList.remove('active__textColor');

  statisticItem.classList.remove('active');
  statisticH.classList.remove('active__textColor');

  methodsItem.classList.add('active');
  methodsH.classList.add('active__textColor');

  statistic.classList.add('display-none');
  kainininkas.classList.add('display-none');
  pamokuLaikas.classList.add('display-none');
};

displayNoneStatistic = () => {
  statistic.classList.remove('display-none');

  statisticItem.classList.add('active');
  statisticH.classList.add('active__textColor');

  pamokuLaikasItem.classList.remove('active');
  pamokuLaikasH.classList.remove('active__textColor');

  kainininkasItem.classList.remove('active');
  kainininkasH.classList.remove('active__textColor');

  methodsItem.classList.remove('active');
  methodsH.classList.remove('active__textColor');

  kainininkas.classList.add('display-none');
  pamokuLaikas.classList.add('display-none');
  methods.classList.add('display-none');
};

pamokuLaikasClick.addEventListener('click', displayNonePamokuLaikas);
kainininkasClick.addEventListener('click', displayNoneKainininkas);
statistikaClick.addEventListener('click', displayNoneStatistic);
metodikaClick.addEventListener('click', displayNoneMethods);

//PRICING BUTTOMS---------------------------------------------------------
const instant = document.querySelector('.instant');
const advance = document.querySelector('.advance');
const oneTime = document.querySelector('.one-time');

const pricingPersonal = document.querySelector('.pricing__personal');
const pricingAdvance = document.querySelector('.pricing__advance');
const pricingOneTime = document.querySelector('.pricing__onetime');

displayInstant = () => {
  pricingPersonal.classList.remove('display-none');
  pricingAdvance.classList.add('display-none');
  pricingOneTime.classList.add('display-none');
};

displayAdvance = () => {
  pricingAdvance.classList.remove('display-none');
  pricingPersonal.classList.add('display-none');
  pricingOneTime.classList.add('display-none');
};

displayOneTime = () => {
  pricingOneTime.classList.remove('display-none');
  pricingPersonal.classList.add('display-none');
  pricingAdvance.classList.add('display-none');
};

instant.addEventListener('click', displayInstant);
advance.addEventListener('click', displayAdvance);
oneTime.addEventListener('click', displayOneTime);

// HEART FUNC
const likeHeart = document.querySelector('.reviews__number-span');
let sumLikes = 100;
increment = () => {
  if (likeHeart.classList.length === 1) {
    sumLikes++;
    document.querySelector('.reviews__number-p').innerHTML = sumLikes + '  +';
  } else {
    sumLikes--;
    document.querySelector('.reviews__number-p').innerHTML = sumLikes + ' +';
  }
};

likeHeart.addEventListener('click', () => {
  likeHeart.classList.toggle('background-primary');
});

// MAP API
function orderMarkers() {
  var zIndex = 1,
    marker = new mapsjs.map.Marker({ lat: 54.672458, lng: 25.258304 });

  map.addObjects([marker]);

  map.addEventListener('tap', function(evt) {
    if (evt.target instanceof mapsjs.map.Marker) {
      // increase z-index of the marker that was tapped
      evt.target.setZIndex(zIndex++);
    }
  });
}

var platform = new H.service.Platform({
  app_id: 'xGN1AXY27xjfpQw6J3aQ',
  app_code: 'NDJcOpQd8vtxZeRnMeeYbg',
  useHTTPS: true
});

var pixelRatio = window.devicePixelRatio || 1;
var defaultLayers = platform.createDefaultLayers({
  tileSize: pixelRatio === 1 ? 128 : 512,
  ppi: pixelRatio === 1 ? undefined : 320
});

var map = new H.Map(document.getElementById('mapContainer'), defaultLayers.normal.map, {
  center: { lat: 54.672458, lng: 25.258304 },
  zoom: 16,
  pixelRatio: pixelRatio
});

var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

orderMarkers();

// ADDING +370
document.getElementById('form__number').addEventListener('click', () => {
  document.getElementById('form__number').value = '+370';
});

const tvarkarastisDiv = document.querySelector('.tvarkarastis__div');
const tvarkarastisPirm = document.querySelector('#pirmadienis');
const tvarkarastisAntr = document.querySelector('#antradienis');
const tvarkarastisTrec = document.querySelector('#treciadienis');
const tvarkarastisKetv = document.querySelector('#ketvirtadienis');
const tvarkarastisPenkt = document.querySelector('#penktadienis');
const tvarkarastisSest = document.querySelector('#sestadienis');
const tvarkarastisSkm = document.querySelector('#sekmadienis');

let markupGen = (dalykas, laikas, adresas, miestas) => {
  let markup = `
  <tr>
  <td class="font-size">${dalykas}</td>
  <td class="grey_text">${laikas}</td>
  <td class="grey_text">${adresas}</td>
  <td class="grey_text">${miestas}</td>
  <td><span class="registruotis">Registruotis</span></td>
  </tr>
  `;
  return markup;
};

fetch(`http://ismoko.realpro.lt/tvarkarastis`)
  .then(result => {
    return result.json();
  })
  .then(data => {
    data.results.forEach(i => {
      if (i.diena === 'Pirmadienis' || i.diena === 'pirmadienis') {
        tvarkarastisPirm.insertAdjacentHTML('beforeend', markupGen(i.dalykas, i.laikas, i.adresas, i.miestas));
      } else if (i.diena === 'Antradienis' || i.diena === 'antradienis') {
        tvarkarastisAntr.insertAdjacentHTML('beforeend', markupGen(i.dalykas, i.laikas, i.adresas, i.miestas));
      } else if (i.diena === 'Trečiadienis' || i.diena === 'trečiadienis') {
        tvarkarastisTrec.insertAdjacentHTML('beforeend', markupGen(i.dalykas, i.laikas, i.adresas, i.miestas));
      } else if (i.diena === 'Ketvirtadienis' || i.diena === 'ketvirtadienis') {
        tvarkarastisKetv.insertAdjacentHTML('beforeend', markupGen(i.dalykas, i.laikas, i.adresas, i.miestas));
      } else if (i.diena === 'Penktadienis' || i.diena === 'penktadienis') {
        tvarkarastisPenkt.insertAdjacentHTML('beforeend', markupGen(i.dalykas, i.laikas, i.adresas, i.miestas));
      } else if (i.diena === 'Šeštadienis' || i.diena === 'šeštadienis') {
        tvarkarastisSest.insertAdjacentHTML('beforeend', markupGen(i.dalykas, i.laikas, i.adresas, i.miestas));
      } else if (i.diena === 'Sekmadienis' || i.diena === 'sekmadienis') {
        tvarkarastisSkm.insertAdjacentHTML('beforeend', markupGen(i.dalykas, i.laikas, i.adresas, i.miestas));
      }
    });
  })
  .catch(err => console.log(err));
