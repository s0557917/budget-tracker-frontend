const sampleData = [
	{
		"id": "FA69B4B3-2834-3BED-21C8-6EDDCA93748C",
		"creditor": "Arcu Et Industries",
		"date": "04.12.22",
		"amount": 56,
		"category": "Home"
	},
	{
		"id": "C3ABA273-BD3C-CB50-4196-536619078B1C",
		"creditor": "Pede Praesent Foundation",
		"date": "15.01.23",
		"amount": -88,
		"category": "Work"
	},
	{
		"id": "91C1BD56-545A-C8CB-89FD-9B7EE4CA5F5E",
		"creditor": "Metus Aliquam Ltd",
		"date": "18.01.23",
		"amount": -242,
		"category": "Work"
	},
	{
		"id": "9C2A7367-2A71-FC48-0A21-D7C98132B499",
		"creditor": "Magna Sed Corp.",
		"date": "27.12.22",
		"amount": -9,
		"category": "Going Out"
	},
	{
		"id": "39B4E857-1867-79B3-0CD6-1AA6E785D3C6",
		"creditor": "Dapibus Corporation",
		"date": "16.01.23",
		"amount": -220,
		"category": "Going Out"
	},
	{
		"id": "81D1E3A9-04E5-978D-C1B7-43B2BEAAC3B1",
		"creditor": "Porttitor Interdum Limited",
		"date": "15.11.22",
		"amount": -47,
		"category": "Home"
	},
	{
		"id": "396DA334-4E55-25C2-02D7-D351A3D30257",
		"creditor": "Praesent Interdum Incorporated",
		"date": "09.01.23",
		"amount": 155,
		"category": "Going Out"
	},
	{
		"id": "BE1E1BB2-593E-A37A-3DB2-B8A6564B540B",
		"creditor": "Tincidunt LLP",
		"date": "21.11.22",
		"amount": -59,
		"category": "Shopping"
	},
	{
		"id": "88B3EA89-1124-D227-1FC7-6EB69EA5CB44",
		"creditor": "Sapien Inc.",
		"date": "30.01.23",
		"amount": 245,
		"category": "Groceries"
	},
	{
		"id": "12A945B2-89C7-D5C4-03E3-BAC85D686281",
		"creditor": "Quisque Company",
		"date": "02.12.22",
		"amount": 113,
		"category": "Groceries"
	},
	{
		"id": "82E8FC1F-FD6E-4050-6B89-6CA524CD3339",
		"creditor": "Urna Industries",
		"date": "18.01.23",
		"amount": 245,
		"category": "Work"
	},
	{
		"id": "ADD2E1E6-A92A-6B2C-8D41-BF3FF9A1FA16",
		"creditor": "Dui Nec Tempus Company",
		"date": "06.12.22",
		"amount": 196,
		"category": "Shopping"
	},
	{
		"id": "620C379B-2B14-4DAA-E4A1-4EC6ADDC8CDC",
		"creditor": "Libero Mauris LLP",
		"date": "16.01.23",
		"amount": -190,
		"category": "Going Out"
	},
	{
		"id": "741ABA4A-33EB-3AE1-536F-6122A523D8B5",
		"creditor": "In Corporation",
		"date": "03.11.22",
		"amount": 100,
		"category": "Shopping"
	},
	{
		"id": "8571438E-8E6C-06A5-29A3-1697ABFC744D",
		"creditor": "Eu Elit Inc.",
		"date": "28.11.22",
		"amount": -247,
		"category": "Shopping"
	},
	{
		"id": "36651D4E-E9BF-CF52-A2A1-582C09E111A4",
		"creditor": "Sem Corp.",
		"date": "05.01.23",
		"amount": -138,
		"category": "Work"
	},
	{
		"id": "3FCCBCAA-8793-DBBB-B611-86ACBC81DEEC",
		"creditor": "Vitae Institute",
		"date": "21.12.22",
		"amount": -11,
		"category": "Home"
	},
	{
		"id": "C97EEE65-7CF5-B034-0083-F60B34821882",
		"creditor": "Aliquam Gravida Incorporated",
		"date": "06.11.22",
		"amount": 217,
		"category": "Health"
	},
	{
		"id": "1C167D0D-CE43-49DE-F8D8-4CA818C1FE21",
		"creditor": "Nunc Laoreet Lectus Incorporated",
		"date": "24.01.23",
		"amount": 123,
		"category": "Rent"
	},
	{
		"id": "773E767B-8334-66A0-D753-316ADA50B0E4",
		"creditor": "Vitae Nibh Donec PC",
		"date": "10.12.22",
		"amount": 24,
		"category": "Work"
	},
	{
		"id": "A519BA83-C27A-1516-EF93-3A8EA86A1B8D",
		"creditor": "Mi Limited",
		"date": "24.11.22",
		"amount": -24,
		"category": "Going Out"
	},
	{
		"id": "73A96E47-2228-EB7D-675E-91DBCEA7A767",
		"creditor": "Arcu Eu Corp.",
		"date": "21.01.23",
		"amount": -232,
		"category": "Groceries"
	},
	{
		"id": "8507BE46-83AE-A08E-E117-CC2E89F89A37",
		"creditor": "Odio Tristique PC",
		"date": "16.01.23",
		"amount": -201,
		"category": "Groceries"
	},
	{
		"id": "B49E28B4-73E3-0942-E43B-DCB3BFEA7154",
		"creditor": "A Enim Associates",
		"date": "23.12.22",
		"amount": 241,
		"category": "Rent"
	},
	{
		"id": "A1EF3971-19A2-1FCC-56FC-27B28918ADEE",
		"creditor": "Non Limited",
		"date": "29.12.22",
		"amount": 52,
		"category": "Work"
	},
	{
		"id": "C61A2430-9E77-1481-985C-7A923E7C3C75",
		"creditor": "Ultrices Sit Ltd",
		"date": "12.12.22",
		"amount": -174,
		"category": "Shopping"
	},
	{
		"id": "DD739B6A-EE2D-E35D-71FF-4398E728B936",
		"creditor": "Lorem Ut Aliquam Corp.",
		"date": "05.01.23",
		"amount": -247,
		"category": "Groceries"
	},
	{
		"id": "B0ABD934-2211-DA92-8BD6-0A171718C246",
		"creditor": "Mi Enim Foundation",
		"date": "26.11.22",
		"amount": -226,
		"category": "Health"
	},
	{
		"id": "677D50EA-92C7-41AE-DC27-A2EEFB4ABE33",
		"creditor": "Aenean Massa Integer Consulting",
		"date": "12.11.22",
		"amount": -136,
		"category": "Shopping"
	},
	{
		"id": "35B8CDAA-CF70-7895-A5DB-C0BCFFBFEE19",
		"creditor": "Tincidunt Nunc Associates",
		"date": "06.11.22",
		"amount": 176,
		"category": "Shopping"
	},
	{
		"id": "4AD1CEC4-D65C-D17D-5C63-7662128CA2A4",
		"creditor": "Pellentesque Tincidunt Tempus Inc.",
		"date": "20.01.23",
		"amount": 82,
		"category": "Shopping"
	},
	{
		"id": "ED9D17C5-8573-912D-76B1-99257C18DA98",
		"creditor": "Scelerisque Lorem Incorporated",
		"date": "01.02.23",
		"amount": -110,
		"category": "Home"
	},
	{
		"id": "7D83B906-33D2-7AC1-8738-B898BBBAC9DF",
		"creditor": "Elit Pede Malesuada Inc.",
		"date": "24.12.22",
		"amount": -115,
		"category": "Work"
	},
	{
		"id": "6D7323EA-7577-2CC3-164E-5A74C536267E",
		"creditor": "Rutrum Fusce Corporation",
		"date": "28.12.22",
		"amount": -108,
		"category": "Groceries"
	},
	{
		"id": "4674A2C8-58AE-169D-FB98-AD7BE5572636",
		"creditor": "Curae LLC",
		"date": "08.11.22",
		"amount": -207,
		"category": "Going Out"
	},
	{
		"id": "C4218C7E-83BF-B333-22C7-20768D5B1BD5",
		"creditor": "At Associates",
		"date": "25.12.22",
		"amount": -195,
		"category": "Going Out"
	},
	{
		"id": "E651628D-87AC-DD18-35E2-0CD4291EFCD8",
		"creditor": "Mollis Vitae Associates",
		"date": "23.12.22",
		"amount": -50,
		"category": "Work"
	},
	{
		"id": "2F6DEA84-4A45-C2C0-399A-023EAFF3BB69",
		"creditor": "Malesuada Integer Incorporated",
		"date": "23.12.22",
		"amount": -208,
		"category": "Work"
	},
	{
		"id": "688CE166-52B3-877C-23A2-8B966E6D36A7",
		"creditor": "Urna Company",
		"date": "01.12.22",
		"amount": -241,
		"category": "Going Out"
	},
	{
		"id": "D48B381D-487B-07A6-3CC4-D38216BC7E15",
		"creditor": "A Dui Inc.",
		"date": "23.12.22",
		"amount": 185,
		"category": "Groceries"
	},
	{
		"id": "C56C5EE4-CA34-8DED-5168-121A8AF519C1",
		"creditor": "A Incorporated",
		"date": "17.11.22",
		"amount": 180,
		"category": "Going Out"
	},
	{
		"id": "5C284454-32C7-1D14-5829-8982348B3C71",
		"creditor": "Rutrum Eu Institute",
		"date": "02.01.23",
		"amount": 26,
		"category": "Home"
	},
	{
		"id": "2D85520C-7AE5-13EB-EC83-38DCC5B32448",
		"creditor": "Fringilla Foundation",
		"date": "08.12.22",
		"amount": 166,
		"category": "Home"
	},
	{
		"id": "9C8184D1-1F47-9A26-7383-84784A246AB4",
		"creditor": "Felis Industries",
		"date": "11.12.22",
		"amount": -37,
		"category": "Shopping"
	},
	{
		"id": "36F458B1-4439-D2C2-7673-65C36B3C8725",
		"creditor": "Malesuada Integer LLP",
		"date": "14.11.22",
		"amount": -84,
		"category": "Rent"
	},
	{
		"id": "E2DCD711-E79C-5016-E591-77365EB5634C",
		"creditor": "Nulla In Incorporated",
		"date": "06.12.22",
		"amount": 67,
		"category": "Groceries"
	},
	{
		"id": "6B9F25CB-7B63-8C45-C038-474E18671A5B",
		"creditor": "Eu Euismod Associates",
		"date": "01.12.22",
		"amount": -80,
		"category": "Home"
	},
	{
		"id": "C3741EDE-1AB7-F949-C02B-5D3B5E86C722",
		"creditor": "At Velit Company",
		"date": "04.01.23",
		"amount": 174,
		"category": "Health"
	},
	{
		"id": "3186AAA6-AB72-C6E3-1CC8-BB57A1A93321",
		"creditor": "Sollicitudin Orci Inc.",
		"date": "09.12.22",
		"amount": -211,
		"category": "Shopping"
	},
	{
		"id": "4962BD8E-4D74-2731-709C-9C2C6132DD10",
		"creditor": "Ipsum Cursus Incorporated",
		"date": "27.11.22",
		"amount": -217,
		"category": "Groceries"
	},
	{
		"id": "C74A3E4B-B6C5-7181-8B1C-38EEC2311894",
		"creditor": "Egestas Rhoncus Ltd",
		"date": "10.12.22",
		"amount": 3,
		"category": "Rent"
	},
	{
		"id": "B5173460-26A6-C843-A2D7-B7742D84489B",
		"creditor": "Ut Nulla Institute",
		"date": "17.12.22",
		"amount": -28,
		"category": "Going Out"
	},
	{
		"id": "A63B9B48-1577-8423-D2DC-C441E8C81224",
		"creditor": "Libero Nec Limited",
		"date": "12.12.22",
		"amount": 215,
		"category": "Groceries"
	},
	{
		"id": "B7A7453B-3BC8-3291-4975-E2B0C2A1D82E",
		"creditor": "Pharetra Nam Inc.",
		"date": "28.11.22",
		"amount": 237,
		"category": "Shopping"
	},
	{
		"id": "DE1C7218-1512-E894-AB12-DE8F72C73F30",
		"creditor": "Placerat Eget Institute",
		"date": "28.12.22",
		"amount": 46,
		"category": "Work"
	},
	{
		"id": "399E97B8-A5FD-5D43-3C89-A879BFCC8C7B",
		"creditor": "Et Eros Proin Industries",
		"date": "26.01.23",
		"amount": -104,
		"category": "Health"
	},
	{
		"id": "CE9ACDA9-DBBF-51EE-2639-4FAB09FC4DEF",
		"creditor": "Ullamcorper Duis Limited",
		"date": "19.12.22",
		"amount": 67,
		"category": "Rent"
	},
	{
		"id": "1D02BEFE-210F-9FE9-E0C5-8ABCEA339144",
		"creditor": "Posuere At Inc.",
		"date": "25.01.23",
		"amount": -147,
		"category": "Home"
	},
	{
		"id": "F458E255-D93A-823C-E34E-92C79BFAAED7",
		"creditor": "Netus Et Malesuada Company",
		"date": "24.12.22",
		"amount": 166,
		"category": "Rent"
	},
	{
		"id": "897AB2EC-4930-5713-EA07-D449A97EF850",
		"creditor": "Semper LLC",
		"date": "08.11.22",
		"amount": 2,
		"category": "Groceries"
	},
	{
		"id": "8EC177D0-D074-1C1C-EB43-865A63F39AE9",
		"creditor": "Non Sapien Associates",
		"date": "22.12.22",
		"amount": 142,
		"category": "Rent"
	},
	{
		"id": "C173B232-FD7C-FEE9-515D-4354E8BA8718",
		"creditor": "Ornare Industries",
		"date": "22.01.23",
		"amount": 177,
		"category": "Groceries"
	},
	{
		"id": "D8D7CECA-B361-1FAD-9514-178066324E2B",
		"creditor": "Imperdiet Erat LLP",
		"date": "20.01.23",
		"amount": 206,
		"category": "Going Out"
	},
	{
		"id": "88712F09-4642-587A-1433-A73D17CADBE6",
		"creditor": "Metus Aliquam Erat Associates",
		"date": "31.12.22",
		"amount": -150,
		"category": "Going Out"
	},
	{
		"id": "115DCB97-5748-4BCD-C649-4B061D077C33",
		"creditor": "Suspendisse Sed Associates",
		"date": "03.12.22",
		"amount": -127,
		"category": "Groceries"
	},
	{
		"id": "4A4F7854-8D71-41E5-1732-A8037D741B03",
		"creditor": "Sed Corporation",
		"date": "27.12.22",
		"amount": 155,
		"category": "Groceries"
	},
	{
		"id": "7BCCDB79-8523-5943-A78A-DA56383C4D52",
		"creditor": "Euismod Mauris Institute",
		"date": "04.11.22",
		"amount": 148,
		"category": "Work"
	},
	{
		"id": "6EC951EB-EED4-ACC1-87E1-336CA49E92AB",
		"creditor": "Malesuada Ltd",
		"date": "05.01.23",
		"amount": -43,
		"category": "Work"
	},
	{
		"id": "3C47172A-ED4D-559E-7F85-BA1427A65E95",
		"creditor": "Fusce Aliquam Enim Foundation",
		"date": "01.01.23",
		"amount": -117,
		"category": "Shopping"
	},
	{
		"id": "E17CECF4-4A87-2B43-9A93-6A894B96CF74",
		"creditor": "Pellentesque Ultricies Corp.",
		"date": "10.01.23",
		"amount": -28,
		"category": "Work"
	},
	{
		"id": "B827C149-C198-4297-68CB-3614B2883A7E",
		"creditor": "Ac Facilisis Ltd",
		"date": "05.12.22",
		"amount": 140,
		"category": "Home"
	},
	{
		"id": "C9DC38B8-C394-A933-2984-E72215BD033F",
		"creditor": "Et Tristique Pellentesque Foundation",
		"date": "29.01.23",
		"amount": -158,
		"category": "Work"
	},
	{
		"id": "D94BAC91-C6D6-97C1-C9EE-D72E7CB489CD",
		"creditor": "Sapien Associates",
		"date": "16.12.22",
		"amount": 198,
		"category": "Groceries"
	},
	{
		"id": "F8084EC5-74E7-4D96-8618-F9A255AA4ADD",
		"creditor": "Gravida Nunc Sed Institute",
		"date": "12.12.22",
		"amount": -105,
		"category": "Going Out"
	},
	{
		"id": "F8DB3D27-AA18-FE43-17C6-54930E1DE81F",
		"creditor": "Pharetra Quisque LLP",
		"date": "01.02.23",
		"amount": 61,
		"category": "Shopping"
	},
	{
		"id": "3E8B9439-8F26-9E95-81DD-8BAC8D832B4D",
		"creditor": "Dictum Phasellus In LLC",
		"date": "04.12.22",
		"amount": 169,
		"category": "Shopping"
	},
	{
		"id": "43DAE2BA-C18A-2C04-A66A-3DA6699FD97A",
		"creditor": "Nec Institute",
		"date": "08.01.23",
		"amount": -161,
		"category": "Work"
	},
	{
		"id": "D83B6A3C-51A4-45A0-5E33-5136BBA5F4CA",
		"creditor": "Hendrerit Donec Porttitor Corp.",
		"date": "05.12.22",
		"amount": -157,
		"category": "Rent"
	},
	{
		"id": "64714BB8-CACC-5937-78E9-F741C2D8AF8A",
		"creditor": "Mauris Quis Institute",
		"date": "23.12.22",
		"amount": 161,
		"category": "Rent"
	},
	{
		"id": "16D34731-432D-A38C-A6C1-DE82D1E84B26",
		"creditor": "Ad Litora Torquent Corporation",
		"date": "21.01.23",
		"amount": -42,
		"category": "Groceries"
	},
	{
		"id": "3F52C478-8B49-B1CD-5E69-BF1CA5E14B14",
		"creditor": "Ligula Aenean Institute",
		"date": "31.12.22",
		"amount": 211,
		"category": "Health"
	},
	{
		"id": "8928058D-859C-9240-44BB-1EA993211D22",
		"creditor": "Ante Nunc Foundation",
		"date": "04.11.22",
		"amount": -215,
		"category": "Health"
	},
	{
		"id": "6A7D3E8D-151B-8F8B-EB06-FC41896477D5",
		"creditor": "Phasellus Elit Corp.",
		"date": "14.01.23",
		"amount": -227,
		"category": "Home"
	},
	{
		"id": "616AA865-1DB4-D984-4F34-6988328DC484",
		"creditor": "Nisl Arcu PC",
		"date": "01.12.22",
		"amount": -23,
		"category": "Shopping"
	},
	{
		"id": "C22B96C9-73E7-7F1A-F2F6-81939BB5D1E4",
		"creditor": "Vel Vulputate Eu Ltd",
		"date": "20.11.22",
		"amount": -72,
		"category": "Home"
	},
	{
		"id": "162B535D-46A7-448E-5CF7-131737A4A4BA",
		"creditor": "In Nec Inc.",
		"date": "28.12.22",
		"amount": -172,
		"category": "Shopping"
	},
	{
		"id": "A88D2812-B6E5-B6B8-5B2E-359F6229838D",
		"creditor": "Vel Sapien Associates",
		"date": "20.11.22",
		"amount": -220,
		"category": "Work"
	},
	{
		"id": "2343BD28-B937-68D1-DDA0-4B93CAB2EB30",
		"creditor": "Semper Foundation",
		"date": "01.01.23",
		"amount": 25,
		"category": "Home"
	},
	{
		"id": "71DE70DD-B969-8FBB-E2D7-89D57C68DCD6",
		"creditor": "Sed Id Incorporated",
		"date": "17.12.22",
		"amount": -39,
		"category": "Health"
	},
	{
		"id": "24F7DCE4-442F-E5BE-A5A4-D28C7AB9B814",
		"creditor": "Ante Vivamus Corporation",
		"date": "23.12.22",
		"amount": -132,
		"category": "Shopping"
	},
	{
		"id": "7527B866-2D66-DDAC-46C7-4DE174DEAA85",
		"creditor": "Ligula Elit Foundation",
		"date": "17.01.23",
		"amount": -244,
		"category": "Home"
	},
	{
		"id": "341BAA1A-6B62-D446-B10E-A1055DD7CB1B",
		"creditor": "Quis Urna Incorporated",
		"date": "25.11.22",
		"amount": 75,
		"category": "Health"
	},
	{
		"id": "9D592A61-CBC3-AC4E-D685-7C12C26CAC5C",
		"creditor": "Risus Nulla Foundation",
		"date": "14.11.22",
		"amount": 58,
		"category": "Work"
	},
	{
		"id": "DACAE4AA-5293-DB35-B38B-B7CE5EBDAEC4",
		"creditor": "Donec Egestas Ltd",
		"date": "27.12.22",
		"amount": 18,
		"category": "Work"
	},
	{
		"id": "CB537BC5-BA36-355F-DF5B-315D655E3D1A",
		"creditor": "Dui Nec Associates",
		"date": "20.01.23",
		"amount": 95,
		"category": "Home"
	},
	{
		"id": "313C6201-3EEF-CB38-8EB6-656A3139DEEB",
		"creditor": "Nullam Vitae Associates",
		"date": "09.11.22",
		"amount": -152,
		"category": "Going Out"
	},
	{
		"id": "D72BC84A-7D56-DE5F-4864-88E942177DCB",
		"creditor": "Mauris Ut Consulting",
		"date": "16.12.22",
		"amount": -159,
		"category": "Groceries"
	},
	{
		"id": "D7949862-7BD0-BA32-59E4-78D3CA4BB29E",
		"creditor": "Felis Institute",
		"date": "07.11.22",
		"amount": 62,
		"category": "Groceries"
	},
	{
		"id": "991AEC71-96F6-4F23-31A1-5335D5EC3532",
		"creditor": "Vel Nisl Quisque Associates",
		"date": "25.12.22",
		"amount": -108,
		"category": "Groceries"
	},
	{
		"id": "005845BC-CDF2-D5F2-030A-2BAAC5C428B8",
		"creditor": "Ut Eros Corp.",
		"date": "19.11.22",
		"amount": -131,
		"category": "Shopping"
	}
]

export default sampleData