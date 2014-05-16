exports.data =function(req, res){
    var json =[
        {
            title:"ApiDemo1",
            id:1,
            opendata:[
                {
                    title:"Population",
                    url:"population",
                    config:[{
                        title:"Anually population",
                        xAx:{name:"year", type:"number"},
                        yAx:{name:"people", type:"number"},
                        filters:[
                            {name:"sex", type:"single"},
                            {name:"age", type:"dual"}
                        ]
                    }]
                },
                {
                    title:"Debts",
                    url:"debts",
                    config:[
                        {
                            title:"Debtor countries",
                            xAx:{name:"debtor", type:"number"},
                            yAx:{name:"amount", type:"number"},
                            filters:[
                                {name:"sex", type:"single"},
                                {name:"age", type:"dual"}
                            ]
                        },
                        {
                            title:"Creditor countries",
                            xAx:{name:"creditor", type:"number"},
                            yAx:{name:"amount", type:"number"},
                            filters:[
                                {name:"risk", type:"single"}

                            ]
                        }

                    ]
                }
            ]
        },
        {
            title:"ApiDemo2",
            id:2,
            opendata:[
                {
                    title:"Population", url:"rest/population",
                    config:{
                        title:"Anualy population",
                        xAx:{name:"year", type:"number"},
                        yAx:{name:"people", type:"number"},
                        filters:[
                            {name:"sex", type:"single"},
                            {name:"age", type:"dual"}
                        ]
                    }
                },
                {title:"Debts", url:"rest/debts"}
            ]
        }
    ]

    res.send(json);
}