import { DataModel } from './columns';

// Make: string;
// Model: string;
// Model_number: string;
// Transmission: string;
// Engine_capacity: string;
// Seating: string;
// Fuel: string;
// CRSP: string;

export async function getData(): Promise<DataModel[]> {
    // Fetch data from your API here.
    return [
        {
            Make: 'HONDA',
            Model: '400X',
            Model_number: '2BL-NC56',
            Transmission: '6MT',
            Engine_capacity: '399',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 971616
        },
        {
            Make: 'HONDA',
            Model: '400X',
            Model_number: '8BL-NC56',
            Transmission: '6MT',
            Engine_capacity: '399 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1110048
        },
        {
            Make: 'HONDA',
            Model: '400X ',
            Model_number: '2BL-NC47',
            Transmission: '6MT',
            Engine_capacity: '399 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 949622
        },
        {
            Make: 'HONDA',
            Model: 'ADV150',
            Model_number: '2BK-KF38',
            Transmission: 'CVT',
            Engine_capacity: '149 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 530443
        },
        {
            Make: 'HONDA',
            Model: 'ADV160',
            Model_number: '8BK-KF54',
            Transmission: 'CVT',
            Engine_capacity: '156 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 611950
        },
        {
            Make: 'HONDA',
            Model: 'BENLY',
            Model_number: '2BH-AA05',
            Transmission: 'CVT',
            Engine_capacity: '49 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 284628
        },
        {
            Make: 'HONDA',
            Model: 'BENLY 110 PRO',
            Model_number: '2BJ-JA09',
            Transmission: 'CVT',
            Engine_capacity: '107 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 353197
        },
        {
            Make: 'HONDA',
            Model: 'BENLY E: I',
            Model_number: 'ZAD-EF07',
            Engine_capacity: '',
            Transmission: '',
            Seating: '1 ',
            Fuel: 'ELECTRIC',
            CRSP: 866821
        },
        {
            Make: 'HONDA',
            Model: 'BENLY E: I PRO',
            Model_number: 'ZAD-EF08',
            Seating: '1 ',
            Engine_capacity: '',
            Transmission: '',
            Fuel: 'EELCTRIC',
            CRSP: 907963
        },
        {
            Make: 'HONDA',
            Model: 'BENLY E: II',
            Model_number: 'ZAD-EF10',
            Seating: '1 ',
            Engine_capacity: '',
            Transmission: '',
            Fuel: 'EELCTRIC',
            CRSP: 893731
        },
        {
            Make: 'HONDA',
            Model: 'BENLY E: II PRO',
            Model_number: 'ZAD-EF11',
            Engine_capacity: '0 ',
            Seating: '1 ',
            Transmission: '',
            Fuel: 'ELECTRIC',
            CRSP: 967734
        },
        {
            Make: 'HONDA',
            Model: 'BENLY PRO',
            Model_number: '2BH-AA05',
            Transmission: 'CVT',
            Engine_capacity: '49 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 327322
        },
        {
            Make: 'HONDA',
            Model: 'BENLY110 PRO',
            Model_number: '2BJ-JA09',
            Transmission: 'CVT',
            Engine_capacity: '107 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 353197
        },
        {
            Make: 'HONDA',
            Model: 'CB1000R',
            Model_number: '2BL-SC80',
            Transmission: '6MT',
            Engine_capacity: '998 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1960050
        },
        {
            Make: 'HONDA',
            Model: 'CB1000R',
            Model_number: '8BL-SC80',
            Transmission: '6MT',
            Engine_capacity: '998 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 2161748
        },
        {
            Make: 'HONDA',
            Model: 'CB1000R BLACK EDITION ',
            Model_number: '8BL-SC80',
            Transmission: '6MT',
            Engine_capacity: '998 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 2220096
        },
        {
            Make: 'HONDA',
            Model: 'CB100R',
            Model_number: '2BL-SC80',
            Transmission: '6MT',
            Engine_capacity: '998 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1965225
        },
        {
            Make: 'HONDA',
            Model: 'CB1100',
            Model_number: '2BL-SC65',
            Transmission: '6MT',
            Engine_capacity: '1140 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1461952
        },
        {
            Make: 'HONDA',
            Model: 'CB1100  EX',
            Model_number: '2BL-SC65',
            Transmission: '6MT',
            Engine_capacity: '1140 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1763269
        },
        {
            Make: 'HONDA',
            Model: 'CB1100 EX',
            Model_number: '2BL-SC65',
            Transmission: '6MT',
            Engine_capacity: '1140 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1602972
        },
        {
            Make: 'HONDA',
            Model: 'CB1100 RS',
            Model_number: '2BL-SC65',
            Transmission: '6MT',
            Engine_capacity: '1140 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1648253
        },
        {
            Make: 'HONDA',
            Model: 'CB1100EX',
            Model_number: '2BL-SC65',
            Transmission: '6MT',
            Engine_capacity: '1140 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1602972
        },
        {
            Make: 'HONDA',
            Model: 'CB1100N RS',
            Model_number: '2BL-SC65',
            Transmission: '6MT',
            Engine_capacity: '1140 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1650841
        },
        {
            Make: 'HONDA',
            Model: 'CB125R',
            Model_number: '2BJ-JC79',
            Transmission: '6MT',
            Engine_capacity: '124 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 536911
        },
        {
            Make: 'HONDA',
            Model: 'CB125R',
            Model_number: '8BJ-JC91',
            Transmission: '6MT',
            Engine_capacity: '124 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 611950
        },
        {
            Make: 'HONDA',
            Model: 'CB1300',
            Model_number: '2BL-SC54',
            Transmission: '6MT',
            Engine_capacity: '1284 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1777630
        },
        {
            Make: 'HONDA',
            Model: "CB1300 SUPER BOL D'OR",
            Model_number: '2BL-SC54',
            Transmission: '6MT',
            Engine_capacity: '1284 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1907006
        },
        {
            Make: 'HONDA',
            Model: "CB1300 SUPER BOL D'OR",
            Model_number: '8BL-SC54',
            Transmission: '6MT',
            Engine_capacity: '1284 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 2163171
        },
        {
            Make: 'HONDA',
            Model: "CB1300 SUPER BOL D'OR SP",
            Model_number: '8BL-SC54',
            Transmission: '6MT',
            Engine_capacity: '1284 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 2647038
        },
        {
            Make: 'HONDA',
            Model: "CB1300 SUPER DOL D'OR",
            Model_number: '8BL-SC54',
            Transmission: '6MT',
            Engine_capacity: '1284 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 2163171
        },
        {
            Make: 'HONDA',
            Model: 'CB1300 SUPER FOUR',
            Model_number: '2BL-SC54',
            Transmission: '6MT',
            Engine_capacity: '1284 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1777630
        },
        {
            Make: 'HONDA',
            Model: 'CB1300 SUPER FOUR',
            Model_number: '8BL-CS54',
            Transmission: '6MT',
            Engine_capacity: '1284 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 2020857
        },
        {
            Make: 'HONDA',
            Model: 'CB1300 SUPER FOUR SP',
            Model_number: '8BL-SC54',
            Transmission: '6MT',
            Engine_capacity: '1284 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 2504724
        },
        {
            Make: 'HONDA',
            Model: 'CB250R',
            Model_number: '2BK-MC52',
            Transmission: '6MT',
            Engine_capacity: '249 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 602893
        },
        {
            Make: 'HONDA',
            Model: 'CB250R',
            Model_number: '8BK-MC52',
            Transmission: '6MT',
            Engine_capacity: '249 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 730070
        },
        {
            Make: 'HONDA',
            Model: 'CB400',
            Model_number: '2BL-NC42',
            Transmission: '6MT',
            Engine_capacity: '399 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1091936
        },
        {
            Make: 'HONDA',
            Model: "CB400 SUPER BOL D'OR",
            Model_number: '2BL-NC42',
            Transmission: '6MT',
            Engine_capacity: '399 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1275650
        },
        {
            Make: 'HONDA',
            Model: "CB400 SUPER D0L D'OR",
            Model_number: '2BL-NC42',
            Transmission: '6MT',
            Engine_capacity: '399 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1186380
        },
        {
            Make: 'HONDA',
            Model: 'CB400 SUPER FOUR',
            Model_number: '2BL-NC42',
            Transmission: '6MT',
            Engine_capacity: '399 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1028541
        },
        {
            Make: 'HONDA',
            Model: 'CB650F',
            Model_number: '2BL-RC83',
            Transmission: '6MT',
            Engine_capacity: '648 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1106167
        },
        {
            Make: 'HONDA',
            Model: 'CB650R',
            Model_number: '2BL-RH03',
            Transmission: '6MT',
            Engine_capacity: '648 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1151449
        },
        {
            Make: 'HONDA',
            Model: 'CB650R',
            Model_number: '8BL-RH03',
            Transmission: '6MT',
            Engine_capacity: '648 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1323519
        },
        {
            Make: 'HONDA',
            Model: 'CB650R E-CLUTCH',
            Model_number: '8BL-RH17',
            Transmission: '6MT',
            Engine_capacity: '648 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1408907
        },
        {
            Make: 'HONDA',
            Model: 'CBR1000RR',
            Model_number: '2BL-SC77',
            Transmission: '6MT',
            Engine_capacity: '999 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 2451680
        },
        {
            Make: 'HONDA',
            Model: 'CBR1000RR SP',
            Model_number: '2BL-SC77',
            Transmission: '6MT',
            Engine_capacity: '999 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 2988591
        },
        {
            Make: 'HONDA',
            Model: 'CBR1000RR-R',
            Model_number: '2BL-SC82',
            Transmission: '6MT',
            Engine_capacity: '999 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 2846278
        },
        {
            Make: 'HONDA',
            Model: 'CBR1000RR-R FIREBLADE',
            Model_number: '8BL-SC82',
            Transmission: '6MT',
            Engine_capacity: '999 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 3130905
        },
        {
            Make: 'HONDA',
            Model: 'CBR1000RR-R FIREBLADE',
            Model_number: '2BL-SC82',
            Transmission: '6MT',
            Engine_capacity: '999 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 3130905
        },
        {
            Make: 'HONDA',
            Model: 'CBR250R',
            Model_number: '2BK-MC51',
            Transmission: '6MT',
            Engine_capacity: '249 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 966441
        },
        {
            Make: 'HONDA',
            Model: 'CBR250R',
            Model_number: '8BK-MC51',
            Transmission: '6MT',
            Engine_capacity: '249 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1124280
        },
        {
            Make: 'HONDA',
            Model: 'CBR250R',
            Model_number: '8BK-MC52',
            Transmission: '6MT',
            Engine_capacity: '249 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 730070
        },
        {
            Make: 'HONDA',
            Model: 'CBR250R',
            Model_number: '2BK-MC52',
            Transmission: '6MT',
            Engine_capacity: '149 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 730070
        },
        {
            Make: 'HONDA',
            Model: 'CBR250RR ABS',
            Model_number: '2BK-MC51',
            Transmission: '6MT',
            Engine_capacity: '249 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 966441
        },
        {
            Make: 'HONDA',
            Model: 'CBR400R',
            Model_number: '2BL-NC56',
            Transmission: '6MT',
            Engine_capacity: '399 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 950915
        },
        {
            Make: 'HONDA',
            Model: 'CBR400R',
            Model_number: '2BL-NC47',
            Transmission: '6MT',
            Engine_capacity: '399 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 937978
        },
        {
            Make: 'HONDA',
            Model: 'CBR400R',
            Model_number: '8BL-NC56',
            Transmission: '6MT',
            Engine_capacity: '399 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1088701
        },
        {
            Make: 'HONDA',
            Model: 'CBR400R',
            Model_number: 'BBL-NC65',
            Transmission: '6MT',
            Engine_capacity: '399 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1116517
        },
        {
            Make: 'HONDA',
            Model: 'CBR600RR',
            Model_number: '2BL-PC40',
            Transmission: '6MT',
            Engine_capacity: '599 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 2077783
        },
        {
            Make: 'HONDA',
            Model: 'CBR600RR',
            Model_number: '8BL-PC40',
            Transmission: '6MT',
            Engine_capacity: '599 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 2035088
        },
        {
            Make: 'HONDA',
            Model: 'CBR650F',
            Model_number: '2BL-RC83',
            Transmission: '6MT',
            Engine_capacity: '648 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1235543
        },
        {
            Make: 'HONDA',
            Model: 'CBR650R',
            Model_number: '2BL-RH03',
            Transmission: '6MT',
            Engine_capacity: '648 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1280825
        },
        {
            Make: 'HONDA',
            Model: 'CBR650R',
            Model_number: '8BL-RH03',
            Transmission: '6MT',
            Engine_capacity: '648 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1394676
        },
        {
            Make: 'HONDA',
            Model: 'CBR650R',
            Model_number: '8BL-RH17',
            Transmission: '6MT',
            Engine_capacity: '648 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1423139
        },
        {
            Make: 'HONDA',
            Model: 'CBR650R',
            Model_number: '2BL-RH03',
            Transmission: '6MT',
            Engine_capacity: '648 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1408907
        },
        {
            Make: 'HONDA',
            Model: 'CL250',
            Model_number: '8BK-MC57',
            Transmission: '6MT',
            Engine_capacity: '249 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 804073
        },
        {
            Make: 'HONDA',
            Model: 'CL500',
            Model_number: '8BL-PC68',
            Transmission: '6MT',
            Engine_capacity: '471 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1117164
        },
        {
            Make: 'HONDA',
            Model: 'CL500',
            Model_number: 'BBL-PC68',
            Transmission: '6MT',
            Engine_capacity: '471 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1117164
        },
        {
            Make: 'HONDA',
            Model: 'CR250 RALLY',
            Model_number: '2BK-MD44',
            Transmission: '6MT',
            Engine_capacity: '249 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 840946
        },
        {
            Make: 'HONDA',
            Model: 'CR600R',
            Model_number: '2BL-PC40',
            Transmission: '6MT',
            Engine_capacity: '599 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1888893
        },
        {
            Make: 'HONDA',
            Model: 'CRF1000L',
            Model_number: '2BL-SD04',
            Transmission: '6MT',
            Engine_capacity: '998 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1988513
        },
        {
            Make: 'HONDA',
            Model: 'CRF100L AFRICA TWIN ADVENTURE SPORTS DUAL CLUTCH TRANSMISSION',
            Model_number: '2BL-SD04',
            Transmission: 'DCT',
            Engine_capacity: '998 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1993688
        },
        {
            Make: 'HONDA',
            Model: 'CRF110 AFRICA TWIN ADVENTURE DUAL CLUTCH TRANSMISSION',
            Model_number: '2BL-SD10',
            Transmission: 'DCT',
            Engine_capacity: '1082 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 2419336
        },
        {
            Make: 'HONDA',
            Model: 'CRF1100L AFRICA TWIN',
            Model_number: '2BL-SD10',
            Transmission: '6MT',
            Engine_capacity: '1082 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 2092014
        },
        {
            Make: 'HONDA',
            Model: 'CRF1100L AFRICA TWIN',
            Model_number: '2BL-SD10',
            Transmission: 'DCT',
            Engine_capacity: '1082 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 2661269
        },
        {
            Make: 'HONDA',
            Model: 'CRF1100L AFRICA TWIN ADVENTURE SPORTS ES (DCT)',
            Model_number: '8BL-SD15',
            Transmission: 'DCT',
            Engine_capacity: '1082 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 2120477
        },
        {
            Make: 'HONDA',
            Model: 'CRF1100LAFRICA TWIN ',
            Model_number: '8BL-SD10',
            Transmission: '6MT',
            Engine_capacity: '1082 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 2120477
        },
        {
            Make: 'HONDA',
            Model: 'CRF110F',
            Model_number: 'JE02',
            Transmission: '4MT',
            Engine_capacity: '109 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 323441
        },
        {
            Make: 'HONDA',
            Model: 'CRF125F',
            Model_number: 'JE03',
            Transmission: '5MT',
            Engine_capacity: '124 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 407535
        },
        {
            Make: 'HONDA',
            Model: 'CRF150R',
            Model_number: 'KE03',
            Transmission: '5MT',
            Engine_capacity: '149 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 591249
        },
        {
            Make: 'HONDA',
            Model: 'CRF250 L',
            Model_number: '2BK-MD47',
            Transmission: '6MT',
            Engine_capacity: '249 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 775611
        },
        {
            Make: 'HONDA',
            Model: 'CRF250 RALLY',
            Model_number: '2BK-MD44',
            Transmission: '6MT',
            Engine_capacity: '249 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 840946
        },
        {
            Make: 'HONDA',
            Model: 'CRF250 RALLY',
            Model_number: '8BK-MD47',
            Transmission: '6MT',
            Engine_capacity: '249 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 989081
        },
        {
            Make: 'HONDA',
            Model: 'CRF250 RALLY',
            Model_number: '2BK-MD47',
            Transmission: '6MT',
            Engine_capacity: '249 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 959196
        },
        {
            Make: 'HONDA',
            Model: 'CRF250 RALLY ABS',
            Model_number: '2BK-MD44',
            Transmission: '6MT',
            Engine_capacity: '249 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 840946
        },
        {
            Make: 'HONDA',
            Model: 'CRF250L',
            Model_number: '2BK-MD44',
            Transmission: '6MT',
            Engine_capacity: '249 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 596425
        },
        {
            Make: 'HONDA',
            Model: 'CRF250L',
            Model_number: 'CRF-MD44',
            Transmission: '6MT',
            Engine_capacity: '249 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 596425
        },
        {
            Make: 'HONDA',
            Model: 'CRF250L',
            Model_number: '8BK-MD47',
            Transmission: '6MT',
            Engine_capacity: '249 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 804073
        },
        {
            Make: 'HONDA',
            Model: 'CRF250M',
            Model_number: '2BK-MD44',
            Transmission: '6MT',
            Engine_capacity: '249 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 645587
        },
        {
            Make: 'HONDA',
            Model: 'CRF250R',
            Model_number: 'ME12',
            Transmission: '5MT',
            Engine_capacity: '249 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 996197
        },
        {
            Make: 'HONDA',
            Model: 'CRF250RX',
            Model_number: 'ME12',
            Transmission: '5MT',
            Engine_capacity: '249 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1015604
        },
        {
            Make: 'HONDA',
            Model: 'CRF450L',
            Model_number: '2BL-PD11',
            Transmission: '6MT',
            Engine_capacity: '449 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 1552515
        },
        {
            Make: 'HONDA',
            Model: 'CRF450R',
            Model_number: 'PE07',
            Transmission: '5MT',
            Engine_capacity: '449 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 1157917
        },
        {
            Make: 'HONDA',
            Model: 'CRF450RX',
            Model_number: 'PE07',
            Transmission: '5MT',
            Engine_capacity: '449 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 1177324
        },
        {
            Make: 'HONDA',
            Model: 'CRF50F',
            Model_number: 'AE04',
            Transmission: '4MT',
            Engine_capacity: '49 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 232877
        },
        {
            Make: 'HONDA',
            Model: 'CROSS CUB 110',
            Model_number: '8BJ-JA60',
            Transmission: '4MT',
            Engine_capacity: '109 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 469636
        },
        {
            Make: 'HONDA',
            Model: 'CROSS CUB 110',
            Model_number: '8BJ-J60',
            Transmission: '4MT',
            Engine_capacity: '109 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 469636
        },
        {
            Make: 'HONDA',
            Model: 'CROSS CUB 110',
            Model_number: '2BJ-JA45',
            Transmission: '4MT',
            Engine_capacity: '109 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 441173
        },
        {
            Make: 'HONDA',
            Model: 'CROSS CUB 50',
            Model_number: '2BH-AA06',
            Transmission: '4MT',
            Engine_capacity: '49 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 349316
        },
        {
            Make: 'HONDA',
            Model: 'CT125',
            Model_number: '2BJ-JA55',
            Transmission: '4MT',
            Engine_capacity: '124 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 517505
        },
        {
            Make: 'HONDA',
            Model: 'CT125',
            Model_number: '8BJ-JA65',
            Transmission: '4MT',
            Engine_capacity: '123 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 569256
        },
        {
            Make: 'HONDA',
            Model: 'DAX125',
            Model_number: '8BJ-JB04',
            Transmission: '4MT',
            Engine_capacity: '123 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 569256
        },
        {
            Make: 'HONDA',
            Model: 'DAX125',
            Model_number: '8BJ-JB06',
            Transmission: '4MT',
            Engine_capacity: '123 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 583487
        },
        {
            Make: 'HONDA',
            Model: 'DIO110',
            Model_number: '2BJ-JF58',
            Transmission: 'CVT',
            Engine_capacity: '108 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 276865
        },
        {
            Make: 'HONDA',
            Model: 'DIO110',
            Model_number: '8BJ-JK03',
            Transmission: 'CVT',
            Engine_capacity: '109 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 327322
        },
        {
            Make: 'HONDA',
            Model: 'DIO110',
            Model_number: '2BJ-JK03',
            Transmission: 'CVT',
            Engine_capacity: '109 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 317360
        },
        {
            Make: 'HONDA',
            Model: 'DUNK',
            Model_number: '2BH-AF78',
            Transmission: 'CVT',
            Engine_capacity: '49 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 257459
        },
        {
            Make: 'HONDA',
            Model: 'EM1 E',
            Model_number: 'ZAD-EF16',
            Seating: '1 ',
            Fuel: 'ELECTRIC',
            Engine_capacity: '',
            Transmission: '',
            CRSP: 387094
        },
        {
            Make: 'HONDA',
            Model: 'FORZA',
            Model_number: '2BK-MF13',
            Transmission: 'CVT',
            Engine_capacity: '248 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 774964
        },
        {
            Make: 'HONDA',
            Model: 'FORZA',
            Model_number: '8BK-MF17',
            Transmission: '6MT',
            Engine_capacity: '249 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 895154
        },
        {
            Make: 'HONDA',
            Model: 'FORZA',
            Model_number: '2BK-MF15',
            Transmission: 'CVT',
            Engine_capacity: '249 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 852460
        },
        {
            Make: 'HONDA',
            Model: 'GB350',
            Model_number: '8BL-NC59',
            Transmission: '5MT',
            Engine_capacity: '348 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 725801
        },
        {
            Make: 'HONDA',
            Model: 'GB350',
            Model_number: '2BL-NC59',
            Transmission: '5MT',
            Engine_capacity: '348 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 711569
        },
        {
            Make: 'HONDA',
            Model: 'GB350 S',
            Model_number: '2BL-NC59',
            Transmission: '5MT',
            Engine_capacity: '348 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 768495
        },
        {
            Make: 'HONDA',
            Model: 'GIORNO',
            Model_number: '2BH-AF77',
            Transmission: 'CVT',
            Engine_capacity: '49 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 232877
        },
        {
            Make: 'HONDA',
            Model: 'GOLD WING',
            Model_number: '2BL-SC79',
            Transmission: '6MT',
            Engine_capacity: '1833 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 3278394
        },
        {
            Make: 'HONDA',
            Model: 'GOLD WING TOUR',
            Model_number: '2BL-SC79',
            Transmission: 'DCT',
            Engine_capacity: '1833 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 3971851
        },
        {
            Make: 'HONDA',
            Model: 'GOLD WING TOUR',
            Model_number: '8BL-SC79',
            Transmission: 'DCT',
            Engine_capacity: '1833 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 4482887
        },
        {
            Make: 'HONDA',
            Model: 'GOLD WING TOUR AIRBAG',
            Model_number: '2BL-SC79',
            Transmission: 'DCT',
            Engine_capacity: '1833 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 3977026
        },
        {
            Make: 'HONDA',
            Model: 'GROM',
            Model_number: '2BJ-JC75',
            Transmission: '4MT',
            Engine_capacity: '124 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 420473
        },
        {
            Make: 'HONDA',
            Model: 'GROM',
            Model_number: '8BJ-JC92',
            Transmission: '5MT',
            Engine_capacity: '123 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 505214
        },
        {
            Make: 'HONDA',
            Model: 'GYRO CANOPY',
            Model_number: '2BH-TA03',
            Transmission: 'CVT',
            Engine_capacity: '49 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 671463
        },
        {
            Make: 'HONDA',
            Model: 'GYRO CANOPY E',
            Model_number: 'ZAD-EF14',
            Seating: '1 ',
            Engine_capacity: '',
            Transmission: '',
            Fuel: 'ELECTRIC',
            CRSP: 1295056
        },
        {
            Make: 'HONDA',
            Model: 'GYRO E',
            Model_number: 'ZAD-EF13',
            Engine_capacity: '0 ',
            Seating: '1 ',
            Transmission: '',
            Fuel: 'ELECTRIC',
            CRSP: 711569
        },
        {
            Make: 'HONDA',
            Model: 'GYRO X',
            Model_number: '2BH-TD02',
            Transmission: 'CVT',
            Engine_capacity: '49 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 501980
        },
        {
            Make: 'HONDA',
            Model: 'HAWK 11',
            Model_number: '8BL-SC85',
            Transmission: '6MT',
            Engine_capacity: '1082 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1807386
        },
        {
            Make: 'HONDA',
            Model: 'HAWK11',
            Model_number: '8BL-SC85',
            Transmission: '6MT',
            Engine_capacity: '1082 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1807386
        },
        {
            Make: 'HONDA',
            Model: 'IORNO',
            Model_number: '2BH-AF77',
            Transmission: 'CVT',
            Engine_capacity: '49 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 270396
        },
        {
            Make: 'HONDA',
            Model: 'LEAD125',
            Model_number: '2BJ-JF45',
            Transmission: 'CVT',
            Engine_capacity: '124 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 371310
        },
        {
            Make: 'HONDA',
            Model: 'LEAD125',
            Model_number: '8BJ-JK12',
            Transmission: 'CVT',
            Engine_capacity: '124 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 426942
        },
        {
            Make: 'HONDA',
            Model: 'LEADER125',
            Model_number: '8BJ-JK12',
            Transmission: 'CVT',
            Engine_capacity: '124 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 426942
        },
        {
            Make: 'HONDA',
            Model: 'MM4-02',
            Model_number: '2BL-RC82',
            Transmission: 'DCT',
            Engine_capacity: '745 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1416670
        },
        {
            Make: 'HONDA',
            Model: 'MONKEY 125',
            Model_number: '2BJ-JB02',
            Transmission: '4MT',
            Engine_capacity: '124 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 478692
        },
        {
            Make: 'HONDA',
            Model: 'MONKEY 125',
            Model_number: '8BJ-JB03',
            Transmission: '5MT',
            Engine_capacity: '123 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 569256
        },
        {
            Make: 'HONDA',
            Model: 'MONKEY 125',
            Model_number: '8BJ-JB05',
            Transmission: '5MT',
            Engine_capacity: '123 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 583487
        },
        {
            Make: 'HONDA',
            Model: 'MONKEY125',
            Model_number: '2B-JB02',
            Transmission: '4MT',
            Engine_capacity: '124 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 478692
        },
        {
            Make: 'HONDA',
            Model: 'MONKEY125',
            Model_number: '8BJ-JB03',
            Transmission: '5MT',
            Engine_capacity: '123 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 569256
        },
        {
            Make: 'HONDA',
            Model: 'NC750S',
            Model_number: '2BL-RC88',
            Transmission: 'DCT',
            Engine_capacity: '745 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 985847
        },
        {
            Make: 'HONDA',
            Model: 'NC750S DUAL CLUTCH TRANSMISSION',
            Model_number: '2BL-RC88',
            Transmission: 'DCT',
            Engine_capacity: '745 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 991022
        },
        {
            Make: 'HONDA',
            Model: 'NC750X',
            Model_number: '2BL-RC90',
            Transmission: '6MT',
            Engine_capacity: '745 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1059591
        },
        {
            Make: 'HONDA',
            Model: 'NC750X',
            Model_number: '8BL-RH09',
            Transmission: '6MT',
            Engine_capacity: '745 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1195437
        },
        {
            Make: 'HONDA',
            Model: 'NC750X',
            Model_number: '2BL-RH09',
            Transmission: '6MT',
            Engine_capacity: '745 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1195437
        },
        {
            Make: 'HONDA',
            Model: 'NC750X ABS E',
            Model_number: '2BL-RC90',
            Transmission: '6MT',
            Engine_capacity: '745 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1054416
        },
        {
            Make: 'HONDA',
            Model: 'NT1100',
            Model_number: '8BL-SC84',
            Transmission: 'DCT',
            Engine_capacity: '1082 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 2177402
        },
        {
            Make: 'HONDA',
            Model: 'NX400',
            Model_number: 'BBL-NC65',
            Transmission: '6MT',
            Engine_capacity: '399 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1152742
        },
        {
            Make: 'HONDA',
            Model: 'PCX',
            Model_number: '2BJ-JF81',
            Transmission: 'CVT',
            Engine_capacity: '124 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 410123
        },
        {
            Make: 'HONDA',
            Model: 'PCX',
            Model_number: '8BJ-JK05',
            Transmission: 'CVT',
            Engine_capacity: '124 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 469636
        },
        {
            Make: 'HONDA',
            Model: 'PCX',
            Model_number: '2BJ-JK05',
            Transmission: 'CVT',
            Engine_capacity: '124 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 462520
        },
        {
            Make: 'HONDA',
            Model: 'PCX E:HEV',
            Model_number: '2BJ-JK106',
            Transmission: 'CVT',
            Engine_capacity: '124 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 580641
        },
        {
            Make: 'HONDA',
            Model: 'PCX HYBRID',
            Model_number: '2AJ-JF84',
            Transmission: 'CVT',
            Engine_capacity: '124 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 517505
        },
        {
            Make: 'HONDA',
            Model: 'PCX150 ABS',
            Model_number: '2BK-KF30',
            Transmission: 'CVT',
            Engine_capacity: '149 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 473517
        },
        {
            Make: 'HONDA',
            Model: 'PCX150 ABS',
            Model_number: '2BJ-JF81',
            Transmission: 'CVT',
            Engine_capacity: '124 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 410123
        },
        {
            Make: 'HONDA',
            Model: 'PCX150 ABS',
            Model_number: '2BK-KF30',
            Transmission: 'CVT',
            Engine_capacity: '149 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 473517
        },
        {
            Make: 'HONDA',
            Model: 'PCX160',
            Model_number: '8BK-KF47',
            Transmission: 'CVT',
            Engine_capacity: '156 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 533677
        },
        {
            Make: 'HONDA',
            Model: 'PCX160',
            Model_number: '2BK-KF47',
            Transmission: 'CVT',
            Engine_capacity: '156 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 526561
        },
        {
            Make: 'HONDA',
            Model: 'REBEL 1100',
            Model_number: '8BL-SC83',
            Transmission: '6MT',
            Engine_capacity: '1082 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1472949
        },
        {
            Make: 'HONDA',
            Model: 'REBEL 1100',
            Model_number: '8BL-SC63',
            Transmission: '6MT',
            Engine_capacity: '1082 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1423139
        },
        {
            Make: 'HONDA',
            Model: 'REBEL 250',
            Model_number: '2BK-MC49',
            Transmission: '6MT',
            Engine_capacity: '249 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 644294
        },
        {
            Make: 'HONDA',
            Model: 'REBEL 250',
            Model_number: '8BK-MC49',
            Transmission: '6MT',
            Engine_capacity: '249 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 789842
        },
        {
            Make: 'HONDA',
            Model: 'REBEL 250 S EDITION',
            Model_number: '2BK-MC49',
            Transmission: '6MT',
            Engine_capacity: '249 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 750382
        },
        {
            Make: 'HONDA',
            Model: 'REBEL 500',
            Model_number: '2BL-PC60',
            Transmission: '6MT',
            Engine_capacity: '471 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 940565
        },
        {
            Make: 'HONDA',
            Model: 'REBEL250',
            Model_number: '8BK-MC49',
            Transmission: '6MT',
            Engine_capacity: '249 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 789842
        },
        {
            Make: 'HONDA',
            Model: 'SPUER CUB 50 PRO',
            Model_number: '3BH-AA07',
            Transmission: '4MT',
            Engine_capacity: '49 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 334438
        },
        {
            Make: 'HONDA',
            Model: 'SUPER CUB 110',
            Model_number: '8BJ-JA59',
            Transmission: '4MT',
            Engine_capacity: '109 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 391363
        },
        {
            Make: 'HONDA',
            Model: 'SUPER CUB 110',
            Model_number: 'BBJ-JA59',
            Transmission: '4MT',
            Engine_capacity: '109 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 391363
        },
        {
            Make: 'HONDA',
            Model: 'SUPER CUB 110 PRO',
            Model_number: '2BJ-JA42',
            Transmission: '4MT',
            Engine_capacity: '109 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 355785
        },
        {
            Make: 'HONDA',
            Model: 'SUPER CUB 125',
            Model_number: '2BJ-JA48',
            Transmission: '4MT',
            Engine_capacity: '124 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 478692
        },
        {
            Make: 'HONDA',
            Model: 'SUPER CUB 125',
            Model_number: '8BJ-JA58',
            Transmission: '4MT',
            Engine_capacity: '123 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 569256
        },
        {
            Make: 'HONDA',
            Model: 'SUPER CUB 50',
            Model_number: '2BH-AA09',
            Transmission: '4MT',
            Engine_capacity: '49 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 278159
        },
        {
            Make: 'HONDA',
            Model: 'SUPER CUB C125',
            Model_number: '2BJ-JA48',
            Transmission: '4MT',
            Engine_capacity: '124 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 478692
        },
        {
            Make: 'HONDA',
            Model: 'SUPER CUB C125',
            Model_number: '8BJ-JA58',
            Transmission: '4MT',
            Engine_capacity: '123 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 569256
        },
        {
            Make: 'HONDA',
            Model: 'SUPER CUB C125',
            Model_number: '8BJ-JA71',
            Transmission: '4MT',
            Engine_capacity: '123 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 583487
        },
        {
            Make: 'HONDA',
            Model: 'TACT',
            Model_number: '2BH-AF79',
            Transmission: 'CVT',
            Engine_capacity: '49 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 213471
        },
        {
            Make: 'HONDA',
            Model: 'TACT BASIC',
            Model_number: '2BH-AF79',
            Transmission: 'CVT',
            Engine_capacity: '49 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 197946
        },
        {
            Make: 'HONDA',
            Model: 'VFR3800X',
            Model_number: '2BL-RC80',
            Transmission: '6MT',
            Engine_capacity: '781 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1764692
        },
        {
            Make: 'HONDA',
            Model: 'VFR800F',
            Model_number: '2BL-RC79',
            Transmission: '6MT',
            Engine_capacity: '781 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1656016
        },
        {
            Make: 'HONDA',
            Model: 'VFR800X',
            Model_number: '2BL-RC80',
            Transmission: '6MT',
            Engine_capacity: '781 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1720704
        },
        {
            Make: 'HONDA',
            Model: 'VRF800X',
            Model_number: '2BL-RC80',
            Transmission: '6MT',
            Engine_capacity: '781 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1941161
        },
        {
            Make: 'HONDA',
            Model: 'X-ADV',
            Model_number: '2BL-RC95',
            Transmission: 'DCT',
            Engine_capacity: '745 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1481358
        },
        {
            Make: 'HONDA',
            Model: 'X-ADV',
            Model_number: '8BL-RH10',
            Transmission: 'DCT',
            Engine_capacity: '745 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1707767
        },
        {
            Make: 'HONDA',
            Model: 'XL750 TRANSALP',
            Model_number: '8BL-RD16',
            Transmission: '6MT',
            Engine_capacity: '754 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1636610
        },
        {
            Make: 'SUZUKI',
            Model: 'ADDRESS 110',
            Model_number: '2BJ-CE47A',
            Transmission: 'CVT',
            Engine_capacity: '112 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 256165
        },
        {
            Make: 'SUZUKI',
            Model: 'ADDRESS 125',
            Model_number: '8BJ-DP12H',
            Transmission: 'CVT',
            Engine_capacity: '124 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 354362
        },
        {
            Make: 'SUZUKI',
            Model: 'ADDRESS V50',
            Model_number: '2BH-CA4BA',
            Transmission: 'CVT',
            Engine_capacity: '49 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 209590
        },
        {
            Make: 'SUZUKI',
            Model: 'ADDRESS V50',
            Model_number: '2BH-CA4BA',
            Transmission: 'CVT',
            Engine_capacity: '49 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 236241
        },
        {
            Make: 'SUZUKI',
            Model: 'ADDRESS110',
            Model_number: '2BJ-CE47A',
            Transmission: 'CVT',
            Engine_capacity: '112 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 256165
        },
        {
            Make: 'SUZUKI',
            Model: 'ADDRESS125',
            Model_number: '2BJ-DT11A',
            Transmission: 'CVT',
            Engine_capacity: '124 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 265221
        },
        {
            Make: 'SUZUKI',
            Model: 'ADDRESS125 FLAT SEAT',
            Model_number: '2BJ-DT11A',
            Transmission: 'CVT',
            Engine_capacity: '124 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 271690
        },
        {
            Make: 'SUZUKI',
            Model: 'AVENSIS 125',
            Model_number: '8BJ-EA12J',
            Transmission: 'CVT',
            Engine_capacity: '124 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 368593
        },
        {
            Make: 'SUZUKI',
            Model: 'AVENSIS125',
            Model_number: '8BJ-EA12J',
            Transmission: 'CVT',
            Engine_capacity: '124 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 368593
        },
        {
            Make: 'SUZUKI',
            Model: 'BURGMAN 400 ABS',
            Model_number: '8BL-DU11N',
            Transmission: 'CVT',
            Engine_capacity: '399 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1158435
        },
        {
            Make: 'SUZUKI',
            Model: 'BURGMAN STREET125EX',
            Model_number: '8BJ-EA23M',
            Transmission: 'CVT',
            Engine_capacity: '124 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 411287
        },
        {
            Make: 'SUZUKI',
            Model: 'BURGMAN200',
            Model_number: '2BJ-CH41A',
            Transmission: 'CVT',
            Engine_capacity: '199 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 627475
        },
        {
            Make: 'SUZUKI',
            Model: 'BURGMAN200 ABS',
            Model_number: '2BDK-CH41A',
            Transmission: 'CVT',
            Engine_capacity: '199 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 739178
        },
        {
            Make: 'SUZUKI',
            Model: 'BURGMAN400 ABS',
            Model_number: '2BJ-DU11A',
            Transmission: 'CVT',
            Engine_capacity: '399 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 957384
        },
        {
            Make: 'SUZUKI',
            Model: 'BURGMAN400 ABS',
            Model_number: '8BL-DU11N',
            Transmission: 'CVT',
            Engine_capacity: '399 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1095817
        },
        {
            Make: 'SUZUKI',
            Model: 'DR-Z50',
            Model_number: 'JA42A',
            Transmission: '6MT',
            Engine_capacity: '49 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 271690
        },
        {
            Make: 'SUZUKI',
            Model: 'DR-Z50',
            Model_number: 'JA42A',
            Transmission: '3MT',
            Engine_capacity: '49 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 271690
        },
        {
            Make: 'SUZUKI',
            Model: 'GIXXER',
            Model_number: '2BK-ED13N',
            Transmission: '5MT',
            Engine_capacity: '154 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 414004
        },
        {
            Make: 'SUZUKI',
            Model: 'GIXXER',
            Model_number: '2BK-NG4BG',
            Transmission: '5MT',
            Engine_capacity: '154 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 385541
        },
        {
            Make: 'SUZUKI',
            Model: 'GIXXER',
            Model_number: '8BK-ED131',
            Transmission: '6MT',
            Engine_capacity: '154 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 498099
        },
        {
            Make: 'SUZUKI',
            Model: 'GIXXER250',
            Model_number: '8BK-ED22Y',
            Transmission: '6MT',
            Engine_capacity: '249 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 623335
        },
        {
            Make: 'SUZUKI',
            Model: 'GIXXER 250',
            Model_number: '2BK-ED22B',
            Transmission: '6MT',
            Engine_capacity: '249 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 527855
        },
        {
            Make: 'SUZUKI',
            Model: 'GIXXER SF 250',
            Model_number: '2BK-ED22B',
            Transmission: '6MT',
            Engine_capacity: '249 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 566668
        },
        {
            Make: 'SUZUKI',
            Model: 'GIXXER SF250',
            Model_number: '8BK-ED22Y',
            Transmission: '6MT',
            Engine_capacity: '249 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 666029
        },
        {
            Make: 'SUZUKI',
            Model: 'GSX250R',
            Model_number: '2BK-DN11A',
            Transmission: '6MT',
            Engine_capacity: '248 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 645587
        },
        {
            Make: 'SUZUKI',
            Model: 'GSX250R',
            Model_number: '8BK-DN12B',
            Transmission: '6MT',
            Engine_capacity: '248 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 795535
        },
        {
            Make: 'SUZUKI',
            Model: 'GSX250R ABS',
            Model_number: '2BK-ED111A',
            Transmission: '6MT',
            Engine_capacity: '248 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 752840
        },
        {
            Make: 'SUZUKI',
            Model: 'GSX-8R',
            Model_number: '8BL-EM1AA',
            Transmission: '6MT',
            Engine_capacity: '775 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1480064
        },
        {
            Make: 'SUZUKI',
            Model: 'GSX-8S',
            Model_number: '8BL-EM1AA',
            Transmission: '6MT',
            Engine_capacity: '775 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1380445
        },
        {
            Make: 'SUZUKI',
            Model: 'GSX-R1000R ABS',
            Model_number: '2BL-DM11G',
            Transmission: '6MT',
            Engine_capacity: '999 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 2445211
        },
        {
            Make: 'SUZUKI',
            Model: 'GSX-R125',
            Model_number: '2BJ-DL33B',
            Transmission: '6MT',
            Engine_capacity: '124 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 463167
        },
        {
            Make: 'SUZUKI',
            Model: 'GSX-R125 ABS',
            Model_number: '8BJ-DL32D',
            Transmission: '6MT',
            Engine_capacity: '124 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 586333
        },
        {
            Make: 'SUZUKI',
            Model: 'GSX-R125 ABS',
            Model_number: '2BJ-DL33B',
            Transmission: '6MT',
            Engine_capacity: '124 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 537946
        },
        {
            Make: 'SUZUKI',
            Model: 'GSX-S1000',
            Model_number: '8BL-EK1AA',
            Transmission: '6MT',
            Engine_capacity: '998 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1850080
        },
        {
            Make: 'SUZUKI',
            Model: 'GSX-S1000 ABS',
            Model_number: 'GSX-S1000 ABS',
            Transmission: '6MT',
            Engine_capacity: '998 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1355863
        },
        {
            Make: 'SUZUKI',
            Model: 'GSX-S1000 ABS',
            Model_number: '2BL-GT798',
            Transmission: '6MT',
            Engine_capacity: '998 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1355863
        },
        {
            Make: 'SUZUKI',
            Model: 'GSX-S1000F ABS',
            Model_number: '2BL-GT79B',
            Transmission: '6MT',
            Engine_capacity: '998 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1420551
        },
        {
            Make: 'SUZUKI',
            Model: 'GSX-S1000GT',
            Model_number: '8BL-EK1AA',
            Transmission: '6MT',
            Engine_capacity: '998 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 2063551
        },
        {
            Make: 'SUZUKI',
            Model: 'GSX-S1000GX',
            Model_number: '8BL-EK1AA',
            Transmission: '6MT',
            Engine_capacity: '998 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 2575881
        },
        {
            Make: 'SUZUKI',
            Model: 'GSX-S125',
            Model_number: '2BJ-DL32B',
            Transmission: '6MT',
            Engine_capacity: '124 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 424354
        },
        {
            Make: 'SUZUKI',
            Model: 'GSX-S125 ABS',
            Model_number: '2BJ-DL32B',
            Transmission: '6MT',
            Engine_capacity: '124 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 424354
        },
        {
            Make: 'SUZUKI',
            Model: 'GSX-S125 ABS',
            Model_number: '8BJ-DL32D',
            Transmission: '6MT',
            Engine_capacity: '124 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 543639
        },
        {
            Make: 'SUZUKI',
            Model: 'GSX-S125 ABS',
            Model_number: 'GSX-DL32B',
            Transmission: '6MT',
            Engine_capacity: '124 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 495252
        },
        {
            Make: 'SUZUKI',
            Model: 'GSX-S750',
            Model_number: '2BL-C533F',
            Transmission: '6MT',
            Engine_capacity: '749 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1161799
        },
        {
            Make: 'SUZUKI',
            Model: 'GSX-S750 ABS',
            Model_number: '2BL-C533F',
            Transmission: '6MT',
            Engine_capacity: '749 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1161799
        },
        {
            Make: 'SUZUKI',
            Model: 'HAYABUSA',
            Model_number: '8BL-EJ11A',
            Transmission: '6MT',
            Engine_capacity: '1339 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 2789352
        },
        {
            Make: 'SUZUKI',
            Model: 'HAYBUSA',
            Model_number: '8BL-EJ11A',
            Transmission: '6MT',
            Engine_capacity: '1339 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 2789352
        },
        {
            Make: 'SUZUKI',
            Model: 'KATANA',
            Model_number: '2BL-GT79B',
            Transmission: '6MT',
            Engine_capacity: '998 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1811268
        },
        {
            Make: 'SUZUKI',
            Model: 'KATANA',
            Model_number: '8BL-EK1AA',
            Transmission: '6MT',
            Engine_capacity: '998 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 2077783
        },
        {
            Make: 'SUZUKI',
            Model: 'KATANA ',
            Model_number: '2BL-GT79B',
            Transmission: '6MT',
            Engine_capacity: '998 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1992394
        },
        {
            Make: 'SUZUKI',
            Model: "LET'S",
            Model_number: '2BH-CA4AA',
            Transmission: 'CVT',
            Engine_capacity: '49 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 195358
        },
        {
            Make: 'SUZUKI',
            Model: "LET'S ",
            Model_number: '2BH-CA4AA',
            Transmission: 'CVT',
            Engine_capacity: '49 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 195358
        },
        {
            Make: 'SUZUKI',
            Model: "LET'S ABSKET",
            Model_number: '2BH-CA4AA',
            Transmission: 'CVT',
            Engine_capacity: '49 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 218646
        },
        {
            Make: 'SUZUKI',
            Model: 'RM85L',
            Model_number: 'RD17C',
            Transmission: '6MT',
            Engine_capacity: '84 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 547262
        },
        {
            Make: 'SUZUKI',
            Model: 'RM-Z250',
            Model_number: 'EC117Z',
            Transmission: '5MT',
            Engine_capacity: '249 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 912103
        },
        {
            Make: 'SUZUKI',
            Model: 'RM-Z250',
            Model_number: 'RJ42A',
            Transmission: '5MT',
            Engine_capacity: '249 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 892696
        },
        {
            Make: 'SUZUKI',
            Model: 'RM-Z450',
            Model_number: 'DZ117',
            Transmission: '5MT',
            Engine_capacity: '449 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 1086760
        },
        {
            Make: 'SUZUKI',
            Model: 'SKYWAVE650LX',
            Model_number: '2BL-CP52A',
            Transmission: 'CVT',
            Engine_capacity: '638 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1371388
        },
        {
            Make: 'SUZUKI',
            Model: 'SV650 ABS',
            Model_number: '2BL-VP55B',
            Transmission: '6MT',
            Engine_capacity: '645 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 820245
        },
        {
            Make: 'SUZUKI',
            Model: 'SV650 ABS',
            Model_number: '8BL-VP55E',
            Transmission: '6MT',
            Engine_capacity: '645 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1038891
        },
        {
            Make: 'SUZUKI',
            Model: 'SV650X ABS',
            Model_number: '2BL-VP55B',
            Transmission: '6MT',
            Engine_capacity: '645 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 936684
        },
        {
            Make: 'SUZUKI',
            Model: 'SV650X ABS',
            Model_number: '8BL-VP55E',
            Transmission: '6MT',
            Engine_capacity: '645 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1095817
        },
        {
            Make: 'SUZUKI',
            Model: 'SV659 ABS',
            Model_number: '2BL-VP55B',
            Transmission: '6MT',
            Engine_capacity: '645 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1016121
        },
        {
            Make: 'SUZUKI',
            Model: 'SWISH',
            Model_number: '2BJ-DV12B',
            Transmission: 'CVT',
            Engine_capacity: '124 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 381660
        },
        {
            Make: 'SUZUKI',
            Model: 'SWISH LIMITED',
            Model_number: '2BJ-DV12B',
            Transmission: 'CVT',
            Engine_capacity: '124 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 407535
        },
        {
            Make: 'SUZUKI',
            Model: 'V-STROM 1000 ABS',
            Model_number: '2BL-VU51A',
            Transmission: '6MT',
            Engine_capacity: '1036 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1681891
        },
        {
            Make: 'SUZUKI',
            Model: 'V-STROM1000XT ABS',
            Model_number: '2BL-VU51A',
            Transmission: '6MT',
            Engine_capacity: '1036 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1733642
        },
        {
            Make: 'SUZUKI',
            Model: 'V-STROM1050',
            Model_number: '8BL-EF11M',
            Transmission: '6MT',
            Engine_capacity: '1036 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1681891
        },
        {
            Make: 'SUZUKI',
            Model: 'V-STROM1050DE',
            Model_number: '8BL-EF11M',
            Transmission: '6MT',
            Engine_capacity: '1036 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 2220096
        },
        {
            Make: 'SUZUKI',
            Model: 'V-STROM1050XT',
            Model_number: '8BL-EF11M',
            Transmission: '6MT',
            Engine_capacity: '1036 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1785392
        },
        {
            Make: 'SUZUKI',
            Model: 'V-STROM250',
            Model_number: '2BK-DS11A',
            Transmission: '6MT',
            Engine_capacity: '248 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 683107
        },
        {
            Make: 'SUZUKI',
            Model: 'V-STROM250',
            Model_number: '8BK-DS12E',
            Transmission: '6MT',
            Engine_capacity: '248 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 835512
        },
        {
            Make: 'SUZUKI',
            Model: 'V-STROM250 ABS',
            Model_number: '2BK-DS11A',
            Transmission: '6MT',
            Engine_capacity: '999 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 721919
        },
        {
            Make: 'SUZUKI',
            Model: 'V-STROM250 ABS ',
            Model_number: '2BK-DS11A',
            Transmission: '6MT',
            Engine_capacity: '248 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 721919
        },
        {
            Make: 'SUZUKI',
            Model: 'V-STROM250SX',
            Model_number: '8BK-EL11L',
            Transmission: '6MT',
            Engine_capacity: '249 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 737186
        },
        {
            Make: 'SUZUKI',
            Model: 'V-STROM650 ABS',
            Model_number: '2BL-C733A',
            Transmission: '6MT',
            Engine_capacity: '645 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1086760
        },
        {
            Make: 'SUZUKI',
            Model: 'V-STROM650 ABS',
            Model_number: '8BL-C733M',
            Transmission: '6MT',
            Engine_capacity: '645 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1238131
        },
        {
            Make: 'SUZUKI',
            Model: 'V-STROM650 ABS',
            Model_number: '2BL-C733A',
            Transmission: '6MT',
            Engine_capacity: '645 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1195437
        },
        {
            Make: 'SUZUKI',
            Model: 'V-STROM650XT ABS',
            Model_number: '2BL-C733A',
            Transmission: '6MT',
            Engine_capacity: '645 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1138511
        },
        {
            Make: 'SUZUKI',
            Model: 'V-STROM650XT ABS',
            Model_number: '8BL-C733M',
            Transmission: '6MT',
            Engine_capacity: '645 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1295056
        },
        {
            Make: 'SUZUKI',
            Model: 'V-STROM650XT ABS ',
            Model_number: '2BL-C733A',
            Transmission: '6MT',
            Engine_capacity: '645 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1138511
        },
        {
            Make: 'SUZUKI',
            Model: 'V-STROM800',
            Model_number: '8BL-EM1BA',
            Transmission: '6MT',
            Engine_capacity: '775 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1593915
        },
        {
            Make: 'SUZUKI',
            Model: 'V-STROM800DE',
            Model_number: '8BL-EM1BA',
            Transmission: '6MT',
            Engine_capacity: '775 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1707767
        },
        {
            Make: 'SUZUKI',
            Model: 'V-STROMXT ABS',
            Model_number: '2BL-C733A',
            Transmission: '6MT',
            Engine_capacity: '645 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1148861
        },
        {
            Make: 'KAWASAKI',
            Model: 'ELIMINATOR SE',
            Model_number: '8BL-EL400A',
            Transmission: '6MT',
            Engine_capacity: '398 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1110048
        },
        {
            Make: 'KAWASAKI',
            Model: 'KX100',
            Model_number: 'KX100F',
            Transmission: '6MT',
            Engine_capacity: '99 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 481280
        },
        {
            Make: 'KAWASAKI',
            Model: 'KX112',
            Model_number: 'KX112A',
            Transmission: '6MT',
            Engine_capacity: '111 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 583487
        },
        {
            Make: 'KAWASAKI',
            Model: 'KX250',
            Model_number: 'KX252A',
            Transmission: '5MT',
            Engine_capacity: '249 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 925040
        },
        {
            Make: 'KAWASAKI',
            Model: 'KX250F',
            Model_number: 'KX252A',
            Transmission: '5MT',
            Engine_capacity: '249 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 925040
        },
        {
            Make: 'KAWASAKI',
            Model: 'KX450',
            Model_number: 'KX450J',
            Transmission: '5MT',
            Engine_capacity: '449 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 1190262
        },
        {
            Make: 'KAWASAKI',
            Model: 'KX450F',
            Model_number: 'KX450H',
            Transmission: '5MT',
            Engine_capacity: '449 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1110048
        },
        {
            Make: 'KAWASAKI',
            Model: 'KX65',
            Model_number: 'KX065A',
            Transmission: '6MT',
            Engine_capacity: '64 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 364841
        },
        {
            Make: 'KAWASAKI',
            Model: 'KX85',
            Model_number: 'KX085A',
            Transmission: '6MT',
            Engine_capacity: '84 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 442467
        },
        {
            Make: 'KAWASAKI',
            Model: 'KX85',
            Model_number: 'KX085C',
            Transmission: '6MT',
            Engine_capacity: '84 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 442467
        },
        {
            Make: 'KAWASAKI',
            Model: 'KX85 II',
            Model_number: 'KX085D',
            Transmission: '6MT',
            Engine_capacity: '84 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 455404
        },
        {
            Make: 'KAWASAKI',
            Model: 'KX85-II',
            Model_number: 'KX085D',
            Transmission: '6MT',
            Engine_capacity: '84 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 455404
        },
        {
            Make: 'KAWASAKI',
            Model: 'MEGURO K3',
            Model_number: '8BL-EL800E',
            Transmission: '5MT',
            Engine_capacity: '773 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1807386
        },
        {
            Make: 'KAWASAKI',
            Model: 'MEGURO K3',
            Model_number: '2BL-EJ800B',
            Transmission: '5MT',
            Engine_capacity: '773 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1650841
        },
        {
            Make: 'KAWASAKI',
            Model: 'NINJA 1000',
            Model_number: '2BL-ZXT00W',
            Transmission: '6MT',
            Engine_capacity: '998 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1526640
        },
        {
            Make: 'KAWASAKI',
            Model: 'NINJA 1000SX',
            Model_number: '2BL-ZXT02K',
            Transmission: '6MT',
            Engine_capacity: '1043 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1746579
        },
        {
            Make: 'KAWASAKI',
            Model: 'NINJA 250',
            Model_number: '2BK-EX250P',
            Transmission: '6MT',
            Engine_capacity: '248 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 754264
        },
        {
            Make: 'KAWASAKI',
            Model: 'NINJA 250 KRT',
            Model_number: '2BK-EX250P',
            Transmission: '6MT',
            Engine_capacity: '248 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 767201
        },
        {
            Make: 'KAWASAKI',
            Model: 'NINJA 400',
            Model_number: '2BL-EX400G',
            Transmission: '6MT',
            Engine_capacity: '398 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 838358
        },
        {
            Make: 'KAWASAKI',
            Model: 'NINJA 400 KRT EDITION',
            Model_number: '2BL-EX400G',
            Transmission: '6MT',
            Engine_capacity: '398 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 838358
        },
        {
            Make: 'KAWASAKI',
            Model: 'NINJA 650',
            Model_number: '2BLER650H',
            Transmission: '6MT',
            Engine_capacity: '649 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 967734
        },
        {
            Make: 'KAWASAKI',
            Model: 'NINJA 650 KRT EDITION',
            Model_number: '2BL-ER650H',
            Transmission: '6MT',
            Engine_capacity: '649 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 967734
        },
        {
            Make: 'KAWASAKI',
            Model: 'NINJA 7 HYBRID',
            Model_number: '8AL-CX500A',
            Transmission: '6MT',
            Engine_capacity: '451 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 2390873
        },
        {
            Make: 'KAWASAKI',
            Model: 'NINJA E-1',
            Model_number: 'ZAD-NX011A',
            Transmission: '0 ',
            Engine_capacity: '0 ',
            Seating: '2 ',
            Fuel: 'ELECTRIC',
            CRSP: 1380445
        },
        {
            Make: 'KAWASAKI',
            Model: 'NINJA H2 CARBON',
            Model_number: '2BL-ZXT02J',
            Transmission: '6MT',
            Engine_capacity: '998 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 4269416
        },
        {
            Make: 'KAWASAKI',
            Model: 'NINJA H2 SE',
            Model_number: '8BL-ZXT02P',
            Transmission: '6MT',
            Engine_capacity: '998 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 3956326
        },
        {
            Make: 'KAWASAKI',
            Model: 'NINJA H2 SX',
            Model_number: '2BL-ZXT02A',
            Transmission: '6MT',
            Engine_capacity: '998 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 2393461
        },
        {
            Make: 'KAWASAKI',
            Model: 'NINJA H2 SX SE',
            Model_number: '2BL-ZXT02A',
            Transmission: '6MT',
            Engine_capacity: '998 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 2846278
        },
        {
            Make: 'KAWASAKI',
            Model: 'NINJA H2 SX SE',
            Model_number: '8BL-ZXT02P',
            Transmission: '6MT',
            Engine_capacity: '998 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 3970557
        },
        {
            Make: 'KAWASAKI',
            Model: 'NINJA H2 SX SE+',
            Model_number: '2BL-ZXT02A',
            Transmission: '6MT',
            Engine_capacity: '998 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 3324970
        },
        {
            Make: 'KAWASAKI',
            Model: 'NINJA ZX-10 KRT EDITION ',
            Model_number: '2BL-ZXT02E',
            Transmission: '6MT',
            Engine_capacity: '998 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 2471086
        },
        {
            Make: 'KAWASAKI',
            Model: 'NINJA ZX-10R KRK EDITION',
            Model_number: '8BL-ZXT02L',
            Transmission: '6MT',
            Engine_capacity: '996 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 2974360
        },
        {
            Make: 'KAWASAKI',
            Model: 'NINJA ZX-10R KRT EDITION',
            Model_number: '2BL-ZXT02E',
            Transmission: '6MT',
            Engine_capacity: '998 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 2471086
        },
        {
            Make: 'KAWASAKI',
            Model: 'NINJA ZX-10R SE',
            Model_number: '2BL-ZXT02E',
            Transmission: '6MT',
            Engine_capacity: '998 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 3182656
        },
        {
            Make: 'KAWASAKI',
            Model: 'NINJA ZX-10RR',
            Model_number: '2BL-ZXT02E',
            Transmission: '6MT',
            Engine_capacity: '998 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 3506096
        },
        {
            Make: 'KAWASAKI',
            Model: 'NINJA ZX-25R SE KRT EDITION',
            Model_number: '8BK-ZX250H',
            Transmission: '6MT',
            Engine_capacity: '249 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1245246
        },
        {
            Make: 'KAWASAKI',
            Model: 'NINJA ZX-25R SE KRT EDITION',
            Model_number: '2BK-ZX250E',
            Transmission: '6MT',
            Engine_capacity: '249 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1209668
        },
        {
            Make: 'KAWASAKI',
            Model: 'NINJA ZX-4RR KRT EDITION',
            Model_number: '8BL-ZX400P',
            Transmission: '6MT',
            Engine_capacity: '399 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1494296
        },
        {
            Make: 'KAWASAKI',
            Model: 'NINJA ZX-6R',
            Model_number: '2BL-ZX630G',
            Transmission: '6MT',
            Engine_capacity: '636 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1591328
        },
        {
            Make: 'KAWASAKI',
            Model: 'NINJA ZX-6R KRT EDITION',
            Model_number: '2BL-ZX630G',
            Transmission: '6MT',
            Engine_capacity: '636 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1591328
        },
        {
            Make: 'KAWASAKI',
            Model: 'NINJA250',
            Model_number: '2BK-EX250P',
            Transmission: '6MT',
            Engine_capacity: '248 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 754264
        },
        {
            Make: 'KAWASAKI',
            Model: 'NINJA400',
            Model_number: '2BL-EX400G',
            Transmission: '6MT',
            Engine_capacity: '398 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 939272
        },
        {
            Make: 'KAWASAKI',
            Model: 'VERSYS 100 SE',
            Model_number: '2BL-LZT00D',
            Transmission: '6MT',
            Engine_capacity: '1043 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 2238209
        },
        {
            Make: 'KAWASAKI',
            Model: 'VERSYS 1000 SE',
            Model_number: '2BL-LZT00D',
            Transmission: '6MT',
            Engine_capacity: '1043 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 2238209
        },
        {
            Make: 'KAWASAKI',
            Model: 'VERSYS-X 250',
            Model_number: '2BK-LE250D',
            Transmission: '6MT',
            Engine_capacity: '248 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 754264
        },
        {
            Make: 'KAWASAKI',
            Model: 'VERSYS-X 250 TOURER',
            Model_number: '2BK-LE250D',
            Transmission: '6MT',
            Engine_capacity: '248 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 818952
        },
        {
            Make: 'KAWASAKI',
            Model: 'VULCAN S',
            Model_number: 'EBL-EN650A',
            Transmission: '6MT',
            Engine_capacity: '649 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 935390
        },
        {
            Make: 'KAWASAKI',
            Model: 'VULCAN S',
            Model_number: '2BL-EN650G',
            Transmission: '6MT',
            Engine_capacity: '649 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 993610
        },
        {
            Make: 'KAWASAKI',
            Model: 'VULCAN S ABS SPECIAL EDITION',
            Model_number: 'EBL-EN650A',
            Transmission: '6MT',
            Engine_capacity: '649 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1009135
        },
        {
            Make: 'KAWASAKI',
            Model: 'W800',
            Model_number: '2BL-EJ800B',
            Transmission: '5MT',
            Engine_capacity: '773 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1293763
        },
        {
            Make: 'KAWASAKI',
            Model: 'W800',
            Model_number: '8BL-EJ800E',
            Transmission: '5MT',
            Engine_capacity: '773 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1551221
        },
        {
            Make: 'KAWASAKI',
            Model: 'W800 CAFÉ',
            Model_number: '2BL-EJ800B',
            Transmission: '5MT',
            Engine_capacity: '773 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1332575
        },
        {
            Make: 'KAWASAKI',
            Model: 'W800 STREET',
            Model_number: '2BL-EJ800B',
            Transmission: '5MT',
            Engine_capacity: '773 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1190262
        },
        {
            Make: 'KAWASAKI',
            Model: 'Z H2',
            Model_number: '2BL-ZRT00K',
            Transmission: '6MT',
            Engine_capacity: '998 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 2225272
        },
        {
            Make: 'KAWASAKI',
            Model: 'Z H2 SE',
            Model_number: '8BL-ZRT00K',
            Transmission: '6MT',
            Engine_capacity: '998 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 2917434
        },
        {
            Make: 'KAWASAKI',
            Model: 'Z H2 SE',
            Model_number: '2BL-ZRT00K',
            Transmission: '6MT',
            Engine_capacity: '998 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 2817815
        },
        {
            Make: 'KAWASAKI',
            Model: 'Z1000',
            Model_number: '2BL-ZXT00W',
            Transmission: '6MT',
            Engine_capacity: '1043 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1377857
        },
        {
            Make: 'KAWASAKI',
            Model: 'Z125 PRO',
            Model_number: '2BL-BR125H',
            Transmission: '4MT',
            Engine_capacity: '124 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 414004
        },
        {
            Make: 'KAWASAKI',
            Model: 'Z250',
            Model_number: '2BK-EX250P',
            Transmission: '6MT',
            Engine_capacity: '248 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 715451
        },
        {
            Make: 'KAWASAKI',
            Model: 'Z250 ABS',
            Model_number: 'JBK-ER250C',
            Transmission: '6MT',
            Engine_capacity: '248 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 662406
        },
        {
            Make: 'KAWASAKI',
            Model: 'Z250 ABS SPECIAL EDITION',
            Model_number: 'JBK-ER250C',
            Transmission: '6MT',
            Engine_capacity: '248 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 681813
        },
        {
            Make: 'KAWASAKI',
            Model: 'Z400',
            Model_number: '2BL-EX400G',
            Transmission: '6MT',
            Engine_capacity: '398 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 799545
        },
        {
            Make: 'KAWASAKI',
            Model: 'Z650',
            Model_number: '2BL-ER650H',
            Transmission: '6MT',
            Engine_capacity: '649 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 941859
        },
        {
            Make: 'KAWASAKI',
            Model: 'Z650 NINJA 650 ',
            Model_number: '2BL-ER650H',
            Transmission: '6MT',
            Engine_capacity: '649 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 941859
        },
        {
            Make: 'KAWASAKI',
            Model: 'Z650RS',
            Model_number: '8BL-ER650M',
            Transmission: '6MT',
            Engine_capacity: '649 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1337750
        },
        {
            Make: 'KAWASAKI',
            Model: 'Z900',
            Model_number: '2BL-ZR900B',
            Transmission: '6MT',
            Engine_capacity: '948 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1138511
        },
        {
            Make: 'KAWASAKI',
            Model: 'Z900RS',
            Model_number: '2BL-ZRJ900C',
            Transmission: '6MT',
            Engine_capacity: '948 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1552515
        },
        {
            Make: 'KAWASAKI',
            Model: 'Z900RS CAFÉ',
            Model_number: '2BL-ZR900C',
            Transmission: '6MT',
            Engine_capacity: '948 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1617203
        },
        {
            Make: 'KAWASAKI',
            Model: 'Z900RS YELLOW BALL EDITION',
            Model_number: '8BL-ZR900K',
            Transmission: '6MT',
            Engine_capacity: '948 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 2020857
        },
        {
            Make: 'KAWASAKI',
            Model: 'ZV1000',
            Model_number: '2BL-ZXT00W',
            Transmission: '6MT',
            Engine_capacity: '1043 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1377857
        },
        {
            Make: 'YAMAHA',
            Model: 'AXIS Z',
            Model_number: '2BJ-SED7J',
            Transmission: 'CVT',
            Engine_capacity: '124 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 291097
        },
        {
            Make: 'YAMAHA',
            Model: 'AXIS Z',
            Model_number: '8BJ-SED7J',
            Transmission: 'CVT',
            Engine_capacity: '124 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 351515
        },
        {
            Make: 'YAMAHA',
            Model: 'AXIS Z',
            Model_number: '8BJ-SEJ6J',
            Transmission: 'CVT',
            Engine_capacity: '124 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 362900
        },
        {
            Make: 'YAMAHA',
            Model: 'BOLT ABS',
            Model_number: '2BL-VN09J',
            Transmission: '5MT',
            Engine_capacity: '941 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1151449
        },
        {
            Make: 'YAMAHA',
            Model: 'BOLT ABS',
            Model_number: '2BL-VN09J',
            Transmission: '6MT',
            Engine_capacity: '941 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1151449
        },
        {
            Make: 'YAMAHA',
            Model: 'BOLT R',
            Model_number: '2BL-VN09J',
            Transmission: '5MT',
            Engine_capacity: '941 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1229074
        },
        {
            Make: 'YAMAHA',
            Model: 'BOLT R ABS',
            Model_number: '2BL--VN09J',
            Transmission: '5MT',
            Engine_capacity: '941 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1351982
        },
        {
            Make: 'YAMAHA',
            Model: "BW'S125",
            Model_number: '2BJ-SED9J',
            Transmission: 'CVT',
            Engine_capacity: '124 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 394598
        },
        {
            Make: 'YAMAHA',
            Model: "BW'S125",
            Model_number: 'EBJ-SED91',
            Transmission: 'CVT',
            Engine_capacity: '124 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 394598
        },
        {
            Make: 'YAMAHA',
            Model: 'CYGNUS GRYPHUS',
            Model_number: '8BJ-SEJ4J',
            Transmission: 'CVT',
            Engine_capacity: '124 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 483867
        },
        {
            Make: 'YAMAHA',
            Model: 'CYGNUS X',
            Model_number: '2BJ-SED8J',
            Transmission: 'CVT',
            Engine_capacity: '124 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 394598
        },
        {
            Make: 'YAMAHA',
            Model: 'E-VINO',
            Model_number: 'ZAD-SY11J',
            Transmission: 'CVT',
            Engine_capacity: '0 ',
            Seating: '1 ',
            Fuel: 'ELECTRIC',
            CRSP: 335861
        },
        {
            Make: 'YAMAHA',
            Model: 'E-VINO',
            Model_number: 'ZAD-SY11J',
            Engine_capacity: '0 ',
            Seating: '1 ',
            Transmission: '',
            Fuel: 'ELECTRIC',
            CRSP: 283334
        },
        {
            Make: 'YAMAHA',
            Model: 'E-VINO',
            Model_number: 'ZAD-SY11J',
            Transmission: 'CVT',
            Engine_capacity: '',
            Seating: '1 ',
            Fuel: 'ELECTRIC',
            CRSP: 283334
        },
        {
            Make: 'YAMAHA',
            Model: 'E-VINO',
            Model_number: 'ZAD-SY11J',
            Seating: '1 ',
            Engine_capacity: '',
            Transmission: '',
            Fuel: 'ELECTRIC',
            CRSP: 407018
        },
        {
            Make: 'YAMAHA',
            Model: 'E-VINO',
            Model_number: 'ZAD-SY11J',
            Transmission: 'CVT',
            Engine_capacity: '0 ',
            Seating: '1 ',
            Fuel: 'ELECTRIC',
            CRSP: 407018
        },
        {
            Make: 'YAMAHA',
            Model: 'FJR1300A',
            Model_number: '2BL-RP27J',
            Transmission: '6MT',
            Engine_capacity: '1297 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1811268
        },
        {
            Make: 'YAMAHA',
            Model: 'GEAR',
            Model_number: '2BH-UA08J',
            Transmission: 'CVT',
            Engine_capacity: '49 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 271690
        },
        {
            Make: 'YAMAHA',
            Model: 'GYGNUS X SR',
            Model_number: '2BJ-SED8J',
            Transmission: 'CVT',
            Engine_capacity: '124 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 381660
        },
        {
            Make: 'YAMAHA',
            Model: 'JOG',
            Model_number: '2BH-AY01',
            Transmission: 'CVT',
            Engine_capacity: '49 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 200533
        },
        {
            Make: 'YAMAHA',
            Model: 'JOG 125',
            Model_number: '8BJ-SEJ5J',
            Transmission: 'CVT',
            Engine_capacity: '124 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 341553
        },
        {
            Make: 'YAMAHA',
            Model: 'JOG DELUXE',
            Model_number: '2BH-AY01',
            Transmission: 'CVT',
            Engine_capacity: '49 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 251896
        },
        {
            Make: 'YAMAHA',
            Model: 'JOG DX',
            Model_number: '2BH-AY01',
            Transmission: 'CVT',
            Engine_capacity: '49 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 200533
        },
        {
            Make: 'YAMAHA',
            Model: 'M-10 ABS',
            Model_number: '2BL-RN50J',
            Transmission: '6MT',
            Engine_capacity: '997 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 2005332
        },
        {
            Make: 'YAMAHA',
            Model: 'M7-03 ABS',
            Model_number: '2BL-RH13J',
            Transmission: '6MT',
            Engine_capacity: '320 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 769789
        },
        {
            Make: 'YAMAHA',
            Model: 'MAJESTY S',
            Model_number: '2BK-SG52J',
            Transmission: 'CVT',
            Engine_capacity: '155 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 446348
        },
        {
            Make: 'YAMAHA',
            Model: 'MT-03',
            Model_number: '2BL-RH13J',
            Transmission: '6MT',
            Engine_capacity: '320 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 679225
        },
        {
            Make: 'YAMAHA',
            Model: 'MT-03 ABS',
            Model_number: '8BL-RH21J',
            Transmission: '6MT',
            Engine_capacity: '320 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 888815
        },
        {
            Make: 'YAMAHA',
            Model: 'MT-03 ABS',
            Model_number: '2BL-RH13J',
            Transmission: '6MT',
            Engine_capacity: '320 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 846768
        },
        {
            Make: 'YAMAHA',
            Model: 'MT-07',
            Model_number: '2BL-RM19J',
            Transmission: '6MT',
            Engine_capacity: '688 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 931509
        },
        {
            Make: 'YAMAHA',
            Model: 'MT-07 ABS',
            Model_number: '8BL-RM33J',
            Transmission: '6MT',
            Engine_capacity: '688 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1053123
        },
        {
            Make: 'YAMAHA',
            Model: 'MT-09',
            Model_number: '2BL-RN52J',
            Transmission: '6MT',
            Engine_capacity: '845 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1203199
        },
        {
            Make: 'YAMAHA',
            Model: 'MT-09 ABS',
            Model_number: '2BL-RN52J',
            Transmission: '6MT',
            Engine_capacity: '845 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1203199
        },
        {
            Make: 'YAMAHA',
            Model: 'MT-09 ABS',
            Model_number: '8BL-RN69',
            Transmission: '6MT',
            Engine_capacity: '888 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1423139
        },
        {
            Make: 'YAMAHA',
            Model: 'MT-09 SP AB',
            Model_number: '8BL-RN87J',
            Transmission: '6MT',
            Engine_capacity: '888 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1864312
        },
        {
            Make: 'YAMAHA',
            Model: 'MT-10 ABS',
            Model_number: '2BL-RN50J',
            Transmission: '6MT',
            Engine_capacity: '997 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 2005332
        },
        {
            Make: 'YAMAHA',
            Model: 'MT-10 ABS',
            Model_number: '8BL-RN78J',
            Transmission: '6MT',
            Engine_capacity: '997 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 2490493
        },
        {
            Make: 'YAMAHA',
            Model: 'MT-10 SP ABS',
            Model_number: '8BL-RN78J',
            Transmission: '6MT',
            Engine_capacity: '997 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 2832046
        },
        {
            Make: 'YAMAHA',
            Model: 'MT-125 ABS',
            Model_number: '8BJ-RE45J',
            Transmission: '6MT',
            Engine_capacity: '124 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 640412
        },
        {
            Make: 'YAMAHA',
            Model: 'MT-25',
            Model_number: '2BK-RG43J',
            Transmission: '6MT',
            Engine_capacity: '249 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 640412
        },
        {
            Make: 'YAMAHA',
            Model: 'MT-25 ABS',
            Model_number: '2BK-RG43J',
            Transmission: '6MT',
            Engine_capacity: '249 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 730976
        },
        {
            Make: 'YAMAHA',
            Model: 'MT-25 ABS',
            Model_number: '8BL-RG43J',
            Transmission: '6MT',
            Engine_capacity: '249 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 818305
        },
        {
            Make: 'YAMAHA',
            Model: 'MT-25 ABS',
            Model_number: '8BK-RG74J',
            Transmission: '6MT',
            Engine_capacity: '249 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 818305
        },
        {
            Make: 'YAMAHA',
            Model: 'NIKEN',
            Model_number: '2BL-RN5BJ',
            Transmission: '6MT',
            Engine_capacity: '845 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 2134708
        },
        {
            Make: 'YAMAHA',
            Model: 'NIKEN GT',
            Model_number: '2BL-RN58J',
            Transmission: '6MT/CVT',
            Engine_capacity: '845 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 2561650
        },
        {
            Make: 'YAMAHA',
            Model: 'NMAX',
            Model_number: '8BJ-SEG6J',
            Transmission: '6MT',
            Engine_capacity: '124 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 476751
        },
        {
            Make: 'YAMAHA',
            Model: 'NMAX ABS',
            Model_number: '2BJ-SED6J',
            Transmission: 'CVT',
            Engine_capacity: '124 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 420473
        },
        {
            Make: 'YAMAHA',
            Model: 'NMAX ABS',
            Model_number: '2BK-SG42J',
            Transmission: 'CVT',
            Engine_capacity: '249 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 769789
        },
        {
            Make: 'YAMAHA',
            Model: 'NMAX ABS',
            Model_number: '8BJ-SEG6J',
            Transmission: 'CVT',
            Engine_capacity: '124 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 490983
        },
        {
            Make: 'YAMAHA',
            Model: 'NMAX155 ABS',
            Model_number: '2BK-SG50J',
            Transmission: 'CVT',
            Engine_capacity: '155 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 452817
        },
        {
            Make: 'YAMAHA',
            Model: 'NMAX155 ABS',
            Model_number: '8BK-SG66J',
            Transmission: 'CVT',
            Engine_capacity: '155 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 526561
        },
        {
            Make: 'YAMAHA',
            Model: 'NMAX155 ABS',
            Model_number: '2BK-SG50J',
            Transmission: '6MT',
            Engine_capacity: '155 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 498099
        },
        {
            Make: 'YAMAHA',
            Model: 'NMAX1555 ABS',
            Model_number: '2BK-SG50J',
            Transmission: 'CVT',
            Engine_capacity: '155 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 452817
        },
        {
            Make: 'YAMAHA',
            Model: 'PW50',
            Model_number: '2SAL',
            Transmission: '6MT',
            Engine_capacity: '49 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 207002
        },
        {
            Make: 'YAMAHA',
            Model: 'S400 FINAL EDITION',
            Model_number: '2BL-RH16J',
            Transmission: '6MT',
            Engine_capacity: '399 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 711569
        },
        {
            Make: 'YAMAHA',
            Model: 'SCR950 ABS',
            Model_number: '2BL-VN09J',
            Transmission: '5MT',
            Engine_capacity: '941 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1270475
        },
        {
            Make: 'YAMAHA',
            Model: 'SEROW 250',
            Model_number: '2BK-DG31J',
            Transmission: '5MT',
            Engine_capacity: '249 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 676638
        },
        {
            Make: 'YAMAHA',
            Model: 'SEROW FINAL EDITION',
            Model_number: '2BK-DG31J',
            Transmission: '6MT',
            Engine_capacity: '249 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 692163
        },
        {
            Make: 'YAMAHA',
            Model: 'SEROW250',
            Model_number: '2BK-DG31J',
            Transmission: '5MT',
            Engine_capacity: '249 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 676638
        },
        {
            Make: 'YAMAHA',
            Model: 'SR400',
            Model_number: '2BL-RH16J',
            Transmission: '5MT',
            Engine_capacity: '399 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 685694
        },
        {
            Make: 'YAMAHA',
            Model: 'TENERE700',
            Model_number: '2BL-DM09J',
            Transmission: '6MT',
            Engine_capacity: '688 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1487827
        },
        {
            Make: 'YAMAHA',
            Model: 'TENERE700',
            Model_number: '6BL-DM13J',
            Transmission: '6MT',
            Engine_capacity: '688 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1736229
        },
        {
            Make: 'YAMAHA',
            Model: 'TENERE700',
            Model_number: '8BL-DM13J',
            Transmission: '6MT',
            Engine_capacity: '688 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1807386
        },
        {
            Make: 'YAMAHA',
            Model: 'TMAX 560 TECH MAX ABS',
            Model_number: '8BL-SJ19J',
            Transmission: 'CVT',
            Engine_capacity: '561 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 2070667
        },
        {
            Make: 'YAMAHA',
            Model: 'TMAX SX ABS',
            Model_number: '2BL-SJ15J',
            Transmission: 'CVT',
            Engine_capacity: '530 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1487827
        },
        {
            Make: 'YAMAHA',
            Model: 'TMAX560 ABS',
            Model_number: '8BL-SJ19J',
            Transmission: 'CVT',
            Engine_capacity: '561 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1500765
        },
        {
            Make: 'YAMAHA',
            Model: 'TMAX560 TECH MAX ABS',
            Model_number: '8BL-SJ19J',
            Transmission: 'CVT',
            Engine_capacity: '561 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 2070667
        },
        {
            Make: 'YAMAHA',
            Model: 'TMAX650 ABS',
            Model_number: '8BL-SJ19J',
            Transmission: '6MT',
            Engine_capacity: '561 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1650841
        },
        {
            Make: 'YAMAHA',
            Model: 'TRACER 900 ABS',
            Model_number: '2BL-RN51J',
            Transmission: '6MT',
            Engine_capacity: '845 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1332575
        },
        {
            Make: 'YAMAHA',
            Model: 'TRACER GT ABS',
            Model_number: '8BL-RN70J',
            Transmission: '6MT',
            Engine_capacity: '888 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1935469
        },
        {
            Make: 'YAMAHA',
            Model: 'TRACER9 GT ABS',
            Model_number: '8BL-RN70J',
            Transmission: '6MT',
            Engine_capacity: '888 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1935469
        },
        {
            Make: 'YAMAHA',
            Model: 'TRACER9 GT+ ABS',
            Model_number: '8BL-RN70J',
            Transmission: '6MT',
            Engine_capacity: '888 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 2362410
        },
        {
            Make: 'YAMAHA',
            Model: 'TRICITY 125',
            Model_number: '8BJ-SEK1J',
            Transmission: 'CVT',
            Engine_capacity: '124 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 640412
        },
        {
            Make: 'YAMAHA',
            Model: 'TRICITY 125',
            Model_number: '2BJ-SEC1J',
            Transmission: 'CVT',
            Engine_capacity: '124 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 597718
        },
        {
            Make: 'YAMAHA',
            Model: 'TRICITY 125 ABS',
            Model_number: '2BJ-SEC1J',
            Transmission: 'CVT',
            Engine_capacity: '124 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 543380
        },
        {
            Make: 'YAMAHA',
            Model: 'TRICITY 125 ABS',
            Model_number: '8BL-1JSEC',
            Transmission: 'CVT',
            Engine_capacity: '124 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 640412
        },
        {
            Make: 'YAMAHA',
            Model: 'TRICITY 155 ABS',
            Model_number: '2BK-SG37J',
            Transmission: 'CVT',
            Engine_capacity: '155 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 569256
        },
        {
            Make: 'YAMAHA',
            Model: 'TRICITY155 ABS',
            Model_number: '8BK-SG37J',
            Transmission: 'CVT',
            Engine_capacity: '155 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 732916
        },
        {
            Make: 'YAMAHA',
            Model: 'TRICITY155 ABS',
            Model_number: '8BK-SG81J',
            Transmission: 'CVT',
            Engine_capacity: '155 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 732916
        },
        {
            Make: 'YAMAHA',
            Model: 'TRICITY 300 ABS',
            Model_number: '2BL-SH15J',
            Transmission: 'CVT',
            Engine_capacity: '292 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1238131
        },
        {
            Make: 'YAMAHA',
            Model: 'TRICITY300 ABS',
            Model_number: '8BL-SH21J',
            Transmission: 'CVT',
            Engine_capacity: '292 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1351982
        },
        {
            Make: 'YAMAHA',
            Model: 'TRICKER',
            Model_number: '2BK-DG32J',
            Transmission: '5MT',
            Engine_capacity: '249 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 560199
        },
        {
            Make: 'YAMAHA',
            Model: 'VINO',
            Model_number: '2BH-AY02',
            Transmission: 'CVT',
            Engine_capacity: '49 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 239346
        },
        {
            Make: 'YAMAHA',
            Model: 'X FORCE ABS',
            Model_number: '8BK-SG79J',
            Transmission: 'CVT',
            Engine_capacity: '155 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 512330
        },
        {
            Make: 'YAMAHA',
            Model: 'XMAX ABS',
            Model_number: '2BK-SG42J',
            Transmission: 'CVT',
            Engine_capacity: '249 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 769789
        },
        {
            Make: 'YAMAHA',
            Model: 'XMAX ABS',
            Model_number: '2BK-SG42J',
            Transmission: '6MT',
            Engine_capacity: '249 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 846768
        },
        {
            Make: 'YAMAHA',
            Model: 'XMAX ABS',
            Model_number: '8BK-SG70J',
            Transmission: 'CVT',
            Engine_capacity: '249 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 846768
        },
        {
            Make: 'YAMAHA',
            Model: 'XS700 ABS',
            Model_number: '8BL-RM41J',
            Transmission: '6MT',
            Engine_capacity: '688 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1295056
        },
        {
            Make: 'YAMAHA',
            Model: 'XSR125 ABS',
            Model_number: '6BJ-RE46J',
            Transmission: '6MT',
            Engine_capacity: '124 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 654644
        },
        {
            Make: 'YAMAHA',
            Model: 'XSR700 ABS',
            Model_number: '2BL-RM22J',
            Transmission: '6MT',
            Engine_capacity: '688 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1077704
        },
        {
            Make: 'YAMAHA',
            Model: 'XSR700 ABS',
            Model_number: '8BL-RM41J',
            Transmission: '6MT',
            Engine_capacity: '688 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1295056
        },
        {
            Make: 'YAMAHA',
            Model: 'XSR900 ABS',
            Model_number: '2BL-RN56J',
            Transmission: '6MT',
            Engine_capacity: '845 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1248481
        },
        {
            Make: 'YAMAHA',
            Model: 'XSR900 ABS',
            Model_number: '8BL-RN80J',
            Transmission: '6MT',
            Engine_capacity: '888 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1565453
        },
        {
            Make: 'YAMAHA',
            Model: 'XSR900 GP ABS',
            Model_number: '8BL-RN96J',
            Transmission: '6MT',
            Engine_capacity: '888 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1850080
        },
        {
            Make: 'YAMAHA',
            Model: 'YFF-R25',
            Model_number: '2BK-RG43J',
            Transmission: '6MT',
            Engine_capacity: '249 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 718038
        },
        {
            Make: 'YAMAHA',
            Model: 'YZ125',
            Model_number: 'B0V3',
            Transmission: '6MT',
            Engine_capacity: '124 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 737445
        },
        {
            Make: 'YAMAHA',
            Model: 'YZ125',
            Model_number: 'B0V7',
            Transmission: '6MT',
            Engine_capacity: '124 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 737445
        },
        {
            Make: 'YAMAHA',
            Model: 'YZ125X',
            Model_number: 'B1B3',
            Transmission: '6MT',
            Engine_capacity: '124 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 750382
        },
        {
            Make: 'YAMAHA',
            Model: 'YZ125X',
            Model_number: 'B1B4',
            Transmission: '6MT',
            Engine_capacity: '124 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 750382
        },
        {
            Make: 'YAMAHA',
            Model: 'YZ250',
            Model_number: 'B0U3',
            Transmission: '5MT',
            Engine_capacity: '249 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 866821
        },
        {
            Make: 'YAMAHA',
            Model: 'YZ250',
            Model_number: 'BRU7',
            Transmission: '6MT',
            Engine_capacity: '249 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 866821
        },
        {
            Make: 'YAMAHA',
            Model: 'YZ250F',
            Model_number: 'B7B3',
            Transmission: '5MT',
            Engine_capacity: '249 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 1047948
        },
        {
            Make: 'YAMAHA',
            Model: 'YZ250F',
            Model_number: 'B7B7',
            Transmission: '6MT',
            Engine_capacity: '249 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 1047948
        },
        {
            Make: 'YAMAHA',
            Model: 'YZ250FX',
            Model_number: 'B29R',
            Transmission: '6MT',
            Engine_capacity: '249 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 970322
        },
        {
            Make: 'YAMAHA',
            Model: 'YZ250FX',
            Model_number: 'BAJ4',
            Transmission: '6MT',
            Engine_capacity: '249 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 1099698
        },
        {
            Make: 'YAMAHA',
            Model: 'YZ250X',
            Model_number: 'BF1F',
            Transmission: '5MT',
            Engine_capacity: '249 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 879759
        },
        {
            Make: 'YAMAHA',
            Model: 'YZ250X',
            Model_number: 'BF1J',
            Transmission: '6MT',
            Engine_capacity: '249 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 879759
        },
        {
            Make: 'YAMAHA',
            Model: 'YZ450F',
            Model_number: 'BR97',
            Transmission: '5MT',
            Engine_capacity: '449 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 1216137
        },
        {
            Make: 'YAMAHA',
            Model: 'YZ450F',
            Model_number: 'B2W3',
            Transmission: '5MT',
            Engine_capacity: '449 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 1267887
        },
        {
            Make: 'YAMAHA',
            Model: 'YZ450FX',
            Model_number: 'B3J4',
            Transmission: '5MT',
            Engine_capacity: '449 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 1267887
        },
        {
            Make: 'YAMAHA',
            Model: 'YZ450FX',
            Model_number: 'B3J8',
            Transmission: '5MT',
            Engine_capacity: '449 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 1267887
        },
        {
            Make: 'YAMAHA',
            Model: 'YZ65',
            Model_number: 'BR87',
            Transmission: '6MT',
            Engine_capacity: '64 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 582193
        },
        {
            Make: 'YAMAHA',
            Model: 'YZ85',
            Model_number: 'BR83',
            Transmission: '6MT',
            Engine_capacity: '64 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 569256
        },
        {
            Make: 'YAMAHA',
            Model: 'YZ85',
            Model_number: 'B4B3',
            Transmission: '6MT',
            Engine_capacity: '84 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 595131
        },
        {
            Make: 'YAMAHA',
            Model: 'YZ85',
            Model_number: 'B4B6',
            Transmission: '6MT',
            Engine_capacity: '84 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 595131
        },
        {
            Make: 'YAMAHA',
            Model: 'YZ85L W',
            Model_number: 'B0G6',
            Transmission: '6MT',
            Engine_capacity: '84 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 608068
        },
        {
            Make: 'YAMAHA',
            Model: 'YZ85LW',
            Model_number: 'B0G3',
            Transmission: '6MT',
            Engine_capacity: '84 ',
            Seating: '1 ',
            Fuel: 'GASOLINE',
            CRSP: 608068
        },
        {
            Make: 'YAMAHA',
            Model: 'YZF ABS',
            Model_number: '8BL-RH21J',
            Transmission: '6MT',
            Engine_capacity: '320 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 939272
        },
        {
            Make: 'YAMAHA',
            Model: 'YZF-R1 ABS',
            Model_number: '2BL-RN65J',
            Transmission: '6MT',
            Engine_capacity: '997 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 2781589
        },
        {
            Make: 'YAMAHA',
            Model: 'YZF-R1 ABS',
            Model_number: '8BL-RN65J',
            Transmission: '6MT',
            Engine_capacity: '997 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 3059748
        },
        {
            Make: 'YAMAHA',
            Model: 'YZF-R125 ABS',
            Model_number: '8BL-RE45J',
            Transmission: '6MT',
            Engine_capacity: '124 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 668875
        },
        {
            Make: 'YAMAHA',
            Model: 'YZF-R15 ABS',
            Model_number: '8BK-RG86J',
            Transmission: '6MT',
            Engine_capacity: '155 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 711569
        },
        {
            Make: 'YAMAHA',
            Model: 'YZF-R1M',
            Model_number: '2BL-RN65J',
            Transmission: '6MT',
            Engine_capacity: '997 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 3751911
        },
        {
            Make: 'YAMAHA',
            Model: 'YZF-R1M',
            Model_number: '8BL-RN65J',
            Transmission: '6MT',
            Engine_capacity: '997 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 4127102
        },
        {
            Make: 'YAMAHA',
            Model: 'YZF-R1M ABS',
            Model_number: '8BL-RN65J',
            Transmission: '6MT',
            Engine_capacity: '997 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 4127102
        },
        {
            Make: 'YAMAHA',
            Model: 'YZF-R25',
            Model_number: '2BK-RG43J',
            Transmission: '6MT',
            Engine_capacity: '249 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 718038
        },
        {
            Make: 'YAMAHA',
            Model: 'YZF-R25 ABS',
            Model_number: '8BK-RG74J',
            Transmission: '6MT',
            Engine_capacity: '249 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 893731
        },
        {
            Make: 'YAMAHA',
            Model: 'YZF-R3 ABS',
            Model_number: '2BL-RH13J',
            Transmission: '6MT',
            Engine_capacity: '320 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 808602
        },
        {
            Make: 'YAMAHA',
            Model: 'YZF-R3 ABS',
            Model_number: '8BL-RH21J',
            Transmission: '6MT',
            Engine_capacity: '320 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 939272
        },
        {
            Make: 'YAMAHA',
            Model: 'YZF-R7 ABS',
            Model_number: '8BL-RM39J',
            Transmission: '6MT',
            Engine_capacity: '688 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 1364790
        },
        {
            Make: 'YAMAHA',
            Model: 'YZF-RF1 ABS',
            Model_number: '8BL-RN65J',
            Transmission: '6MT',
            Engine_capacity: '997 ',
            Seating: '2 ',
            Fuel: 'GASOLINE',
            CRSP: 3059748
        }
    ];
}
