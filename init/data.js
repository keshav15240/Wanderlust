// const sampleListings = [
//   {
//     title: "Cozy Beachfront Cottage",
//     description:
//       "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1500,
//     location: "Malibu",
//     country: "United States",
//   },
//   {
//     title: "Modern Loft in Downtown",
//     description:
//       "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1200,
//     location: "New York City",
//     country: "United States",
//   },
//   {
//     title: "Mountain Retreat",
//     description:
//       "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1000,
//     location: "Aspen",
//     country: "United States",
//   },
//   {
//     title: "Historic Villa in Tuscany",
//     description:
//       "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2500,
//     location: "Florence",
//     country: "Italy",
//   },
//   {
//     title: "Secluded Treehouse Getaway",
//     description:
//       "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 800,
//     location: "Portland",
//     country: "United States",
//   },
//   {
//     title: "Beachfront Paradise",
//     description:
//       "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2000,
//     location: "Cancun",
//     country: "Mexico",
//   },
//   {
//     title: "Rustic Cabin by the Lake",
//     description:
//       "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 900,
//     location: "Lake Tahoe",
//     country: "United States",
//   },
//   {
//     title: "Luxury Penthouse with City Views",
//     description:
//       "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 3500,
//     location: "Los Angeles",
//     country: "United States",
//   },
//   {
//     title: "Ski-In/Ski-Out Chalet",
//     description:
//       "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 3000,
//     location: "Verbier",
//     country: "Switzerland",
//   },
//   {
//     title: "Safari Lodge in the Serengeti",
//     description:
//       "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 4000,
//     location: "Serengeti National Park",
//     country: "Tanzania",
//   },
//   {
//     title: "Historic Canal House",
//     description:
//       "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1800,
//     location: "Amsterdam",
//     country: "Netherlands",
//   },
//   {
//     title: "Private Island Retreat",
//     description:
//       "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 10000,
//     location: "Fiji",
//     country: "Fiji",
//   },
//   {
//     title: "Charming Cottage in the Cotswolds",
//     description:
//       "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1200,
//     location: "Cotswolds",
//     country: "United Kingdom",
//   },
//   {
//     title: "Historic Brownstone in Boston",
//     description:
//       "Step back in time in this elegant historic brownstone located in the heart of Boston.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2200,
//     location: "Boston",
//     country: "United States",
//   },
//   {
//     title: "Beachfront Bungalow in Bali",
//     description:
//       "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1800,
//     location: "Bali",
//     country: "Indonesia",
//   },
//   {
//     title: "Mountain View Cabin in Banff",
//     description:
//       "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1500,
//     location: "Banff",
//     country: "Canada",
//   },
//   {
//     title: "Art Deco Apartment in Miami",
//     description:
//       "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
//     image: {
//       filename: "listingimage",
//       url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1600,
//     location: "Miami",
//     country: "United States",
//   },
//   {
//     title: "Tropical Villa in Phuket",
//     description:
//       "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 3000,
//     location: "Phuket",
//     country: "Thailand",
//   },
//   {
//     title: "Historic Castle in Scotland",
//     description:
//       "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 4000,
//     location: "Scottish Highlands",
//     country: "United Kingdom",
//   },
//   {
//     title: "Desert Oasis in Dubai",
//     description:
//       "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 5000,
//     location: "Dubai",
//     country: "United Arab Emirates",
//   },
//   {
//     title: "Rustic Log Cabin in Montana",
//     description:
//       "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1100,
//     location: "Montana",
//     country: "United States",
//   },
//   {
//     title: "Beachfront Villa in Greece",
//     description:
//       "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2500,
//     location: "Mykonos",
//     country: "Greece",
//   },
//   {
//     title: "Eco-Friendly Treehouse Retreat",
//     description:
//       "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 750,
//     location: "Costa Rica",
//     country: "Costa Rica",
//   },
//   {
//     title: "Historic Cottage in Charleston",
//     description:
//       "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1600,
//     location: "Charleston",
//     country: "United States",
//   },
//   {
//     title: "Modern Apartment in Tokyo",
//     description:
//       "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2000,
//     location: "Tokyo",
//     country: "Japan",
//   },
//   {
//     title: "Lakefront Cabin in New Hampshire",
//     description:
//       "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1200,
//     location: "New Hampshire",
//     country: "United States",
//   },
//   {
//     title: "Luxury Villa in the Maldives",
//     description:
//       "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 6000,
//     location: "Maldives",
//     country: "Maldives",
//   },
//   {
//     title: "Ski Chalet in Aspen",
//     description:
//       "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 4000,
//     location: "Aspen",
//     country: "United States",
//   },
//   {
//     title: "Secluded Beach House in Costa Rica",
//     description:
//       "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1800,
//     location: "Costa Rica",
//     country: "Costa Rica",
//   },
// ];
// export default sampleListings;
const data = [
{
  title: "Cozy Farmhouse in New York",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing1",
    url: "https://picsum.photos/seed/wanderlust0/1200/800"
  },
  price: 28916,
  location: "New York",
  country: "USA",
  geometry: {
    type: "Point",
    coordinates: [94.19, 15.27]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Modern Beach House in Banff",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing2",
    url: "https://picsum.photos/seed/wanderlust1/1200/800"
  },
  price: 35689,
  location: "Banff",
  country: "Canada",
  geometry: {
    type: "Point",
    coordinates: [-94.75, -42.09]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Historic Treehouse in Banff",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing3",
    url: "https://picsum.photos/seed/wanderlust2/1200/800"
  },
  price: 44834,
  location: "Banff",
  country: "Canada",
  geometry: {
    type: "Point",
    coordinates: [67.73, -58.91]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Skyline Apartment in Tuscany",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing4",
    url: "https://picsum.photos/seed/wanderlust3/1200/800"
  },
  price: 44350,
  location: "Tuscany",
  country: "Italy",
  geometry: {
    type: "Point",
    coordinates: [-10.23, -0.29]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Skyline Resort Suite in Bali",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing5",
    url: "https://picsum.photos/seed/wanderlust4/1200/800"
  },
  price: 41552,
  location: "Bali",
  country: "Indonesia",
  geometry: {
    type: "Point",
    coordinates: [-32.87, 75.92]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Elegant Loft in Kyoto",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing6",
    url: "https://picsum.photos/seed/wanderlust5/1200/800"
  },
  price: 46059,
  location: "Kyoto",
  country: "Japan",
  geometry: {
    type: "Point",
    coordinates: [-119.59, 68.8]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Cozy Tiny Home in Jaipur",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing7",
    url: "https://picsum.photos/seed/wanderlust6/1200/800"
  },
  price: 33598,
  location: "Jaipur",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [-103.53, 55.66]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Mountain Cottage in Kerala",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing8",
    url: "https://picsum.photos/seed/wanderlust7/1200/800"
  },
  price: 40964,
  location: "Kerala",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [80.73, -23.95]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Oceanfront Resort Suite in Ooty",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing9",
    url: "https://picsum.photos/seed/wanderlust8/1200/800"
  },
  price: 3764,
  location: "Ooty",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [113.39, -14.59]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Historic Loft in Phuket",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing10",
    url: "https://picsum.photos/seed/wanderlust9/1200/800"
  },
  price: 24000,
  location: "Phuket",
  country: "Thailand",
  geometry: {
    type: "Point",
    coordinates: [-125.63, -6.19]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Peaceful Tiny Home in Queenstown",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing11",
    url: "https://picsum.photos/seed/wanderlust10/1200/800"
  },
  price: 40631,
  location: "Queenstown",
  country: "New Zealand",
  geometry: {
    type: "Point",
    coordinates: [92.49, 70.98]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Private Chalet in Swiss Alps",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing12",
    url: "https://picsum.photos/seed/wanderlust11/1200/800"
  },
  price: 48579,
  location: "Swiss Alps",
  country: "Switzerland",
  geometry: {
    type: "Point",
    coordinates: [45.42, -33.86]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Luxury Resort Suite in Goa",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing13",
    url: "https://picsum.photos/seed/wanderlust12/1200/800"
  },
  price: 40652,
  location: "Goa",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [4.74, -34.85]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Luxury Mansion in Udaipur",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing14",
    url: "https://picsum.photos/seed/wanderlust13/1200/800"
  },
  price: 4174,
  location: "Udaipur",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [-154.44, 0.01]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Rustic Chalet in Banff",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing15",
    url: "https://picsum.photos/seed/wanderlust14/1200/800"
  },
  price: 29674,
  location: "Banff",
  country: "Canada",
  geometry: {
    type: "Point",
    coordinates: [-44.89, -28.2]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Historic Cottage in Maldives",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing16",
    url: "https://picsum.photos/seed/wanderlust15/1200/800"
  },
  price: 33384,
  location: "Maldives",
  country: "Maldives",
  geometry: {
    type: "Point",
    coordinates: [17.8, -74.83]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Modern Mansion in Goa",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing17",
    url: "https://picsum.photos/seed/wanderlust16/1200/800"
  },
  price: 18814,
  location: "Goa",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [-9.13, 2.41]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Peaceful Tiny Home in Kerala",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing18",
    url: "https://picsum.photos/seed/wanderlust17/1200/800"
  },
  price: 9913,
  location: "Kerala",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [109.89, -26.21]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Historic Treehouse in Banff",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing19",
    url: "https://picsum.photos/seed/wanderlust18/1200/800"
  },
  price: 28412,
  location: "Banff",
  country: "Canada",
  geometry: {
    type: "Point",
    coordinates: [82.75, -71.27]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Cozy Chalet in Tuscany",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing20",
    url: "https://picsum.photos/seed/wanderlust19/1200/800"
  },
  price: 2619,
  location: "Tuscany",
  country: "Italy",
  geometry: {
    type: "Point",
    coordinates: [94.82, 63.8]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Rustic Chalet in Udaipur",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing21",
    url: "https://picsum.photos/seed/wanderlust20/1200/800"
  },
  price: 6230,
  location: "Udaipur",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [152.97, 39.66]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Premium Farmhouse in Kyoto",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing22",
    url: "https://picsum.photos/seed/wanderlust21/1200/800"
  },
  price: 46983,
  location: "Kyoto",
  country: "Japan",
  geometry: {
    type: "Point",
    coordinates: [-12.15, -46.79]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Modern Cottage in Ooty",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing23",
    url: "https://picsum.photos/seed/wanderlust22/1200/800"
  },
  price: 46911,
  location: "Ooty",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [-134.81, 70.83]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Mountain Cottage in Queenstown",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing24",
    url: "https://picsum.photos/seed/wanderlust23/1200/800"
  },
  price: 20985,
  location: "Queenstown",
  country: "New Zealand",
  geometry: {
    type: "Point",
    coordinates: [17.67, -31.19]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Elegant Penthouse in Banff",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing25",
    url: "https://picsum.photos/seed/wanderlust24/1200/800"
  },
  price: 45085,
  location: "Banff",
  country: "Canada",
  geometry: {
    type: "Point",
    coordinates: [-144.19, 14.05]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Rustic Apartment in Ooty",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing26",
    url: "https://picsum.photos/seed/wanderlust25/1200/800"
  },
  price: 18488,
  location: "Ooty",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [-136.44, 13.63]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Rustic Mansion in Maldives",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing27",
    url: "https://picsum.photos/seed/wanderlust26/1200/800"
  },
  price: 18000,
  location: "Maldives",
  country: "Maldives",
  geometry: {
    type: "Point",
    coordinates: [81.01, 23.36]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Oceanfront Resort Suite in Bali",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing28",
    url: "https://picsum.photos/seed/wanderlust27/1200/800"
  },
  price: 41565,
  location: "Bali",
  country: "Indonesia",
  geometry: {
    type: "Point",
    coordinates: [-15.84, -63.54]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Elegant Bungalow in Paris",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing29",
    url: "https://picsum.photos/seed/wanderlust28/1200/800"
  },
  price: 36468,
  location: "Paris",
  country: "France",
  geometry: {
    type: "Point",
    coordinates: [154.45, 73.9]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Cozy Loft in Swiss Alps",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing30",
    url: "https://picsum.photos/seed/wanderlust29/1200/800"
  },
  price: 21245,
  location: "Swiss Alps",
  country: "Switzerland",
  geometry: {
    type: "Point",
    coordinates: [48.37, -19.37]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Oceanfront Farmhouse in Kerala",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing31",
    url: "https://picsum.photos/seed/wanderlust30/1200/800"
  },
  price: 5393,
  location: "Kerala",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [-134.27, 69.63]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Premium Cabin in Queenstown",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing32",
    url: "https://picsum.photos/seed/wanderlust31/1200/800"
  },
  price: 1850,
  location: "Queenstown",
  country: "New Zealand",
  geometry: {
    type: "Point",
    coordinates: [138.22, 70.71]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Modern Lake House in Kerala",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing33",
    url: "https://picsum.photos/seed/wanderlust32/1200/800"
  },
  price: 15980,
  location: "Kerala",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [93.47, -55.64]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Designer Cabin in Santorini",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing34",
    url: "https://picsum.photos/seed/wanderlust33/1200/800"
  },
  price: 34428,
  location: "Santorini",
  country: "Greece",
  geometry: {
    type: "Point",
    coordinates: [-54.41, -78.79]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Mountain Lake House in Kyoto",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing35",
    url: "https://picsum.photos/seed/wanderlust34/1200/800"
  },
  price: 47763,
  location: "Kyoto",
  country: "Japan",
  geometry: {
    type: "Point",
    coordinates: [37.58, -23.0]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Peaceful Mansion in Udaipur",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing36",
    url: "https://picsum.photos/seed/wanderlust35/1200/800"
  },
  price: 34714,
  location: "Udaipur",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [-96.56, -54.53]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Luxury Chalet in Dubai",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing37",
    url: "https://picsum.photos/seed/wanderlust36/1200/800"
  },
  price: 2541,
  location: "Dubai",
  country: "UAE",
  geometry: {
    type: "Point",
    coordinates: [-145.74, -9.81]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Mountain Mansion in Munnar",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing38",
    url: "https://picsum.photos/seed/wanderlust37/1200/800"
  },
  price: 13581,
  location: "Munnar",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [149.19, -45.95]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Elegant Loft in Udaipur",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing39",
    url: "https://picsum.photos/seed/wanderlust38/1200/800"
  },
  price: 9471,
  location: "Udaipur",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [-87.47, -38.51]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Historic Apartment in Swiss Alps",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing40",
    url: "https://picsum.photos/seed/wanderlust39/1200/800"
  },
  price: 18366,
  location: "Swiss Alps",
  country: "Switzerland",
  geometry: {
    type: "Point",
    coordinates: [-56.07, 79.6]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Mountain Farmhouse in Goa",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing41",
    url: "https://picsum.photos/seed/wanderlust40/1200/800"
  },
  price: 8438,
  location: "Goa",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [162.24, 14.45]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Oceanfront Bungalow in Dubai",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing42",
    url: "https://picsum.photos/seed/wanderlust41/1200/800"
  },
  price: 49646,
  location: "Dubai",
  country: "UAE",
  geometry: {
    type: "Point",
    coordinates: [102.07, -49.86]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Elegant Penthouse in Banff",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing43",
    url: "https://picsum.photos/seed/wanderlust42/1200/800"
  },
  price: 12606,
  location: "Banff",
  country: "Canada",
  geometry: {
    type: "Point",
    coordinates: [33.07, 55.17]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Premium Lake House in Cape Town",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing44",
    url: "https://picsum.photos/seed/wanderlust43/1200/800"
  },
  price: 23028,
  location: "Cape Town",
  country: "South Africa",
  geometry: {
    type: "Point",
    coordinates: [132.19, 34.79]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Designer Penthouse in Bali",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing45",
    url: "https://picsum.photos/seed/wanderlust44/1200/800"
  },
  price: 10880,
  location: "Bali",
  country: "Indonesia",
  geometry: {
    type: "Point",
    coordinates: [-165.74, 27.39]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Secluded Penthouse in Goa",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing46",
    url: "https://picsum.photos/seed/wanderlust45/1200/800"
  },
  price: 40917,
  location: "Goa",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [85.15, -57.29]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Rustic Tiny Home in Queenstown",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing47",
    url: "https://picsum.photos/seed/wanderlust46/1200/800"
  },
  price: 23975,
  location: "Queenstown",
  country: "New Zealand",
  geometry: {
    type: "Point",
    coordinates: [141.17, -10.75]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Modern Villa in Kerala",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing48",
    url: "https://picsum.photos/seed/wanderlust47/1200/800"
  },
  price: 20122,
  location: "Kerala",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [154.27, 15.65]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Designer Chalet in Swiss Alps",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing49",
    url: "https://picsum.photos/seed/wanderlust48/1200/800"
  },
  price: 36239,
  location: "Swiss Alps",
  country: "Switzerland",
  geometry: {
    type: "Point",
    coordinates: [87.74, 68.21]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Secluded Cabin in Santorini",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing50",
    url: "https://picsum.photos/seed/wanderlust49/1200/800"
  },
  price: 18217,
  location: "Santorini",
  country: "Greece",
  geometry: {
    type: "Point",
    coordinates: [159.45, 45.07]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Peaceful Tiny Home in Swiss Alps",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing51",
    url: "https://picsum.photos/seed/wanderlust50/1200/800"
  },
  price: 32224,
  location: "Swiss Alps",
  country: "Switzerland",
  geometry: {
    type: "Point",
    coordinates: [25.85, -79.5]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Designer Bungalow in Queenstown",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing52",
    url: "https://picsum.photos/seed/wanderlust51/1200/800"
  },
  price: 13926,
  location: "Queenstown",
  country: "New Zealand",
  geometry: {
    type: "Point",
    coordinates: [-163.1, 30.3]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Historic Resort Suite in Phuket",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing53",
    url: "https://picsum.photos/seed/wanderlust52/1200/800"
  },
  price: 25473,
  location: "Phuket",
  country: "Thailand",
  geometry: {
    type: "Point",
    coordinates: [-163.04, -73.01]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Premium Treehouse in Jaipur",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing54",
    url: "https://picsum.photos/seed/wanderlust53/1200/800"
  },
  price: 22061,
  location: "Jaipur",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [164.17, 76.12]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Skyline Beach House in Paris",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing55",
    url: "https://picsum.photos/seed/wanderlust54/1200/800"
  },
  price: 46466,
  location: "Paris",
  country: "France",
  geometry: {
    type: "Point",
    coordinates: [133.29, 64.39]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Cozy Cabin in Maldives",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing56",
    url: "https://picsum.photos/seed/wanderlust55/1200/800"
  },
  price: 39716,
  location: "Maldives",
  country: "Maldives",
  geometry: {
    type: "Point",
    coordinates: [-23.23, 7.43]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Luxury Penthouse in New York",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing57",
    url: "https://picsum.photos/seed/wanderlust56/1200/800"
  },
  price: 12772,
  location: "New York",
  country: "USA",
  geometry: {
    type: "Point",
    coordinates: [-155.0, 78.85]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Rustic Resort Suite in Dubai",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing58",
    url: "https://picsum.photos/seed/wanderlust57/1200/800"
  },
  price: 27494,
  location: "Dubai",
  country: "UAE",
  geometry: {
    type: "Point",
    coordinates: [-4.59, 62.06]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Secluded Penthouse in Udaipur",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing59",
    url: "https://picsum.photos/seed/wanderlust58/1200/800"
  },
  price: 13154,
  location: "Udaipur",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [-30.73, 76.63]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Luxury Treehouse in New York",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing60",
    url: "https://picsum.photos/seed/wanderlust59/1200/800"
  },
  price: 39687,
  location: "New York",
  country: "USA",
  geometry: {
    type: "Point",
    coordinates: [-62.75, 36.36]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Designer Cottage in Munnar",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing61",
    url: "https://picsum.photos/seed/wanderlust60/1200/800"
  },
  price: 47456,
  location: "Munnar",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [-27.96, -33.14]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Private Villa in Maldives",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing62",
    url: "https://picsum.photos/seed/wanderlust61/1200/800"
  },
  price: 4204,
  location: "Maldives",
  country: "Maldives",
  geometry: {
    type: "Point",
    coordinates: [100.57, -72.04]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Luxury Bungalow in Swiss Alps",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing63",
    url: "https://picsum.photos/seed/wanderlust62/1200/800"
  },
  price: 23529,
  location: "Swiss Alps",
  country: "Switzerland",
  geometry: {
    type: "Point",
    coordinates: [40.34, -17.89]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Luxury Villa in Maldives",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing64",
    url: "https://picsum.photos/seed/wanderlust63/1200/800"
  },
  price: 40415,
  location: "Maldives",
  country: "Maldives",
  geometry: {
    type: "Point",
    coordinates: [-90.6, -73.89]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Secluded Cottage in Paris",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing65",
    url: "https://picsum.photos/seed/wanderlust64/1200/800"
  },
  price: 11525,
  location: "Paris",
  country: "France",
  geometry: {
    type: "Point",
    coordinates: [84.15, 68.12]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Mountain Resort Suite in Dubai",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing66",
    url: "https://picsum.photos/seed/wanderlust65/1200/800"
  },
  price: 46276,
  location: "Dubai",
  country: "UAE",
  geometry: {
    type: "Point",
    coordinates: [140.73, -67.94]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Modern Villa in Jaipur",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing67",
    url: "https://picsum.photos/seed/wanderlust66/1200/800"
  },
  price: 11029,
  location: "Jaipur",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [-137.86, -39.12]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Elegant Chalet in New York",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing68",
    url: "https://picsum.photos/seed/wanderlust67/1200/800"
  },
  price: 40276,
  location: "New York",
  country: "USA",
  geometry: {
    type: "Point",
    coordinates: [-114.4, -36.5]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Elegant Lake House in Udaipur",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing69",
    url: "https://picsum.photos/seed/wanderlust68/1200/800"
  },
  price: 13776,
  location: "Udaipur",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [115.82, -26.05]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Skyline Treehouse in Jaipur",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing70",
    url: "https://picsum.photos/seed/wanderlust69/1200/800"
  },
  price: 49433,
  location: "Jaipur",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [-48.28, -52.68]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Cozy Villa in Phuket",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing71",
    url: "https://picsum.photos/seed/wanderlust70/1200/800"
  },
  price: 13774,
  location: "Phuket",
  country: "Thailand",
  geometry: {
    type: "Point",
    coordinates: [136.4, -27.34]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Designer Bungalow in Queenstown",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing72",
    url: "https://picsum.photos/seed/wanderlust71/1200/800"
  },
  price: 16865,
  location: "Queenstown",
  country: "New Zealand",
  geometry: {
    type: "Point",
    coordinates: [24.03, 55.21]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Modern Resort Suite in Swiss Alps",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing73",
    url: "https://picsum.photos/seed/wanderlust72/1200/800"
  },
  price: 12575,
  location: "Swiss Alps",
  country: "Switzerland",
  geometry: {
    type: "Point",
    coordinates: [-15.02, 12.61]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Mountain Treehouse in Goa",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing74",
    url: "https://picsum.photos/seed/wanderlust73/1200/800"
  },
  price: 3839,
  location: "Goa",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [77.25, 66.91]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Luxury Chalet in Munnar",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing75",
    url: "https://picsum.photos/seed/wanderlust74/1200/800"
  },
  price: 32464,
  location: "Munnar",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [36.1, -5.01]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Secluded Cabin in Dubai",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing76",
    url: "https://picsum.photos/seed/wanderlust75/1200/800"
  },
  price: 4607,
  location: "Dubai",
  country: "UAE",
  geometry: {
    type: "Point",
    coordinates: [165.67, -61.97]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Premium Lake House in Swiss Alps",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing77",
    url: "https://picsum.photos/seed/wanderlust76/1200/800"
  },
  price: 20554,
  location: "Swiss Alps",
  country: "Switzerland",
  geometry: {
    type: "Point",
    coordinates: [31.05, 33.69]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Rustic Tiny Home in Paris",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing78",
    url: "https://picsum.photos/seed/wanderlust77/1200/800"
  },
  price: 27972,
  location: "Paris",
  country: "France",
  geometry: {
    type: "Point",
    coordinates: [71.44, -14.38]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Mountain Mansion in Queenstown",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing79",
    url: "https://picsum.photos/seed/wanderlust78/1200/800"
  },
  price: 7454,
  location: "Queenstown",
  country: "New Zealand",
  geometry: {
    type: "Point",
    coordinates: [57.23, 57.16]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Cozy Villa in Cape Town",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing80",
    url: "https://picsum.photos/seed/wanderlust79/1200/800"
  },
  price: 5004,
  location: "Cape Town",
  country: "South Africa",
  geometry: {
    type: "Point",
    coordinates: [-41.9, 68.5]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Elegant Resort Suite in Santorini",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing81",
    url: "https://picsum.photos/seed/wanderlust80/1200/800"
  },
  price: 16493,
  location: "Santorini",
  country: "Greece",
  geometry: {
    type: "Point",
    coordinates: [-49.45, 79.02]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Historic Villa in Kyoto",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing82",
    url: "https://picsum.photos/seed/wanderlust81/1200/800"
  },
  price: 6169,
  location: "Kyoto",
  country: "Japan",
  geometry: {
    type: "Point",
    coordinates: [-126.47, 75.57]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Modern Chalet in Santorini",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing83",
    url: "https://picsum.photos/seed/wanderlust82/1200/800"
  },
  price: 20594,
  location: "Santorini",
  country: "Greece",
  geometry: {
    type: "Point",
    coordinates: [38.04, 31.66]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Cozy Cottage in Queenstown",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing84",
    url: "https://picsum.photos/seed/wanderlust83/1200/800"
  },
  price: 4996,
  location: "Queenstown",
  country: "New Zealand",
  geometry: {
    type: "Point",
    coordinates: [-34.51, -35.33]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Mountain Resort Suite in Paris",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing85",
    url: "https://picsum.photos/seed/wanderlust84/1200/800"
  },
  price: 14755,
  location: "Paris",
  country: "France",
  geometry: {
    type: "Point",
    coordinates: [2.55, 76.66]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Peaceful Apartment in Goa",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing86",
    url: "https://picsum.photos/seed/wanderlust85/1200/800"
  },
  price: 1596,
  location: "Goa",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [-28.32, -44.65]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Grand Apartment in Manali",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing87",
    url: "https://picsum.photos/seed/wanderlust86/1200/800"
  },
  price: 45556,
  location: "Manali",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [131.82, -35.75]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Luxury Cottage in Phuket",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing88",
    url: "https://picsum.photos/seed/wanderlust87/1200/800"
  },
  price: 17159,
  location: "Phuket",
  country: "Thailand",
  geometry: {
    type: "Point",
    coordinates: [95.79, -68.37]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Grand Lake House in Bali",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing89",
    url: "https://picsum.photos/seed/wanderlust88/1200/800"
  },
  price: 20812,
  location: "Bali",
  country: "Indonesia",
  geometry: {
    type: "Point",
    coordinates: [60.53, -62.92]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Cozy Farmhouse in Munnar",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing90",
    url: "https://picsum.photos/seed/wanderlust89/1200/800"
  },
  price: 38454,
  location: "Munnar",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [-91.03, 6.17]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Elegant Beach House in Udaipur",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing91",
    url: "https://picsum.photos/seed/wanderlust90/1200/800"
  },
  price: 35194,
  location: "Udaipur",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [-3.35, -17.69]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Mountain Loft in Queenstown",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing92",
    url: "https://picsum.photos/seed/wanderlust91/1200/800"
  },
  price: 1235,
  location: "Queenstown",
  country: "New Zealand",
  geometry: {
    type: "Point",
    coordinates: [-52.24, 28.38]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Elegant Farmhouse in Dubai",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing93",
    url: "https://picsum.photos/seed/wanderlust92/1200/800"
  },
  price: 43499,
  location: "Dubai",
  country: "UAE",
  geometry: {
    type: "Point",
    coordinates: [-146.42, -43.59]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Designer Resort Suite in Manali",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing94",
    url: "https://picsum.photos/seed/wanderlust93/1200/800"
  },
  price: 32011,
  location: "Manali",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [64.69, -64.96]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Mountain Cabin in Paris",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing95",
    url: "https://picsum.photos/seed/wanderlust94/1200/800"
  },
  price: 48763,
  location: "Paris",
  country: "France",
  geometry: {
    type: "Point",
    coordinates: [-1.86, -68.29]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Mountain Apartment in Paris",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing96",
    url: "https://picsum.photos/seed/wanderlust95/1200/800"
  },
  price: 48674,
  location: "Paris",
  country: "France",
  geometry: {
    type: "Point",
    coordinates: [134.51, -22.91]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Secluded Cottage in Maldives",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing97",
    url: "https://picsum.photos/seed/wanderlust96/1200/800"
  },
  price: 37600,
  location: "Maldives",
  country: "Maldives",
  geometry: {
    type: "Point",
    coordinates: [110.73, -39.55]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Skyline Resort Suite in Banff",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing98",
    url: "https://picsum.photos/seed/wanderlust97/1200/800"
  },
  price: 46399,
  location: "Banff",
  country: "Canada",
  geometry: {
    type: "Point",
    coordinates: [44.36, -28.11]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Peaceful Loft in Kerala",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing99",
    url: "https://picsum.photos/seed/wanderlust98/1200/800"
  },
  price: 28657,
  location: "Kerala",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [23.35, 78.02]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Secluded Cabin in Jaipur",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing100",
    url: "https://picsum.photos/seed/wanderlust99/1200/800"
  },
  price: 21432,
  location: "Jaipur",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [113.75, 70.08]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Oceanfront Resort Suite in Ooty",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing101",
    url: "https://picsum.photos/seed/wanderlust100/1200/800"
  },
  price: 43139,
  location: "Ooty",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [50.62, -47.13]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Oceanfront Cottage in Munnar",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing102",
    url: "https://picsum.photos/seed/wanderlust101/1200/800"
  },
  price: 12191,
  location: "Munnar",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [-20.85, -22.18]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Private Lake House in Phuket",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing103",
    url: "https://picsum.photos/seed/wanderlust102/1200/800"
  },
  price: 17154,
  location: "Phuket",
  country: "Thailand",
  geometry: {
    type: "Point",
    coordinates: [16.72, -37.91]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Mountain Resort Suite in Swiss Alps",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing104",
    url: "https://picsum.photos/seed/wanderlust103/1200/800"
  },
  price: 49498,
  location: "Swiss Alps",
  country: "Switzerland",
  geometry: {
    type: "Point",
    coordinates: [4.55, 45.01]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Peaceful Penthouse in Jaipur",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing105",
    url: "https://picsum.photos/seed/wanderlust104/1200/800"
  },
  price: 35551,
  location: "Jaipur",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [53.91, 44.68]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Mountain Chalet in Tuscany",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing106",
    url: "https://picsum.photos/seed/wanderlust105/1200/800"
  },
  price: 8766,
  location: "Tuscany",
  country: "Italy",
  geometry: {
    type: "Point",
    coordinates: [135.34, 54.48]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Secluded Tiny Home in Kyoto",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing107",
    url: "https://picsum.photos/seed/wanderlust106/1200/800"
  },
  price: 44666,
  location: "Kyoto",
  country: "Japan",
  geometry: {
    type: "Point",
    coordinates: [-116.64, -25.64]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Luxury Treehouse in Kyoto",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing108",
    url: "https://picsum.photos/seed/wanderlust107/1200/800"
  },
  price: 30192,
  location: "Kyoto",
  country: "Japan",
  geometry: {
    type: "Point",
    coordinates: [85.04, -11.62]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Designer Tiny Home in Phuket",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing109",
    url: "https://picsum.photos/seed/wanderlust108/1200/800"
  },
  price: 45361,
  location: "Phuket",
  country: "Thailand",
  geometry: {
    type: "Point",
    coordinates: [35.54, -5.64]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Grand Villa in Phuket",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing110",
    url: "https://picsum.photos/seed/wanderlust109/1200/800"
  },
  price: 4211,
  location: "Phuket",
  country: "Thailand",
  geometry: {
    type: "Point",
    coordinates: [-7.85, -69.6]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Designer Tiny Home in Swiss Alps",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing111",
    url: "https://picsum.photos/seed/wanderlust110/1200/800"
  },
  price: 5405,
  location: "Swiss Alps",
  country: "Switzerland",
  geometry: {
    type: "Point",
    coordinates: [-62.1, -20.2]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Cozy Loft in Goa",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing112",
    url: "https://picsum.photos/seed/wanderlust111/1200/800"
  },
  price: 49264,
  location: "Goa",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [119.2, 23.43]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Rustic Loft in New York",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing113",
    url: "https://picsum.photos/seed/wanderlust112/1200/800"
  },
  price: 18032,
  location: "New York",
  country: "USA",
  geometry: {
    type: "Point",
    coordinates: [131.48, -15.63]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Oceanfront Farmhouse in Manali",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing114",
    url: "https://picsum.photos/seed/wanderlust113/1200/800"
  },
  price: 29341,
  location: "Manali",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [80.18, -12.46]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Modern Mansion in Ooty",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing115",
    url: "https://picsum.photos/seed/wanderlust114/1200/800"
  },
  price: 17814,
  location: "Ooty",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [-128.27, -32.87]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Cozy Treehouse in Goa",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing116",
    url: "https://picsum.photos/seed/wanderlust115/1200/800"
  },
  price: 9153,
  location: "Goa",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [-69.28, -33.3]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Cozy Resort Suite in Swiss Alps",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing117",
    url: "https://picsum.photos/seed/wanderlust116/1200/800"
  },
  price: 36248,
  location: "Swiss Alps",
  country: "Switzerland",
  geometry: {
    type: "Point",
    coordinates: [85.31, 54.07]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Skyline Resort Suite in Bali",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing118",
    url: "https://picsum.photos/seed/wanderlust117/1200/800"
  },
  price: 9413,
  location: "Bali",
  country: "Indonesia",
  geometry: {
    type: "Point",
    coordinates: [-47.77, -22.55]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Luxury Cottage in Maldives",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing119",
    url: "https://picsum.photos/seed/wanderlust118/1200/800"
  },
  price: 29872,
  location: "Maldives",
  country: "Maldives",
  geometry: {
    type: "Point",
    coordinates: [-82.33, 45.83]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Cozy Beach House in Goa",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing120",
    url: "https://picsum.photos/seed/wanderlust119/1200/800"
  },
  price: 47308,
  location: "Goa",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [22.84, 77.3]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Oceanfront Chalet in Banff",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing121",
    url: "https://picsum.photos/seed/wanderlust120/1200/800"
  },
  price: 5978,
  location: "Banff",
  country: "Canada",
  geometry: {
    type: "Point",
    coordinates: [57.35, 23.07]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Grand Villa in Cape Town",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing122",
    url: "https://picsum.photos/seed/wanderlust121/1200/800"
  },
  price: 11090,
  location: "Cape Town",
  country: "South Africa",
  geometry: {
    type: "Point",
    coordinates: [160.86, 64.43]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Rustic Apartment in Munnar",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing123",
    url: "https://picsum.photos/seed/wanderlust122/1200/800"
  },
  price: 23860,
  location: "Munnar",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [78.44, -38.58]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Modern Mansion in Swiss Alps",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing124",
    url: "https://picsum.photos/seed/wanderlust123/1200/800"
  },
  price: 19960,
  location: "Swiss Alps",
  country: "Switzerland",
  geometry: {
    type: "Point",
    coordinates: [-68.58, -59.83]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Modern Apartment in Cape Town",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing125",
    url: "https://picsum.photos/seed/wanderlust124/1200/800"
  },
  price: 44457,
  location: "Cape Town",
  country: "South Africa",
  geometry: {
    type: "Point",
    coordinates: [109.82, -33.85]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Modern Lake House in Goa",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing126",
    url: "https://picsum.photos/seed/wanderlust125/1200/800"
  },
  price: 4158,
  location: "Goa",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [-21.67, 43.06]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Mountain Penthouse in Santorini",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing127",
    url: "https://picsum.photos/seed/wanderlust126/1200/800"
  },
  price: 18416,
  location: "Santorini",
  country: "Greece",
  geometry: {
    type: "Point",
    coordinates: [109.41, -67.02]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Rustic Apartment in Phuket",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing128",
    url: "https://picsum.photos/seed/wanderlust127/1200/800"
  },
  price: 28131,
  location: "Phuket",
  country: "Thailand",
  geometry: {
    type: "Point",
    coordinates: [16.26, -0.94]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Skyline Loft in Santorini",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing129",
    url: "https://picsum.photos/seed/wanderlust128/1200/800"
  },
  price: 22742,
  location: "Santorini",
  country: "Greece",
  geometry: {
    type: "Point",
    coordinates: [120.4, 69.66]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Designer Farmhouse in Paris",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing130",
    url: "https://picsum.photos/seed/wanderlust129/1200/800"
  },
  price: 33104,
  location: "Paris",
  country: "France",
  geometry: {
    type: "Point",
    coordinates: [-82.03, -79.36]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Designer Farmhouse in Munnar",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing131",
    url: "https://picsum.photos/seed/wanderlust130/1200/800"
  },
  price: 27803,
  location: "Munnar",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [-127.53, 67.31]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Private Resort Suite in Manali",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing132",
    url: "https://picsum.photos/seed/wanderlust131/1200/800"
  },
  price: 18504,
  location: "Manali",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [62.46, 6.8]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Modern Loft in Udaipur",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing133",
    url: "https://picsum.photos/seed/wanderlust132/1200/800"
  },
  price: 16242,
  location: "Udaipur",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [96.27, -44.6]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Skyline Villa in Swiss Alps",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing134",
    url: "https://picsum.photos/seed/wanderlust133/1200/800"
  },
  price: 27660,
  location: "Swiss Alps",
  country: "Switzerland",
  geometry: {
    type: "Point",
    coordinates: [-7.37, -43.21]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Elegant Chalet in Dubai",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing135",
    url: "https://picsum.photos/seed/wanderlust134/1200/800"
  },
  price: 34126,
  location: "Dubai",
  country: "UAE",
  geometry: {
    type: "Point",
    coordinates: [79.5, 18.3]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Skyline Lake House in Udaipur",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing136",
    url: "https://picsum.photos/seed/wanderlust135/1200/800"
  },
  price: 29621,
  location: "Udaipur",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [3.16, -35.12]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Luxury Mansion in Goa",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing137",
    url: "https://picsum.photos/seed/wanderlust136/1200/800"
  },
  price: 22226,
  location: "Goa",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [54.62, -42.16]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Premium Resort Suite in Bali",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing138",
    url: "https://picsum.photos/seed/wanderlust137/1200/800"
  },
  price: 38446,
  location: "Bali",
  country: "Indonesia",
  geometry: {
    type: "Point",
    coordinates: [-55.72, 51.0]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Historic Cottage in Kerala",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing139",
    url: "https://picsum.photos/seed/wanderlust138/1200/800"
  },
  price: 42047,
  location: "Kerala",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [-102.42, 76.14]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Oceanfront Bungalow in Udaipur",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing140",
    url: "https://picsum.photos/seed/wanderlust139/1200/800"
  },
  price: 18936,
  location: "Udaipur",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [-35.59, -5.03]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Oceanfront Treehouse in Manali",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing141",
    url: "https://picsum.photos/seed/wanderlust140/1200/800"
  },
  price: 28279,
  location: "Manali",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [1.8, 70.71]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Modern Resort Suite in Munnar",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing142",
    url: "https://picsum.photos/seed/wanderlust141/1200/800"
  },
  price: 31582,
  location: "Munnar",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [4.85, -65.75]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Luxury Beach House in Santorini",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing143",
    url: "https://picsum.photos/seed/wanderlust142/1200/800"
  },
  price: 5474,
  location: "Santorini",
  country: "Greece",
  geometry: {
    type: "Point",
    coordinates: [63.3, 74.14]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Skyline Lake House in Paris",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing144",
    url: "https://picsum.photos/seed/wanderlust143/1200/800"
  },
  price: 10617,
  location: "Paris",
  country: "France",
  geometry: {
    type: "Point",
    coordinates: [-128.85, -0.13]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Mountain Chalet in Banff",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing145",
    url: "https://picsum.photos/seed/wanderlust144/1200/800"
  },
  price: 869,
  location: "Banff",
  country: "Canada",
  geometry: {
    type: "Point",
    coordinates: [159.77, 53.29]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Elegant Villa in Goa",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing146",
    url: "https://picsum.photos/seed/wanderlust145/1200/800"
  },
  price: 32930,
  location: "Goa",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [-17.04, 38.89]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Elegant Bungalow in Dubai",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing147",
    url: "https://picsum.photos/seed/wanderlust146/1200/800"
  },
  price: 33082,
  location: "Dubai",
  country: "UAE",
  geometry: {
    type: "Point",
    coordinates: [169.85, -9.69]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Designer Mansion in Dubai",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing148",
    url: "https://picsum.photos/seed/wanderlust147/1200/800"
  },
  price: 49289,
  location: "Dubai",
  country: "UAE",
  geometry: {
    type: "Point",
    coordinates: [-110.39, -13.39]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Oceanfront Chalet in Goa",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing149",
    url: "https://picsum.photos/seed/wanderlust148/1200/800"
  },
  price: 5895,
  location: "Goa",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [74.04, 24.21]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Premium Cabin in Ooty",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing150",
    url: "https://picsum.photos/seed/wanderlust149/1200/800"
  },
  price: 20516,
  location: "Ooty",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [-45.51, 60.16]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Mountain Villa in Paris",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing151",
    url: "https://picsum.photos/seed/wanderlust150/1200/800"
  },
  price: 24305,
  location: "Paris",
  country: "France",
  geometry: {
    type: "Point",
    coordinates: [-106.92, 72.63]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Private Resort Suite in Queenstown",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing152",
    url: "https://picsum.photos/seed/wanderlust151/1200/800"
  },
  price: 42465,
  location: "Queenstown",
  country: "New Zealand",
  geometry: {
    type: "Point",
    coordinates: [85.93, 58.52]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Elegant Cottage in Banff",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing153",
    url: "https://picsum.photos/seed/wanderlust152/1200/800"
  },
  price: 23665,
  location: "Banff",
  country: "Canada",
  geometry: {
    type: "Point",
    coordinates: [107.8, 76.37]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Private Cottage in Kyoto",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing154",
    url: "https://picsum.photos/seed/wanderlust153/1200/800"
  },
  price: 6175,
  location: "Kyoto",
  country: "Japan",
  geometry: {
    type: "Point",
    coordinates: [149.07, -21.81]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Designer Cottage in Jaipur",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing155",
    url: "https://picsum.photos/seed/wanderlust154/1200/800"
  },
  price: 28316,
  location: "Jaipur",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [-68.26, 3.31]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Peaceful Lake House in Swiss Alps",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing156",
    url: "https://picsum.photos/seed/wanderlust155/1200/800"
  },
  price: 30904,
  location: "Swiss Alps",
  country: "Switzerland",
  geometry: {
    type: "Point",
    coordinates: [71.85, -9.23]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Modern Mansion in Goa",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing157",
    url: "https://picsum.photos/seed/wanderlust156/1200/800"
  },
  price: 5439,
  location: "Goa",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [-49.57, -19.89]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Oceanfront Chalet in Paris",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing158",
    url: "https://picsum.photos/seed/wanderlust157/1200/800"
  },
  price: 49888,
  location: "Paris",
  country: "France",
  geometry: {
    type: "Point",
    coordinates: [-164.54, 66.49]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Luxury Bungalow in Goa",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing159",
    url: "https://picsum.photos/seed/wanderlust158/1200/800"
  },
  price: 19437,
  location: "Goa",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [-90.08, 54.06]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Modern Resort Suite in New York",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing160",
    url: "https://picsum.photos/seed/wanderlust159/1200/800"
  },
  price: 27823,
  location: "New York",
  country: "USA",
  geometry: {
    type: "Point",
    coordinates: [81.85, 15.62]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Mountain Apartment in Manali",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing161",
    url: "https://picsum.photos/seed/wanderlust160/1200/800"
  },
  price: 2103,
  location: "Manali",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [62.22, 40.06]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Private Farmhouse in Udaipur",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing162",
    url: "https://picsum.photos/seed/wanderlust161/1200/800"
  },
  price: 12603,
  location: "Udaipur",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [-106.45, 3.08]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Cozy Lake House in Tuscany",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing163",
    url: "https://picsum.photos/seed/wanderlust162/1200/800"
  },
  price: 17600,
  location: "Tuscany",
  country: "Italy",
  geometry: {
    type: "Point",
    coordinates: [51.68, 19.85]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Modern Cottage in Manali",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing164",
    url: "https://picsum.photos/seed/wanderlust163/1200/800"
  },
  price: 18648,
  location: "Manali",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [61.8, 30.28]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Elegant Mansion in Dubai",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing165",
    url: "https://picsum.photos/seed/wanderlust164/1200/800"
  },
  price: 26482,
  location: "Dubai",
  country: "UAE",
  geometry: {
    type: "Point",
    coordinates: [-154.9, 43.58]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Secluded Bungalow in Kerala",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing166",
    url: "https://picsum.photos/seed/wanderlust165/1200/800"
  },
  price: 12450,
  location: "Kerala",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [54.52, 17.54]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Private Villa in Phuket",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing167",
    url: "https://picsum.photos/seed/wanderlust166/1200/800"
  },
  price: 19073,
  location: "Phuket",
  country: "Thailand",
  geometry: {
    type: "Point",
    coordinates: [-68.98, 27.91]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Historic Penthouse in Udaipur",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing168",
    url: "https://picsum.photos/seed/wanderlust167/1200/800"
  },
  price: 5477,
  location: "Udaipur",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [153.12, -26.27]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Designer Beach House in Swiss Alps",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing169",
    url: "https://picsum.photos/seed/wanderlust168/1200/800"
  },
  price: 32771,
  location: "Swiss Alps",
  country: "Switzerland",
  geometry: {
    type: "Point",
    coordinates: [-119.51, 51.39]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Luxury Penthouse in Kyoto",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing170",
    url: "https://picsum.photos/seed/wanderlust169/1200/800"
  },
  price: 19461,
  location: "Kyoto",
  country: "Japan",
  geometry: {
    type: "Point",
    coordinates: [-112.69, -42.14]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Historic Mansion in Swiss Alps",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing171",
    url: "https://picsum.photos/seed/wanderlust170/1200/800"
  },
  price: 42325,
  location: "Swiss Alps",
  country: "Switzerland",
  geometry: {
    type: "Point",
    coordinates: [73.12, -37.27]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Mountain Mansion in Kerala",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing172",
    url: "https://picsum.photos/seed/wanderlust171/1200/800"
  },
  price: 25703,
  location: "Kerala",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [-74.5, 75.26]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Secluded Villa in Udaipur",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing173",
    url: "https://picsum.photos/seed/wanderlust172/1200/800"
  },
  price: 11330,
  location: "Udaipur",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [-48.32, -39.76]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Peaceful Treehouse in Phuket",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing174",
    url: "https://picsum.photos/seed/wanderlust173/1200/800"
  },
  price: 3348,
  location: "Phuket",
  country: "Thailand",
  geometry: {
    type: "Point",
    coordinates: [116.56, 71.86]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Premium Cabin in Jaipur",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing175",
    url: "https://picsum.photos/seed/wanderlust174/1200/800"
  },
  price: 49411,
  location: "Jaipur",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [60.78, 39.28]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Elegant Chalet in Banff",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing176",
    url: "https://picsum.photos/seed/wanderlust175/1200/800"
  },
  price: 38352,
  location: "Banff",
  country: "Canada",
  geometry: {
    type: "Point",
    coordinates: [-33.85, -54.2]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Elegant Apartment in Kerala",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing177",
    url: "https://picsum.photos/seed/wanderlust176/1200/800"
  },
  price: 26120,
  location: "Kerala",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [-115.48, -22.66]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Peaceful Apartment in Phuket",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing178",
    url: "https://picsum.photos/seed/wanderlust177/1200/800"
  },
  price: 9856,
  location: "Phuket",
  country: "Thailand",
  geometry: {
    type: "Point",
    coordinates: [-95.31, 8.64]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Secluded Loft in Manali",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing179",
    url: "https://picsum.photos/seed/wanderlust178/1200/800"
  },
  price: 33309,
  location: "Manali",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [6.55, 15.78]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Luxury Mansion in Phuket",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing180",
    url: "https://picsum.photos/seed/wanderlust179/1200/800"
  },
  price: 11976,
  location: "Phuket",
  country: "Thailand",
  geometry: {
    type: "Point",
    coordinates: [47.67, 2.13]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Grand Mansion in Kyoto",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing181",
    url: "https://picsum.photos/seed/wanderlust180/1200/800"
  },
  price: 37214,
  location: "Kyoto",
  country: "Japan",
  geometry: {
    type: "Point",
    coordinates: [-155.23, -60.0]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Rustic Bungalow in Maldives",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing182",
    url: "https://picsum.photos/seed/wanderlust181/1200/800"
  },
  price: 11331,
  location: "Maldives",
  country: "Maldives",
  geometry: {
    type: "Point",
    coordinates: [-106.22, -40.64]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Secluded Mansion in Tuscany",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing183",
    url: "https://picsum.photos/seed/wanderlust182/1200/800"
  },
  price: 16955,
  location: "Tuscany",
  country: "Italy",
  geometry: {
    type: "Point",
    coordinates: [75.06, 43.25]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Rustic Lake House in Dubai",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing184",
    url: "https://picsum.photos/seed/wanderlust183/1200/800"
  },
  price: 38552,
  location: "Dubai",
  country: "UAE",
  geometry: {
    type: "Point",
    coordinates: [-91.61, -16.3]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Historic Penthouse in Kerala",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing185",
    url: "https://picsum.photos/seed/wanderlust184/1200/800"
  },
  price: 47169,
  location: "Kerala",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [-2.06, -49.79]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Private Apartment in Phuket",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing186",
    url: "https://picsum.photos/seed/wanderlust185/1200/800"
  },
  price: 42529,
  location: "Phuket",
  country: "Thailand",
  geometry: {
    type: "Point",
    coordinates: [20.29, -52.84]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Historic Resort Suite in Maldives",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing187",
    url: "https://picsum.photos/seed/wanderlust186/1200/800"
  },
  price: 29747,
  location: "Maldives",
  country: "Maldives",
  geometry: {
    type: "Point",
    coordinates: [32.16, 50.34]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Luxury Cottage in Maldives",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing188",
    url: "https://picsum.photos/seed/wanderlust187/1200/800"
  },
  price: 2961,
  location: "Maldives",
  country: "Maldives",
  geometry: {
    type: "Point",
    coordinates: [100.62, -7.64]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Premium Beach House in Manali",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing189",
    url: "https://picsum.photos/seed/wanderlust188/1200/800"
  },
  price: 20154,
  location: "Manali",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [-147.45, 8.3]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Elegant Mansion in Munnar",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing190",
    url: "https://picsum.photos/seed/wanderlust189/1200/800"
  },
  price: 31047,
  location: "Munnar",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [-129.64, 8.93]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Luxury Chalet in Kerala",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing191",
    url: "https://picsum.photos/seed/wanderlust190/1200/800"
  },
  price: 25187,
  location: "Kerala",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [-137.99, 31.37]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Oceanfront Penthouse in Kyoto",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing192",
    url: "https://picsum.photos/seed/wanderlust191/1200/800"
  },
  price: 28184,
  location: "Kyoto",
  country: "Japan",
  geometry: {
    type: "Point",
    coordinates: [-7.94, -30.0]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Premium Beach House in Banff",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing193",
    url: "https://picsum.photos/seed/wanderlust192/1200/800"
  },
  price: 49747,
  location: "Banff",
  country: "Canada",
  geometry: {
    type: "Point",
    coordinates: [-107.16, -23.87]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Peaceful Lake House in Munnar",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing194",
    url: "https://picsum.photos/seed/wanderlust193/1200/800"
  },
  price: 20188,
  location: "Munnar",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [102.12, 62.7]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Elegant Apartment in Paris",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing195",
    url: "https://picsum.photos/seed/wanderlust194/1200/800"
  },
  price: 49346,
  location: "Paris",
  country: "France",
  geometry: {
    type: "Point",
    coordinates: [-52.75, -52.25]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Elegant Resort Suite in Goa",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing196",
    url: "https://picsum.photos/seed/wanderlust195/1200/800"
  },
  price: 34158,
  location: "Goa",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [81.98, 23.56]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Historic Chalet in Jaipur",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing197",
    url: "https://picsum.photos/seed/wanderlust196/1200/800"
  },
  price: 32595,
  location: "Jaipur",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [-59.79, -15.95]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Luxury Treehouse in Cape Town",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing198",
    url: "https://picsum.photos/seed/wanderlust197/1200/800"
  },
  price: 21581,
  location: "Cape Town",
  country: "South Africa",
  geometry: {
    type: "Point",
    coordinates: [-9.59, 54.54]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Oceanfront Loft in Munnar",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing199",
    url: "https://picsum.photos/seed/wanderlust198/1200/800"
  },
  price: 5379,
  location: "Munnar",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [50.83, 23.6]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Grand Chalet in Maldives",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing200",
    url: "https://picsum.photos/seed/wanderlust199/1200/800"
  },
  price: 43074,
  location: "Maldives",
  country: "Maldives",
  geometry: {
    type: "Point",
    coordinates: [-126.93, -7.33]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Rustic Apartment in Jaipur",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing201",
    url: "https://picsum.photos/seed/wanderlust200/1200/800"
  },
  price: 27731,
  location: "Jaipur",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [-59.68, 8.97]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Secluded Apartment in Phuket",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing202",
    url: "https://picsum.photos/seed/wanderlust201/1200/800"
  },
  price: 17170,
  location: "Phuket",
  country: "Thailand",
  geometry: {
    type: "Point",
    coordinates: [34.33, 77.08]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Elegant Beach House in Queenstown",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing203",
    url: "https://picsum.photos/seed/wanderlust202/1200/800"
  },
  price: 41285,
  location: "Queenstown",
  country: "New Zealand",
  geometry: {
    type: "Point",
    coordinates: [101.39, 54.97]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Historic Treehouse in Manali",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing204",
    url: "https://picsum.photos/seed/wanderlust203/1200/800"
  },
  price: 21631,
  location: "Manali",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [22.71, -72.96]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Private Loft in Goa",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing205",
    url: "https://picsum.photos/seed/wanderlust204/1200/800"
  },
  price: 21413,
  location: "Goa",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [-112.84, 13.6]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Designer Chalet in Tuscany",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing206",
    url: "https://picsum.photos/seed/wanderlust205/1200/800"
  },
  price: 5675,
  location: "Tuscany",
  country: "Italy",
  geometry: {
    type: "Point",
    coordinates: [-40.03, -14.06]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Designer Tiny Home in Goa",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing207",
    url: "https://picsum.photos/seed/wanderlust206/1200/800"
  },
  price: 34320,
  location: "Goa",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [115.17, 37.49]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Elegant Cottage in Cape Town",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing208",
    url: "https://picsum.photos/seed/wanderlust207/1200/800"
  },
  price: 28191,
  location: "Cape Town",
  country: "South Africa",
  geometry: {
    type: "Point",
    coordinates: [115.24, -69.97]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Historic Cabin in Santorini",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing209",
    url: "https://picsum.photos/seed/wanderlust208/1200/800"
  },
  price: 46765,
  location: "Santorini",
  country: "Greece",
  geometry: {
    type: "Point",
    coordinates: [70.87, -6.94]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Designer Treehouse in Kyoto",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing210",
    url: "https://picsum.photos/seed/wanderlust209/1200/800"
  },
  price: 19142,
  location: "Kyoto",
  country: "Japan",
  geometry: {
    type: "Point",
    coordinates: [-38.93, 61.15]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Oceanfront Bungalow in Dubai",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing211",
    url: "https://picsum.photos/seed/wanderlust210/1200/800"
  },
  price: 45052,
  location: "Dubai",
  country: "UAE",
  geometry: {
    type: "Point",
    coordinates: [-11.14, -53.52]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Premium Beach House in Goa",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing212",
    url: "https://picsum.photos/seed/wanderlust211/1200/800"
  },
  price: 37938,
  location: "Goa",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [-56.75, 42.05]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Skyline Cabin in Queenstown",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing213",
    url: "https://picsum.photos/seed/wanderlust212/1200/800"
  },
  price: 49906,
  location: "Queenstown",
  country: "New Zealand",
  geometry: {
    type: "Point",
    coordinates: [46.94, -32.76]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Grand Beach House in Ooty",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing214",
    url: "https://picsum.photos/seed/wanderlust213/1200/800"
  },
  price: 13500,
  location: "Ooty",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [36.89, -2.24]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Modern Tiny Home in Paris",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing215",
    url: "https://picsum.photos/seed/wanderlust214/1200/800"
  },
  price: 21866,
  location: "Paris",
  country: "France",
  geometry: {
    type: "Point",
    coordinates: [-156.41, 71.54]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Premium Lake House in Tuscany",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing216",
    url: "https://picsum.photos/seed/wanderlust215/1200/800"
  },
  price: 44307,
  location: "Tuscany",
  country: "Italy",
  geometry: {
    type: "Point",
    coordinates: [5.44, 69.29]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Elegant Treehouse in Tuscany",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing217",
    url: "https://picsum.photos/seed/wanderlust216/1200/800"
  },
  price: 23895,
  location: "Tuscany",
  country: "Italy",
  geometry: {
    type: "Point",
    coordinates: [166.23, 50.64]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Historic Cabin in Kerala",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing218",
    url: "https://picsum.photos/seed/wanderlust217/1200/800"
  },
  price: 12508,
  location: "Kerala",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [45.48, -22.56]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Luxury Cabin in Ooty",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing219",
    url: "https://picsum.photos/seed/wanderlust218/1200/800"
  },
  price: 1912,
  location: "Ooty",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [148.29, 73.59]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Premium Bungalow in Munnar",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing220",
    url: "https://picsum.photos/seed/wanderlust219/1200/800"
  },
  price: 14260,
  location: "Munnar",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [61.45, -17.45]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Private Tiny Home in Dubai",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing221",
    url: "https://picsum.photos/seed/wanderlust220/1200/800"
  },
  price: 16493,
  location: "Dubai",
  country: "UAE",
  geometry: {
    type: "Point",
    coordinates: [-8.1, 61.15]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Mountain Beach House in Dubai",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing222",
    url: "https://picsum.photos/seed/wanderlust221/1200/800"
  },
  price: 15535,
  location: "Dubai",
  country: "UAE",
  geometry: {
    type: "Point",
    coordinates: [102.12, 50.13]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Oceanfront Beach House in Paris",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing223",
    url: "https://picsum.photos/seed/wanderlust222/1200/800"
  },
  price: 43246,
  location: "Paris",
  country: "France",
  geometry: {
    type: "Point",
    coordinates: [-8.96, 76.88]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Peaceful Treehouse in Tuscany",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing224",
    url: "https://picsum.photos/seed/wanderlust223/1200/800"
  },
  price: 28984,
  location: "Tuscany",
  country: "Italy",
  geometry: {
    type: "Point",
    coordinates: [-74.26, -35.49]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Elegant Beach House in Queenstown",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing225",
    url: "https://picsum.photos/seed/wanderlust224/1200/800"
  },
  price: 49530,
  location: "Queenstown",
  country: "New Zealand",
  geometry: {
    type: "Point",
    coordinates: [-100.8, 33.51]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Skyline Lake House in New York",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing226",
    url: "https://picsum.photos/seed/wanderlust225/1200/800"
  },
  price: 47715,
  location: "New York",
  country: "USA",
  geometry: {
    type: "Point",
    coordinates: [-15.53, 37.0]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Cozy Penthouse in Munnar",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing227",
    url: "https://picsum.photos/seed/wanderlust226/1200/800"
  },
  price: 9416,
  location: "Munnar",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [-131.02, 43.76]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Skyline Mansion in New York",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing228",
    url: "https://picsum.photos/seed/wanderlust227/1200/800"
  },
  price: 31516,
  location: "New York",
  country: "USA",
  geometry: {
    type: "Point",
    coordinates: [4.49, -5.37]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Skyline Chalet in Phuket",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing229",
    url: "https://picsum.photos/seed/wanderlust228/1200/800"
  },
  price: 47482,
  location: "Phuket",
  country: "Thailand",
  geometry: {
    type: "Point",
    coordinates: [72.96, 39.01]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Cozy Bungalow in Queenstown",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing230",
    url: "https://picsum.photos/seed/wanderlust229/1200/800"
  },
  price: 30851,
  location: "Queenstown",
  country: "New Zealand",
  geometry: {
    type: "Point",
    coordinates: [-157.26, 9.93]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Private Cottage in Dubai",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing231",
    url: "https://picsum.photos/seed/wanderlust230/1200/800"
  },
  price: 12213,
  location: "Dubai",
  country: "UAE",
  geometry: {
    type: "Point",
    coordinates: [137.01, -19.36]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Historic Mansion in Banff",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing232",
    url: "https://picsum.photos/seed/wanderlust231/1200/800"
  },
  price: 39465,
  location: "Banff",
  country: "Canada",
  geometry: {
    type: "Point",
    coordinates: [-73.44, 38.32]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Rustic Resort Suite in Tuscany",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing233",
    url: "https://picsum.photos/seed/wanderlust232/1200/800"
  },
  price: 19679,
  location: "Tuscany",
  country: "Italy",
  geometry: {
    type: "Point",
    coordinates: [-43.91, 38.1]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Secluded Bungalow in Queenstown",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing234",
    url: "https://picsum.photos/seed/wanderlust233/1200/800"
  },
  price: 33357,
  location: "Queenstown",
  country: "New Zealand",
  geometry: {
    type: "Point",
    coordinates: [116.91, 11.44]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Modern Apartment in Ooty",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing235",
    url: "https://picsum.photos/seed/wanderlust234/1200/800"
  },
  price: 15145,
  location: "Ooty",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [-50.7, -77.43]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Grand Mansion in Kyoto",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing236",
    url: "https://picsum.photos/seed/wanderlust235/1200/800"
  },
  price: 40654,
  location: "Kyoto",
  country: "Japan",
  geometry: {
    type: "Point",
    coordinates: [-104.62, 71.11]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Elegant Chalet in Dubai",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing237",
    url: "https://picsum.photos/seed/wanderlust236/1200/800"
  },
  price: 46736,
  location: "Dubai",
  country: "UAE",
  geometry: {
    type: "Point",
    coordinates: [111.18, 53.56]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Elegant Cottage in Jaipur",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing238",
    url: "https://picsum.photos/seed/wanderlust237/1200/800"
  },
  price: 47110,
  location: "Jaipur",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [114.17, 55.01]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Mountain Bungalow in New York",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing239",
    url: "https://picsum.photos/seed/wanderlust238/1200/800"
  },
  price: 25864,
  location: "New York",
  country: "USA",
  geometry: {
    type: "Point",
    coordinates: [-95.26, 77.88]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Peaceful Penthouse in Santorini",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing240",
    url: "https://picsum.photos/seed/wanderlust239/1200/800"
  },
  price: 1544,
  location: "Santorini",
  country: "Greece",
  geometry: {
    type: "Point",
    coordinates: [20.65, -34.55]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Premium Resort Suite in Kerala",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing241",
    url: "https://picsum.photos/seed/wanderlust240/1200/800"
  },
  price: 37320,
  location: "Kerala",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [-114.52, -62.3]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Mountain Resort Suite in Kerala",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing242",
    url: "https://picsum.photos/seed/wanderlust241/1200/800"
  },
  price: 17708,
  location: "Kerala",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [-91.36, 32.58]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Peaceful Treehouse in Phuket",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing243",
    url: "https://picsum.photos/seed/wanderlust242/1200/800"
  },
  price: 39644,
  location: "Phuket",
  country: "Thailand",
  geometry: {
    type: "Point",
    coordinates: [78.38, 1.73]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Modern Mansion in Goa",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing244",
    url: "https://picsum.photos/seed/wanderlust243/1200/800"
  },
  price: 4386,
  location: "Goa",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [-12.21, 43.09]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Rustic Bungalow in Cape Town",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing245",
    url: "https://picsum.photos/seed/wanderlust244/1200/800"
  },
  price: 25180,
  location: "Cape Town",
  country: "South Africa",
  geometry: {
    type: "Point",
    coordinates: [-18.53, -74.8]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Cozy Cabin in New York",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing246",
    url: "https://picsum.photos/seed/wanderlust245/1200/800"
  },
  price: 21016,
  location: "New York",
  country: "USA",
  geometry: {
    type: "Point",
    coordinates: [-52.71, 37.49]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Cozy Villa in Udaipur",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing247",
    url: "https://picsum.photos/seed/wanderlust246/1200/800"
  },
  price: 9157,
  location: "Udaipur",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [68.4, -27.55]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Premium Cottage in Banff",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing248",
    url: "https://picsum.photos/seed/wanderlust247/1200/800"
  },
  price: 24477,
  location: "Banff",
  country: "Canada",
  geometry: {
    type: "Point",
    coordinates: [158.01, 67.21]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Oceanfront Farmhouse in Goa",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing249",
    url: "https://picsum.photos/seed/wanderlust248/1200/800"
  },
  price: 9531,
  location: "Goa",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [24.56, -0.89]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Secluded Bungalow in Cape Town",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing250",
    url: "https://picsum.photos/seed/wanderlust249/1200/800"
  },
  price: 49183,
  location: "Cape Town",
  country: "South Africa",
  geometry: {
    type: "Point",
    coordinates: [79.46, -35.19]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Premium Villa in Ooty",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing251",
    url: "https://picsum.photos/seed/wanderlust250/1200/800"
  },
  price: 44340,
  location: "Ooty",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [33.79, -61.2]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Designer Mansion in Kyoto",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing252",
    url: "https://picsum.photos/seed/wanderlust251/1200/800"
  },
  price: 33080,
  location: "Kyoto",
  country: "Japan",
  geometry: {
    type: "Point",
    coordinates: [-73.63, -48.96]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Oceanfront Penthouse in New York",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing253",
    url: "https://picsum.photos/seed/wanderlust252/1200/800"
  },
  price: 42947,
  location: "New York",
  country: "USA",
  geometry: {
    type: "Point",
    coordinates: [-109.59, 17.85]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Oceanfront Mansion in Bali",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing254",
    url: "https://picsum.photos/seed/wanderlust253/1200/800"
  },
  price: 46941,
  location: "Bali",
  country: "Indonesia",
  geometry: {
    type: "Point",
    coordinates: [59.67, 28.42]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Mountain Treehouse in Maldives",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing255",
    url: "https://picsum.photos/seed/wanderlust254/1200/800"
  },
  price: 20381,
  location: "Maldives",
  country: "Maldives",
  geometry: {
    type: "Point",
    coordinates: [37.08, -59.41]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Mountain Farmhouse in Udaipur",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing256",
    url: "https://picsum.photos/seed/wanderlust255/1200/800"
  },
  price: 38827,
  location: "Udaipur",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [124.28, -26.25]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Skyline Lake House in Udaipur",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing257",
    url: "https://picsum.photos/seed/wanderlust256/1200/800"
  },
  price: 38946,
  location: "Udaipur",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [-109.17, -52.16]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Elegant Tiny Home in Maldives",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing258",
    url: "https://picsum.photos/seed/wanderlust257/1200/800"
  },
  price: 9258,
  location: "Maldives",
  country: "Maldives",
  geometry: {
    type: "Point",
    coordinates: [-111.46, -65.28]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Cozy Mansion in Queenstown",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing259",
    url: "https://picsum.photos/seed/wanderlust258/1200/800"
  },
  price: 32706,
  location: "Queenstown",
  country: "New Zealand",
  geometry: {
    type: "Point",
    coordinates: [-108.42, -62.03]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Skyline Beach House in New York",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing260",
    url: "https://picsum.photos/seed/wanderlust259/1200/800"
  },
  price: 13472,
  location: "New York",
  country: "USA",
  geometry: {
    type: "Point",
    coordinates: [150.47, 21.9]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Oceanfront Apartment in Queenstown",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing261",
    url: "https://picsum.photos/seed/wanderlust260/1200/800"
  },
  price: 16450,
  location: "Queenstown",
  country: "New Zealand",
  geometry: {
    type: "Point",
    coordinates: [-61.53, 18.34]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Premium Loft in Queenstown",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing262",
    url: "https://picsum.photos/seed/wanderlust261/1200/800"
  },
  price: 30356,
  location: "Queenstown",
  country: "New Zealand",
  geometry: {
    type: "Point",
    coordinates: [116.58, -42.21]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Grand Tiny Home in Goa",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing263",
    url: "https://picsum.photos/seed/wanderlust262/1200/800"
  },
  price: 17605,
  location: "Goa",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [-14.2, -79.12]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Historic Mansion in Maldives",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing264",
    url: "https://picsum.photos/seed/wanderlust263/1200/800"
  },
  price: 1160,
  location: "Maldives",
  country: "Maldives",
  geometry: {
    type: "Point",
    coordinates: [-125.8, -29.24]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Skyline Resort Suite in Santorini",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing265",
    url: "https://picsum.photos/seed/wanderlust264/1200/800"
  },
  price: 31007,
  location: "Santorini",
  country: "Greece",
  geometry: {
    type: "Point",
    coordinates: [-157.84, 25.87]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Secluded Farmhouse in Manali",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing266",
    url: "https://picsum.photos/seed/wanderlust265/1200/800"
  },
  price: 37324,
  location: "Manali",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [83.91, -2.79]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Historic Mansion in Tuscany",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing267",
    url: "https://picsum.photos/seed/wanderlust266/1200/800"
  },
  price: 4902,
  location: "Tuscany",
  country: "Italy",
  geometry: {
    type: "Point",
    coordinates: [-23.42, 29.02]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Elegant Villa in Paris",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing268",
    url: "https://picsum.photos/seed/wanderlust267/1200/800"
  },
  price: 15992,
  location: "Paris",
  country: "France",
  geometry: {
    type: "Point",
    coordinates: [-130.54, 35.44]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Elegant Chalet in Udaipur",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing269",
    url: "https://picsum.photos/seed/wanderlust268/1200/800"
  },
  price: 45714,
  location: "Udaipur",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [-154.64, 69.36]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Premium Cottage in Cape Town",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing270",
    url: "https://picsum.photos/seed/wanderlust269/1200/800"
  },
  price: 42165,
  location: "Cape Town",
  country: "South Africa",
  geometry: {
    type: "Point",
    coordinates: [162.32, -23.99]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Oceanfront Lake House in Dubai",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing271",
    url: "https://picsum.photos/seed/wanderlust270/1200/800"
  },
  price: 46649,
  location: "Dubai",
  country: "UAE",
  geometry: {
    type: "Point",
    coordinates: [-128.7, -70.17]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Oceanfront Penthouse in Goa",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing272",
    url: "https://picsum.photos/seed/wanderlust271/1200/800"
  },
  price: 11485,
  location: "Goa",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [-167.71, -24.08]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Modern Mansion in Manali",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing273",
    url: "https://picsum.photos/seed/wanderlust272/1200/800"
  },
  price: 5962,
  location: "Manali",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [-142.96, 46.09]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Historic Cottage in Dubai",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing274",
    url: "https://picsum.photos/seed/wanderlust273/1200/800"
  },
  price: 25780,
  location: "Dubai",
  country: "UAE",
  geometry: {
    type: "Point",
    coordinates: [-106.98, 51.68]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Elegant Beach House in Phuket",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing275",
    url: "https://picsum.photos/seed/wanderlust274/1200/800"
  },
  price: 21954,
  location: "Phuket",
  country: "Thailand",
  geometry: {
    type: "Point",
    coordinates: [-128.83, 76.03]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Elegant Bungalow in Paris",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing276",
    url: "https://picsum.photos/seed/wanderlust275/1200/800"
  },
  price: 3857,
  location: "Paris",
  country: "France",
  geometry: {
    type: "Point",
    coordinates: [8.16, -54.68]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Luxury Beach House in Santorini",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing277",
    url: "https://picsum.photos/seed/wanderlust276/1200/800"
  },
  price: 30165,
  location: "Santorini",
  country: "Greece",
  geometry: {
    type: "Point",
    coordinates: [-169.02, 24.05]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Grand Lake House in Goa",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing278",
    url: "https://picsum.photos/seed/wanderlust277/1200/800"
  },
  price: 45805,
  location: "Goa",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [81.33, -60.35]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Designer Loft in Jaipur",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing279",
    url: "https://picsum.photos/seed/wanderlust278/1200/800"
  },
  price: 26378,
  location: "Jaipur",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [41.23, 66.5]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Premium Loft in Bali",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing280",
    url: "https://picsum.photos/seed/wanderlust279/1200/800"
  },
  price: 47835,
  location: "Bali",
  country: "Indonesia",
  geometry: {
    type: "Point",
    coordinates: [-44.91, 49.58]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Luxury Bungalow in Jaipur",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing281",
    url: "https://picsum.photos/seed/wanderlust280/1200/800"
  },
  price: 33069,
  location: "Jaipur",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [153.36, 39.71]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Elegant Mansion in Banff",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing282",
    url: "https://picsum.photos/seed/wanderlust281/1200/800"
  },
  price: 48772,
  location: "Banff",
  country: "Canada",
  geometry: {
    type: "Point",
    coordinates: [-108.0, -13.08]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Cozy Cottage in Cape Town",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing283",
    url: "https://picsum.photos/seed/wanderlust282/1200/800"
  },
  price: 22272,
  location: "Cape Town",
  country: "South Africa",
  geometry: {
    type: "Point",
    coordinates: [-66.16, 28.19]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Peaceful Villa in Ooty",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing284",
    url: "https://picsum.photos/seed/wanderlust283/1200/800"
  },
  price: 12057,
  location: "Ooty",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [25.0, 25.45]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Skyline Bungalow in Cape Town",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing285",
    url: "https://picsum.photos/seed/wanderlust284/1200/800"
  },
  price: 45906,
  location: "Cape Town",
  country: "South Africa",
  geometry: {
    type: "Point",
    coordinates: [-116.9, 3.57]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Premium Lake House in Goa",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing286",
    url: "https://picsum.photos/seed/wanderlust285/1200/800"
  },
  price: 9005,
  location: "Goa",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [-68.66, -52.73]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Elegant Villa in Queenstown",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing287",
    url: "https://picsum.photos/seed/wanderlust286/1200/800"
  },
  price: 35673,
  location: "Queenstown",
  country: "New Zealand",
  geometry: {
    type: "Point",
    coordinates: [-77.76, 39.82]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Premium Beach House in Goa",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing288",
    url: "https://picsum.photos/seed/wanderlust287/1200/800"
  },
  price: 43476,
  location: "Goa",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [-31.89, 2.6]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Private Beach House in Dubai",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing289",
    url: "https://picsum.photos/seed/wanderlust288/1200/800"
  },
  price: 47935,
  location: "Dubai",
  country: "UAE",
  geometry: {
    type: "Point",
    coordinates: [34.25, 9.98]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Skyline Apartment in Paris",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing290",
    url: "https://picsum.photos/seed/wanderlust289/1200/800"
  },
  price: 21128,
  location: "Paris",
  country: "France",
  geometry: {
    type: "Point",
    coordinates: [76.26, 7.69]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Premium Apartment in New York",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing291",
    url: "https://picsum.photos/seed/wanderlust290/1200/800"
  },
  price: 27326,
  location: "New York",
  country: "USA",
  geometry: {
    type: "Point",
    coordinates: [123.02, -77.89]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Peaceful Cottage in Paris",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing292",
    url: "https://picsum.photos/seed/wanderlust291/1200/800"
  },
  price: 48873,
  location: "Paris",
  country: "France",
  geometry: {
    type: "Point",
    coordinates: [-84.22, 70.53]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Designer Beach House in Queenstown",
  description: "Experience comfort with premium interiors, scenic views, and thoughtfully curated amenities for an unforgettable stay.",
  image: {
    filename: "listing293",
    url: "https://picsum.photos/seed/wanderlust292/1200/800"
  },
  price: 6697,
  location: "Queenstown",
  country: "New Zealand",
  geometry: {
    type: "Point",
    coordinates: [80.38, -49.81]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Elegant Farmhouse in Munnar",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing294",
    url: "https://picsum.photos/seed/wanderlust293/1200/800"
  },
  price: 44664,
  location: "Munnar",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [-152.0, 43.21]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Modern Villa in Tuscany",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing295",
    url: "https://picsum.photos/seed/wanderlust294/1200/800"
  },
  price: 19867,
  location: "Tuscany",
  country: "Italy",
  geometry: {
    type: "Point",
    coordinates: [62.87, -23.71]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Cozy Villa in Phuket",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing296",
    url: "https://picsum.photos/seed/wanderlust295/1200/800"
  },
  price: 46887,
  location: "Phuket",
  country: "Thailand",
  geometry: {
    type: "Point",
    coordinates: [-110.12, 54.21]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Oceanfront Tiny Home in Goa",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing297",
    url: "https://picsum.photos/seed/wanderlust296/1200/800"
  },
  price: 44477,
  location: "Goa",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [-151.61, 70.22]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Skyline Resort Suite in Kyoto",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing298",
    url: "https://picsum.photos/seed/wanderlust297/1200/800"
  },
  price: 35658,
  location: "Kyoto",
  country: "Japan",
  geometry: {
    type: "Point",
    coordinates: [85.81, 43.98]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Elegant Villa in Maldives",
  description: "Perfect for families, couples, and remote workers looking for a relaxing getaway close to major attractions.",
  image: {
    filename: "listing299",
    url: "https://picsum.photos/seed/wanderlust298/1200/800"
  },
  price: 4911,
  location: "Maldives",
  country: "Maldives",
  geometry: {
    type: "Point",
    coordinates: [6.15, -50.69]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
{
  title: "Premium Penthouse in Santorini",
  description: "Wake up to breathtaking views, enjoy spacious living areas, and unwind in a peaceful environment.",
  image: {
    filename: "listing300",
    url: "https://picsum.photos/seed/wanderlust299/1200/800"
  },
  price: 21598,
  location: "Santorini",
  country: "Greece",
  geometry: {
    type: "Point",
    coordinates: [71.82, -31.95]
  },
  amenities: ['WiFi', 'Kitchen', 'Free Parking', 'Swimming Pool', 'Air Conditioning', 'TV', 'Hot Water', 'Washing Machine', 'Coffee Maker', 'Balcony', 'Garden View', 'Dedicated Workspace', 'Smoke Alarm', 'Carbon Monoxide Alarm', 'Beach Access', 'Hair Dryer', 'Iron', 'Microwave', 'Refrigerator', 'Exterior Security Cameras'],
  owner: "6a460c3f12ae624f34b6445f"
},
];

export default data;