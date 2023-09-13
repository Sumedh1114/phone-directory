let filterarray = [];

let data = [
    {
        id: 1,
        name: "Sumedh Ghadi",
        dept: "RMD",
        mobile: "8898974056",
        image: "/images/man.png",
        location: "Mumbai",
        designation: "AM",
        addtoFav: "1",
        isApprove: "1",
        isApproveByHRMD:"1",
        email:"sumedh.ghadi@rbi.org.in"
    },
    {
        id: 2,
        name: "Romesh Gupta",
        dept: "HRMD",
        mobile: "8898974057",
        image: "/images/man.png",
        location: "Mumbai",
        designation: "GM",
        addtoFav: "1",
        isApprove: "1",
        isApproveByHRMD:"1",
        email:"romesh.gupta@rbi.org.in"
    },
    {
        id: 3,
        name: "Mrunal Koli",
        dept: "DIT",
        mobile: "8898974055",
        image: "/images/woman.png",
        location: "Banglore",
        designation: "CGM",
        addtoFav: "1",
        isApprove: "1",
        isApproveByHRMD:"1",
        email:"mrunal.koli@rbi.org.in"
    },
    {
        id: 4,
        name: "Sanket Keny",
        dept: "FIDD",
        mobile: "8898974058",
        image: "/images/man.png",
        location: "Mumbai",
        designation: "GM",
        addtoFav: "0",
        isApprove: "1",
        isApproveByHRMD:"1",
        email:"sanket.keny@rbi.org.in"
    },
    {
        id: 5,
        name: "Sawpnali Bhosle",
        dept: "RMD",
        mobile: "8898974054",
        image: "/images/woman.png",
        location: "Mumbai",
        designation: "GM",
        addtoFav: "0",
        isApprove: "1",
        isApproveByHRMD:"1",
        email:"sawpnali.bhosle@rbi.org.in"
    },
    {
        id: 6,
        name: "Diksha Jaiswal",
        dept: "HRMD",
        mobile: "8898974123",
        image: "/images/woman.png",
        location: "Pune",
        designation: "GM",
        addtoFav: "0",
        isApprove: "1",
        isApproveByHRMD:"1",
        email:"diksha.jaiswal@rbi.org.in"
    },
    {
        id: 7,
        name: "Vinod Pawar",
        dept: "DIT",
        mobile: "88989740234",
        image: "/images/man.png",
        location: "Banglore",
        designation: "AGM",
        addtoFav: "0",
        isApprove: "0",
        isApproveByHRMD:"0",
        email:"vinod.pawar@rbi.org.in"
    },
    {
        id: 8,
        name: "Tushar Duratkar",
        dept: "FIDD",
        mobile: "88989740345",
        image: "/images/man.png",
        location: "Mumbai",
        designation: "CGM",
        addtoFav: "0",
        isApprove: "0",
        isApproveByHRMD:"0",
        email:"tushar.duratkar@rbi.org.in"
    },
    {
        id: 9,
        name: "Samrudhi Devrukhkar",
        dept: "RMD",
        mobile: "8898974456",
        image: "/images/woman.png",
        location: "Mumbai",
        designation: "GM",
        addtoFav: "0",
        isApprove: "0",
        isApproveByHRMD:"0",
        email:"samrudhi.devrukhkar@rbi.org.in"
    },
    {
        id: 10,
        name: "Gismi Pandari",
        dept: "HRMD",
        mobile: "8898974567",
        image: "/images/woman.png",
        location: "Chennai",
        designation: "CGM",
        addtoFav: "1",
        isApprove: "1",
        isApproveByHRMD:"0",
        email:"gismi.pandari@rbi.org.in"
    },
    {
        id: 11,
        name: "Jani Shaik",
        dept: "DIT",
        mobile: "8898974078",
        image: "/images/man.png",
        location: "Mumbai",
        designation: "AM",
        addtoFav: "0",
        isApprove: "1",
        isApproveByHRMD:"1",
        email:"jani.shaik@rbi.org.in"
    },
    {
        id: 12,
        name: "Suresh K",
        dept: "FIDD",
        mobile: "8898974050",
        image: "/images/man.png",
        location: "Banglore",
        designation: "AGM",
        addtoFav: "0",
        isApprove: "0",
        isApproveByHRMD:"0",
        email:"suresh.k@rbi.org.in"
    },
    {
        id: 13,
        name: "Ramesh K",
        dept: "RMD",
        mobile: "8898974786",
        image: "/images/man.png",
        location: "Chennai",
        designation: "AM",
        addtoFav: "0",
        isApprove: "0",
        isApproveByHRMD:"0",
        email:"ramesh.k@rbi.org.in"
    },
    {
        id: 14,
        name: "Dinesh P",
        dept: "HRMD",
        mobile: "8898974085",
        image: "/images/man.png",
        location: "Mumbai",
        designation: "AM",
        addtoFav: "0",
        isApprove: "0",
        isApproveByHRMD:"0",
        email:"dinesh.p@rbi.org.in"
    },
    {
        id: 15,
        name: "Rutika K",
        dept: "DIT",
        mobile: "8898974078",
        image: "/images/woman.png",
        location: "Chennai",
        designation: "CGM",
        addtoFav: "0",
        isApprove: "0",
        isApproveByHRMD:"0",
        email:"rutika.k@rbi.org.in"
    },
    {
        id: 16,
        name: "Sanket Keny",
        dept: "FIDD",
        mobile: "8898974058",
        image: "/images/man.png",
        location: "Mumbai",
        designation: "AM",
        addtoFav: "0",
        isApprove: "0",
        isApproveByHRMD:"0",
        email:"sanket.keny@rbi.org.in"
    },
    {
        id: 17,
        name: "Sumedh Ghadi",
        dept: "RMD",
        mobile: "8898974056",
        image: "/images/man.png",
        location: "Mumbai",
        designation: "AM",
        addtoFav: "0",
        isApprove: "0",
        isApproveByHRMD:"0",
        email:"sumedh.ghadi@rbi.org.in"
    },
    {
        id: 18,
        name: "Divesh P",
        dept: "HRMD",
        mobile: "8898974096",
        image: "/images/man.png",
        location: "Chennai",
        designation: "CGM",
        addtoFav: "0",
        isApprove: "0",
        isApproveByHRMD:"0",
        email:"divesh.p@rbi.org.in"
        
    },
    {
        id: 19,
        name: "Mrunal Koli",
        dept: "DIT",
        mobile: "8898974055",
        image: "/images/woman.png",
        location: "Mumbai",
        designation: "AM",
        addtoFav: "0",
        isApprove: "0",
        isApproveByHRMD:"0",
        email:"mrunal.koli@rbi.org.in"
    },
    {
        id: 20,
        name: "Sanket Keny",
        dept: "FIDD",
        mobile: "8898974058",
        image: "/images/man.png",
        location: "Banglore",
        designation: "AM",
        addtoFav: "0",
        isApprove: "0",
        isApproveByHRMD:"0",
        email:"sanket.keny@rbi.org.in"
    },
    {
        id: 21,
        name: "Sumedh Ghadi",
        dept: "RMD",
        mobile: "8898974056",
        image: "/images/man.png",
        location: "Banglore",
        designation: "GM",
        addtoFav: "0",
        isApprove: "0",
        isApproveByHRMD:"0",
        email:"sumedh.ghadi@rbi.org.in"
    },
    {
        id: 22,
        name: "Subodh G",
        dept: "HRMD",
        mobile: "8898974852",
        image: "/images/man.png",
        location: "Mumbai",
        designation: "CGM",
        addtoFav: "0",
        isApprove: "0",
        isApproveByHRMD:"0",
        email:"subodh.g@rbi.org.in"
    },
    {
        id: 23,
        name: "Mrunal Koli",
        dept: "DIT",
        mobile: "8898974055",
        image: "/images/woman.png",
        location: "Mumbai",
        designation: "AM",
        addtoFav: "0",
        isApprove: "0",
        isApproveByHRMD:"0",
        email:"mrunal.koli@rbi.org.in"
    },
    {
        id: 24,
        name: "Sanket Keny",
        dept: "FIDD",
        mobile: "8898974058",
        image: "/images/man.png",
        location: "Banglore",
        designation: "AM",
        addtoFav: "0",
        isApprove: "0",
        isApproveByHRMD:"0",
        email:"sanket.keny@rbi.org.in"
    },
    {
        id: 25,
        name: "Sumedh Ghadi",
        dept: "RMD",
        mobile: "8898974056",
        image: "/images/man.png",
        location: "Banglore",
        designation: "AM",
        addtoFav: "0",
        isApprove: "0",
        isApproveByHRMD:"0",
        email:"sumedh.ghadi@rbi.org.in"
    },
    {
        id: 26,
        name: "Mahesh R",
        dept: "HRMD",
        mobile: "8898974456",
        image: "/images/man.png",
        location: "Chennai",
        designation: "AM",
        addtoFav: "0",
        isApprove: "0",
        isApproveByHRMD:"0",
        email:"mahesh.r@rbi.org.in"
    },
    {
        id: 27,
        name: "Mrunal Koli",
        dept: "DIT",
        mobile: "8898974055",
        image: "/images/woman.png",
        location: "Banglore",
        designation: "AM",
        addtoFav: "0",
        isApprove: "0",
        isApproveByHRMD:"0",
        email:"mrunal.koli@rbi.org.in"
    },
    {
        id: 28,
        name: "Sanket Keny",
        dept: "FIDD",
        mobile: "8898974058",
        image: "/images/man.png",
        location: "Banglore",
        designation: "AM",
        addtoFav: "0",
        isApprove: "0",
        isApproveByHRMD:"0",
        email:"sanket.keny@rbi.org.in"
    },
]