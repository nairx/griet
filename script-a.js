let students = [
    { name: "Jishnu sai", user: "Jishnu1501" },
    { name: "Tarun Sandilya", user: "professionaltarun2004" },
    { name: "Anusha.T", user: "anusha0225" },
    { name: "vijay chakali", user: "vijaychanduri" },
    { name: "Varsha", user: "Varsha-9" },
    { name: "P Sai Ruthvika", user: "ruthvikap" },
    { name: "Arra Deepthi", user: "arradeepthi" },
    { name: "Shruthi", user: "Shruthi27015" },
    { name: "Aravind Medi", user: "Aravind-medi-14" },
    { name: "Astuti Sinha", user: "itsastutiii" },
    { name: "Kaushal Kulkarni", user: "kaushal-345" },
    { name: "Sriya", user: "sriya7824" },
    { name: "G.Ananya", user: "ananya08ganapuram" },
    { name: "Vinod Makkala", user: "vinod-makkala77" },
    { name: "P.PRANAVSAI", user: "Pranavsai1410" },
    { name: "Rajavardhan Reddy", user: "rajavardhan-03" },
    { name: "Bhavya Parupalli", user: "Bhavya-Parupalli" },
    { name: "Harsha Vardhini", user: "Harshavardhini84" },
    { name: "Mokshith naidu", user: "Mokshithnaidu14" },
    { name: "Aruna Sekhar", user: "arunasekhary" },
    { name: "P.Pavan Kalyan", user: "pavan123kalyan" },
    { name: "Anushka Kumar", user: "ak-2609" },
    { name: "Sravani", user: "ammu29-09" },
    { name: "Nithya", user: "LunarExplorer21" },
    { name: "G.Malleshwari", user: "Malleshwari614" },
    { name: "Harminder Kour", user: "hk1105" },
    { name: "Mohana Pusuluru", user: "mohana1805" },
    { name: "Kethana", user: "kethanachowdary" },
    { name: "Yochana P", user: "Yochhhhh" },
    { name: "kavya Boddu", user: "kavya-310" },
    { name: "Chandrabhanuprasad", user: "bhanu07x" },
    { name: "Purna Rupika", user: "PurnaRupika" },
    { name: "Kurremla Nikitha", user: "NikithaKurremla" },
    { name: "sumaiya khushnum", user: "sumaiya-58" },
    { name: "Lalit Aditya", user: "Lalit-58" },
    { name: "Anusha.T", user: "anusha0225" },
    { name: "P. Pragna Reddy", user: "PragnaReddy20" },
    { name: "A.Harshith", user: "harshithreddy12377" },
    { name: "Manaswi Thotla", user: "Manaswithotla17" },
    { name: "B.Akshitha", user: "Akshitha246" },
    { name: "Dheeraj Thummalapenta", user: "dt7768181" },
    { name: "Shyamala Akhila", user: "akhilashyamala90" },
    { name: "Sai Varshith", user: "ssvc2005" },
    { name: "saiteja", user: "saitejaambati" },
    { name: "Thumma Sai Krishna", user: "thummasaikrishna" },
    { name: "I.Ruthwik Sai", user: "iruthwiksai" },
    { name: "N.Sravya", user: "nadirgesravya" },
    { name: "Pavan Kumar", user: "Pavan024506" },
    { name: "Medisetti Vinutna", user: "vinutna1204" },
    { name: "Kammam Meghana", user: "KammamMeghana" },
    { name: "Kamati Sravani", user: "sravanikamati09" },
    { name: "Siddoju Nagavarshith", user: "VarshithSidhoju" },
    { name: "Karthik Gandla", user: "gkarthik27" },
    { name: "Rohan Venkat", user: "rohanvenkat229" },
    { name: "khajamohinuddin", user: "khaja1818" },
    { name: "A Veera Prasad", user: "Veeraarigela" },
    { name: "Gaddi Sai Krishna", user: "gaddisai" },
    { name: "kappi ganesh", user: "Ganeshk2005" },
    { name: "Varshith", user: "varshith-0405" },
    { name: "Addanki Sai Sujith", user: "SujithAddanki" },
    { name: "Shivani", user: "Shivani19406" },
    { name: "Sai Srujana", user: "srujana345" },
    { name: "Mani Sivani Valluri", user: "sivani111" },
    { name: "Shinde Harshitha", user: "Harshitha374" },
    { name: "Mamatha Remudala", user: "Mamatha7d" },
    { name: "Manne Ankitha", user: "ankithamanne" },
    { name: "Tirtha gonepelly", user: "Tirtha047" },
    { name: "Nithika Reddy", user: "Nithika05" },
    { name: "Manvitha Reddy", user: "manvithareddychintha" },
    { name: "Uthkarsh", user: "uthkarsh1628" },
    { name: "AJAY NAG", user: "Ajaynag2326" },
    { name: "Bandarupalli Pranitha", user: "B-Pranitha" },
    { name: "amrutha", user: "aamrutha0208" },
    { name: "deepesh reddy", user: "deepesh729" },
    { name: "N.Sushmitha", user: "sushmithanagula" },
    { name: "N.vyshnavi", user: "vyshnavi5544" },
    { name: "sannitha", user: "sannitha-kalewar" },
    { name: "Vinukonda Ushaswini", user: "ushaswinivinukonda" },
    { name: "G.Mukhesh", user: "mukhesh22" },
    { name: "Satvikeya", user: "Satvikeya" },
    { name: "Lohitha gouri", user: "lohithagouri" },
    { name: "Rahul Sangubotla", user: "RahulSangubotla" },
    { name: "Ayush Singh", user: "IDKYICODE" },
    { name: "Vagmi reddy", user: "Vagmireddy" },
    { name: "Abdul Samad", user: "reporanger07" },
    { name: "Ajay", user: "ajayinjapuri" },
    { name: "RASHMI JANNU", user: "rashmijannu" },
    {name:'Vellamchety Naga Sai Hari Priya',user:'NagaSaiHariPriya05'},
    {name:'A. Prabhas Chandra',user:'Pchandra2005'},
    {name:'Lok Vardhan',user:'lok005'},
    {name:'Dinesh Ragipani',user:'Dineshragipani'},
    {name:'vvpsaiganesh',user:'ganesh-61'},
    {name:'sowmya',user:'sowmya567'},
    {name:'Siddhartha',user:'siddharth0518'},
    {name:'Dhruvan Kanthali',user:'kanthalidhruvan'},
    {name:'charanya',user:'charanyachiluka'},
    {name:'T.Mallikarjuna chary',user:'mallikchary'},
    {name:'M.Manideep',user:'Manideep9308'},
    {name:'T.Sree Kumar Reddy',user:'tsreekumarreddy'},
    {name:'R Girish Reddy',user:'girishreddy14'},
    {name:'Praneeth seri',user:'Praneeth8888'},
    {name:'Gouni Parinitha Reddy',user:'ParinithaReddy05'},
    {name:'Heena Begum',user:'Heena-Begum516'},
    {name:'yedla saivenkat reddy',user:'saivenkat577'},
    {name:'Geyasri',user:'Geyasri2004'},
    {name:'Nishal M',user:'nishalm123'},
    {name:'Sathwika',user:'Sathwika171201'},
    {name:'Bharath Kumar',user:'Bharathkumar918'},
    {name:'Manoj',user:'ManojJallipalli'},
    {name:'Sai Krishna Enugu',user:'saikrishnardy'},
    {name:'Neeraj',user:'neeraj2442'},
    {name:'Velivela Purva Akshita',user:'Purvaakshita'},
    {name:'Vankudavath Anusha',user:'anushapamar18'},
    {name:'SAI KIRAN',user:'Saikiran0609'},
    {name:'Y.Smitha',user:'smithagithu'},
    {name:'Vanam Sai Krishna',user:'Saikrishna261004'},
    {name:'Keerthana Gunjala',user:'keerthana045'},
    {name:'C. Manogna',user:'Manogna24-tech'},
    {name:'Charishma Reddy',user:'Charishma-1234'},
    {name:'S.Poojitha',user:'Pooja1231234'},
    {name:'yedla saivenkat reddy',user:'saivenkat577'},
    {name:'Manish kumar',user:'Manish-925'},
    {name:'Sakshi Besi',user:'sakshi19'},
    {name:'saivarshit',user:'saivarshit080'},
    {name:'VISLAVATH GOVIND',user:'VGovind'},
    {name:'POLE SAMPATH KUMAR',user:'sampathkumarpole16'},
    {name:'Sasank',user:'Sasank8654'},
    {name:'Raithu srija',user:'Raithusrija'},
    {name:'Priyadarshini',user:'Honeypriya21'},
    {name:'Afreen Mohammad',user:'Afreen234'},
    {name:'Sasank',user:'Sasank8654'},
    {name:'P Shoumik',user:'shoumik0908'},
    {name:'Sakshi Besi',user:'sakshi-1919'},
    {name:'Praneeth',user:'praneeth1812'},
    {name:'Gadepranay',user:'gadepranay32'},
    {name:'Srujan',user:'srujan1607'},
    {name:'Omkar',user:'Omkar1293'},
    {name:'Renish',user:'RenishReddy'},
    {name:'David Kumar',user:'iamtony19'},
    
  ];