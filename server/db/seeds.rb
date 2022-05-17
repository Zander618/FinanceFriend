puts "🌱 Seeding spices..."

Asset.create([
  {
    user_id: 1,
    name: "Car",
    datePurchased: 121208,
    estimatedValue: 22,000
  },
  {
    user_id: 1,
    name: "Savings Account",
    datePurchased: 81206,
    estimatedValue: 100,000
  },
  {
    user_id: 1,
    name: "401k",
    datePurchased: 91207,
    estimatedValue: 60,000
  },
  {
    user_id: 1,
    name: "IRA",
    datePurchased: 41207,
    estimatedValue: 50,000
  },
  {
    user_id: 1,
    name: "Beach House",
    datePurchased: 051622,
    estimatedValue: 600,000
  },
  {
    user_id: 1,
    name: "Boat",
    datePurchased: 071620,
    estimatedValue: 55,000
  },
  {
    user_id: 1,
    name: "House",
    datePurchased: 071620,
    estimatedValue: 1,000,000
  }
]),

Expense.create([
  {
    user_id: 1,
    name: "Health Insurance",
    monthlyCost: "350"
  },
  {
    user_id: 1,
    name: "Car",
    monthlyCost: "450"
  },
  {
    user_id: 1,
    name: "Mortgages",
    monthlyCost: "10,000"
  },
  {
    user_id: 1,
    name: "Car Insurance",
    monthlyCost: "425"
  },
  {
    user_id: 1,
    name: "Water",
    monthlyCost: "200"
  },
  {
    user_id: 1,
    name: "Gas",
    monthlyCost: "300"
  },
  {
    user_id: 1,
    name: "Electric",
    monthlyCost: "500"
  },
  {
    user_id: 1,
    name: "Streaming Services",
    monthlyCost: 100
  },
  {
    user_id: 1,
    name: "Internet",
    monthlyCost: 80
  },
  {
    user_id: 1,
    name: "Phone Service",
    monthlyCost: 250
  },
  {
    user_id: 1,
    name: "Dental",
    monthlyCost: 50
  }
]),

Item.create([
    {
      user_id: 1,
      name: "Gas",
      cost: 40.00,
      category: "Car",
      date: 5122
    },
    {
      user_id: 1,
      name: "Groceries",
      cost: 300.00,
      category: "Food",
      date: 5222
    },
    {
      user_id: 1,
      name: "Drinks",
      cost: 100.00,
      category: "Food",
      date: 5222
    },
    {
      user_id: 1,
      name: "Restaurant",
      cost: 350.00,
      category: "Food",
      date: 5322
    },
    {
      user_id: 1,
      name: "Coffee",
      cost: 2.50,
      category: "Food",
      date: 5422
    },
    {
      user_id: 1,
      name: "Airline",
      cost: 1,000.00,
      category: "Vacation",
      date: 5522
    },
    {
      user_id: 1,
      name: "Hotel",
      cost: 2,000.00,
      category: "Vacation",
      date: 5522
    },
    {
      user_id: 1,
      name: "Car Rental",
      cost: 500.00,
      category: "Vacation",
      date: 5522
    },
    {
      user_id: 1,
      name: "Restaurant",
      cost: 200.00,
      category: "Food",
      date: 5622
    },
    {
      user_id: 1,
      name: "Concert Tickets",
      cost: 150.00,
      category: "Entertainment",
      date: 5722
    },
    {
      user_id: 1,
      name: "Clothes",
      cost: 200.00,
      category: "Clothing",
      date: 5722
    },
    {
      user_id: 1,
      name: "Gas",
      cost: 40.00,
      category: "Car",
      date: 5922
    },
    {
      user_id: 1,
      name: "Camera Lens",
      cost: 1,500.00,
      category: "Hobbies",
      date: 51022
    },
    {
      user_id: 1,
      name: "Tacos",
      cost: 20.00,
      category: "Food",
      date: 51022
    },
    {
      user_id: 1,
      name: "Shoes",
      cost: 85.00,
      category: "Clothing",
      date: 51022
    },
    {
      user_id: 1,
      name: "Bird Seeds",
      cost: 30.00,
      category: "Miscellaneous",
      date: 51022
    },
    {
      user_id: 1,
      name: "Amazon",
      cost: 75.00,
      category: "Miscellaneous",
      date: 51022
    },
    {
      user_id: 1,
      name: "Churros",
      cost: 10.00,
      category: "Food",
      date: 51022
    },
    {
      user_id: 1,
      name: "Tuition",
      cost: 16,000.00,
      category: "Education",
      date: 5122
    },
    {
      user_id: 1,
      name: "Rubber Duck",
      cost: 1.50,
      category: "Miscellaneous",
      date: 51122
    },
    {
      user_id: 1,
      name: "Plants",
      cost: 55.00,
      category: "Miscellaneous",
      date: 51222
    },
    {
      user_id: 1,
      name: "Parking Ticket",
      cost: 65.00,
      category: "Miscellaneous",
      date: 51222
    },
    {
      user_id: 1,
      name: "Sandwich",
      cost: 10.00,
      category: "Food",
      date: 51222
    },
    {
      user_id: 1,
      name: "Guitar Stings",
      cost: 8.50,
      category: "Hobbies",
      date: 51322
    },
    {
      user_id: 1,
      name: "Gas",
      cost: 38.00,
      category: "Car",
      date: 51422
    },
    {
      user_id: 1,
      name: "Eloquent Javascript",
      cost: 30.00,
      category: "Education",
      date: 51522
    },
    {
      user_id: 1,
      name: "Reuseable Bags",
      cost: 40.00,
      category: "Miscellaneous",
      date: 51622
    },
    {
      user_id: 1,
      name: "External Hard Drive",
      cost: 150.00,
      category: "Miscellaneous",
      date: 51622
    },
    {
      user_id: 1,
      name: "Movie Tickets",
      cost: 30.00,
      category: "Entertainment",
      date: 51622
    },
    {
      user_id: 1,
      name: "Popcorn",
      cost: 11.00,
      category: "Food",
      date: 51622
    },
    {
      user_id: 1,
      name: "Mike and Ikes",
      cost: 4.0,
      category: "Food",
      date: 51622
    },
    {
      user_id: 1,
      name: "Ice Cream",
      cost: 5.00,
      category: "Food",
      date: 51622,
    }
]),

User.create([
  {
    firstname: "Gob"
    lastname: "Bluth"
  }
])

puts "✅ Done seeding!"
