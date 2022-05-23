puts "🌱 Seeding..."

Asset.create([
  {
    user_id: 1,
    name: "Car",
    date_purchased: "12/12/08",
    estimated_value: 22000
  },
  {
    user_id: 1,
    name: "Savings Account",
    date_purchased: "8/12/06",
    estimated_value: 100000
  },
  {
    user_id: 1,
    name: "401k",
    date_purchased: "9/12/07",
    estimated_value: 60000
  },
  {
    user_id: 1,
    name: "IRA",
    date_purchased: "4/12/07",
    estimated_value: 50000
  },
  {
    user_id: 1,
    name: "Beach House",
    date_purchased: "5/16/22",
    estimated_value: 600000
  },
  {
    user_id: 1,
    name: "Boat",
    date_purchased: "7/16/20",
    estimated_value: 55000
  },
  {
    user_id: 2,
    name: "House",
    date_purchased: "7/16/20",
    estimated_value: 1000000
  }
])

Expense.create([
  {
    user_id: 1,
    name: "Health Insurance",
    monthly_cost: 350
  },
  {
    user_id: 1,
    name: "Car",
    monthly_cost: 450
  },
  {
    user_id: 1,
    name: "Mortgages",
    monthly_cost: 10000
  },
  {
    user_id: 1,
    name: "Car Insurance",
    monthly_cost: 425
  },
  {
    user_id: 1,
    name: "Water",
    monthly_cost: 200
  },
  {
    user_id: 1,
    name: "Gas",
    monthly_cost: 300
  },
  {
    user_id: 1,
    name: "Electric",
    monthly_cost: 500
  },
  {
    user_id: 2,
    name: "Streaming Services",
    monthly_cost: 100
  },
  {
    user_id: 1,
    name: "Internet",
    monthly_cost: 80
  },
  {
    user_id: 2,
    name: "Phone Service",
    monthly_cost: 250
  },
  {
    user_id: 1,
    name: "Dental",
    monthly_cost: 50
  }
])

Item.create([
    {
      user_id: 1,
      name: "Gas",
      cost: 40.00,
      category: "Car",
      date: "5/1/22"
    },
    {
      user_id: 1,
      name: "Groceries",
      cost: 300.00,
      category: "Food",
      date: "5/2/22"
    },
    {
      user_id: 1,
      name: "Drinks",
      cost: 100.00,
      category: "Food",
      date: "5/2/22"
    },
    {
      user_id: 1,
      name: "Restaurant",
      cost: 350.00,
      category: "Food",
      date: "5/3/22"
    },
    {
      user_id: 1,
      name: "Coffee",
      cost: 2.50,
      category: "Food",
      date: "5/4/22"
    },
    {
      user_id: 1,
      name: "Airline",
      cost: 1000.00,
      category: "Vacation",
      date: "5/5/22"
    },
    {
      user_id: 1,
      name: "Hotel",
      cost: 2000.00,
      category: "Vacation",
      date: "5/5/22"
    },
    {
      user_id: 1,
      name: "Car Rental",
      cost: 500.00,
      category: "Vacation",
      date: "5/5/22"
    },
    {
      user_id: 1,
      name: "Restaurant",
      cost: 200.00,
      category: "Food",
      date: "5/6/22"
    },
    {
      user_id: 1,
      name: "Concert Tickets",
      cost: 150.00,
      category: "Entertainment",
      date: "5/7/22"
    },
    {
      user_id: 2,
      name: "Clothes",
      cost: 200.00,
      category: "Clothing",
      date: "5/7/22"
    },
    {
      user_id: 1,
      name: "Gas",
      cost: 40.00,
      category: "Car",
      date: "5/9/22"
    },
    {
      user_id: 1,
      name: "Camera Lens",
      cost: 1500.00,
      category: "Hobbies",
      date: "5/10/22"
    },
    {
      user_id: 1,
      name: "Tacos",
      cost: 20.00,
      category: "Food",
      date: "5/10/22"
    },
    {
      user_id: 1,
      name: "Shoes",
      cost: 85.00,
      category: "Clothing",
      date: "5/10/22"
    },
    {
      user_id: 1,
      name: "Bird Seeds",
      cost: 30.00,
      category: "Miscellaneous",
      date: "5/10/22"
    },
    {
      user_id: 1,
      name: "Amazon",
      cost: 75.00,
      category: "Miscellaneous",
      date: "5/10/22"
    },
    {
      user_id: 1,
      name: "Churros",
      cost: 10.00,
      category: "Food",
      date: "5/10/22"
    },
    {
      user_id: 1,
      name: "Tuition",
      cost: 16000.00,
      category: "Education",
      date: "5/10/22"
    },
    {
      user_id: 1,
      name: "Rubber Duck",
      cost: 1.50,
      category: "Miscellaneous",
      date: "5/11/22"
    },
    {
      user_id: 2,
      name: "Plants",
      cost: 55.00,
      category: "Miscellaneous",
      date: "5/12/22"
    },
    {
      user_id: 1,
      name: "Parking Ticket",
      cost: 65.00,
      category: "Miscellaneous",
      date: "5/12/22"
    },
    {
      user_id: 1,
      name: "Sandwich",
      cost: 10.00,
      category: "Food",
      date: "5/12/22"
    },
    {
      user_id: 1,
      name: "Guitar Stings",
      cost: 8.50,
      category: "Hobbies",
      date: "5/13/22"
    },
    {
      user_id: 1,
      name: "Gas",
      cost: 38.00,
      category: "Car",
      date: "5/14/22"
    },
    {
      user_id: 1,
      name: "Eloquent Javascript",
      cost: 30.00,
      category: "Education",
      date: "5/15/22"
    },
    {
      user_id: 1,
      name: "Reuseable Bags",
      cost: 40.00,
      category: "Miscellaneous",
      date: "5/16/22"
    },
    {
      user_id: 2,
      name: "External Hard Drive",
      cost: 150.00,
      category: "Miscellaneous",
      date: "5/16/22"
    },
    {
      user_id: 1,
      name: "Movie Tickets",
      cost: 30.00,
      category: "Entertainment",
      date: "5/16/22"
    },
    {
      user_id: 1,
      name: "Popcorn",
      cost: 11.00,
      category: "Food",
      date: "5/16/22"
    },
    {
      user_id: 1,
      name: "Mike and Ikes",
      cost: 4.0,
      category: "Food",
      date: "5/16/22"
    },
    {
      user_id: 2,
      name: "Ice Cream",
      cost: 5.00,
      category: "Food",
      date: "5/16/22"
    }
])

User.create([
  {
    first_name: "Örjan",
    last_name: "Artur",
  },
  {
    first_name: "Samet",
    last_name: "Octavia",
  },
])

puts "✅ Done seeding!"
