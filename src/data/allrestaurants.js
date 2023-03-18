import { restairantItems } from "./restaurantItems";
import { KFCItems } from "./RestaurantItems/KFC";

export const allrestaurants = [
    {
        "id": 1,
        restaurant_name: "Burger King",
        restaurant_image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
        small_description: "BURGER KING® is the second largest fast food hamburger chain in the world.",
        rating: 4.1,
        reviews: 400,
        cusines: ["Veg", "Non-veg", "Special", "Burger"],
        filters:["Veg","Non-Veg","Bestseller","Rating 4.0+"],
        arrival_tag:"New Arrivals",
        distance: 24,
        res_items:restairantItems,
        isAvailableforDelivery: true,
        time_to_deliver: '60 min'
    },
    {
        "id": 2,
        restaurant_name: "KFC",
        restaurant_image: "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80",
        small_description: "KFC is a global chicken restaurant brand with a rich, decades-long history of success and innovation",
        rating: 3.9,
        reviews: 400,
        cusines: ["Veg", "Non-veg", "Combo"],
        filters:["Veg","Non-Veg","Bestseller","Rating 4.0+"],
        arrival_tag:"Old",
        distance: 10,
        res_items:KFCItems,
        isAvailableforDelivery: true,
        time_to_deliver: '30 min'
    },
    {
        "id": 3,
        restaurant_name: "Domino's",
        restaurant_image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        small_description: "as the largest pizza company in the world, Domino's proudly continues its legacy of delivering great-tasting pizza to customers' doors",
        rating: 4,
        reviews: 400,
        cusines: ["Pizza", "Burger", "Combo"],
        filters:["Veg","Non-Veg","Bestseller","Rating 4.0+"],
        distance: 2,
        res_items:restairantItems,
        isAvailableforDelivery: true,
        time_to_deliver: '10 min'
    },
    {
        "id": 4,
        restaurant_name: "Pizza Hut",
        restaurant_image: "https://images.unsplash.com/photo-1613564834361-9436948817d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=443&q=80",
        small_description: "Pizza Hut is an American multinational restaurant chain and international franchise founded in 1958 in Wichita, Kansas by Dan and Frank Carney ",
        rating: 4.9,
        reviews: 400,
        cusines: ["Pizza", "Burger", "Combo"],
        filters:["Veg","Non-Veg","Bestseller","Rating 4.0+"],
        distance: 8,
        res_items:restairantItems,
        isAvailableforDelivery: true,
        time_to_deliver: '45 min'
    },
    {
        "id": 5,
        restaurant_name: "Wow! Momo",
        restaurant_image: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        small_description: "Wow! Momo is an Indian chain of fast food restaurants headquartered in Kolkata",
        rating: 1.2,
        reviews: 400,
        cusines: ["Momo", "Spring Roll", "Veg", "Non-veg"],
        filters:["Veg","Non-Veg","Bestseller","Rating 4.0+"],
        arrival_tag:"Old",
        distance: 5,
        res_items:restairantItems,
        isAvailableforDelivery: true,
        time_to_deliver: '40 min'
    },
    {
        "id": 6,
        restaurant_name: "Baskin Robbins",
        restaurant_image: "https://images.unsplash.com/photo-1576506295286-5cda18df43e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
        small_description: "Baskin-Robbins is an American multinational chain of ice cream and cake speciality shops owned by Inspire Brands",
        rating: 3.6,
        reviews: 400,
        cusines: ["Ice Cream", "Shakes"],
        filters:["Veg","Non-Veg","Bestseller","Rating 4.0+"],
        arrival_tag:"New Arrivals",
        distance: 15,
        res_items:restairantItems,
        isAvailableforDelivery: true,
        time_to_deliver: '35 min'
    },
    {
        "id": 8,
        restaurant_name: "One Bite",
        restaurant_image: "https://images.unsplash.com/photo-1627662236973-4fd8358fa206?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        small_description: "One Bite, we came up with this concept to serve every single customer, who doesn't need to compromise on their own choices",
        rating: 3.8,
        reviews: 400,
        cusines: ["Chinese", "Bengali", "NorthIndian", "Biriyani"],
        filters:["Veg","Non-Veg","Bestseller","Rating 4.0+"],
        arrival_tag:"Old",
        distance: 19,
        res_items:restairantItems,
        isAvailableforDelivery: true,
        time_to_deliver: '25 min'
    },
    {
        "id": 9,
        restaurant_name: "Star Buck",
        restaurant_image: "https://images.unsplash.com/photo-1603455550882-81ab72ef829f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        small_description: "Starbucks Corp (Starbucks) is a specialty coffee retailer. It roasts, markets, and retails specialty coffee",
        rating: 1.9,
        reviews: 400,
        cusines: ["Hot Coffee", "Cold Coffee", "Iced Tea", "Beverages"],
        filters:["Veg","Non-Veg","Bestseller","Rating 4.0+"],
        arrival_tag:"New Arrivals",
        distance: 20,
        res_items:restairantItems,
        isAvailableforDelivery: true,
        time_to_deliver: '15 min'
    },
    {
        "id": 10,
        restaurant_name: "Lips Slip",
        restaurant_image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        small_description: "Enjoy nicely cooked sandwiches at this restaurant when you happen to be near it. LIPS SLIP (Mocktails & Sandwiches) is rated on Google 4.4 by its guests",
        rating: 4.5,
        reviews: 400,
        cusines: ["Mocktails", "Sandwiches"],
        filters:["Veg","Non-Veg","Bestseller","Rating 4.0+"],
        arrival_tag:"New Arrivals",
        distance: 14,
        res_items:restairantItems,
        isAvailableforDelivery: true,
        time_to_deliver: '5 min'
    },
    {
        "id": 11,
        restaurant_name: "Hotel Kohinoor",
        restaurant_image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        small_description: "Enjoy the variety of food at Hotel Kohinoor",
        rating: 4,
        reviews: 400,
        filters:["Veg","Non-Veg","Bestseller","Rating 4.0+"],
        arrival_tag:"New Arrivals",
        cusines: ["Chinese", "Bengali", "NorthIndian", "Biriyani"],
        distance: 6,
        res_items:restairantItems,
        isAvailableforDelivery: true,
        time_to_deliver: '50 min'
    },
    {
        "id": 12,
        restaurant_name: "Kolkata Biryani House",
        restaurant_image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2010&q=80",
        small_description: "The Kolkata biryani is unique because it's mildly spiced, light and easy on the palate, unlike, say, the spicy Hyderabadi biryani.",
        rating: 4.5,
        reviews: 400,
        cusines: ["Biriyani", "Chinese", "Bengali", "NorthIndian"],
        filters:["Veg","Non-Veg","Bestseller","Rating 4.0+"],
        arrival_tag:"New Arrivals",
        distance: 6,
        res_items:restairantItems,
        isAvailableforDelivery: true,
        time_to_deliver: '50 min'
    },
]