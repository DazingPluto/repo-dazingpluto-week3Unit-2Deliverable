const {Sale, Subscription, Television} = require('./models');
    //Begin of Sale model(row) creation
// Sale.create({
//     item: 'HomePod mini',
//     salesPrice: '99',
//     color:'Orange, Yellow, Coral-Blue',
//     model: 1
// })
// .then(function(newSale){
//     console.log(newSale.toJSON());
// })
// .catch(function(err){
//     console.log('ERROR', err);
// })
// Sale.create({
//     item: 'I Phone Pro',
//     salesPrice: 999,
//     color:'White, Coral-Blue, ETC..',
//     model: 13
// })
// .then(function(newSale){
//     console.log(newSale.toJSON());
// })
// .catch(function(err){
//     console.log('ERROR', err);
// })
// Sale.create({
//     item: 'Apple Watch Series',
//     salesPrice: 399,
//     color: 'Purple, Red, Dark-Purple, Light-Tan-Pink?',
//     model: 7
// })
// .then(function(newSale){
//     console.log(newSale.toJSON());
// })
// .catch(function(err){
//     console.log('ERROR!', err);
// })
// Sale.create({
//     item: 'I Pad',
//     salesPrice: 329,
//     color: 'White, Black',
//     model: 13
// })
// .then(function(newSale){
//     console.log(newSale.toJSON());
// })
// .catch(function(err){
//     console.log('ERROR!', err);
// })
// Sale.create({
//     item: 'I Pad Pro',
//     salesPrice: 799,
//     color: 'White, Black',
//     model: 13
// })
// .then(function(newSale){
//     console.log(newSale.toJSON());
// })
// .catch(function(err){
//     console.log('ERROR', err);
// })
// Sale.create({
//     item: 'I Phone SE',
//     salesPrice: 399,
//     color: 'White, Coral-Blue, Orange',
//     model: 13
// })
// .then(function(newSale){
//     console.log(newSale.toJSON());
// })
// .catch(function(err){
//     console.log('ERROR', err);
// })
// Sale.create({
//     item: 'Air Pods',
//     salesPrice: 179,
//     color: 'White, Black',
//     model: 3
// })
// .then(function(newSale){
//     console.log(newSale.toJSON());
// })
// .catch(function(err){
//     console.log(err);
// })
// Sale.create({
//     item: 'AirPods Pro',
//     salesPrice: 249,
//     color: 'White, Black',
//     model: 1
// })
// .then(function(newSale){
//     console.log(newSale.toJSON());
// })
// .catch(function(err){
//     console.log('ERROR', err);
// })
// Sale.create({
//     item: 'AirPods Max',
//     salesPrice: 549,
//     color: 'Rose Gold',
//     model: 1
// })
// .then(function(newSale){
//     console.log(newSale.toJSON());
// })
// .catch(function(err){
//     console.log('ERROR', err);
// })
// Sale.create({
//     item: 'Apple TV 4k',
//     salesPrice: 179,
//     color: 'Black and Chrome',
//     model: 1
// })
// .then(function(newSale){
//     console.log(newSale.toJSON());
// })
// .catch(function(err){
//     console.log(err)
// })
// //beggining of television model creation
// Television.create({
//     show:'Harriet the Spy',
//     released: 2021,
//     lead: 'Harriet M. Welsch',
//     type: 'Animated Series'
// })
// .then(function(newShow){
//     console.log(newShow.toJSON());
// })
// .catch(function(err){
//     console.log('ERROR!', err);
// })
// Television.create({
//     show: 'Wolf-Boy',
//     released: 2021,
//     lead: 'William Wolfe',
//     type: 'Animated Series'
// })
// .then(function(newShow){
//     console.log(newShow.toJSON());
// })
// .catch(function(err){
//     console.log('ERROR!', err);
// })
// Television.create({
//     show: 'The Snoopy Show',
//     released: 2021,
//     lead: 'Snoopy and Peanut-Gang',
//     type: 'Animated Series'
// })
// .then(function(newShow){
//     console.log(newShow.toJSON());
// })
// .catch(function(err){
//     console.log('ERROR!', err);
// })
// Television.create({
//     show: 'WOLFWAKERS',
//     released: 2020,
//     lead: 'Eva Whittaker',
//     type: 'Animated Movie'
// })
// .then(function(newShow){
//     console.log(newShow.toJSON());
// })
// .catch(function(err){
//     console.log('ERROR', err)
// })
// Television.create({
//     show: 'HELPSTERS',
//     released: 2019,
//     lead: 'Cody and the Helpsters',
//     type: 'Childrens Television'
// })
// .then(function(newShow){
//     console.log(newShow.inJSON());
// })
// .catch(function(err){
//     console.log('ERROR', err);
// })
// Television.create({
//     show: 'Stillwater',
//     released: 2020,
//     lead: 'Karl, Addy, Micheal, and panda neighbor',
//     type: 'Animated Series'
// })
// .then(function(newShow){
//     console.log(newShow.toJSON());
// })
// .catch(function(err){
//     console.log('ERROR', err);
// })
// Television.create({
//     show: 'Tiny World',
//     released: 2020,
//     lead: 'None',
//     type: 'Narative Nature Film'
// })
// .then(function(newShow){
//     console.log(newShow.toJSON());
// })
// .catch(function(err){
//     console.log('ERROR', err);
// })
// Television.create({
//     show: 'FATHOM',
//     released: 2021,
//     lead: 'None',
//     type: 'Narative Nature Film'
// })
// .then(function(newShow){
//     console.log(newShow.toJSON());
// })
// .catch(function(err){
//     console.log('ERROR', err);
// })
// Television.create({
//     show: 'Becoming You',
//     released: 2020,
//     lead: 'None',
//     type: 'Narative Human Life Documentary'
// })
// .then(function(newShow){
//     console.log(newShow.toJSON());
// })
// .catch(function(err){
//     console.log('ERROR', err);
// })
// Television.create({
//     show: 'The Year The Earth Changed',
//     released: 2021,
//     lead: 'None',
//     type: 'Narative Human Life Documentary'
// })
// .then(function(newShow){
//     console.log(newShow.toJSON());
// })
// .catch(function(err){
//     console.log('ERROR', err)
// })
        //begin of subscriptions model(row)s'