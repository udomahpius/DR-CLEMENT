


// mapping all portfolio data in portfolio js file

// getting element of all data classes

let researchData = document.querySelector('.research-data');
let serviceData = document.querySelector('.service-data');
let conferenceData = document.querySelector('.conference-data');

// implementing objects data

const portfolio = {
    research: [
        {
            id: 1,
            title: `Field Supervisor`,
            body: ` Supervisor on data collection for NIGERIAN ENVIRONMENTAL STUDY/ACTION TEAM
            (NEST)/Building Nigerian Response to Climate CHANGE PROJECT) study on adaption to climate
            variability: A case of farming Households in Niger Delta Region, Nigeria (April 2009-2011) .`,
        },
        {
            id: 2,
            title: `Study/Field Supervisor`,
            body: ` Livelihood Assessment Needs and Community Livelihood Plan (CLAP) for
            Etim Umana and St. Luke’s Hospital Anua, Uyo Erosion Control Projects. Research conducted under the
            New Erosion and Watershed Management Project (NEWMAP) /World Bank Assisted Project 2017`,
        },
        {
            id: 3,
            title: `Secretary`,
            body: ` Stored products Commodity Consortium - Capacity Building Project on Stored commodities
            for food and agricultural sector in South- South Nigeria (On-going) 2017 (Uniuyo based research team).`,
        },
    ],

    // service start
    service: [
        {
            id: 1,
            Session: `2007/2008 Session`,
            title: `Returning Officer`,
            body:` National Association of Agricultural Students’ Faculty Election, University of Uyo`
        },
        {
            id: 2,
            Session: `2008/2009 Session`,
            title: `Returning Officer`,
            body:` National Association of Agricultural Students’ Faculty Election, University of Uyo `
        },
        {
            id: 3,
            Session: ` April, 2009 - Date`,
            title: `Finance Officer`,
            body:`AGRIC ECONOMICS UNIUYO Research Team, Nigerian Environmental Study/Action Team (NEST) /Building
            Nigerian Response to Climate Variability`
        },
        {
            id: 4,
            Session: `2013/2014-2015/2016 Sessions`,
            title: `Member`,
            body:` Screening Committee for fresh students `
        },
        {
            id: 5,
            Session: `2014/2015 Session`,
            title: `Returning Officer`,
            body:` Continuing Education Student’s Association
            Election, University of Uyo `
        },
        {
            id: 6,
            Session: `2018`,
            title: `Investment Secretary`,
            body:` Academic Staff Union of Universities(ASUU), University of Uyo Branch `
        },
        {
            id: 7,
            Session: `2006`,
            title: `Facilitator`,
            body:` National Population and Housing Census`
        },
        {
            id: 8,
            Session: `April, 2011`,
            title: `Ad-hoc Duties INEC`,
            body:` Supervisor Voter’s Registration`
        },
        {
            id: 9,
            Session: ``,
            title: `Data Analyst`,
            body:` Agricultural Production Survey 2013, National Fadama III Programme, Akwa Ibom State.`
        },
        {
            id: 10,
            Session: `September, 2013`,
            title: `Resource Person`,
            body:` Training of Retirees of Nigerian Ports Authority on Small and Medium Scale
            Enterprise (SMEs) Development held at Centre for Sustainable Development, University of Ibadan, Oyo
            State`
        },
        {
            id: 11,
            Session: `2016-2017`,
            title: `Advisory Services/Input Consultant`,
            body:`  Fadama III additional Finance Programme (Ikot Usop Cassava
                Production Cluster, Ikot Abasi L.G.A) `
        },
        {
            id: 12,
            Session: ``,
            title: `Resource Person`,
            body:` NDDC Sponsored training on Rice farming at Vikka farms limited`
        },
        {
            id: 13,
            Session: `2016`,
            title: `Lead facilitator Training`,
            body:`  Emotional Intelligence for Bank of Industry Staff at Jedebb Consulting, Lagos, Nigeria `
        },
        {
            id: 14,
            Session: `2016-2017`,
            title: `Member`,
            body:` mobilization team UNIUYO/West African Agricultural Productivity Programme (WAAPP)
            `
        },
        {
            id: 15,
            Session: `2017`,
            title: `Study/Field Supervisor`,
            body:` Livelihood Assessment Needs and Community Livelihood Plan (CLAP) for
            Etim Umana and St. Luke’s Hospital Anua, Uyo Erosion Control Projects. Research conducted under the
            New Erosion and Watershed Management Project (NEWMAP) /World Bank Assisted Project `
        },
        {
            id: 16,
            Session: ``,
            title: `Regular Guest/Discussant `,
            body:` “Agriculture and You” Programme on Inspiration FM 109.5 (Radio) Uyo`
        },
        {
            id: 17,
            Session: `November, 2016`,
            title: `Facilitator/Resource Person `,
            body:` Training on Zero-based of Institute of Budget Management and
            Administration Conference at Entry Point Hotel, Uyo Akwa Ibom State, Nigeria`
        },
        {
            id: 18,
            Session: `November 21
            st to 22
            nd
            , 2017 `,
            title: `Rapattoir on Leadership Training Workshop 2017`,
            body:` Organized by Academic Staff Union of
            Universities, University of Uyo, UNIUYO Branch held in Uyo.`
        },
        {
            id: 19,
            Session: `November 16
            th- 18
            th 2017`,
            title: `Lead Faciliatator`,
            body:` on sales Marketing for Bank of Industry Staff at Limeridge Apartments Ikoyi – Lagos
            Organized by Jedebb Consulting, Lagos.`
        },
    ],

    // conferences start
    conferences: [
        {
            id: 1,
            title: `Asa U. A., G. E. Edet and C. A. Uwem, (2007)`,
            body: ` Assessment of the Training needs of Fisherfolks in
            Eket and Ibeno L.G.As of Akwa Ibom State, Nigerian, Society of Animal Production 2007 Conference, Oyo State`
        },
        {
            id: 2,
            title: `U. A. Asa, N. A. Etim and C. A. Uwem, (2011)`,
            body: ` Constraints to Utilization of Waste Management
            Strategies by Urban Poultry Farmers in Port Harcourt City, Rivers State. Paper Presented at the 36
            th
            Annual Conference of Nigerian Society for Animal Production (NSAP) held at Merit House/Raw Material
            Research and Development Council, Abuja, Nigeria. 13
            th -16
            th march, 2011.`
        },
        {
            id: 3,
            title: `C. A. Uwem, U. N. Ukpong, and Onumadu, F. N. (2012)`,
            body: ` Constraints of Indigenous Knowledge
            Transfer in Agriculture and Food Security in Nigeria. Paper presented at the 6
            th Annual Conference of
            Nigeria Society for Indigenous Knowledge and Development (NSIKAD) Held at Michael Okpara
            University of Agriculture, Umudike. 5
            th – 7
            th June, 2012, Abia State`
        },
        {
            id: 4,
            title: `Okoko, A. C., Ofor, C. O. and C.A. Uwem, (2016)`,
            body: ` Estimating Profitability of African Catfish (Clarias
                gariepinus) fed commercial pelleted feed supplemented with live Tilapia fry (Oreochromis niloticus) in a
                simulated polyculture system. Proceedings of 30
                th Annual Conference of the Fisheries Society of Nigeria
                (FISON) Delta, 2015. Pp217-219. ETF Lecture Theatre, Delta State University Asaba Campus, Asaba
                Delta State. 22
                nd – 27
                th November, 2015. (Published)`
        },
        {
            id: 5,
            title: `Uwem, C. A. Nwachukwu, I. M. and Ifenkwe, G. E.`,
            body: ` Access and utilization of New Media by Urban
            livestock farmers in Benue State, Nigerian. 2
            nd AKWATECH National Conference held at on December, 13
            th – 15
            th
            , 2017 at Akwa Ibom State College of Science and Technology, Nung Ukim, Ikono L. G. A , Akwa Ibom State`
        },
        {
            id: 6,
            title: `Uwem, C. A. Etuk, U. R. and Asa, U. A. (2017)`,
            body: ` Livelihood Dynamics and socioeconomic status
            Differentials of Semi-urban and Urban farming Households in Akwa Ibom State. Paper Present at the 26
            th
            Annual Congress of the Rural Sociological Association of Nigeria (RUSAN) held on October 16
            th – 19
            th
            , 2017 at the Michael Okpara University of Agriculture, Umudike, Abia State, Nigeria. Book of Abstracts
            pp 41.`
        },
    ]
}

// research publication articles 
const researchFunc = () => {
    let researchText = ""
    portfolio.research.map((mapResearch) => {
        const { title, body } = mapResearch;
        researchText += `
        <div class="col-md-6 col-lg-4  new ">    
        <div class="portfolio-item">
        <div class="text-holder">
            <h6 class="title">${title}</h6>
            <p class="subtitle">${body}</p>
        </div>
    </div>
    </div>
        `
        researchData.innerHTML = researchText;
    })
}
researchFunc()

// service data
const serviceFunc = () => {
    serviceText = ""
    portfolio.service.map((mapService) => {
        const { Session, title, body } = mapService;
        serviceText += `
        <div class="col-md-6 col-lg-4 advertising ">
                    <div class="portfolio-item">
                        <div class="text-holder">
                           <p class="text-secondary m-0">${Session}</p>
                            <h6 class="title">${title}</h6>
                            <p class="subtitle">${body}</p>
                        </div>
                    </div>             
                </div>
        `
        serviceData.innerHTML = serviceText
        
    })
}
serviceFunc()

// conferences
const conferenceFunc = () => {
    let conferenceText =''
    portfolio.conferences.map((mapConference) => {
        const { title, body } = mapConference;
        conferenceText += `
        <div class="col-md-6 col-lg-4 branding ">
        <div class="portfolio-item">
            <div class="text-holder">
                <h6 class="title">${title}</h6>
                <p class="subtitle">${body}</p>
            </div>
        </div>
    </div>
        `
        conferenceData.innerHTML = conferenceText;
        
    })
}
conferenceFunc()