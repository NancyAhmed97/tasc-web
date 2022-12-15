import React from "react";
// import ReactPaginate from "react-paginate";
import "./Map.css";
function Map() {
  // const JsonData = [
  //   {
  //     id: 1,
  //     firstName: "Phineas",
  //     lastName: "Franciottoi",
  //     email: "pfranciottoi0@hostgator.com",
  //     password: "y0pWrGzmDz",
  //   },
  //   {
  //     id: 2,
  //     firstName: "Mikel",
  //     lastName: "Gregoli",
  //     email: "mgregoli1@amazon.de",
  //     password: "G0VfMCL",
  //   },
  //   {
  //     id: 3,
  //     firstName: "Moira",
  //     lastName: "Mazzilli",
  //     email: "mmazzilli2@163.com",
  //     password: "3GgdWoOfT",
  //   },
  //   {
  //     id: 4,
  //     firstName: "Kaja",
  //     lastName: "True",
  //     email: "ktrue3@washington.edu",
  //     password: "N6032b",
  //   },
  //   {
  //     id: 5,
  //     firstName: "Robbie",
  //     lastName: "Mc Harg",
  //     email: "rmcharg4@scientificamerican.com",
  //     password: "9aYRY2B5Jgj",
  //   },
  //   {
  //     id: 6,
  //     firstName: "Niki",
  //     lastName: "Daber",
  //     email: "ndaber5@army.mil",
  //     password: "ccKCMM",
  //   },
  //   {
  //     id: 7,
  //     firstName: "Rana",
  //     lastName: "Gyrgorwicx",
  //     email: "rgyrgorwicx6@booking.com",
  //     password: "1R3G2WJ",
  //   },
  //   {
  //     id: 8,
  //     firstName: "Johnette",
  //     lastName: "Torricella",
  //     email: "jtorricella7@discuz.net",
  //     password: "l6Fip9FINxzR",
  //   },
  //   {
  //     id: 9,
  //     firstName: "Kristoforo",
  //     lastName: "Slinn",
  //     email: "kslinn8@scribd.com",
  //     password: "pT35uEWU5y",
  //   },
  //   {
  //     id: 10,
  //     firstName: "Wye",
  //     lastName: "Bushrod",
  //     email: "wbushrod9@infoseek.co.jp",
  //     password: "ElyzUYgyyWC",
  //   },
  //   {
  //     id: 11,
  //     firstName: "Aline",
  //     lastName: "Boydle",
  //     email: "aboydlea@woothemes.com",
  //     password: "bnpqvhjNN",
  //   },
  //   {
  //     id: 12,
  //     firstName: "Dall",
  //     lastName: "Ettritch",
  //     email: "dettritchb@wiley.com",
  //     password: "l4LSCXxY",
  //   },
  //   {
  //     id: 13,
  //     firstName: "Wynn",
  //     lastName: "Vautier",
  //     email: "wvautierc@dagondesign.com",
  //     password: "w5E58sLnrvzf",
  //   },
  //   {
  //     id: 14,
  //     firstName: "Cami",
  //     lastName: "Pfaffe",
  //     email: "cpfaffed@auda.org.au",
  //     password: "Ne8TDr",
  //   },
  //   {
  //     id: 15,
  //     firstName: "Althea",
  //     lastName: "Wenzel",
  //     email: "awenzele@discuz.net",
  //     password: "c9pEP94",
  //   },
  //   {
  //     id: 16,
  //     firstName: "Charlotte",
  //     lastName: "McAvey",
  //     email: "cmcaveyf@bloglovin.com",
  //     password: "MvRQqJUS0",
  //   },
  //   {
  //     id: 17,
  //     firstName: "Nickolas",
  //     lastName: "Swift",
  //     email: "nswiftg@taobao.com",
  //     password: "OXfdghdGt",
  //   },
  //   {
  //     id: 18,
  //     firstName: "Cybill",
  //     lastName: "Coward",
  //     email: "ccowardh@cnn.com",
  //     password: "UO7XQFU",
  //   },
  //   {
  //     id: 19,
  //     firstName: "Chauncey",
  //     lastName: "Patey",
  //     email: "cpateyi@ucsd.edu",
  //     password: "ufq5VPTPiE",
  //   },
  //   {
  //     id: 20,
  //     firstName: "Gregorius",
  //     lastName: "Petch",
  //     email: "gpetchj@constantcontact.com",
  //     password: "bgvb9gvv",
  //   },
  //   {
  //     id: 21,
  //     firstName: "Smith",
  //     lastName: "Pratton",
  //     email: "sprattonk@flavors.me",
  //     password: "7uTY1Zi7l",
  //   },
  //   {
  //     id: 22,
  //     firstName: "Farrell",
  //     lastName: "Tennock",
  //     email: "ftennockl@newsvine.com",
  //     password: "X0SYV4QalqHV",
  //   },
  //   {
  //     id: 23,
  //     firstName: "Jacky",
  //     lastName: "Venediktov",
  //     email: "jvenediktovm@skype.com",
  //     password: "SmzmsDflONe",
  //   },
  //   {
  //     id: 24,
  //     firstName: "Bordie",
  //     lastName: "Chaunce",
  //     email: "bchauncen@vk.com",
  //     password: "AIeZPnJfJ59",
  //   },
  //   {
  //     id: 25,
  //     firstName: "Francklin",
  //     lastName: "Lydiate",
  //     email: "flydiateo@sogou.com",
  //     password: "2BX7gn4wX4Qd",
  //   },
  //   {
  //     id: 26,
  //     firstName: "Eloise",
  //     lastName: "McEachern",
  //     email: "emceachernp@mediafire.com",
  //     password: "4uy6t7F2wC",
  //   },
  //   {
  //     id: 27,
  //     firstName: "Sidoney",
  //     lastName: "Jakeman",
  //     email: "sjakemanq@amazonaws.com",
  //     password: "qhdxMYSYz",
  //   },
  //   {
  //     id: 28,
  //     firstName: "Sam",
  //     lastName: "Ewestace",
  //     email: "sewestacer@si.edu",
  //     password: "1EHNnueb",
  //   },
  //   {
  //     id: 29,
  //     firstName: "Toby",
  //     lastName: "Peres",
  //     email: "tperess@sbwire.com",
  //     password: "MpkrGtYax",
  //   },
  //   {
  //     id: 30,
  //     firstName: "Vannie",
  //     lastName: "Treswell",
  //     email: "vtreswellt@free.fr",
  //     password: "9O0zX241AxC",
  //   },
  //   {
  //     id: 31,
  //     firstName: "Anette",
  //     lastName: "O' Molan",
  //     email: "aomolanu@paypal.com",
  //     password: "8P4CnX5",
  //   },
  //   {
  //     id: 32,
  //     firstName: "Davis",
  //     lastName: "McCarroll",
  //     email: "dmccarrollv@newsvine.com",
  //     password: "7BPSrH",
  //   },
  //   {
  //     id: 33,
  //     firstName: "Felicia",
  //     lastName: "Trippick",
  //     email: "ftrippickw@harvard.edu",
  //     password: "h71xhi3yu",
  //   },
  //   {
  //     id: 34,
  //     firstName: "Jarad",
  //     lastName: "Korda",
  //     email: "jkordax@aboutads.info",
  //     password: "G3zzZXN8s0Xi",
  //   },
  //   {
  //     id: 35,
  //     firstName: "Camile",
  //     lastName: "Bowbrick",
  //     email: "cbowbricky@google.ru",
  //     password: "sA0flu3eb",
  //   },
  //   {
  //     id: 36,
  //     firstName: "Gabie",
  //     lastName: "Peschke",
  //     email: "gpeschkez@google.com.br",
  //     password: "oXhYp9qE",
  //   },
  //   {
  //     id: 37,
  //     firstName: "Bellina",
  //     lastName: "Winslett",
  //     email: "bwinslett10@umn.edu",
  //     password: "yppNRNnHI",
  //   },
  //   {
  //     id: 38,
  //     firstName: "Darice",
  //     lastName: "Capnerhurst",
  //     email: "dcapnerhurst11@oakley.com",
  //     password: "N6xr56v",
  //   },
  //   {
  //     id: 39,
  //     firstName: "Rhody",
  //     lastName: "Smidmor",
  //     email: "rsmidmor12@hostgator.com",
  //     password: "8l3afkguz",
  //   },
  //   {
  //     id: 40,
  //     firstName: "Mariann",
  //     lastName: "Ewbanks",
  //     email: "mewbanks13@g.co",
  //     password: "lexFJT",
  //   },
  //   {
  //     id: 41,
  //     firstName: "Tove",
  //     lastName: "Mintram",
  //     email: "tmintram14@dyndns.org",
  //     password: "eSjst5Qnp3e7",
  //   },
  //   {
  //     id: 42,
  //     firstName: "Suki",
  //     lastName: "Gude",
  //     email: "sgude15@mozilla.org",
  //     password: "7dm76dV",
  //   },
  //   {
  //     id: 43,
  //     firstName: "Eadie",
  //     lastName: "Hanscom",
  //     email: "ehanscom16@about.com",
  //     password: "6RRxuBH",
  //   },
  //   {
  //     id: 44,
  //     firstName: "Floria",
  //     lastName: "Jammes",
  //     email: "fjammes17@va.gov",
  //     password: "yj551GT",
  //   },
  //   {
  //     id: 45,
  //     firstName: "Hebert",
  //     lastName: "Jellicorse",
  //     email: "hjellicorse18@altervista.org",
  //     password: "qZdrMaXyyQYb",
  //   },
  //   {
  //     id: 46,
  //     firstName: "Boris",
  //     lastName: "Ferrar",
  //     email: "bferrar19@utexas.edu",
  //     password: "sd6pfVpLV8QP",
  //   },
  //   {
  //     id: 47,
  //     firstName: "Cammi",
  //     lastName: "Drysdall",
  //     email: "cdrysdall1a@scientificamerican.com",
  //     password: "4ubb1U",
  //   },
  //   {
  //     id: 48,
  //     firstName: "Berte",
  //     lastName: "Jonin",
  //     email: "bjonin1b@51.la",
  //     password: "eUoR349DzcZ",
  //   },
  //   {
  //     id: 49,
  //     firstName: "Clive",
  //     lastName: "Ferruzzi",
  //     email: "cferruzzi1c@zdnet.com",
  //     password: "t9cQK9",
  //   },
  //   {
  //     id: 50,
  //     firstName: "Fayina",
  //     lastName: "Shuttleworth",
  //     email: "fshuttleworth1d@wikia.com",
  //     password: "W36QVvps",
  //   },
  //   {
  //     id: 51,
  //     firstName: "Normie",
  //     lastName: "Mainston",
  //     email: "nmainston1e@imdb.com",
  //     password: "9jLMLFixuQj",
  //   },
  //   {
  //     id: 52,
  //     firstName: "Astrid",
  //     lastName: "Genner",
  //     email: "agenner1f@ning.com",
  //     password: "9iKPdbc",
  //   },
  //   {
  //     id: 53,
  //     firstName: "Cal",
  //     lastName: "Linley",
  //     email: "clinley1g@gov.uk",
  //     password: "SGduiWYJ8g",
  //   },
  //   {
  //     id: 54,
  //     firstName: "Aristotle",
  //     lastName: "Shuter",
  //     email: "ashuter1h@nasa.gov",
  //     password: "lGKjzhQiDt",
  //   },
  //   {
  //     id: 55,
  //     firstName: "Nichole",
  //     lastName: "Cunnow",
  //     email: "ncunnow1i@theatlantic.com",
  //     password: "iAtP5BG2F",
  //   },
  //   {
  //     id: 56,
  //     firstName: "Ariela",
  //     lastName: "Petroff",
  //     email: "apetroff1j@time.com",
  //     password: "v9Iq7STrPC",
  //   },
  //   {
  //     id: 57,
  //     firstName: "Ursa",
  //     lastName: "Petrolli",
  //     email: "upetrolli1k@weibo.com",
  //     password: "IfoexFK",
  //   },
  //   {
  //     id: 58,
  //     firstName: "Sarina",
  //     lastName: "Ladloe",
  //     email: "sladloe1l@home.pl",
  //     password: "EMRRkF5GFl",
  //   },
  //   {
  //     id: 59,
  //     firstName: "Lexie",
  //     lastName: "Saban",
  //     email: "lsaban1m@drupal.org",
  //     password: "r83XKMMz",
  //   },
  //   {
  //     id: 60,
  //     firstName: "Ewen",
  //     lastName: "Bradburne",
  //     email: "ebradburne1n@dmoz.org",
  //     password: "SMAHbA",
  //   },
  //   {
  //     id: 61,
  //     firstName: "Ab",
  //     lastName: "Crosscombe",
  //     email: "acrosscombe1o@about.me",
  //     password: "6tsghWe",
  //   },
  //   {
  //     id: 62,
  //     firstName: "Britte",
  //     lastName: "Brewerton",
  //     email: "bbrewerton1p@sun.com",
  //     password: "iergPGTrLv",
  //   },
  //   {
  //     id: 63,
  //     firstName: "Danny",
  //     lastName: "Rowantree",
  //     email: "drowantree1q@tripod.com",
  //     password: "g70MNO75Bsl",
  //   },
  //   {
  //     id: 64,
  //     firstName: "Hirsch",
  //     lastName: "Mallindine",
  //     email: "hmallindine1r@pagesperso-orange.fr",
  //     password: "FQ3kwW",
  //   },
  //   {
  //     id: 65,
  //     firstName: "Amble",
  //     lastName: "de la Tremoille",
  //     email: "adelatremoille1s@symantec.com",
  //     password: "2RTHft",
  //   },
  //   {
  //     id: 66,
  //     firstName: "Michail",
  //     lastName: "Obispo",
  //     email: "mobispo1t@harvard.edu",
  //     password: "1ETqcMYC",
  //   },
  //   {
  //     id: 67,
  //     firstName: "Mireielle",
  //     lastName: "Sabbin",
  //     email: "msabbin1u@google.it",
  //     password: "JUqVagPX0Ig",
  //   },
  //   {
  //     id: 68,
  //     firstName: "Stillman",
  //     lastName: "Loosely",
  //     email: "sloosely1v@ed.gov",
  //     password: "CYTo2KtTDBs",
  //   },
  //   {
  //     id: 69,
  //     firstName: "Joeann",
  //     lastName: "Holhouse",
  //     email: "jholhouse1w@china.com.cn",
  //     password: "47HpnvtyT",
  //   },
  //   {
  //     id: 70,
  //     firstName: "Esta",
  //     lastName: "Assender",
  //     email: "eassender1x@adobe.com",
  //     password: "bOSN4shgMcAW",
  //   },
  //   {
  //     id: 71,
  //     firstName: "Renata",
  //     lastName: "Duetschens",
  //     email: "rduetschens1y@blogs.com",
  //     password: "4XdFdqpILBG",
  //   },
  //   {
  //     id: 72,
  //     firstName: "Seline",
  //     lastName: "Mardle",
  //     email: "smardle1z@wordpress.com",
  //     password: "owCC1qhm",
  //   },
  //   {
  //     id: 73,
  //     firstName: "Barty",
  //     lastName: "Giller",
  //     email: "bgiller20@infoseek.co.jp",
  //     password: "py2Ne7MQKX5",
  //   },
  //   {
  //     id: 74,
  //     firstName: "Merrel",
  //     lastName: "Darbishire",
  //     email: "mdarbishire21@bloglines.com",
  //     password: "MRedeUrYyCp",
  //   },
  //   {
  //     id: 75,
  //     firstName: "Roselia",
  //     lastName: "Cunniffe",
  //     email: "rcunniffe22@cnn.com",
  //     password: "kyachOw5Y",
  //   },
  //   {
  //     id: 76,
  //     firstName: "Catharine",
  //     lastName: "Davidowich",
  //     email: "cdavidowich23@reuters.com",
  //     password: "g3LDmxNfoJC",
  //   },
  //   {
  //     id: 77,
  //     firstName: "Milicent",
  //     lastName: "Twinn",
  //     email: "mtwinn24@opensource.org",
  //     password: "4sNdqSbksJX2",
  //   },
  //   {
  //     id: 78,
  //     firstName: "Niles",
  //     lastName: "Ashlee",
  //     email: "nashlee25@over-blog.com",
  //     password: "FarOtj",
  //   },
  //   {
  //     id: 79,
  //     firstName: "Gloria",
  //     lastName: "Adamou",
  //     email: "gadamou26@google.com.br",
  //     password: "NYwSfg",
  //   },
  //   {
  //     id: 80,
  //     firstName: "Mikael",
  //     lastName: "Fortey",
  //     email: "mfortey27@cocolog-nifty.com",
  //     password: "bRGyGHp",
  //   },
  //   {
  //     id: 81,
  //     firstName: "Latisha",
  //     lastName: "Gaynesford",
  //     email: "lgaynesford28@cnbc.com",
  //     password: "dLdKFoleYG7",
  //   },
  //   {
  //     id: 82,
  //     firstName: "Muffin",
  //     lastName: "Manuello",
  //     email: "mmanuello29@theatlantic.com",
  //     password: "EG8Q2VDrNmTe",
  //   },
  //   {
  //     id: 83,
  //     firstName: "Lenard",
  //     lastName: "Toombs",
  //     email: "ltoombs2a@trellian.com",
  //     password: "sta9OLGpUcgK",
  //   },
  //   {
  //     id: 84,
  //     firstName: "Melisent",
  //     lastName: "Ferrulli",
  //     email: "mferrulli2b@marriott.com",
  //     password: "tAzZCO1Q",
  //   },
  //   {
  //     id: 85,
  //     firstName: "Reynolds",
  //     lastName: "Robertacci",
  //     email: "rrobertacci2c@vk.com",
  //     password: "s1ts08",
  //   },
  //   {
  //     id: 86,
  //     firstName: "Napoleon",
  //     lastName: "Fishenden",
  //     email: "nfishenden2d@sitemeter.com",
  //     password: "FCNabrnGk",
  //   },
  //   {
  //     id: 87,
  //     firstName: "El",
  //     lastName: "Timbs",
  //     email: "etimbs2e@oaic.gov.au",
  //     password: "qX9aZc",
  //   },
  //   {
  //     id: 88,
  //     firstName: "Cooper",
  //     lastName: "Gillman",
  //     email: "cgillman2f@goo.gl",
  //     password: "cjRmMkGp",
  //   },
  //   {
  //     id: 89,
  //     firstName: "Milli",
  //     lastName: "Upfold",
  //     email: "mupfold2g@imgur.com",
  //     password: "RRXV7tLyBXV",
  //   },
  //   {
  //     id: 90,
  //     firstName: "Arielle",
  //     lastName: "Ambroisin",
  //     email: "aambroisin2h@a8.net",
  //     password: "9hSn0UXRfCy",
  //   },
  //   {
  //     id: 91,
  //     firstName: "Sharleen",
  //     lastName: "Slaght",
  //     email: "sslaght2i@europa.eu",
  //     password: "GIUferBdsx0",
  //   },
  //   {
  //     id: 92,
  //     firstName: "Renell",
  //     lastName: "Peepall",
  //     email: "rpeepall2j@xing.com",
  //     password: "QZpX2DOc0bV",
  //   },
  //   {
  //     id: 93,
  //     firstName: "Jenn",
  //     lastName: "Grumell",
  //     email: "jgrumell2k@amazonaws.com",
  //     password: "k61RRualIfpG",
  //   },
  //   {
  //     id: 94,
  //     firstName: "Katti",
  //     lastName: "Gogie",
  //     email: "kgogie2l@google.nl",
  //     password: "Y7gD9Zsx",
  //   },
  //   {
  //     id: 95,
  //     firstName: "Sherm",
  //     lastName: "Roe",
  //     email: "sroe2m@engadget.com",
  //     password: "19DM4At",
  //   },
  //   {
  //     id: 96,
  //     firstName: "Del",
  //     lastName: "Shakesby",
  //     email: "dshakesby2n@census.gov",
  //     password: "MPnFVxg0sMF",
  //   },
  //   {
  //     id: 97,
  //     firstName: "Sharai",
  //     lastName: "Martygin",
  //     email: "smartygin2o@ezinearticles.com",
  //     password: "Qpoatt2d2",
  //   },
  //   {
  //     id: 98,
  //     firstName: "Saundra",
  //     lastName: "McManamen",
  //     email: "smcmanamen2p@linkedin.com",
  //     password: "SwPAzaC",
  //   },
  //   {
  //     id: 99,
  //     firstName: "Petra",
  //     lastName: "Kildale",
  //     email: "pkildale2q@smh.com.au",
  //     password: "r2kPKb",
  //   },
  // ];
  // const [users, setUsers] = useState(JsonData.slice(0, 50));
  // const [pageNumber, setPageNumber] = useState(0);

  // const usersPerPage = 5;
  // const pagesVisited = pageNumber * usersPerPage;

  // const displayUsers = users
  //   .slice(pagesVisited, pagesVisited + usersPerPage)
  //   .map((user) => {
  //     return (
  //       <div className="user">
  //         <h3>{user.firstName}</h3>
  //         <h3>{user.lastName}</h3>
  //         <h3>{user.email}</h3>
  //       </div>
  //     );
  //   });

  // const pageCount = Math.ceil(users.length / usersPerPage);
  // console.log(usersPerPage);

  // const changePage = ({ selected }) => {
  //   setPageNumber(selected);
  // };

  return (
    <div className="map">
      {/* {displayUsers}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        breakLabel={"none"}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      /> */}
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.0361804573345!2d28.81335923513987!3d41.046337875031824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa5a9467aaaa9%3A0xada3018824e97e96!2sMy%20Office%20A%C4%9Fao%C4%9Flu%20212!5e0!3m2!1sar!2seg!4v1640687159782!5m2!1sar!2seg" width="1349" height="450" style={{border:"0",position:"relative",bottom:"-5px"}} allowfullscreen="" loading="lazy" title="map"></iframe>
    </div>
  );
}

export default Map;
