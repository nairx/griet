let students = [
  { name: "Sowmya", user: "SowmyaManukonda" ,rank:3},
  { name: "Pallavi Thanguturu", user: "pallaviii1210" ,rank:3},
  { name: "Bytakpatil Balaji", user: "BytakpatilBalaji123" ,rank:3},
  { name: "V.Srihitha", user: "Srihitha47" ,rank:1},
  { name: "Spoortika", user: "Spoortika" ,rank:3},
  { name: "Kwisha Shah", user: "kwishashah" ,rank:1},
  { name: "Bolla Aniksha", user: "aniksha24" ,rank:1},
  { name: "Srihitha Medi", user: "srihithamedi" ,rank:3},
  { name: "Sruthika", user: "sruthika111" ,rank:3},
  { name: "Sai Krishna", user: "Saikrishna15035" ,rank:3},
  { name: "O. Santhosh", user: "Santhu19s" ,rank:3},
  { name: "Snehith Reddy B", user: "snehithreddybanala03" ,rank:3},
  { name: "Tanuja Prathipati", user: "tanuja-prathipati" ,rank:3},
  { name: "V C Sreehaasa", user: "vc-s" ,rank:3},
  { name: "Nayandeep", user: "nayan9924" ,rank:3},
  { name: "Goutham Krishna", user: "goutham1611" ,rank:3},
  { name: "Praveen Raj", user: "praveenrajofficial0" ,rank:3},
  { name: "kalyan", user: "Kalyan036" ,rank:3},
  { name: "Shaik Kareena", user: "kareena6009" ,rank:3},
  { name: "Koyyada Saipooja", user: "Saipooja02" ,rank:3},
  { name: "P.Vaishnavi", user: "Vaishnavi5265" ,rank:3},
  { name: "B.Niharika", user: "Niharika237" ,rank:3},
  { name: "Sydugari Srinaya", user: "Srinaya29" ,rank:3},
  { name: "Abhinav U", user: "abhinavu0701" ,rank:3},
  { name: "Sathwika", user: "Sathwika2411" ,rank:3},
  { name: "Rishitha", user: "rishithabhatt" ,rank:3},
  { name: "GunjalaSiddartha", user: "GunjalaSiddartha" ,rank:3},
  { name: "Koushik Reddy", user: "koushikreddyperi" ,rank:3},
  { name: "Kethavath Pavankalyan", user: "k-pavankalyan" ,rank:3},
  { name: "Gayathri Kodipaka", user: "GayathriKodipaka" ,rank:3},
  { name: "Patlolla Vardhana", user: "Varuu04" ,rank:3},
  { name: "Kompalli Sri Divya", user: "DivyaKompalli" ,rank:3},
  { name: "T Varshini", user: "Varshini8916" ,rank:3},
  { name: "K.Geetha", user: "GeethaKethavath" ,rank:3},
  { name: "G.Saipriya", user: "Saipriya-173" ,rank:3},
  { name: "G S PANKAJ", user: "Cosmovate" ,rank:3},
  { name: "Himadri Chakraborty", user: "Himadri-16" ,rank:3},
  { name: "N.vishal", user: "github-visual" ,rank:3},
  { name: "P. Sai Sneha", user: "Sneha0317" ,rank:3},
  { name: "Srihitha Simhadri", user: "SRIHITHA0" ,rank:3},
  { name: "Rishikesh potha", user: "Rishikeshpotha" ,rank:3},
  { name: "Sandeep Mouli", user: "Sandeep7003" ,rank:3},
  { name: "Harshitha", user: "harshitha-1911" ,rank:3},
  { name: "Aravind Bathula", user: "Aravind-3110" ,rank:3},
  { name: "Chidvilasini", user: "Chidvilasin29" ,rank:3},
  { name: "Shashi Kiran", user: "kiran739642" ,rank:3},
  { name: "Akash.P", user: "akash10233" ,rank:3},
  { name: "jatin", user: "Jatin2805" ,rank:3},
  { name: "Prasanna Katipally", user: "prasannakatipally" ,rank:3},
  { name: "Aneesh Bashaboina", user: "Aneeshitsc" ,rank:3},
  { name: "Sai Bhaskar", user: "saibhaskar15702" ,rank:3},
  { name: "Harshitha Chakicherla", user: "harshithachakicherla" ,rank:3},
  { name: "Chitte Maneesh", user: "maneeshchitte" ,rank:3},
  { name: "Garlapalli Hridaya", user: "Hridaya08" ,rank:3},
  { name: "Ajay Panyala", user: "ajaypanyala02" ,rank:3},
  { name: "Aneesh Bashaboina", user: "Aneeshitsc" ,rank:3},
  { name: "Srinidhi Kothakapu", user: "SrinidhiKothakapu" ,rank:3},
  { name: "Hari krishna", user: "hari-0604" ,rank:3},
  { name: "J.Ramya", user: "jalagamramyaa" ,rank:3},
  { name: "sairisheek", user: "sairisheek4" ,rank:3},
  { name: "Jatin", user: "Jatin2805" ,rank:3},
  { name: "Svapnnika", user: "Svapnnika" ,rank:3},
  { name: "Svapnnika", user: "Svapnnika" ,rank:3},
  { name: "Hiranya", user: "HiranyaMadupu07" ,rank:3},
  { name: "Gorrepati Akshaya", user: "Akshaya289868" ,rank:3},
  { name: "Kota Avinash", user: "Kotaavinash14112004" ,rank:3},
  { name: "MOKSHITH REDDY M", user: "Nani080" ,rank:1},
  { name: "Srivalli", user: "srivallig18" ,rank:3},
  { name: "Chethan Kumar Ganji", user: "chethan3065" ,rank:3},
  { name: "Guruvannagari Rishi", user: "rishirao07" ,rank:3},
  { name: "SUPRAJA", user: "supraja425" ,rank:3},
  { name: "Sanjana Ganji", user: "Sanjana5523" ,rank:3},
  { name: "Riyan", user: "RIYAN3412" ,rank:3},
  { name: "Sindhu", user: "sindhu1301" ,rank:3},
  { name: "Hasini Kadali", user: "Hasinikadali" ,rank:3},
  { name: "Abhiram Bonagiri", user: "AbhiramBonagiri" ,rank:3},
  { name: "Snehith Ambewar", user: "snehith1308" ,rank:3},
  { name: "Anusha", user: "Anusha2456" ,rank:3},
  { name: "K.SAHIT", user: "KSAHIT" ,rank:3},
  { name: "Abhishek", user: "abhishek25n" ,rank:3},
  { name: "A santhosh", user: "Santhosh17062005" ,rank:3},
  { name: "Yashasvi", user: "Yashasvi692" ,rank:3},
  { name: "Kalyani Advala", user: "kalyaniadvala" ,rank:3},
  { name: "srivarsha", user: "Srivarshalinga" ,rank:3},
  { name: "Nithinkumar", user: "Nithinkumar2710" ,rank:3},
  { name: "Poojith Rangineni", user: "PoojithRangineni" ,rank:3},
  { name: "Vishnu Vardhan", user: "vishnuec" ,rank:3},
  { name: "Pranay Gaddameedi", user: "pranay8940" ,rank:3},
  { name: "K.Sanjay", user: "SanjayKuna" ,rank:3},
  { name: "N.Sankeerthana", user: "sankeerthana0302" ,rank:3},
  { name: "Mahender", user: "Mahender0223" ,rank:3},
  { name: "Yadavalli Vinesh", user: "YadavalliVinesh" ,rank:3},
  { name: "Y.mohana kalyani", user: "mohana65" ,rank:3},
  { name: "V.Gangothri", user: "gangothri15" ,rank:3},
  { name: "Praneeth Ravuri", user: "rpraneeths" ,rank:3},
  { name: "Poojith Rangineni", user: "PoojithRangineni" ,rank:3},
  { name: "Akshitha Kotte", user: "akshithakotte" ,rank:3},
  { name: "krishnaveni pastam", user: "krishnaveni45" ,rank:3},
  { name: "Shekar", user: "shekar345" ,rank:3},
  { name: "krishnaveni pastam", user: "krishnaveni45" ,rank:3},
  { name: "Victor Joseph", user: "victorjoseph02" ,rank:3},
  { name: "Bhupathi Sreemeghana", user: "Sreemeghana17" ,rank:3},
  { name: "Karthik Chowdary", user: "karthikck8143" ,rank:3},
  { name: "Quadeer", user: "Quadeer-Q" ,rank:3},
  { name: "Akhil Kasturi", user: "akhil00045" ,rank:3},
  { name: "Sudheendra V", user: "Sudheendrav" ,rank:3},
  { name: "Jayasri", user: "Jayasri934" ,rank:3},
  { name: "R. Sree Tripura", user: "sreetripura" ,rank:3},
  { name: "Sai Kiran", user: "saikiranobali45" ,rank:3},
  { name: "Snehika", user: "snehika22" ,rank:3},
  { name: "Manitheja", user: "yanala502" ,rank:3},
  { name: "Aditya Reddy", user: "battureddy0408" ,rank:3},
  { name: "Vineeth", user: "vineeth60" ,rank:3},
  { name: "Kiran Kumar", user: "KiranKumar529" ,rank:3},
  { name: "Shashikanth", user: "sashikanth45" ,rank:3},
  { name: "Jeethender", user: "jeethendar0" ,rank:3},
  { name: "Monika Lakshmi", user: "Monikalakshmic8" ,rank:3},
  { name: "Upputuri Vaishnavi", user: "Vaishnavi150705" ,rank:3},
  { name: "Rugvedh", user: "ravurirugvedh12" ,rank:3},
  { name: "Avinash", user: "masiavinash" ,rank:3},
  { name: "Aditya", user: "adityavegesana9" ,rank:3},
  { name: "Mahitha", user: "Mahitha23" ,rank:3},
  { name: "Deepika", user: "deepikavytla24" ,rank:3},
  { name: "Samatha", user: "samatha-07" ,rank:3},
  { name: "Arun Daniel", user: "ardan278" ,rank:3},
  { name: "Shashank", user: "Shashank171204" ,rank:3},
  { name: "Rajeev", user: "Rajeevreddyyy" ,rank:3},
  { name: "Balaji", user: "Baluyadav28" ,rank:1},
  { name: "M S Tahameer", user: "MSTahameer" ,rank:3},
  { name: "Sai Praneeth", user: "SaiPraneeth2713" ,rank:3},
  { name: "Vijay", user: "Vijaykumar1233" ,rank:3},
  { name: "Pardhiv", user: "pardhivvarma113" ,rank:3},
  { name: "Varsha", user: "Varshakatakamsetty" ,rank:3},
  { name: "Abhishek", user: "abhishek25n" ,rank:3},
  { name: "Sanjay", user: "SanjayKuna" ,rank:3},
  { name: "Girish", user: "girishreddy14" ,rank:3},
  { name: "Fawaz", user: "flameAlc" ,rank:3},
  { name: "Victor", user: "victorjoseph02" ,rank:3},
  { name: "Abhinav", user: "abhinavalaxman" ,rank:3},
  { name: "Bingi Shiva", user: "Bingishivaganesh" ,rank:3},
  { name: "Sukumar", user: "sukumar1919" ,rank:3},
  { name: "Suansh", user: "Suansh25" ,rank:1},
  { name: "Gopikrishna", user: "GopiMudela" ,rank:3},
  { name: "Vishal", user: "vishal-1212" ,rank:3},
  { name: "Sukumar", user: "sukumar1919" ,rank:3},
  { name: "Akshitha", user: "akshitha246" ,rank:3},
  { name: "Keerthana", user: "keerthana045" ,rank:3},
  { name: "Manogna", user: "Manogna24-tech" ,rank:3},
  { name: "Tilak", user: "BunnyTilak" ,rank:3},
  { name: "Neha", user: "nehareddy-0408" ,rank:3},
  { name: "Medhasri", user: "Medhasri2004" ,rank:3},
  { name: "Meghana", user: "KammamMeghana" ,rank:3},
  { name: "Harminder", user: "harminderkour" ,rank:3},
  { name: "Pavani", user: "Yallapavani" ,rank:3},
  { name: "Aruna Sekhar", user: "arunasekhary" ,rank:3},
  { name: "Shreshta", user: "KandagatlaShreshta" ,rank:3},
  { name: "Padmaja", user: "padmaja-3" ,rank:3},
  { name: "Yashwanth", user: "yashwanthkethireddy28" ,rank:3},
  { name: "Vardhan", user: "vardhan-05" ,rank:3},
  { name: "Shruti", user: "Shruti-613" ,rank:3},
  { name: "Saahiti", user: "Saahitii" ,rank:3},
  { name: "Hansika", user: "Hansika1707" ,rank:3},
  { name: "Charan", user: "charan0605" ,rank:3},
];
