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
            title:"City_Of_Chicago",
            id:2,
            opendata:[
                {
                    title:"2014_Ordinance_Amount", url:"rest/population",
                    config:[
                        {
                        title:"Appropriations by Department",
                        xAx:{name:"department_description", type:"number"},
                        yAx:{name:"sum_2014_ordinance_amount", type:"number"},
                        filters:[]
                    }
                    ]
                },
                {
                    title:"2014_Ordinance_Amount", url:"rest/population",
                    config:{
                        title:"Appropriations by Department",
                        xAx:{name:"department_description", type:"number"},
                        yAx:{name:"sum_2014_ordinance_amount", type:"number"},
                        filters:[]
                    }
                }
            ]
        }
    ]

    res.send(json);
}